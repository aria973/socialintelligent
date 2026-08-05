'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Module data for the app
const modules = [
  {
    id: 'foundations',
    title: 'Foundations',
    subtitle: 'Science of Human Behavior',
    description: 'Core principles of psychology, consciousness, and influence.',
    icon: '🧠',
    gradient: 'from-slate-600/30 to-slate-800/30',
    lessons: 8,
    progress: 0,
  },
  {
    id: 'transactional_analysis',
    title: 'Transactional Analysis',
    subtitle: "Eric Berne's Games People Play",
    description: 'Ego states, transactions, psychological games, life scripts.',
    icon: '🎭',
    gradient: 'from-purple-600/30 to-indigo-600/30',
    lessons: 18,
    progress: 0,
  },
  {
    id: 'erickson_hypnosis',
    title: 'Ericksonian Hypnosis',
    subtitle: "Milton H. Erickson's Methods",
    description: 'Indirect suggestion, trance, confusion, utilization, storytelling.',
    icon: '🌀',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    lessons: 22,
    progress: 0,
  },
  {
    id: 'clinical_hypnosis',
    title: 'Clinical Hypnotherapy',
    subtitle: 'Professional Practice',
    description: 'Pain, anxiety, habits, trauma, regression, ethics.',
    icon: '🏥',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    lessons: 20,
    progress: 0,
  },
  {
    id: 'body_language',
    title: 'Nonverbal Mastery',
    subtitle: 'FBI Behavioral Analysis',
    description: 'Microexpressions, body language, voice, deception detection.',
    icon: '👁️',
    gradient: 'from-rose-600/30 to-pink-600/30',
    lessons: 20,
    progress: 0,
  },
  {
    id: 'mentalism',
    title: 'Professional Mentalism',
    subtitle: 'Psychological Illusion',
    description: 'Cold reading, hot reading, forces, predictions, performance.',
    icon: '🎩',
    gradient: 'from-amber-600/30 to-orange-600/30',
    lessons: 24,
    progress: 0,
  },
  {
    id: 'reading_people',
    title: 'Portrait of the Mind',
    subtitle: 'Personality Analysis',
    description: 'Big Five, attachment, types, behavioral prediction.',
    icon: '🔮',
    gradient: 'from-violet-600/30 to-purple-600/30',
    lessons: 16,
    progress: 0,
  },
  {
    id: 'hypnotic_language',
    title: 'Hypnotic Language',
    subtitle: 'Persuasive Communication',
    description: 'NLP patterns, commands, metaphors, conversational trance.',
    icon: '💬',
    gradient: 'from-pink-600/30 to-rose-600/30',
    lessons: 14,
    progress: 0,
  },
  {
    id: 'rapport_influence',
    title: 'Rapport & Influence',
    subtitle: 'Ethical Persuasion',
    description: 'Rapport, compliance, persuasion psychology.',
    icon: '🤝',
    gradient: 'from-blue-600/30 to-indigo-600/30',
    lessons: 12,
    progress: 0,
  },
  {
    id: 'memory_cognition',
    title: 'Memory & Cognition',
    subtitle: 'Mental Performance',
    description: 'Memory palaces, speed learning, cognitive enhancement.',
    icon: '🎯',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    lessons: 12,
    progress: 0,
  },
  {
    id: 'performance_psychology',
    title: 'Performance Psychology',
    subtitle: 'Stage Presence',
    description: 'Presence, audiences, pacing, dramatic structure.',
    icon: '🎭',
    gradient: 'from-orange-600/30 to-red-600/30',
    lessons: 10,
    progress: 0,
  },
  {
    id: 'professional_practice',
    title: 'Professional Practice',
    subtitle: 'Ethics & Business',
    description: 'Ethics, clients, business, marketing, career.',
    icon: '💼',
    gradient: 'from-slate-600/30 to-gray-800/30',
    lessons: 10,
    progress: 0,
  },
  {
    id: 'mastery_integration',
    title: 'Mastery Integration',
    subtitle: 'Complete Mentalist & Hypnotherapist',
    description: 'Integrated sessions, complex cases, professional identity.',
    icon: '🏆',
    gradient: 'from-yellow-600/30 to-amber-600/30',
    lessons: 12,
    progress: 0,
  },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'achievements'>('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="iphone-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋 94%</span>
      </div>

      {/* Navigation */}
      <nav className="nav-bar safe-area-top">
        <Link href="/" className="nav-title">
          <span className="gradient-text">MindLens</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/achievements" className="nav-link">
            🏅
          </Link>
          <Link href="/profile" className="nav-link">
            👤
          </Link>
        </div>
      </nav>

      {/* Scroll Content */}
      <div className="scroll-content pb-20">
        {/* Welcome Section */}
        <div className="px-5 pt-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xl shadow-lg">
              🧠
            </div>
            <div>
              <h1 className="text-lg font-bold">Welcome back</h1>
              <p className="text-xs text-gray-500">Continue your journey</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 bg-[#1a1a28] rounded-2xl p-4 border border-white/5">
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-xs text-gray-500 mt-1">Lessons Done</div>
            </div>
            <div className="flex-1 bg-[#1a1a28] rounded-2xl p-4 border border-white/5">
              <div className="text-2xl font-bold text-amber-400">0</div>
              <div className="text-xs text-gray-500 mt-1">Secrets Found</div>
            </div>
            <div className="flex-1 bg-[#1a1a28] rounded-2xl p-4 border border-white/5">
              <div className="text-2xl font-bold text-purple-400">Lv.1</div>
              <div className="text-xs text-gray-500 mt-1">Level</div>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="px-5 mt-6">
          <div className="section-header">
            <h2 className="section-title">Continue Learning</h2>
          </div>
          
          <Link href={`/modules/foundations`} className="module-card has-progress">
            <div className={`module-icon bg-gradient-to-br ${modules[0].gradient}`}>
              {modules[0].icon}
            </div>
            <h3 className="module-title">{modules[0].title}</h3>
            <p className="module-subtitle">{modules[0].subtitle}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{modules[0].progress}% complete</span>
              <span className="text-xs text-purple-400 font-medium">Continue →</span>
            </div>
          </Link>
        </div>

        {/* All Modules */}
        <div className="px-5 mt-6">
          <div className="section-header">
            <h2 className="section-title">Complete Curriculum</h2>
            <span className="text-xs text-gray-500">{modules.length} modules</span>
          </div>

          <div className="space-y-2">
            {modules.map((module, index) => (
              <Link
                key={module.id}
                href={`/modules/${module.id}`}
                className="module-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`module-icon bg-gradient-to-br ${module.gradient}`}>
                  {module.icon}
                </div>
                <h3 className="module-title">{module.title}</h3>
                <p className="module-subtitle">{module.subtitle}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <div className="progress-ring">
                      <span className="progress-ring-text">{module.progress}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {module.lessons} lessons
                    </span>
                  </div>
                  <span className="text-xs text-purple-400">{module.progress > 0 ? `${module.progress}%` : 'Start'}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Secrets Section */}
        <div className="px-5 mt-6 mb-10">
          <div className="section-header">
            <h2 className="section-title">Hidden Secrets</h2>
            <span className="secret-badge">40+ to find</span>
          </div>
          
          <div className="glass-card p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">🗝️</div>
              <div>
                <h3 className="font-semibold text-sm">Discover Hidden Wisdom</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Each lesson contains secret codes. Complete lessons and enter the codes to unlock hidden secrets.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-2 bg-[#1a1a28] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">0 of 40+ secrets discovered</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav safe-area-bottom">
        <button
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <span className="nav-icon">🏅</span>
          <span>Awards</span>
        </button>
      </nav>
    </div>
  );
}
