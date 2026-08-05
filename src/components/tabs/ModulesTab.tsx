'use client';

import type { Module } from '@/data/modules';
import type { UserProgress } from '../MindGamesApp';

interface Props {
  modules: Module[];
  progress: UserProgress;
  onOpenModule: (mod: Module) => void;
}

export function ModulesTab({ modules, progress, onOpenModule }: Props) {
  return (
    <div className="px-5 pt-16 pb-8">
      <h1 className="text-[28px] font-bold text-white tracking-tight mb-1 anim-fade-up">Learn</h1>
      <p className="text-[15px] text-[#86868b] mb-6 anim-fade-up delay-1">Master every discipline of social intelligence</p>

      <div className="space-y-3">
        {modules.map((mod, i) => {
          const done = mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
          const pzDone = mod.puzzles.filter(p => progress.completedPuzzles.includes(p.id)).length;
          const pct = mod.lessons.length > 0 ? Math.round((done / mod.lessons.length) * 100) : 0;

          return (
            <button key={mod.id} onClick={() => onOpenModule(mod)}
              className={`anim-fade-up delay-${Math.min(i + 1, 8)} w-full text-left ios-card p-4 flex items-center gap-4 active:bg-[#2c2c2e] transition-colors`}>
              <span className="text-[32px] flex-shrink-0">{mod.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[17px] font-semibold text-white">{mod.title}</p>
                <p className="text-[13px] text-[#86868b] mt-0.5 line-clamp-2 leading-snug">{mod.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] text-[#636366]">{done}/{mod.lessons.length} lessons</span>
                  <span className="text-[11px] text-[#636366]">·</span>
                  <span className="text-[11px] text-[#636366]">{pzDone}/{mod.puzzles.length} puzzles</span>
                </div>
                {pct > 0 && (
                  <div className="w-full h-1 rounded-full bg-[#2c2c2e] mt-2 overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${pct === 100 ? 'bg-mint' : 'bg-accent'}`} style={{ width: `${pct}%` }} />
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <span className={`text-[17px] font-bold ${pct === 100 ? 'text-mint' : 'text-[#636366]'}`}>{pct}%</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
