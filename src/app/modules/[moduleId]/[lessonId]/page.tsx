'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LessonPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;

  const lessonContent = `# Lesson Content
  
  This is where the detailed lesson content would be displayed.
  
  ## Key Concepts
  
  1. **Concept One** - Explanation of first key concept
  2. **Concept Two** - Explanation of second key concept  
  3. **Concept Three** - Explanation of third key concept
  
  > "The secret to mastery is consistent practice."
  
  ### Exercise
  
  Practice the techniques discussed in this lesson.
  
  ### Secret Code
  
  Complete this lesson to unlock a secret code. Look for hidden clues throughout the content.
  
  ---
  
  *Continue to the next lesson when you're ready.*`;

  return (
    <div className="iphone-container" style={{ background: '#0a0a0f' }}>
      {/* Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋 94%</span>
      </div>

      {/* Header */}
      <div className="nav-bar" style={{ background: 'transparent', borderBottom: '1px solid var(--border-subtle)' }}>
        <Link href={`/modules/${moduleId}`} className="flex items-center gap-2 text-gray-400 text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Lesson</span>
        </div>
        <div />
      </div>

      {/* Content */}
      <div className="scroll-content px-5" style={{ paddingBottom: '100px' }}>
        <div className="glass-card-elevated p-5" style={{ borderRadius: '24px' }}>
          <div className="prose-mobile">
            <div dangerouslySetInnerHTML={{ __html: lessonContent.replace(/\n/g, '<br/>').replace(/#{2}\s(.+)/g, '<h2>$1</h2>').replace(/#{3}\s(.+)/g, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/^> (.+)/gm, '<blockquote>$1</blockquote>').replace(/^---$/gm, '<hr/>').replace(/^(\d+)\. (.+)/gm, '<li value="$1">$2</li>').replace(/^- (.+)/gm, '<li>$2</li>') }} />
          </div>
        </div>

        {/* Complete Button */}
        <div className="mt-5">
          <button className="btn-primary" style={{ padding: '16px 24px', fontSize: '16px' }}>
            ✓ Mark as Complete
          </button>
        </div>

        {/* Secret Hint */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-rose-500/10 border border-amber-500/20">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🗝️</span>
            <div>
              <h4 className="text-sm font-semibold text-amber-400">Secret Inside</h4>
              <p className="text-xs text-gray-400 mt-1">
                Complete this lesson to reveal a secret code. Look carefully through the content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav safe-area-bottom">
        <Link href={`/modules/${moduleId}`} className="nav-item">
          <span className="nav-icon">📚</span>
          <span>Lessons</span>
        </Link>
        <Link href="/profile" className="nav-item">
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </Link>
        <Link href="/achievements" className="nav-item">
          <span className="nav-icon">🏅</span>
          <span>Awards</span>
        </Link>
      </nav>
    </div>
  );
}
