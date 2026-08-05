'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'secrets'>('overview');

  const profile = {
    name: 'Student',
    level: 1,
    xp: 0,
    streak: 0,
    lessonsDone: 0,
    secretsFound: 0,
    achievements: 0,
  };

  const modulesProgress = [
    { name: 'Foundations', icon: '🧠', progress: 0, color: 'bg-slate-600' },
    { name: 'Transactional Analysis', icon: '🎭', progress: 0, color: 'bg-purple-600' },
    { name: 'Ericksonian Hypnosis', icon: '🌀', progress: 0, color: 'bg-cyan-600' },
    { name: 'Clinical Hypnotherapy', icon: '🏥', progress: 0, color: 'bg-emerald-600' },
    { name: 'Nonverbal Mastery', icon: '👁️', progress: 0, color: 'bg-rose-600' },
    { name: 'Professional Mentalism', icon: '🎩', progress: 0, color: 'bg-amber-600' },
    { name: 'Portrait of the Mind', icon: '🔮', progress: 0, color: 'bg-violet-600' },
    { name: 'Hypnotic Language', icon: '💬', progress: 0, color: 'bg-pink-600' },
    { name: 'Rapport & Influence', icon: '🤝', progress: 0, color: 'bg-blue-600' },
    { name: 'Memory & Cognition', icon: '🎯', progress: 0, color: 'bg-cyan-600' },
    { name: 'Performance Psychology', icon: '🎭', progress: 0, color: 'bg-orange-600' },
    { name: 'Professional Practice', icon: '💼', progress: 0, color: 'bg-slate-600' },
    { name: 'Mastery Integration', icon: '🏆', progress: 0, color: 'bg-yellow-600' },
  ];

  return (
    <div className="iphone-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋 94%</span>
      </div>

      {/* Header */}
      <nav className="nav-bar">
        <Link href="/" className="flex items-center gap-2 text-gray-400 text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </Link>
        <span className="text-lg font-bold">Profile</span>
        <div />
      </nav>

      {/* Profile Header */}
      <div className="profile-header safe-area-top">
        <div className="profile-avatar">
          🧠
        </div>
        <h1 className="profile-name">{profile.name}</h1>
        <div className="profile-level">
          <span>⭐</span>
          <span>Level {profile.level}</span>
        </div>

        <div className="profile-stats">
          <div className="stat-box">
            <div className="stat-value">{profile.xp}</div>
            <div className="stat-label">Total XP</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{profile.lessonsDone}</div>
            <div className="stat-label">Lessons</div>
          </div>
          <div className="stat-box">
            <div className="stat-value text-amber-400">{profile.secretsFound}</div>
            <div className="stat-label">Secrets</div>
          </div>
        </div>

        {profile.streak > 0 && (
          <div className="mt-4">
            <span className="text-sm text-amber-400">
              🔥 {profile.streak} day streak
            </span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        {(['overview', 'modules', 'secrets'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-center text-sm font-medium transition-all ${
              activeTab === tab 
                ? 'text-purple-400 border-b-2 border-purple-400' 
                : 'text-gray-500'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="scroll-content">
        {activeTab === 'overview' && (
          <div className="px-5 space-y-4">
            {/* Stats Cards */}
            <div className="glass-card p-4">
              <h3 className="text-sm font-semibold text-white mb-3">Your Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1a1a28] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{profile.level}</div>
                  <div className="text-xs text-gray-500">Level</div>
                </div>
                <div className="bg-[#1a1a28] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-amber-400">{profile.xp}</div>
                  <div className="text-xs text-gray-500">XP Earned</div>
                </div>
                <div className="bg-[#1a1a28] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{profile.lessonsDone}</div>
                  <div className="text-xs text-gray-500">Lessons</div>
                </div>
                <div className="bg-[#1a1a28] rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-rose-400">{profile.secretsFound}</div>
                  <div className="text-xs text-gray-500">Secrets</div>
                </div>
              </div>
            </div>

            {/* XP Progress */}
            <div className="glass-card p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Next Level</span>
                <span className="text-sm text-gray-500">{profile.xp} / {profile.level * 100} XP</span>
              </div>
              <div className="h-2 bg-[#1a1a28] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  style={{ width: `${(profile.xp % (profile.level * 100)) / (profile.level * 100) * 100}%` }}
                />
              </div>
            </div>

            {/* Achievements Preview */}
            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white">Achievements</h3>
                <span className="text-xs text-gray-500">{profile.achievements} unlocked</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                      i <= profile.achievements ? 'bg-amber-500/20' : 'bg-[#1a1a28]'
                    }`}
                  >
                    {i <= profile.achievements ? '🏅' : '🔒'}
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="glass-card p-4">
              <h3 className="text-sm font-semibold text-white mb-3">Settings</h3>
              <div className="space-y-2">
                <button className="w-full py-3 bg-[#1a1a28] rounded-xl text-left text-sm text-gray-400 flex items-center justify-between">
                  <span>Notifications</span>
                  <span className="text-purple-400">🔔</span>
                </button>
                <button className="w-full py-3 bg-[#1a1a28] rounded-xl text-left text-sm text-gray-400 flex items-center justify-between">
                  <span>Privacy</span>
                  <span className="text-purple-400">⚙️</span>
                </button>
                <button className="w-full py-3 bg-[#1a1a28] rounded-xl text-left text-sm text-gray-400 flex items-center justify-between">
                  <span>About</span>
                  <span className="text-purple-400">ℹ️</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="px-5 space-y-3">
            <h3 className="text-sm font-semibold text-white mb-2">Module Progress</h3>
            {modulesProgress.map((mod, i) => (
              <div key={i} className="glass-card p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{mod.icon}</span>
                    <span className="text-sm text-white">{mod.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{mod.progress}%</span>
                </div>
                <div className="h-1.5 bg-[#1a1a28] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${mod.color} rounded-full`}
                    style={{ width: `${mod.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'secrets' && (
          <div className="px-5 space-y-4">
            <div className="glass-card p-4 text-center">
              <div className="text-4xl mb-3">🗝️</div>
              <h3 className="text-lg font-semibold text-white mb-1">Secrets Discovered</h3>
              <p className="text-sm text-gray-500 mb-4">{profile.secretsFound} of 40+ secrets</p>
              
              <div className="h-2 bg-[#1a1a28] rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                  style={{ width: `${Math.min((profile.secretsFound / 40) * 100, 100)}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-1.5 justify-center">
                {Array.from({ length: Math.min(profile.secretsFound, 12) }, (_, i) => (
                  <span key={i} className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                ))}
                {profile.secretsFound > 12 && (
                  <span className="px-2 py-1 bg-[#1a1a28] text-xs text-gray-500 rounded">
                    +{profile.secretsFound - 12} more
                  </span>
                )}
              </div>
            </div>

            <div className="glass-card p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Secret Tips</h3>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span>Complete lessons to unlock secret codes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span>Look for hidden clues in lesson content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💡</span>
                  <span>Some secrets are only available after completing related lessons</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav safe-area-bottom">
        <button
          className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <span className="nav-icon">📊</span>
          <span>Overview</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          <span className="nav-icon">📚</span>
          <span>Modules</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'secrets' ? 'active' : ''}`}
          onClick={() => setActiveTab('secrets')}
        >
          <span className="nav-icon">🗝️</span>
          <span>Secrets</span>
        </button>
      </nav>
    </div>
  );
}
