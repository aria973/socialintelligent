'use client';

import { useState } from 'react';
import type { Module, Lesson } from '@/data/modules';
import type { UserProgress } from '../MindGamesApp';

interface Props {
  module: Module; lesson: Lesson; progress: UserProgress;
  onComplete: (id: string, xp?: number) => void;
  onDiscoverSecret: (s: string) => void;
  onSaveQuizScore: (qid: string, score: number) => void;
  onSaveNote: (key: string, note: string) => void;
  onBack: () => void; onNextLesson: () => void; onPrevLesson: () => void;
}

function RenderBlock({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <div className="lesson-text">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const lines = part.split('\n');
        return lines.map((line, j) => {
          const key = `${i}-${j}`;
          if (line.startsWith('• ') || line.startsWith('- ')) {
            return <span key={key} className="block pl-4 py-0.5 relative">
              <span className="absolute left-0 text-accent-light">▸</span>
              {line.slice(2)}
            </span>;
          }
          if (line.match(/^\d+\.\s/)) {
            return <span key={key} className="block pl-4 py-0.5">{line}</span>;
          }
          if (line.trim() === '') return <br key={key} />;
          return <span key={key}>{line}</span>;
        });
      })}
    </div>
  );
}

export function LessonView({ module: mod, lesson, progress, onComplete, onDiscoverSecret, onSaveQuizScore, onSaveNote, onBack, onNextLesson, onPrevLesson }: Props) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [noteText, setNoteText] = useState(progress.notes[lesson.id] || '');
  const [showNote, setShowNote] = useState(false);

  const done = progress.completedLessons.includes(lesson.id);
  const idx = mod.lessons.findIndex(l => l.id === lesson.id);
  const hasPrev = idx > 0;
  const hasNext = idx < mod.lessons.length - 1 || mod.puzzles.length > 0;

  const handleSubmitQuiz = () => {
    if (!lesson.quiz) return;
    setSubmitted(true);
    const correct = lesson.quiz.filter((q, i) => answers[i] === q.correct).length;
    const score = Math.round((correct / lesson.quiz.length) * 100);
    onSaveQuizScore(lesson.id, score);
    if (!done) onComplete(lesson.id, 50 + Math.floor(score / 2));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-2xl border-b border-[#1c1c1e]">
        <div className="flex items-center gap-3 px-5 py-3">
          <button onClick={onBack} className="text-accent text-[15px] active:opacity-50 flex items-center gap-0.5">
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none"><path d="M9 1L1.5 8.5L9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </button>
          <div className="flex-1 min-w-0 text-center">
            <p className="text-[15px] font-semibold text-white truncate">{lesson.title}</p>
          </div>
          {done && <span className="text-[11px] text-mint font-medium">Done</span>}
          {!done && <span className="w-10" />}
        </div>
        <div className="flex gap-0.5 px-5 pb-2">
          {mod.lessons.map((l, i) => (
            <div key={l.id} className={`h-[3px] flex-1 rounded-full transition-colors ${
              progress.completedLessons.includes(l.id) ? 'bg-accent' : i === idx ? 'bg-accent/40' : 'bg-[#2c2c2e]'
            }`} />
          ))}
        </div>
      </div>

      <div className="px-5 py-5 pb-32">
        {/* Title */}
        <div className="animate-fade-up mb-6">
          <h1 className="text-xl font-bold text-gray-100 mb-1">{lesson.title}</h1>
          {lesson.subtitle && <p className="text-sm text-gray-500">{lesson.subtitle}</p>}
        </div>

        {/* Content blocks */}
        <div className="space-y-3.5 mb-7">
          {lesson.content.map((block, i) => (
            <div key={i} className={`anim-fade-up delay-${Math.min(i + 1, 8)} ios-card p-5`}>
              <RenderBlock text={block} />
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="animate-fade-up glass-card rounded-2xl p-5 mb-5 border-l-2 border-accent">
          <h3 className="text-sm font-bold text-accent-light mb-3 flex items-center gap-2">
            <span>💡</span> Key Takeaways
          </h3>
          <ul className="space-y-2">
            {lesson.keyPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="text-accent mt-1 flex-shrink-0 text-xs">◆</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exercise */}
        {lesson.exercise && (
          <div className="animate-fade-up glass-card rounded-2xl p-5 mb-5 border-l-2 border-gold">
            <h3 className="text-sm font-bold text-gold-light mb-2 flex items-center gap-2">
              <span>🏋️</span> Practice Exercise
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">{lesson.exercise}</p>
          </div>
        )}

        {/* Notes */}
        <button onClick={() => setShowNote(!showNote)}
          className="flex items-center gap-2 text-xs text-gray-500 mb-3 active:text-gray-300">
          <span>📝</span> {showNote ? 'Hide' : 'Add'} Personal Notes
        </button>
        {showNote && (
          <div className="animate-scale-in mb-5">
            <textarea value={noteText}
              onChange={e => setNoteText(e.target.value)}
              onBlur={() => onSaveNote(lesson.id, noteText)}
              placeholder="Write your insights..."
              className="w-full h-28 bg-card border border-border rounded-2xl p-4 text-sm text-gray-300 placeholder-gray-600 resize-none focus:outline-none focus:border-accent/50" />
          </div>
        )}

        {/* Quiz */}
        {lesson.quiz && lesson.quiz.length > 0 && (
          <div className="mb-5">
            {!showQuiz ? (
              <button onClick={() => setShowQuiz(true)}
                className="w-full py-3.5 rounded-2xl bg-accent/10 text-accent-light font-semibold text-sm border border-accent/20 active:scale-[0.98] transition-transform">
                🧠 Take Knowledge Quiz
              </button>
            ) : (
              <div className="animate-scale-in glass-card rounded-2xl p-5 space-y-6">
                <h3 className="text-sm font-bold text-accent-light">Knowledge Check</h3>
                {lesson.quiz.map((q, qi) => (
                  <div key={qi}>
                    <p className="text-sm font-medium text-gray-200 mb-3">{qi + 1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => {
                        const sel = answers[qi] === oi;
                        const correct = q.correct === oi;
                        let cls = 'bg-surface border-border text-gray-400';
                        if (submitted) {
                          if (correct) cls = 'bg-mint/10 border-mint/30 text-mint';
                          else if (sel) cls = 'bg-rose/10 border-rose/30 text-rose';
                        } else if (sel) cls = 'bg-accent/10 border-accent/30 text-accent-light';
                        return (
                          <button key={oi} disabled={submitted}
                            onClick={() => setAnswers({ ...answers, [qi]: oi })}
                            className={`quiz-option w-full text-left px-4 py-3 rounded-xl border text-sm ${cls}`}>
                            <span className="font-mono text-xs mr-2 opacity-50">{String.fromCharCode(65 + oi)}</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {submitted && (
                      <p className={`mt-2 text-xs p-3 rounded-xl ${answers[qi] === q.correct ? 'bg-mint/5 text-mint/80' : 'bg-rose/5 text-rose/80'}`}>
                        {q.explanation}
                      </p>
                    )}
                  </div>
                ))}
                {!submitted ? (
                  <button onClick={handleSubmitQuiz}
                    disabled={Object.keys(answers).length < (lesson.quiz?.length || 0)}
                    className="w-full py-3 rounded-xl bg-accent text-white font-semibold text-sm disabled:opacity-30 active:scale-[0.98] transition-transform">
                    Submit Answers
                  </button>
                ) : (
                  <p className="text-center text-accent-light font-bold">
                    Score: {lesson.quiz!.filter((q, i) => answers[i] === q.correct).length}/{lesson.quiz!.length}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Secret */}
        {lesson.secret && (
          <div className="mb-5">
            {!showSecret ? (
              <button onClick={() => { setShowSecret(true); onDiscoverSecret(lesson.secret!); }}
                className={`w-full py-3.5 rounded-2xl font-semibold text-sm active:scale-[0.98] transition-transform ${
                  progress.secretsFound.includes(lesson.secret)
                    ? 'secret-card text-purple-300' : 'secret-card secret-card-glow text-purple-300'
                }`}>
                🔮 {progress.secretsFound.includes(lesson.secret) ? 'View Secret' : 'Reveal Hidden Secret (+150 XP)'}
              </button>
            ) : (
              <div className="animate-scale-in secret-card rounded-2xl p-5">
                <h3 className="text-sm font-bold text-purple-300 mb-2 flex items-center gap-2">
                  <span className="animate-breathe">🔮</span> Secret Discovered
                </h3>
                <p className="text-sm text-purple-200/70 leading-relaxed">{lesson.secret}</p>
              </div>
            )}
          </div>
        )}

        {/* Complete + Navigation */}
        {!done && !showQuiz && (
          <button onClick={() => onComplete(lesson.id)}
            className="w-full py-3.5 rounded-2xl bg-mint/15 text-mint font-semibold text-sm border border-mint/20 mb-4 active:scale-[0.98] transition-transform">
            ✓ Mark Complete (+50 XP)
          </button>
        )}

        <div className="flex gap-3">
          {hasPrev && (
            <button onClick={onPrevLesson} className="flex-1 py-3 rounded-2xl bg-card border border-border text-sm text-gray-400 active:scale-[0.98] transition-transform">
              ← Previous
            </button>
          )}
          {hasNext && (
            <button onClick={onNextLesson} className="flex-1 py-3 rounded-2xl bg-card border border-border text-sm text-gray-400 active:scale-[0.98] transition-transform">
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
