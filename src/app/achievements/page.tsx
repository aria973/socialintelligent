'use client';

import Link from 'next/link';

const achievements = [
  // Foundation
  { id: 1, name: 'Foundation Laid', description: 'Complete all foundation lessons', icon: '🏛️', unlocked: false, xp: 200, category: 'foundation' },
  { id: 2, name: 'Student of Human Nature', description: 'Complete Foundations module', icon: '🧠', unlocked: false, xp: 300, category: 'foundation' },
  
  // TA
  { id: 3, name: 'Games Identified', description: 'Learn to identify 5 psychological games', icon: '🎭', unlocked: false, xp: 150, category: 'ta' },
  { id: 4, name: 'Script Analyst', description: 'Complete ego state mapping', icon: '📝', unlocked: false, xp: 200, category: 'ta' },
  { id: 5, name: 'Script Therapist', description: 'Complete script cure training', icon: '✍️', unlocked: false, xp: 300, category: 'ta' },
  { id: 6, name: 'TA Master', description: 'Complete Transactional Analysis module', icon: '🎭', unlocked: false, xp: 500, category: 'ta' },
  
  // Ericksonian
  { id: 7, name: 'Trance Inducer', description: 'Successfully induce trance in 10 people', icon: '🌀', unlocked: false, xp: 200, category: 'erickson' },
  { id: 8, name: 'Story Weaver', description: 'Create and deliver 5 therapeutic stories', icon: '📖', unlocked: false, xp: 200, category: 'erickson' },
  { id: 9, name: 'Confusion Master', description: 'Master confusion techniques', icon: '🌀', unlocked: false, xp: 250, category: 'erickson' },
  { id: 10, name: 'Ericksonian Practitioner', description: 'Complete Ericksonian module', icon: '🏆', unlocked: false, xp: 500, category: 'erickson' },
  
  // Clinical
  { id: 11, name: 'Anxiety Specialist', description: 'Learn anxiety treatment protocols', icon: '😌', unlocked: false, xp: 200, category: 'clinical' },
  { id: 12, name: 'Pain Manager', description: 'Complete pain management training', icon: '🩹', unlocked: false, xp: 250, category: 'clinical' },
  { id: 13, name: 'Clinical Hypnotherapist', description: 'Complete clinical module', icon: '🏥', unlocked: false, xp: 500, category: 'clinical' },
  
  // Body Language
  { id: 14, name: 'Face Reader', description: 'Identify all 7 universal emotions', icon: '👁️', unlocked: false, xp: 200, category: 'body' },
  { id: 15, name: 'Microexpression Expert', description: 'Achieve 80%+ on microexpression test', icon: '🔬', unlocked: false, xp: 300, category: 'body' },
  { id: 16, name: 'Behavioral Analyst', description: 'Complete nonverbal module', icon: '🔍', unlocked: false, xp: 400, category: 'body' },
  
  // Mentalism
  { id: 17, name: 'Cold Reader', description: 'Successfully cold read 5 people', icon: '🎩', unlocked: false, xp: 200, category: 'mentalism' },
  { id: 18, name: 'Psychological Force', description: 'Master 5 psychological forces', icon: '🎯', unlocked: false, xp: 250, category: 'mentalism' },
  { id: 19, name: 'Prediction Expert', description: 'Create 3 prediction effects', icon: '🔮', unlocked: false, xp: 300, category: 'mentalism' },
  { id: 20, name: 'Mentalism Performer', description: 'Complete mentalism module', icon: '🎭', unlocked: false, xp: 500, category: 'mentalism' },
  
  // Language
  { id: 21, name: 'Storyteller', description: 'Master therapeutic storytelling', icon: '📚', unlocked: false, xp: 200, category: 'language' },
  { id: 22, name: 'Language Architect', description: 'Create 10 embedded commands', icon: '💬', unlocked: false, xp: 200, category: 'language' },
  { id: 23, name: 'Hypnotic Speaker', description: 'Complete language patterns module', icon: '🎤', unlocked: false, xp: 400, category: 'language' },
  
  // Special
  { id: 24, name: 'Rapport Master', description: 'Build instant rapport with anyone', icon: '🤝', unlocked: false, xp: 300, category: 'special' },
  { id: 25, name: 'Memory Champion', description: 'Memorize 100 items with memory palace', icon: '🧠', unlocked: false, xp: 250, category: 'special' },
  { id: 26, name: 'Ethical Practitioner', description: 'Complete all ethics training', icon: '⚖️', unlocked: false, xp: 200, category: 'special' },
  { id: 27, name: 'The Mentalist', description: 'Complete your first full mentalism performance', icon: '🎩', unlocked: false, xp: 500, category: 'special' },
  { id: 28, name: 'Hypnotherapist', description: 'Complete first supervised client session', icon: '🏥', unlocked: false, xp: 500, category: 'special' },
  { id: 29, name: 'Grand Master', description: 'Complete all professional modules', icon: '👑', unlocked: false, xp: 2000, category: 'special' },
];

const categories = [
  { id: 'foundation', name: 'Foundation', icon: '🏛️', color: 'border-purple-500' },
  { id: 'ta', name: 'Transactional Analysis', icon: '🎭', color: 'border-indigo-500' },
  { id: 'erickson', name: 'Ericksonian', icon: '🌀', color: 'border-cyan-500' },
  { id: 'clinical', name: 'Clinical', icon: '🏥', color: 'border-emerald-500' },
  { id: 'body', name: 'Body Language', icon: '👁️', color: 'border-rose-500' },
  { id: 'mentalism', name: 'Mentalism', icon: '🎩', color: 'border-amber-500' },
  { id: 'language', name: 'Language', icon: '💬', color: 'border-pink-500' },
  { id: 'special', name: 'Special', icon: '⭐', color: 'border-yellow-500' },
];

export default function AchievementsPage() {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalXp = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0);

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
        <span className="text-lg font-bold">Achievements</span>
        <div />
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-900/20 to-rose-900/20 px-5 pt-8 pb-6">
        <div className="text-center">
          <div className="text-5xl mb-3">🏅</div>
          <h1 className="text-xl font-bold text-white mb-1">Your Achievements</h1>
          <p className="text-sm text-gray-400 mb-4">Complete lessons and discover secrets to unlock achievements</p>
          
          <div className="flex justify-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">{unlockedCount}</div>
              <div className="text-xs text-gray-500">Unlocked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{totalXp}</div>
              <div className="text-xs text-gray-500">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">{Math.round((unlockedCount / achievements.length) * 100)}%</div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>

          <div className="h-2 bg-[#1a1a28] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-full"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Achievements List */}
      <div className="scroll-content">
        <div className="px-5 space-y-3">
          {categories.map(cat => (
            <div key={cat.id}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              
              <div className="space-y-2">
                {achievements.filter(a => a.category === cat.id).map(achievement => (
                  <div
                    key={achievement.id}
                    className={`achievement-card ${achievement.unlocked ? 'unlocked' : ''}`}
                  >
                    <div className="achievement-icon">
                      {achievement.unlocked ? achievement.icon : '🔒'}
                    </div>
                    <div className="achievement-info">
                      <div className="achievement-name">
                        {achievement.unlocked ? achievement.name : '???'}
                      </div>
                      {achievement.unlocked ? (
                        <div className="achievement-description">{achievement.description}</div>
                      ) : (
                        <div className="achievement-locked-text">Complete requirements to unlock</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">+{achievement.xp} XP</div>
                      {achievement.unlocked && (
                        <div className="text-xs text-amber-400 mt-0.5">✓ Unlocked</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav safe-area-bottom">
        <Link href="/" className="nav-item">
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </Link>
        <Link href="/profile" className="nav-item">
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </Link>
        <button className={`nav-item ${true ? 'active' : ''}`} style={{ pointerEvents: 'none' }}>
          <span className="nav-icon">🏅</span>
          <span>Awards</span>
        </button>
      </nav>
    </div>
  );
}
