'use client';

import type { Module } from '@/data/modules';
import type { UserProgress } from '../MindGamesApp';

interface Props { modules: Module[]; progress: UserProgress; }

export function SecretsTab({ modules, progress }: Props) {
  const all: { source: string; icon: string; secret: string; found: boolean }[] = [];
  modules.forEach(m => {
    m.secrets.forEach(s => all.push({ source: m.title, icon: m.icon, secret: s, found: progress.secretsFound.includes(s) }));
    m.lessons.forEach(l => { if (l.secret) all.push({ source: l.title, icon: m.icon, secret: l.secret, found: progress.secretsFound.includes(l.secret) }); });
    m.puzzles.forEach(p => { if (p.secret) all.push({ source: p.title, icon: '🧩', secret: p.secret, found: progress.secretsFound.includes(p.secret) }); });
  });
  const found = all.filter(s => s.found);
  const hidden = all.filter(s => !s.found);
  const pct = all.length > 0 ? Math.round((found.length / all.length) * 100) : 0;

  return (
    <div className="px-5 pt-16 pb-8">
      <div className="anim-fade-up text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-purple-ios/10 flex items-center justify-center mx-auto mb-3">
          <span className="text-[28px]">🔮</span>
        </div>
        <h1 className="text-[22px] font-bold text-white mb-1">Secrets Vault</h1>
        <p className="text-[13px] text-[#86868b]">{found.length} of {all.length} discovered</p>
        <div className="w-36 h-1 rounded-full bg-[#2c2c2e] mx-auto mt-3 overflow-hidden">
          <div className="h-full rounded-full bg-purple-ios transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {found.length > 0 && (
        <div className="mb-8">
          <p className="section-header mb-2">Discovered</p>
          <div className="space-y-2.5">
            {found.map((s, i) => (
              <div key={i} className={`anim-fade-up delay-${Math.min(i + 1, 8)} secret-card rounded-[13px] p-4`}>
                <div className="flex items-center gap-1.5 mb-1.5 text-[11px] text-purple-ios/50">
                  <span>{s.icon}</span>
                  <span className="truncate">{s.source}</span>
                </div>
                <p className="text-[14px] text-[#c8c8cc] leading-relaxed">{s.secret}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {hidden.length > 0 && (
        <div>
          <p className="section-header mb-2">🔒 Hidden ({hidden.length})</p>
          <div className="grid grid-cols-2 gap-2">
            {hidden.slice(0, 12).map((s, i) => (
              <div key={i} className="ios-card p-3 opacity-30">
                <span className="text-[11px] text-[#636366]">{s.icon} {s.source}</span>
                <p className="text-[11px] text-[#48484a] mt-1 italic">Undiscovered</p>
              </div>
            ))}
          </div>
          {hidden.length > 12 && <p className="text-[12px] text-[#48484a] text-center mt-3">+{hidden.length - 12} more hidden secrets</p>}
        </div>
      )}
    </div>
  );
}
