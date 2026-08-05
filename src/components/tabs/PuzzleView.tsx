'use client';

import { useState } from 'react';
import type { Module, Puzzle } from '@/data/modules';
import type { UserProgress } from '../MindGamesApp';

interface Props {
  module: Module; puzzle: Puzzle; progress: UserProgress;
  onComplete: (id: string, xp?: number) => void;
  onDiscoverSecret: (s: string) => void;
  onBack: () => void; onNextPuzzle: () => void;
}

const diffLabels = ['', 'Novice', 'Apprentice', 'Adept', 'Expert', 'Master'];

export function PuzzleView({ module: mod, puzzle, progress, onComplete, onDiscoverSecret, onBack, onNextPuzzle }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [answered, setAnswered] = useState(false);

  const done = progress.completedPuzzles.includes(puzzle.id);
  const hasNext = mod.puzzles.findIndex(p => p.id === puzzle.id) < mod.puzzles.length - 1;

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx); setAnswered(true);
    if (puzzle.options?.[idx]?.correct) onComplete(puzzle.id, puzzle.difficulty * 50);
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
            <p className="text-[15px] font-semibold text-white truncate">{puzzle.title}</p>
          </div>
          {done && <span className="text-[11px] text-flame font-medium">Solved</span>}
          {!done && <span className="w-10" />}
        </div>
      </div>

      <div className="px-5 py-5 pb-32">
        {/* Title + Difficulty */}
        <div className="animate-fade-up mb-5">
          <h1 className="text-xl font-bold text-gray-100 mb-2">{puzzle.title}</h1>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-xs ${i < puzzle.difficulty ? 'text-gold' : 'text-gray-700'}`}>●</span>
              ))}
            </div>
            <span className="text-xs text-gray-500">{diffLabels[puzzle.difficulty]}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">{puzzle.description}</p>
        </div>

        {/* Scenario */}
        {puzzle.scenario && (
          <div className="animate-fade-up stagger-1 glass-card rounded-2xl p-5 mb-5">
            <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">Scenario</h3>
            <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">{puzzle.scenario}</p>
          </div>
        )}

        {/* Hint */}
        {puzzle.hint && !showHint && (
          <button onClick={() => setShowHint(true)}
            className="text-xs text-gray-600 mb-4 flex items-center gap-1.5 active:text-gray-400">
            💡 Need a hint?
          </button>
        )}
        {showHint && puzzle.hint && (
          <div className="animate-scale-in glass-card rounded-2xl p-4 mb-5 border-l-2 border-gold/30">
            <p className="text-xs text-gold/70"><span className="font-bold">Hint:</span> {puzzle.hint}</p>
          </div>
        )}

        {/* Options */}
        {puzzle.options && (
          <div className="space-y-2.5 mb-5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Your Analysis</h3>
            {puzzle.options.map((opt, i) => {
              const isSel = selected === i;
              let cls = 'bg-card border-border text-gray-400';
              if (answered) {
                if (opt.correct) cls = 'bg-mint/8 border-mint/25 text-mint';
                else if (isSel) cls = 'bg-rose/8 border-rose/25 text-rose';
                else cls = 'bg-card border-border text-gray-600 opacity-50';
              } else if (isSel) cls = 'bg-accent/8 border-accent/25 text-accent-light';

              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
                  className={`quiz-option w-full text-left p-4 rounded-2xl border ${cls}`}>
                  <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      answered && opt.correct ? 'border-mint text-mint' :
                      answered && isSel ? 'border-rose text-rose' : 'border-gray-600 text-gray-600'
                    }`}>
                      {answered && opt.correct ? '✓' : answered && isSel ? '✗' : String.fromCharCode(65 + i)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{opt.text}</p>
                      {answered && (isSel || opt.correct) && (
                        <p className={`mt-2 text-xs leading-relaxed ${opt.correct ? 'text-mint/70' : 'text-rose/70'}`}>
                          {opt.feedback}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Result */}
        {answered && selected !== null && puzzle.options && (
          <div className={`animate-scale-in rounded-2xl p-5 text-center mb-5 ${
            puzzle.options[selected].correct
              ? 'bg-mint/5 border border-mint/15'
              : 'bg-rose/5 border border-rose/15'
          }`}>
            <span className="text-3xl block mb-2">{puzzle.options[selected].correct ? '🎯' : '🔍'}</span>
            <p className={`font-bold text-sm ${puzzle.options[selected].correct ? 'text-mint' : 'text-rose'}`}>
              {puzzle.options[selected].correct ? `Excellent! +${puzzle.difficulty * 50} XP` : 'Review the correct answer above'}
            </p>
          </div>
        )}

        {/* Secret */}
        {puzzle.secret && answered && (
          !showSecret ? (
            <button onClick={() => { setShowSecret(true); onDiscoverSecret(puzzle.secret!); }}
              className="w-full py-3.5 rounded-2xl secret-card secret-card-glow text-purple-300 font-semibold text-sm mb-5 active:scale-[0.98] transition-transform">
              🔮 Reveal Puzzle Secret (+150 XP)
            </button>
          ) : (
            <div className="animate-scale-in secret-card rounded-2xl p-5 mb-5">
              <h3 className="text-sm font-bold text-purple-300 mb-2">🔮 Secret Unlocked</h3>
              <p className="text-sm text-purple-200/70 leading-relaxed">{puzzle.secret}</p>
            </div>
          )
        )}

        {hasNext && (
          <button onClick={onNextPuzzle}
            className="w-full py-3 rounded-2xl bg-card border border-border text-sm text-gray-400 active:scale-[0.98] transition-transform">
            Next Puzzle →
          </button>
        )}
      </div>
    </div>
  );
}
