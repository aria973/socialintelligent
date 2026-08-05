'use client';

import { useState, useEffect, useCallback } from 'react';
import { modules } from '@/data/modules';
import type { Module, Lesson, Puzzle } from '@/data/modules';
import { HomeTab } from './tabs/HomeTab';
import { ModulesTab } from './tabs/ModulesTab';
import { LessonView } from './tabs/LessonView';
import { PuzzleView } from './tabs/PuzzleView';
import { SecretsTab } from './tabs/SecretsTab';
import { ProfileTab } from './tabs/ProfileTab';
import { NotesTab } from './tabs/NotesTab';

export interface UserProgress {
  sessionId: string;
  displayName: string;
  currentModule: string;
  completedLessons: string[];
  completedPuzzles: string[];
  secretsFound: string[];
  quizScores: Record<string, number>;
  totalXp: number;
  level: number;
  streakDays: number;
  notes: Record<string, string>;
  bookmarks: string[];
  masteryLevels: Record<string, number>;
}

type Tab = 'home' | 'modules' | 'secrets' | 'notes' | 'profile';
type Screen = 'tabs' | 'lesson' | 'puzzle' | 'module-detail';

/** Local snapshot key — keeps the app fully functional with no database. */
const LOCAL_KEY = 'mga_progress_v1';

const TAB_ICONS: Record<Tab, { active: string; inactive: string; label: string }> = {
  home: { active: '🏠', inactive: '🏠', label: 'Home' },
  modules: { active: '📚', inactive: '📚', label: 'Learn' },
  secrets: { active: '🔮', inactive: '🔮', label: 'Secrets' },
  notes: { active: '📓', inactive: '📓', label: 'Notes' },
  profile: { active: '👤', inactive: '👤', label: 'Profile' },
};

export function MindGamesApp() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [screen, setScreen] = useState<Screen>('tabs');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      let sid = localStorage.getItem('mga_session');
      if (!sid) {
        sid = 'session_' + Math.random().toString(36).slice(2) + Date.now();
        localStorage.setItem('mga_session', sid);
      }

      const blank: UserProgress = {
        sessionId: sid, displayName: 'Agent', currentModule: 'welcome',
        completedLessons: [], completedPuzzles: [], secretsFound: [],
        quizScores: {}, totalXp: 0, level: 1, streakDays: 0,
        notes: {}, bookmarks: [], masteryLevels: {},
      };

      // Local snapshot is the source of truth when the server has no database.
      let local: UserProgress | null = null;
      try {
        const raw = localStorage.getItem(LOCAL_KEY);
        if (raw) local = { ...blank, ...(JSON.parse(raw) as Partial<UserProgress>), sessionId: sid };
      } catch { /* corrupt snapshot — ignore */ }

      try {
        const res = await fetch(`/api/progress?sessionId=${sid}`);
        const data = await res.json();
        // Only trust the server if it actually persisted the record.
        if (data?.persisted) {
          setProgress({ ...blank, ...data, sessionId: sid });
        } else {
          setProgress(local ?? blank);
        }
      } catch {
        setProgress(local ?? blank);
      }
      setLoading(false);
    };
    init();
  }, []);

  const saveProgress = useCallback(async (updates: Partial<UserProgress>) => {
    if (!progress) return;
    const np = { ...progress, ...updates };
    setProgress(np);

    // Always write the local snapshot first so progress survives offline.
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(np)); } catch { /* quota */ }

    try {
      await fetch('/api/progress', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: progress.sessionId, ...updates }),
      });
    } catch { /* offline — local snapshot already saved */ }
  }, [progress]);

  const completeLesson = useCallback((lessonId: string, xp: number = 50) => {
    if (!progress || progress.completedLessons.includes(lessonId)) return;
    const cl = [...progress.completedLessons, lessonId];
    const nx = progress.totalXp + xp;
    saveProgress({ completedLessons: cl, totalXp: nx, level: Math.floor(nx / 200) + 1 });
  }, [progress, saveProgress]);

  const completePuzzle = useCallback((puzzleId: string, xp: number = 100) => {
    if (!progress || progress.completedPuzzles.includes(puzzleId)) return;
    const cp = [...progress.completedPuzzles, puzzleId];
    const nx = progress.totalXp + xp;
    saveProgress({ completedPuzzles: cp, totalXp: nx, level: Math.floor(nx / 200) + 1 });
  }, [progress, saveProgress]);

  const discoverSecret = useCallback((secret: string) => {
    if (!progress || progress.secretsFound.includes(secret)) return;
    const ns = [...progress.secretsFound, secret];
    const nx = progress.totalXp + 150;
    saveProgress({ secretsFound: ns, totalXp: nx, level: Math.floor(nx / 200) + 1 });
  }, [progress, saveProgress]);

  const saveQuizScore = useCallback((qid: string, score: number) => {
    if (!progress) return;
    saveProgress({ quizScores: { ...progress.quizScores, [qid]: Math.max(score, progress.quizScores[qid] || 0) } });
  }, [progress, saveProgress]);

  const saveNote = useCallback((key: string, note: string) => {
    if (!progress) return;
    saveProgress({ notes: { ...progress.notes, [key]: note } });
  }, [progress, saveProgress]);

  const openLesson = (mod: Module, lesson: Lesson) => {
    setSelectedModule(mod); setSelectedLesson(lesson); setScreen('lesson');
    window.scrollTo(0, 0);
  };
  const openPuzzle = (mod: Module, puzzle: Puzzle) => {
    setSelectedModule(mod); setSelectedPuzzle(puzzle); setScreen('puzzle');
    window.scrollTo(0, 0);
  };
  const openModule = (mod: Module) => {
    setSelectedModule(mod); setScreen('module-detail');
    window.scrollTo(0, 0);
  };
  const goBack = () => { setScreen('tabs'); window.scrollTo(0, 0); };

  if (loading || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center anim-fade-in">
          <div className="relative w-20 h-20 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full border-2 border-[#2c2c2e]" />
            <div className="absolute inset-0 rounded-full border-2 border-t-accent border-r-transparent border-b-transparent border-l-transparent" style={{ animation: 'spinSlow 0.8s linear infinite' }} />
            <div className="absolute inset-0 flex items-center justify-center text-3xl">🧠</div>
          </div>
          <p className="text-[13px] text-[#636366] tracking-wider font-medium">MIND GAMES</p>
        </div>
      </div>
    );
  }

  const totalL = modules.reduce((a, m) => a + m.lessons.length, 0);
  const totalP = modules.reduce((a, m) => a + m.puzzles.length, 0);
  const totalS = modules.reduce((a, m) => a + m.secrets.length, 0)
    + modules.reduce((a, m) => a + m.lessons.filter(l => l.secret).length, 0)
    + modules.reduce((a, m) => a + m.puzzles.filter(p => p.secret).length, 0);

  // Deep screens (Lesson / Puzzle)
  if (screen === 'lesson' && selectedModule && selectedLesson) {
    return (
      <LessonView
        module={selectedModule} lesson={selectedLesson} progress={progress}
        onComplete={completeLesson} onDiscoverSecret={discoverSecret}
        onSaveQuizScore={saveQuizScore} onSaveNote={saveNote}
        onBack={goBack}
        onNextLesson={() => {
          const i = selectedModule.lessons.findIndex(l => l.id === selectedLesson.id);
          if (i < selectedModule.lessons.length - 1) { setSelectedLesson(selectedModule.lessons[i + 1]); window.scrollTo(0, 0); }
          else if (selectedModule.puzzles.length > 0) { setSelectedPuzzle(selectedModule.puzzles[0]); setScreen('puzzle'); window.scrollTo(0, 0); }
        }}
        onPrevLesson={() => {
          const i = selectedModule.lessons.findIndex(l => l.id === selectedLesson.id);
          if (i > 0) { setSelectedLesson(selectedModule.lessons[i - 1]); window.scrollTo(0, 0); }
        }}
      />
    );
  }
  if (screen === 'puzzle' && selectedModule && selectedPuzzle) {
    return (
      <PuzzleView
        module={selectedModule} puzzle={selectedPuzzle} progress={progress}
        onComplete={completePuzzle} onDiscoverSecret={discoverSecret}
        onBack={goBack}
        onNextPuzzle={() => {
          const i = selectedModule.puzzles.findIndex(p => p.id === selectedPuzzle.id);
          if (i < selectedModule.puzzles.length - 1) { setSelectedPuzzle(selectedModule.puzzles[i + 1]); window.scrollTo(0, 0); }
        }}
      />
    );
  }

  // Module detail screen
  if (screen === 'module-detail' && selectedModule) {
    const mod = selectedModule;
    const modDone = mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
    const modPct = mod.lessons.length > 0 ? Math.round((modDone / mod.lessons.length) * 100) : 0;
    return (
      <div className="min-h-screen bg-black safe-bottom">
        <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-2xl border-b border-[#1c1c1e]">
          <div className="flex items-center gap-3 px-5 py-3">
            <button onClick={goBack} className="text-accent text-[17px] font-normal active:opacity-50">
              <span className="flex items-center gap-0.5">
                <svg width="10" height="17" viewBox="0 0 10 17" fill="none"><path d="M9 1L1.5 8.5L9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back
              </span>
            </button>
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="anim-fade-up flex items-center gap-4 mb-4">
            <span className="text-[44px]">{mod.icon}</span>
            <div>
              <h1 className="text-[22px] font-bold text-white">{mod.title}</h1>
              <p className="text-[13px] text-[#86868b] mt-0.5">{modDone}/{mod.lessons.length} lessons · {modPct}% complete</p>
            </div>
          </div>
          <p className="anim-fade-up delay-1 text-[13px] text-[#86868b] leading-relaxed mb-5">{mod.description}</p>

          {mod.lessons.length > 0 && (
            <button onClick={() => {
              const first = mod.lessons.find(l => !progress.completedLessons.includes(l.id)) || mod.lessons[0];
              openLesson(mod, first);
            }} className="anim-fade-up delay-2 w-full py-3 rounded-[12px] bg-accent text-white font-semibold text-[15px] active:opacity-70 transition-opacity mb-6">
              {modDone > 0 ? 'Continue Learning' : 'Start Module'}
            </button>
          )}

          <p className="section-header mb-2">Lessons</p>
          <div className="ios-card overflow-hidden mb-5">
            {mod.lessons.map((lesson, i) => {
              const done = progress.completedLessons.includes(lesson.id);
              return (
                <button key={lesson.id} onClick={() => openLesson(mod, lesson)}
                  className={`anim-fade-up delay-${Math.min(i + 2, 8)} w-full text-left px-4 py-3 flex items-center gap-3 active:bg-[#2c2c2e] transition-colors ${i > 0 ? 'border-t border-[#2c2c2e]' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${done ? 'bg-mint/20 text-mint' : 'bg-[#2c2c2e] text-[#86868b]'}`}>
                    {done ? '✓' : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] text-white truncate">{lesson.title}</p>
                    {lesson.subtitle && <p className="text-[12px] text-[#636366] truncate mt-0.5">{lesson.subtitle}</p>}
                  </div>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="text-[#48484a] flex-shrink-0"><path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              );
            })}
          </div>

          {mod.puzzles.length > 0 && (
            <>
              <p className="section-header mb-2">Challenges</p>
              <div className="ios-card overflow-hidden">
                {mod.puzzles.map((puzzle, i) => {
                  const done = progress.completedPuzzles.includes(puzzle.id);
                  return (
                    <button key={puzzle.id} onClick={() => openPuzzle(mod, puzzle)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 active:bg-[#2c2c2e] transition-colors ${i > 0 ? 'border-t border-[#2c2c2e]' : ''}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] flex-shrink-0 ${done ? 'bg-flame/20 text-flame' : 'bg-[#2c2c2e] text-[#86868b]'}`}>
                        {done ? '⭐' : '🧩'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] text-white truncate">{puzzle.title}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <span key={j} className={`text-[6px] ${j < puzzle.difficulty ? 'text-flame' : 'text-[#2c2c2e]'}`}>●</span>
                          ))}
                          <span className="text-[11px] text-[#636366] ml-1">{['','Novice','Apprentice','Adept','Expert','Master'][puzzle.difficulty]}</span>
                        </div>
                      </div>
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="text-[#48484a] flex-shrink-0"><path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Tab screens
  return (
    <div className="min-h-screen bg-bg">
      <div className="safe-bottom">
        {activeTab === 'home' && (
          <HomeTab progress={progress} modules={modules} totalL={totalL} totalP={totalP} totalS={totalS}
            onOpenModule={openModule} onOpenLesson={openLesson} />
        )}
        {activeTab === 'modules' && (
          <ModulesTab modules={modules} progress={progress} onOpenModule={openModule} />
        )}
        {activeTab === 'secrets' && (
          <SecretsTab modules={modules} progress={progress} />
        )}
        {activeTab === 'notes' && (
          <NotesTab progress={progress} onSaveNote={saveNote} />
        )}
        {activeTab === 'profile' && (
          <ProfileTab modules={modules} progress={progress} totalL={totalL} totalP={totalP} totalS={totalS} />
        )}
      </div>

      {/* Bottom Tab Bar — true iOS style */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-3xl border-t border-[#1c1c1e] tab-bar-pad">
        <div className="flex items-stretch max-w-lg mx-auto">
          {(Object.keys(TAB_ICONS) as Tab[]).map(tab => {
            const isActive = activeTab === tab;
            const { label } = TAB_ICONS[tab];
            const iconSvgs: Record<Tab, React.ReactNode> = {
              home: <svg width="21" height="21" viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9" fill="none" stroke={isActive ? '#000' : 'currentColor'} strokeWidth="1.7"/></svg>,
              modules: <svg width="21" height="21" viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
              secrets: <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill={isActive ? 'currentColor' : 'none'}/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke={isActive ? '#000' : 'currentColor'} strokeWidth="1.7" strokeLinecap="round"/></svg>,
              notes: <svg width="21" height="21" viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke={isActive ? '#000' : 'currentColor'} strokeWidth="1.7"/></svg>,
              profile: <svg width="21" height="21" viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            };
            return (
              <button key={tab} onClick={() => { setActiveTab(tab); setScreen('tabs'); window.scrollTo(0, 0); }}
                className={`flex-1 flex flex-col items-center justify-center pt-1.5 pb-1 transition-colors ${isActive ? 'text-accent' : 'text-[#636366]'}`}>
                {iconSvgs[tab]}
                <span className="text-[10px] mt-0.5 font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
