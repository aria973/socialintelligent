'use client';

import { useState } from 'react';
import type { UserProgress } from '../MindGamesApp';

interface Props { progress: UserProgress; onSaveNote: (key: string, note: string) => void; }

const PROMPTS = [
  { key: 'ego-states', title: 'Ego States Observed', icon: '🎭' },
  { key: 'games-spotted', title: 'Games I Spotted', icon: '🎮' },
  { key: 'body-language', title: 'Body Language Notes', icon: '🕵️' },
  { key: 'influence-log', title: 'Influence Log', icon: '🧲' },
  { key: 'hypnosis-practice', title: 'Hypnosis Practice', icon: '🌀' },
  { key: 'cold-reading', title: 'Cold Reading Results', icon: '🔮' },
  { key: 'people-profiles', title: 'People Profiles', icon: '👤' },
  { key: 'self-reflection', title: 'Self-Reflection', icon: '🪞' },
];

export function NotesTab({ progress, onSaveNote }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [newT, setNewT] = useState('');
  const entries = Object.entries(progress.notes).filter(([, v]) => v.trim().length > 0);

  return (
    <div className="px-5 pt-16 pb-8">
      <h1 className="text-[28px] font-bold text-white tracking-tight mb-1 anim-fade-up">Field Notes</h1>
      <p className="text-[15px] text-[#86868b] mb-6 anim-fade-up delay-1">Track observations &amp; practice</p>

      {active && (
        <div className="anim-scale-in ios-card p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[15px] font-semibold text-white">
              {active.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </h3>
            <button onClick={() => setActive(null)} className="text-[13px] text-accent active:opacity-50">Done</button>
          </div>
          <textarea value={progress.notes[active] || ''} onChange={e => onSaveNote(active, e.target.value)}
            placeholder="Start writing..."
            className="w-full h-40 bg-[#2c2c2e] rounded-[10px] p-3.5 text-[15px] text-white placeholder-[#636366] resize-none focus:outline-none" autoFocus />
        </div>
      )}

      <p className="section-header mb-2 anim-fade-up delay-2">Journal Prompts</p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {PROMPTS.map((p, i) => {
          const has = progress.notes[p.key]?.trim().length > 0;
          return (
            <button key={p.key}
              onClick={() => { if (!progress.notes[p.key]) onSaveNote(p.key, ''); setActive(p.key); }}
              className={`anim-fade-up delay-${Math.min(i + 2, 8)} text-left ios-card p-3.5 active:bg-[#2c2c2e] transition-colors`}>
              <span className="text-[18px] block mb-1">{p.icon}</span>
              <p className="text-[13px] font-medium text-white leading-tight">{p.title}</p>
              {has && <span className="text-[8px] text-accent mt-0.5 block">● has notes</span>}
            </button>
          );
        })}
      </div>

      {!showNew ? (
        <button onClick={() => setShowNew(true)} className="text-[13px] text-accent flex items-center gap-1 mb-6 active:opacity-50">
          + Create custom note
        </button>
      ) : (
        <div className="flex gap-2 mb-6 anim-scale-in">
          <input value={newT} onChange={e => setNewT(e.target.value)} placeholder="Note title..."
            className="flex-1 bg-[#1c1c1e] rounded-[10px] px-3 py-2.5 text-[15px] text-white placeholder-[#636366] focus:outline-none"
            onKeyDown={e => { if (e.key === 'Enter' && newT.trim()) { onSaveNote(newT.trim().toLowerCase().replace(/\s+/g, '-'), ''); setActive(newT.trim().toLowerCase().replace(/\s+/g, '-')); setNewT(''); setShowNew(false); } }} autoFocus />
          <button onClick={() => setShowNew(false)} className="px-3 text-[13px] text-[#636366]">Cancel</button>
        </div>
      )}

      {entries.length > 0 && (
        <>
          <p className="section-header mb-2">All Notes ({entries.length})</p>
          <div className="ios-card overflow-hidden">
            {entries.map(([key, value], i) => (
              <button key={key} onClick={() => setActive(key)}
                className={`w-full text-left px-4 py-3 active:bg-[#2c2c2e] transition-colors ${i > 0 ? 'border-t border-[#2c2c2e]' : ''}`}>
                <p className="text-[15px] text-white">{key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</p>
                <p className="text-[13px] text-[#636366] line-clamp-1 mt-0.5">{value}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
