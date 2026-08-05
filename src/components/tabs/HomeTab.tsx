'use client';

import type { Module, Lesson } from '@/data/modules';
import type { UserProgress } from '../MindGamesApp';

interface Props {
  progress: UserProgress;
  modules: Module[];
  totalL: number; totalP: number; totalS: number;
  onOpenModule: (mod: Module) => void;
  onOpenLesson: (mod: Module, lesson: Lesson) => void;
}

function Ring({ pct, size = 60, sw = 5, color = '#0a84ff' }: { pct: number; size?: number; sw?: number; color?: string }) {
  const r = (size - sw) / 2, c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#2c2c2e" strokeWidth={sw} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={sw}
        strokeDasharray={c} strokeDashoffset={c - (pct / 100) * c} strokeLinecap="round" className="progress-fill" />
    </svg>
  );
}

export function HomeTab({ progress, modules, totalL, totalP, totalS, onOpenModule, onOpenLesson }: Props) {
  const ranks = [
    { lvl: 1, t: 'Novice', i: '👁️' }, { lvl: 3, t: 'Spotter', i: '🔍' },
    { lvl: 5, t: 'Reader', i: '🧠' }, { lvl: 8, t: 'Strategist', i: '♟️' },
    { lvl: 12, t: 'Influencer', i: '🎭' }, { lvl: 15, t: 'Architect', i: '👑' },
    { lvl: 20, t: 'Transcendent', i: '⚡' },
  ];
  const rank = [...ranks].reverse().find(r => progress.level >= r.lvl) || ranks[0];
  const pctL = totalL > 0 ? Math.round((progress.completedLessons.length / totalL) * 100) : 0;

  let continueItem: { mod: Module; lesson: Lesson } | null = null;
  for (const mod of modules) {
    const next = mod.lessons.find(l => !progress.completedLessons.includes(l.id));
    if (next) { continueItem = { mod, lesson: next }; break; }
  }

  const modColors = [
    'from-indigo-600/30 to-purple-600/20',
    'from-teal-600/30 to-emerald-600/20',
    'from-red-600/30 to-orange-600/20',
    'from-amber-600/30 to-yellow-600/20',
    'from-violet-600/30 to-fuchsia-600/20',
    'from-pink-600/30 to-rose-600/20',
    'from-cyan-600/30 to-blue-600/20',
    'from-rose-600/30 to-red-600/20',
    'from-emerald-600/30 to-teal-600/20',
    'from-orange-600/30 to-amber-600/20',
  ];

  return (
    <div className="px-5 pt-16 pb-8">
      {/* Header */}
      <div className="anim-fade-up mb-7">
        <p className="text-[13px] text-[#86868b] font-medium mb-0.5">Welcome back</p>
        <h1 className="text-[28px] font-bold tracking-tight text-white">Mind Games</h1>
      </div>

      {/* Level card */}
      <div className="anim-fade-up delay-1 ios-card p-5 mb-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <Ring pct={((progress.totalXp % 200) / 200) * 100} />
            <div className="absolute inset-0 flex items-center justify-center text-xl">{rank.i}</div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-[17px] font-semibold text-white">Level {progress.level}</span>
              <span className="text-[13px] text-accent font-medium">{rank.t}</span>
            </div>
            <p className="text-[13px] text-[#86868b] mt-0.5">{progress.totalXp} XP earned</p>
            <div className="flex gap-5 mt-2.5">
              {[
                { n: progress.completedLessons.length, l: 'Lessons', c: 'text-accent' },
                { n: progress.completedPuzzles.length, l: 'Puzzles', c: 'text-flame' },
                { n: progress.secretsFound.length, l: 'Secrets', c: 'text-purple-ios' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <p className={`text-[15px] font-semibold ${s.c}`}>{s.n}</p>
                  <p className="text-[10px] text-[#636366]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Continue */}
      {continueItem && (
        <div className="anim-fade-up delay-2 mb-5">
          <p className="section-header mb-2.5">Continue</p>
          <button onClick={() => onOpenLesson(continueItem!.mod, continueItem!.lesson)}
            className="w-full ios-card p-4 flex items-center gap-3.5 active:opacity-70 transition-opacity">
            <div className="w-11 h-11 rounded-[11px] bg-accent/15 flex items-center justify-center text-[18px] flex-shrink-0">
              {continueItem.mod.icon}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[15px] font-semibold text-white truncate">{continueItem.lesson.title}</p>
              <p className="text-[13px] text-[#86868b] truncate">{continueItem.mod.title}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21"/></svg>
            </div>
          </button>
        </div>
      )}

      {/* Progress bar */}
      <div className="anim-fade-up delay-3 ios-card p-4 mb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[13px] text-[#aeaeb2]">Course Completion</span>
          <span className="text-[13px] font-semibold text-accent">{pctL}%</span>
        </div>
        <div className="w-full h-[6px] rounded-full bg-[#2c2c2e] overflow-hidden">
          <div className="h-full rounded-full bg-accent transition-all duration-700" style={{ width: `${pctL}%` }} />
        </div>
        <div className="flex justify-between mt-2.5 text-[11px] text-[#636366]">
          <span>{progress.completedLessons.length}/{totalL} lessons</span>
          <span>{progress.completedPuzzles.length}/{totalP} puzzles</span>
          <span>{progress.secretsFound.length}/{totalS} secrets</span>
        </div>
      </div>

      {/* Modules */}
      <p className="section-header mb-2.5 anim-fade-up delay-4">Modules</p>
      <div className="grid grid-cols-2 gap-3">
        {modules.map((mod, i) => {
          const done = mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
          const pct = mod.lessons.length > 0 ? Math.round((done / mod.lessons.length) * 100) : 0;
          return (
            <button key={mod.id} onClick={() => onOpenModule(mod)}
              className={`anim-fade-up delay-${Math.min(i + 4, 8)} text-left rounded-[13px] p-4 bg-gradient-to-br ${modColors[i] || modColors[0]} active:opacity-70 transition-opacity`}>
              <span className="text-[24px] block mb-2">{mod.icon}</span>
              <p className="text-[14px] font-semibold text-white leading-snug mb-0.5">{mod.title}</p>
              <p className="text-[11px] text-[#aeaeb2] mb-3">{mod.lessons.length} lessons</p>
              {pct > 0 && (
                <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-white/40 transition-all" style={{ width: `${pct}%` }} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Sources */}
      <div className="anim-fade-up delay-8 ios-card p-4 mt-5">
        <p className="section-header mb-3">Source material</p>
        <div className="space-y-2 text-[13px] text-[#86868b]">
          <p>📕 &quot;Games People Play&quot; — Eric Berne (complete)</p>
          <p>📗 &quot;The February Man&quot; — Erickson &amp; Rossi (complete)</p>
          <p>📘 &quot;What Every BODY is Saying&quot; — Joe Navarro</p>
          <p>📙 &quot;Influence&quot; — Robert Cialdini</p>
          <p>📕 &quot;Emotions Revealed&quot; — Paul Ekman</p>
        </div>
      </div>
    </div>
  );
}
