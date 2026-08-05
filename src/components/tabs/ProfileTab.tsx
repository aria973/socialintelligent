'use client';

import type { Module } from '@/data/modules';
import type { UserProgress } from '../MindGamesApp';

interface Props { modules: Module[]; progress: UserProgress; totalL: number; totalP: number; totalS: number; }

export function ProfileTab({ modules, progress, totalL, totalP, totalS }: Props) {
  const ranks = [
    { lvl: 1, t: 'Novice Observer', i: '👁️' }, { lvl: 3, t: 'Pattern Spotter', i: '🔍' },
    { lvl: 5, t: 'Mind Reader', i: '🧠' }, { lvl: 8, t: 'Social Strategist', i: '♟️' },
    { lvl: 12, t: 'Master Influencer', i: '🎭' }, { lvl: 15, t: 'Grand Architect', i: '👑' },
    { lvl: 20, t: 'Transcendent', i: '⚡' },
  ];
  const cr = [...ranks].reverse().find(r => progress.level >= r.lvl) || ranks[0];
  const qk = Object.keys(progress.quizScores);
  const avg = qk.length > 0 ? Math.round(Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / qk.length) : 0;

  return (
    <div className="px-5 pt-16 pb-8">
      <div className="anim-fade-up text-center mb-7">
        <div className="relative w-20 h-20 mx-auto mb-3">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-[36px]">{cr.i}</span>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-[12px] font-bold text-white border-2 border-black">
            {progress.level}
          </div>
        </div>
        <h1 className="text-[20px] font-bold text-white">{cr.t}</h1>
        <p className="text-[13px] text-accent mt-0.5">{progress.totalXp} XP</p>
      </div>

      <div className="anim-fade-up delay-1 grid grid-cols-3 gap-2 mb-5">
        {[
          { n: progress.completedLessons.length, l: `/ ${totalL} Lessons` },
          { n: progress.completedPuzzles.length, l: `/ ${totalP} Puzzles` },
          { n: progress.secretsFound.length, l: `/ ${totalS} Secrets` },
        ].map(s => (
          <div key={s.l} className="ios-card p-3.5 text-center">
            <p className="text-[20px] font-bold text-white">{s.n}</p>
            <p className="text-[10px] text-[#636366] mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>

      {qk.length > 0 && (
        <div className="anim-fade-up delay-2 ios-card p-4 flex justify-between items-center mb-5">
          <span className="text-[15px] text-[#aeaeb2]">Quiz Average</span>
          <span className={`text-[17px] font-bold ${avg >= 80 ? 'text-mint' : avg >= 50 ? 'text-flame' : 'text-rose'}`}>{avg}%</span>
        </div>
      )}

      <p className="section-header mb-2 anim-fade-up delay-3">Module Mastery</p>
      <div className="ios-card overflow-hidden mb-5 anim-fade-up delay-3">
        {modules.map((mod, i) => {
          const done = mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
          const pct = mod.lessons.length > 0 ? Math.round((done / mod.lessons.length) * 100) : 0;
          return (
            <div key={mod.id} className={`px-4 py-3 flex items-center gap-3 ${i > 0 ? 'border-t border-[#2c2c2e]' : ''}`}>
              <span className="text-[18px]">{mod.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] text-white truncate">{mod.title}</p>
                <div className="w-full h-1 rounded-full bg-[#2c2c2e] mt-1.5 overflow-hidden">
                  <div className={`h-full rounded-full ${pct === 100 ? 'bg-mint' : 'bg-accent'} transition-all`} style={{ width: `${pct}%` }} />
                </div>
              </div>
              <span className={`text-[13px] font-semibold w-9 text-right ${pct === 100 ? 'text-mint' : 'text-[#636366]'}`}>{pct}%</span>
            </div>
          );
        })}
      </div>

      <p className="section-header mb-2">Rank Progression</p>
      <div className="ios-card overflow-hidden">
        {ranks.map((r, i) => {
          const got = progress.level >= r.lvl;
          const cur = cr.lvl === r.lvl;
          return (
            <div key={r.lvl} className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? 'border-t border-[#2c2c2e]' : ''} ${cur ? 'bg-accent/5' : ''}`}>
              <span className={`text-[20px] ${got ? '' : 'grayscale opacity-20'}`}>{r.i}</span>
              <div className="flex-1">
                <p className={`text-[15px] ${got ? 'text-white' : 'text-[#48484a]'}`}>{r.t}</p>
                <p className="text-[11px] text-[#636366]">Level {r.lvl}</p>
              </div>
              {cur && <span className="text-[10px] text-accent font-bold tracking-wider">CURRENT</span>}
              {got && !cur && <span className="text-mint text-[12px]">✓</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
