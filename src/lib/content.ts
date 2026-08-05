// Comprehensive Content Database
// Covers: Games People Play (Eric Berne), The February Man (Milton H. Erickson),
// FBI Body Language, Behavioral Analysis, Hypnotism, Personality Theories, Memory Techniques

export const modules = {
  transactional_analysis: {
    id: 'transactional_analysis',
    title: 'Games People Play',
    subtitle: 'Eric Berne\'s Transactional Analysis',
    description: 'Master the hidden psychological games people play in everyday interactions. Learn to recognize ulterior transactions, identify ego states, and break free from dysfunctional patterns.',
    icon: '🎭',
    color: 'from-purple-600 to-indigo-600',
    totalLessons: 12,
    difficulty: 'Beginner to Advanced',
  },
  erickson_hypnosis: {
    id: 'erickson_hypnosis',
    title: 'The February Man',
    subtitle: 'Milton H. Erickson\'s Hypnotherapy Methods',
    description: 'Explore the revolutionary indirect hypnosis techniques of Dr. Milton H. Erickson. Learn confusion techniques, utilization, naturalistic trance induction, and therapeutic storytelling.',
    icon: '🌀',
    color: 'from-cyan-600 to-blue-600',
    totalLessons: 10,
    difficulty: 'Intermediate to Advanced',
  },
  body_language: {
    id: 'body_language',
    title: 'FBI Body Language',
    subtitle: 'Behavioral Analysis & Nonverbal Communication',
    description: 'Learn the science of reading people like the FBI. Master microexpressions, baseline behavior, comfort/discomfort signals, and deception detection through systematic observation.',
    icon: '🔍',
    color: 'from-emerald-600 to-teal-600',
    totalLessons: 10,
    difficulty: 'Beginner to Advanced',
  },
  personality_theories: {
    id: 'personality_theories',
    title: 'Personality Architecture',
    subtitle: 'Understanding Individual Differences',
    description: 'Deep dive into personality psychology including Big Five, MBTI foundations, attachment theory, and how personality shapes behavior patterns and interpersonal dynamics.',
    icon: '🧩',
    color: 'from-orange-600 to-red-600',
    totalLessons: 8,
    difficulty: 'Intermediate',
  },
  hypnotic_influence: {
    id: 'hypnotic_influence',
    title: 'Hypnotic Influence',
    subtitle: 'Ethical Persuasion & Suggestion',
    description: 'Understand the mechanics of suggestion, rapport building, linguistic patterns, and ethical influence. Learn to recognize and respond to hypnotic language patterns.',
    icon: '✨',
    color: 'from-pink-600 to-rose-600',
    totalLessons: 8,
    difficulty: 'Intermediate to Advanced',
  },
  memory_mastery: {
    id: 'memory_mastery',
    title: 'Memory Mastery',
    subtitle: 'Long-Term Retention & Recall',
    description: 'Scientific techniques for encoding information into long-term memory. Spaced repetition, memory palaces, mnemonic devices, and the neuroscience of learning.',
    icon: '🧠',
    color: 'from-violet-600 to-purple-600',
    totalLessons: 7,
    difficulty: 'Beginner to Intermediate',
  },
  integration: {
    id: 'integration',
    title: 'Mastery Integration',
    subtitle: 'Applied Psychological Skills',
    description: 'Bring together all your learned skills in complex real-world scenarios. Practice detection, influence, and self-awareness in integrated situations.',
    icon: '🏆',
    color: 'from-amber-600 to-yellow-600',
    totalLessons: 6,
    difficulty: 'Advanced',
  },
};

type LessonData = {
  id: string;
  title: string;
  content: string;
  type: string;
  difficulty: number;
  estimatedMinutes: number;
  prerequisites: string[];
  secretUnlocks: string[];
};

export const lessons: Record<string, LessonData[]> = {
  transactional_analysis: [
    {
      id: 'ta-1-1',
      title: 'What is Transactional Analysis?',
      content: `# Transactional Analysis: The Foundation

## Introduction to TA

Transactional Analysis (TA) is a psychological theory developed by **Eric Berne** in the 1950s. It provides a framework for understanding human personality and communication patterns.

## The Three Ego States

Berne proposed that at any given moment, we operate from one of three ego states:

### 1. Parent Ego State
- **Critical Parent**: Judgmental, rule-enforcing, commanding
- **Nurturing Parent**: Caring, protective, supportive
- *Thought pattern*: "You should...", "Always...", "Never..."

### 2. Adult Ego State
- Rational, logical, here-and-now focused
- Processes information objectively
- *Thought pattern*: "The data shows...", "Let me analyze..."

### 3. Child Ego State
- **Free Child**: Spontaneous, creative, playful
- **Rebellious Child**: Defiant, resistant
- **Adapted Child**: Compliant or passively resistant
- *Thought pattern*: "I want...", "I feel..."

## Why This Matters

Every interaction involves a **transaction** - a unit of communication between ego states. Understanding these states helps you:

- Recognize when communications break down
- Identify psychological games
- Choose more effective responses
- Understand your own automatic patterns

## Key Insight

Most interpersonal problems occur when transactions are **crossed** - when one person addresses one ego state but the response comes from an unexpected state.

> **Practice**: For the next hour, try to identify which ego state you're operating from during different interactions. Are you in Adult mode, or are Parent or Child states running the show?

---

*Next: Learn about Complementary vs. Crossed Transactions*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 15,
      prerequisites: [],
      secretUnlocks: ['ta-secret-1'],
    },
    {
      id: 'ta-1-2',
      title: 'Complementary & Crossed Transactions',
      content: `# Transactions: The Dance of Communication

## Types of Transactions

### Complementary Transactions
Communication flows smoothly when the response comes from the expected ego state.

**Example - Adult to Adult:**
- A: "What time is the meeting?" (Adult)
- B: "2 PM in conference room B." (Adult)
✓ Complementary - communication continues

**Example - Parent to Child:**
- A: "You should finish your work." (Critical Parent)
- B: "Yes, I'll get it done." (Adapted Child)
✓ Complementary - expected response

### Crossed Transactions
Communication breaks down when the response comes from an unexpected ego state.

**Example:**
- A: "What time is the meeting?" (Adult → Adult expected)
- B: "Why do you always ask me everything?" (Critical Parent → Child)
✗ Crossed - Creates conflict

## The Hidden Danger

Crossed transactions often trigger **emotional reactions** because they bypass the logical Adult-to-Adult channel and hit emotional Child or Parent states.

## Practical Application

When you notice a crossed transaction:

1. **Pause** - Notice your emotional reaction
2. **Identify** - Which ego states are involved?
3. **Redirect** - Guide the conversation back to Adult-Adult
4. **Acknowledge** - Validate the emotion before logic

> **Exercise**: Think of a recent frustrating conversation. Can you map out the ego states involved? Was it a crossed transaction?

---

*Secret Discovery: Pay attention to conversations where you feel an unexpected emotional reaction - that's often a crossed transaction in action.*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 15,
      prerequisites: ['ta-1-1'],
      secretUnlocks: ['ta-secret-2'],
    },
    {
      id: 'ta-1-3',
      title: 'Strokes: The Currency of Recognition',
      content: `# Strokes: Understanding Human Recognition

## What Are Strokes?

Eric Berne defined **strokes** as units of recognition - the fundamental way humans acknowledge each other's existence. 

> "The flesh-and-blood stroke is the quintessence of the concept of recognition."

## Types of Strokes

### Positive vs. Negative
- **Positive strokes**: Praise, smiles, recognition, affection
- **Negative strokes**: Criticism, frowns, rejection, punishment

### Conditional vs. Unconditional
- **Conditional**: "You're good WHEN you..."
- **Unconditional**: "You exist, and that matters"

### Verbal vs. Non-Verbal
- Words of affirmation
- Physical touch, eye contact, body language

## The Stroke Economy

Berne proposed we operate in a "stroke economy" with rules:

1. **Don't give strokes** when you want to
2. **Don't ask for strokes** when you need them
3. **Don't accept strokes** when offered
4. **Don't reject strokes** when unwanted
5. **Don't give yourself strokes**

These rules create **stroke deprivation** - leading to negative behaviors just to get ANY recognition.

## Games for Strokes

Many psychological games are played to obtain strokes, even negative ones:
- "Yes, But..." - Seeking validation for problems
- "Kick Me" - Provoking criticism to feel recognized
- "Poor Me" - Getting attention through helplessness

> **Practice**: Track your stroke exchanges today. Are you giving and receiving positive strokes? Notice when you seek negative strokes instead.

---

*Next: Discover the concept of Psychological Games*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 20,
      prerequisites: ['ta-1-2'],
      secretUnlocks: ['ta-secret-3'],
    },
    {
      id: 'ta-1-4',
      title: 'Discovering Psychological Games',
      content: `# Psychological Games: The Hidden Patterns

## What is a Game?

In TA, a **game** is a recurring series of transactions with:
- **Hidden motivation** (ulterior motive)
- **Predictable payoff** (a familiar negative feeling)
- **Switch** moment where the game turns
- **Bad feeling** at the end (the payoff)

## The Game Formula

` + '`' + `Game = Folk Tales + Hidden Transactions + Payoff` + '`' + `

## Classic Games from Berne's Work

### 1. "Why Don't You, Yes But..." (YDYB)
- **Set-up**: Person presents a problem
- **Responses**: Others offer solutions
- **Rejection**: "Yes, but..." rejects each suggestion
- **Payoff**: Player maintains victim position, others exhausted

### 2. "Kick Me"
- **Set-up**: Person behaves in ways that invite criticism
- **Response**: Others criticize or reject
- **Payoff**: "See, everyone hates me" - confirms negative self-view

### 3. "Now I've Got You" (NIGY)
- **Set-up**: One person makes an error
- **Switch**: "Aha! I caught you!"
- **Payoff**: Dominance through catching mistakes

### 4. "Poor Me"
- **Set-up**: Continuous complaints about unfair treatment
- **Response**: Others try to help or get frustrated
- **Payoff**: Sympathy or venting through others' frustration

## Game Recognition Signals

- Repetitive patterns in your relationships
- Conversations that always end badly
- Feeling "hooked" into familiar negative dynamics
- Hidden agendas beneath surface communication

> **Exercise**: Think of a relationship pattern that repeats. Can you identify the game being played? What's the payoff for each person?

---

*Secret: Every game has a winner - but everyone loses. The real victory is stepping out of the game entirely.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['ta-1-3'],
      secretUnlocks: ['ta-secret-4'],
    },
    {
      id: 'ta-2-1',
      title: 'Game Analysis: Yes But...',
      content: `# Deep Dive: "Why Don't You, Yes But..."

## The Most Common Game

This is perhaps the most pervasive psychological game. Let's analyze it completely.

## Structure of YDYB

### Phase 1: The Hook
- Player A presents themselves as having a problem
- Problem seems genuine and solvable
- Others feel compelled to help

### Phase 2: The Setup
- A asks for advice: "What should I do?"
- Surface: Seeking solutions
- Ulterior: Testing whether anyone really understands

### Phase 3: The Rejection
- Each suggestion meets "Yes, but..."
- "Yes, but my situation is different..."
- "Yes, but that won't work because..."
- "Yes, but I already tried that..."

### Phase 4: The Payoff
- Helpers feel frustrated, inadequate, or angry
- Player A feels validated in their helplessness
- Everyone leaves with negative feelings
- **Hidden victory**: "See? Nobody can really help me"

## The Ulterior Transaction

Surface: Adult-to-Adult problem solving
Hidden: Child-to-Parent - "Prove you care by trying harder"

The real message is NOT about the problem - it's about:
- Testing others' commitment
- Confirming negative world view
- Avoiding actual responsibility

## How to Break the Game

### Don't Take the Bait
- Don't keep offering solutions
- Don't get frustrated

### Adult-to-Adult Response
- "It sounds like you've thought about this a lot"
- "What do YOU think might work?"
- "What would you like to happen?"

### Call Out the Pattern
- "I notice every suggestion gets rejected"
- "What would constitute a REAL solution?"

### Change the Transaction
- Move from advice-giving to exploration
- Ask about feelings, not solutions

> **Practice**: Next time you hear "Yes, but..." try responding differently. Notice what happens.

---

*Secret Discovery: The person playing YDYB often genuinely believes they want solutions. The game provides emotional payoff that solutions would destroy.*`,
      type: 'exercise',
      difficulty: 3,
      estimatedMinutes: 20,
      prerequisites: ['ta-1-4'],
      secretUnlocks: ['ta-secret-5'],
    },
    {
      id: 'ta-2-2',
      title: 'Game Analysis: Kick Me & Poor Me',
      content: `# Games of Victimization

## "Kick Me" - The Self-Sabotage Game

### Structure
1. **Hidden Setup**: Player behaves in ways guaranteed to attract criticism
2. **Provocation**: Clothing choices, careless mistakes, provocation
3. **The Kick**: Others criticize, reject, or attack
4. **Payoff**: "Everyone treats me badly - I knew it"

### Why Play This Game?
- Familiarity: Negative attention is better than no attention
- Confirmation: Proves negative self-beliefs
- Control: Better to choose when you're rejected than wait for it

### Recognition Cues
- Chronic self-sabotage
- "Can you believe what they said about me?"
- Choosing situations where rejection is likely

### Breaking the Game
- Recognize the pattern BEFORE the "kick"
- Choose differently in moments of provocation
- Seek positive strokes actively

---

## "Poor Me" - The Helplessness Game

### Structure
1. **The Complaint**: "Nobody understands my suffering"
2. **The Dismissal**: Others' attempts to help are insufficient
3. **The Escalation**: Problems grow, solutions fail
4. **The Payoff**: Sustained attention and sympathy

### Variants
- **Body Poor Me**: Health complaints as identity
- **Martyr Poor Me**: "I sacrifice everything for others"
- **Trauma Poor Me**: Past as permanent identity

### Recognition Cues
- Conversations always return to suffering
- Gratitude impossible - any help is "not enough"
- Others feel drained after interactions

### Breaking the Game
- Acknowledge pain without reinforcing helplessness
- Ask: "What would feeling better look like?"
- Set boundaries on complaint sessions

---

## The Common Thread

Both games share:
- **Identity investment in victimhood**
- **Resistance to actual solutions**
- **Need for external validation**
- **Fear of losing the "special" status of suffering**

> **Reflection**: Do you ever find yourself playing these games? What would you lose if you stopped?

---

*Challenge: Can you identify which game you're most likely to play? Awareness is the first step to choice.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['ta-2-1'],
      secretUnlocks: ['ta-secret-6'],
    },
    {
      id: 'ta-2-3',
      title: 'Script Analysis: Your Life Story',
      content: `# Life Scripts: The Unconscious Life Plan

## What is a Script?

A **life script** is an unconscious life plan made in childhood, reinforced by parents and significant others, and played out throughout life.

## Script Formation

### Early Decisions
Children make decisions about:
- "Who am I?" (I'm bad/good/special/irrelevant)
- "What happens to me?" (I succeed/fail/suffer/survive)
- "What do I do?" (I fight/flee/submit/achieve)

### Parental Programming
Parents communicate (verbally and non-verbally):
- Expectations and prohibitions
- What earns love/attention
- What behaviors are "not allowed"

### The Script Message
Children internalize messages like:
- "You'll never amount to anything"
- "You must take care of everyone"
- "Don't outshine your father"
- "Good boys don't cry"
- "You can be anything you want"

## Common Script Themes

### "Happy Ever After" Script
- Wait for rescue / special person
- Life will eventually be "perfect"
- Passive waiting for external savior

### "Until" Script
- "I'll be happy WHEN..." (marriage, promotion, weight loss)
- Life is always deferred
- Never actually arrives

### "After" Script
- "After I suffer enough..."
- "After I pay my dues..."
- Punishment before reward

### "Never" Script
- "I'll never..."
- Hopelessness as identity
- Self-fulfilling prophecy

### "Always" Script
- "Things will always be this way"
- Resignation to status quo
- Resistance to change

## Script Analysis Process

### Step 1: Identify Recurring Patterns
- What themes repeat in your life?
- What conclusions do you draw from events?

### Step 2: Trace to Origin
- When did you first decide this about yourself?
- What was happening in your life then?

### Step 3: Examine the Payoff
- What does this script provide?
- What would you lose if you changed?

### Step 4: Rewrite the Script
- What alternative interpretation is possible?
- What new decisions could you make?

> **Exercise**: Write your life story as if you were a character in a book. What's the theme? What's the "moral" you've been living?

---

*Secret: Scripts can be rewritten at any age. The past explains but does not determine.*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 30,
      prerequisites: ['ta-2-2'],
      secretUnlocks: ['ta-secret-7'],
    },
    {
      id: 'ta-3-1',
      title: 'Autonomy & Awakening',
      content: `# Achieving Autonomy: The Goal of TA

## What is Autonomy?

In TA, autonomy means:
- **Awareness**: Seeing reality as it is, not through script filters
- **Spontaneity**: Ability to choose responses, not automatic reactions
- **Intimacy**: Authentic connection without games

## The Script-Free Life

### From Passive to Active
- Scripts: "Things happen TO me"
- Autonomy: "I make things happen"

### From Certainty to Possibility
- Scripts: Fixed outcomes, fatalism
- Autonomy: Multiple possibilities, choice

### From Adapted to Authentic
- Scripts: Playing roles for others
- Autonomy: Being genuine, even when risky

## Barriers to Autonomy

### Redefinition
Explaining away reality to fit script:
- "That doesn't count because..."
- "They didn't really mean it"
- "It's different for me"

### Invasion
Replacing one adaptation with another:
- Becoming "independent" to avoid intimacy
- Becoming "nice" to avoid conflict

### Septism
Splitting things into opposites:
- Good/bad, right/wrong, win/lose
- Unable to hold complexity

## Pathways to Awareness

### Notice Your Transactions
- Which ego state am I in?
- What transaction am I initiating?
- What response am I expecting?

### Question Your Certainties
- "How do I know this is true?"
- "What evidence supports this belief?"
- "What if the opposite were true?"

### Experiment with New Responses
- Break your usual patterns
- Try responding from a different ego state
- Notice what happens

### Practice Presence
- Stay in the here-and-now
- Notice when you're predicting or remembering
- Return to direct experience

## The Ultimate Freedom

> "The moment you realize you're playing a game, you have a choice: continue or step out."

Autonomy is not the absence of problems - it's the presence of choice in how you respond to them.

> **Final Exercise**: Identify one pattern you'd like to change. What's the smallest experiment you could run this week to test a different response?

---

*Congratulations on completing the Transactional Analysis module. You now have tools to understand the hidden dynamics of human interaction.*`,
      type: 'theory',
      difficulty: 5,
      estimatedMinutes: 25,
      prerequisites: ['ta-2-3'],
      secretUnlocks: ['ta-secret-8', 'ta-final'],
    },
  ],

  erickson_hypnosis: [
    {
      id: 'eh-1-1',
      title: 'Understanding Ericksonian Hypnosis',
      content: `# Milton H. Erickson: The Father of Modern Hypnosis

## Who Was Milton Erickson?

**Milton H. Erickson** (1901-1980) revolutionized hypnotherapy. Unlike stage hypnosis or authoritarian approaches, Ericksonian hypnosis is:

- **Indirect**: Suggestions are woven into stories and metaphors
- **Permissive**: "You can..." rather than "You will..."
- **Utilization**: Works WITH the client's reality, not against it
- **Strategic**: Every intervention has a purpose
- **Individualized**: No two approaches are identical

## Core Principles

### 1. Everything Is Hypnotic
Erickson believed all communication has hypnotic potential. The question isn't "Is this hypnotic?" but "How is this hypnotic?"

### 2. The Unconscious Mind Is Resourceful
Unlike Freud's view of the unconscious as pathological, Erickson saw it as a vast reservoir of wisdom, creativity, and healing capacity.

### 3. Resistance Is Information
When someone "resists" hypnosis, they're communicating something important. Work with it, not against it.

### 4. Confusion Can Be Therapeutic
Controlled confusion can bypass conscious resistance and allow new learning to emerge.

### 5. The Person Holds the Keys
The therapist doesn't "fix" the client - they create conditions where the client's own unconscious resources can be accessed.

## What "The February Man" Teaches

The title comes from Erickson's famous case where he helped a man resolve father issues by "visiting" his father at different ages - including a February when the father was particularly meaningful.

Key lessons:
- **Time distortion** in trance allows "visiting" different life periods
- **Unconscious learning** can happen without conscious analysis
- **Metaphor and story** can carry therapeutic content deeper than direct suggestion

> **Reflection**: Have you ever been deeply affected by a story, poem, or experience that you couldn't fully explain? That's a touch of the unconscious learning Erickson harnessed.

---

*Next: Explore the structure of trance states*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 20,
      prerequisites: [],
      secretUnlocks: ['eh-secret-1'],
    },
    {
      id: 'eh-1-2',
      title: 'The Structure of Trance',
      content: `# Understanding Trance States

## What Is Trance?

Trance is a natural state of focused attention and reduced peripheral awareness. It exists on a continuum:

### Everyday Trance States
- **Absorption**: Lost in a book, movie, or daydream
- **Highway hypnosis**: Driving without conscious awareness of the journey
- **Flow states**: Deep engagement in an activity
- **Meditation**: Focused attention or open awareness

### Therapeutic Trance
- Deliberately induced for therapeutic purposes
- Utilizes natural capacities for focused attention
- Enables access to unconscious resources
- Allows new perspectives and learning

## The Induction Process

### Phase 1: Orientation
- Shift attention from external to internal
- Relax the critical faculty (not eliminate it)
- Establish rapport and safety

### Phase 2: Deepening
- Progressive relaxation
- Attention focusing (breath, body, imagery)
- Utilization of natural trance phenomena

### Phase 3: Therapeutic Work
- Suggestions, metaphors, or explorations
- Utilization of unconscious resources
- Integration of insights or changes

### Phase 4: Re-orientation
- Return to ordinary awareness
- Integration of experience
- Alert, oriented, and positive

## Trance Indicators

### Physical Signs
- Changes in breathing patterns
- Muscle relaxation or catalepsy
- Eye flutter or closed eyes
- Reduced body movement
- Changes in skin color or temperature

### Behavioral Signs
- Delayed responses to questions
- Literal interpretation of language
- Altered time perception
- Specific ideomotor responses

### Verbal Signs
- "Yes, and..." instead of "Yes, but..."
- Speaking from felt experience
- Metaphorical language increases
- Access to unusual memories or associations

## Myths About Trance

❌ **Myth**: You lose control in trance
✅ **Truth**: You can reject any suggestion that violates your values

❌ **Myth**: Trance is sleep
✅ **Truth**: Trance is focused awareness, often hyper-aware

❌ **Myth**: Some people can't be hypnotized
✅ **Truth**: Everyone experiences trance; hypnotizability varies in therapeutic context

❌ **Myth**: Hypnosis reveals "truth"
✅ **Truth**: Hypnosis accesses subjective experience, not objective truth

> **Exercise**: Recall a time you were completely absorbed in something. How did the rest of the world fade? That moment of absorption is related to therapeutic trance.

---

*Secret: The most important hypnotic instrument is not the therapist - it's the client's own mind.*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 25,
      prerequisites: ['eh-1-1'],
      secretUnlocks: ['eh-secret-2'],
    },
    {
      id: 'eh-1-3',
      title: 'Indirect Suggestion & Metaphor',
      content: `# The Art of Indirect Suggestion

## Why Indirect?

Direct suggestions ("You will feel relaxed") can trigger resistance. Indirect suggestions work differently:

- **Bypass conscious criticism**
- **Allow personal interpretation**
- **Create multiple meanings**
- **Enable unconscious processing**

## Types of Indirect Communication

### 1. Metaphor and Story
Stories bypass direct resistance because:
- "It's just a story" (conscious lowers guard)
- Personal meaning emerges unconsciously
- Multiple layers of meaning possible

**Example**: "I knew a gardener who discovered that some seeds need winter before they sprout..."

### 2. Ambiguity
Language with multiple possible meanings:
- **Phonological**: Words that sound similar ("which" / "witch")
- **Syntactic**: Grammatically ambiguous ("The old men and women")
- **Scope**: Unclear boundaries ("tall men and women")
- **Punctuation**: Innocuous words with double meanings

### 3. Presuppositions
Language that assumes something is already true:
- "As you become more aware..." (assumes you will)
- "Which hand will you move first?" (assumes you'll move one)
- "After you've made this change..." (assumes change will happen)

### 4. Truisms
Undeniable statements that lead to agreement:
- "You're sitting in that chair..."
- "You're breathing..."
- "And you can hear my voice..."
- Each agreement builds momentum

### 5. Double Binds
Illusion of choice between two positive options:
- "Would you like to go into trance now or in a few minutes?"
- "Should we begin with your left hand or right hand?"
- Both options lead to the desired outcome

### 6. Conversational Postulates
Questions that imply action:
- "Can you pass the salt?" (implies you'll pass it)
- "Do you mind if I continue?" (implies you won't mind)

## Crafting Effective Metaphors

### Elements of Therapeutic Metaphor
1. **Setup**: Establish a parallel situation
2. **Characters**: Someone the listener can identify with
3. **Problem**: A challenge similar to the listener's
4. **Process**: The journey toward resolution
5. **Resolution**: Change or discovery occurs
6. **Return**: Character comes back transformed

### The February Man Structure
Erickson would tell a story where:
- A person visits their father at different ages
- Each visit reveals something new
- The visitor discovers things about themselves
- Change happens through discovery, not instruction

> **Practice**: Think of a challenge you face. What animal, natural phenomenon, or story character embodies something about that challenge? That's the beginning of metaphor.

---

*Secret: The best metaphor is one you don't recognize as being about you - until it transforms you.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 30,
      prerequisites: ['eh-1-2'],
      secretUnlocks: ['eh-secret-3'],
    },
    {
      id: 'eh-2-1',
      title: 'Confusion Techniques',
      content: `# Confusion as a Therapeutic Tool

## The Purpose of Confusion

Erickson used confusion strategically:
1. **Overshadow conscious processing** - overload the critical faculty
2. **Create a learning state** - openness to new patterns
3. **Bypass resistance** - no clear target to resist
4. **Engage unconscious processing** - the unconscious seeks pattern

## Techniques for Creating Therapeutic Confusion

### 1. The False Start
Begin a sentence, change direction mid-stream:
- "And as you... well, not as you think, but as your unconscious begins..."
- Creates mild surprise, opens processing gap

### 2. Nested Loops
Stories within stories:
- "I was telling someone about a person who told me..."
- "And in that story, there was another story..."
- Conscious loses track, unconscious tracks everything

### 3. Ambiguous Language Patterns
Mixing levels of meaning:
- "And the right words, right now, might not be the words you expect, because sometimes the most important understanding isn't in the words but in what comes before the words, like that moment before you speak..."
- Multiple levels: timing, words, understanding, experience

### 4. Non-Sequiturs
Statements that don't logically follow:
- Creates pattern-break
- Forces unconscious to find connections
- Opens space for new associations

### 5. Pacing and Leading with Confusion
- Pace: "You're sitting there, hearing my voice..."
- Add confusion: "...and noticing how the words you expected weren't the words you heard, but somehow you understood anyway..."
- Lead: "...and that understanding can grow..."

### 6. The Double Bind with a Twist
- "You might find yourself becoming more curious, or perhaps more relaxed, or maybe you'll notice something else entirely that's useful for you..."
- Multiple possible responses all beneficial

## A Confusion Induction Example

` + '`' + `You don't need to understand this consciously, because understanding happens in its own time, and sometimes before we understand, we notice something else, like how the words make sense even before we know why, and that's because some things are already known, just not yet in consciousness, but they're here, available, and becoming more available as you notice... or don't notice... how understanding comes in its own way.` + '`' + `

## Caution: Strategic Use Only

Confusion should be:
- **Brief**: Extended confusion becomes frustrating
- **Strategic**: Used for specific purpose
- **Integrated**: Followed by clarity and direction
- **Respectful**: Not used to manipulate or control

> **Exercise**: Try speaking in a way that has multiple levels. Notice how people respond when you're not completely predictable.

---

*Secret: The goal isn't to confuse - it's to create a moment where the usual way of thinking pauses, and something new can emerge.*`,
      type: 'exercise',
      difficulty: 4,
      estimatedMinutes: 25,
      prerequisites: ['eh-1-3'],
      secretUnlocks: ['eh-secret-4'],
    },
    {
      id: 'eh-2-2',
      title: 'Utilization: Working With Reality',
      content: `# Utilization: The Ericksonian Art of Acceptance

## What Is Utilization?

**Utilization** means working WITH whatever the client brings - including resistance, symptoms, beliefs, and limitations - rather than fighting against them.

> "Utilize everything. Even the resistance."

## Classic Examples

### The Insomniac
- Client: "I can't relax, my mind won't stop"
- Non-utilization approach: Try to teach relaxation
- Erickson's utilization: "Your mind is so active, you can use that activity. Just keep track of every thought, and notice how long you can stay awake..."

### The Restless Client
- Client constantly fidgets during session
- Non-utilization: "Please sit still"
- Utilization: "I notice you have a lot of energy today. That's good - you can use some of that energy to..."

### The "Skeptic"
- Client: "I don't believe in hypnosis"
- Non-utilization: Try to convince them
- Utilization: "That's perfect - you don't need to believe. Just notice what happens or doesn't happen, and either way you'll learn something useful..."

## The Utilization Mindset

### Everything Is Material
- Skepticism → "Good, you're thinking critically"
- Resistance → "You're protecting something important"
- Symptoms → "Your body/mind is trying to solve something"
- Distraction → "Your mind is looking for something"

### Work With, Not Against
Instead of "How do I eliminate this?" ask:
- "What is this trying to accomplish?"
- "How can this serve the therapeutic goal?"
- "What resource is hidden in this problem?"

### Finding the Positive Intention
Every behavior, even problematic behavior, has a positive intention:
- Procrastination → Avoiding failure, managing overwhelm
- Anxiety → Preparing for danger, caring about outcome
- Anger → Defending boundaries, asserting values

## Practical Utilization Steps

### Step 1: Accept What Is
- Don't argue with reality
- Don't try to immediately change
- Notice and acknowledge

### Step 2: Find the Function
- What purpose does this serve?
- What's the benefit (even if hidden)?

### Step 3: Redirect the Energy
- Use the same energy for beneficial purposes
- "You have a gift for detecting problems - let's use that to detect opportunities"

### Step 4: Integrate the Change
- New patterns become natural extensions of existing patterns
- Change that uses existing resources is more sustainable

> **Exercise**: Think of something about yourself you'd like to change. What positive function might it serve? How could you achieve that function in a different way?

---

*Secret: The fastest path to change is often through acceptance, not resistance.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['eh-2-1'],
      secretUnlocks: ['eh-secret-5'],
    },
    {
      id: 'eh-2-3',
      title: 'Fractionation & Deepening',
      content: `# Deepening Trance: Fractionation Techniques

## What Is Fractionation?

**Fractionation** is the process of bringing someone out of trance and back in multiple times. Each cycle typically produces deeper trance.

### Why It Works
- Each return to trance is faster and deeper
- The mind learns the pathway
- Contrast between trance and ordinary awareness sharpens
- Deepens the learning state

## Fractionation Methods

### 1. The Simple Countdown
- "In a moment I'll count from 1 to 3, and you'll open your eyes..."
- Count up, have them open eyes, briefly orient
- "And now as I count from 1 to 5, you'll return to that comfortable state, twice as deep..."

### 2. The Task Fractionation
- Give a simple task in trance (lift a finger, recall a memory)
- Brief reorientation
- Return to trance with new depth

### 3. The Natural Fractionation
Use natural breaks:
- "And you can take a moment to notice... (pause)... what you notice... (pause)... and in a moment you'll discover something else..."
- The pauses have mini-fractionation effects

### 4. The Deepener Story
Stories that inherently deepen:
- Descending stairs, elevator, tunnel
- Walking through a garden into deeper quiet
- Diving into water, sinking into comfort

## Deepeners: After Induction

### Physical Deepeners
- Progressive relaxation: "Let each muscle soften..."
- Body awareness: "Notice the weight of your body..."
- Sensation focus: "Pay attention to that comfortable sensation..."

### Mental Deepeners
- Counting: "With each number, twice as deep..."
- Imagery: "Walking down a path into quiet..."
- Confusion-deepening: "And you don't need to understand, just experience..."

### Utilization Deepeners
Using whatever's happening:
- "That breathing you're doing... each breath taking you deeper..."
- "The thoughts you're having... each one letting you settle more..."
- "Even that slight discomfort... as it changes, you go deeper..."

## Signs of Deepening

### Observable Changes
- Breathing slows and deepens
- Muscle tone decreases
- Eyes may flutter or close
- Swallowing may occur
- Color changes in face/hands

### Response Changes
- Responses become slower or more automatic
- Literal interpretation increases
- Non-verbal responses more prominent
- Time distortion appears

## When NOT to Deepen Further

- Client shows signs of distress
- Goal has been achieved
- Further deepening isn't necessary
- It's time to process or emerge

> **Practice**: Try self-fractionation. Induce a light trance, emerge, and note how much faster you re-induce. This is your mind learning the pathway.

---

*Secret: Depth isn't always the goal. The right depth for the purpose is what matters. Sometimes light trance is more useful than deep trance.*`,
      type: 'exercise',
      difficulty: 3,
      estimatedMinutes: 20,
      prerequisites: ['eh-2-2'],
      secretUnlocks: ['eh-secret-6'],
    },
    {
      id: 'eh-3-1',
      title: 'Therapeutic Storytelling',
      content: `# The February Man: Therapeutic Stories

## The Power of Story in Therapy

Stories affect us differently than direct instruction:
- They engage imagination, not just logic
- They allow safe exploration of difficult material
- They can carry multiple meanings
- They're remembered and retold
- They work on unconscious levels

## Structure of Therapeutic Stories

### The February Man Framework

Erickson's famous "February Man" intervention helped a man resolve complex father issues. The structure:

1. **Setup**: Establish the client's need and readiness
2. **Permission**: Give permission to experience something
3. **The Journey**: Guide through imagined encounters
4. **Multiple Perspectives**: Visit the same person at different times
5. **Discovery**: The client discovers what they need
6. **Return**: Integration of the experience

### Key Elements

#### Indirect Problem Presentation
- Don't directly address the problem
- Tell a story that parallels the situation
- The unconscious makes the connection

#### Symbolic Characters
- Characters represent aspects of the client
- The father figure might represent authority, love, disappointment
- The visitor represents the part seeking resolution

#### Time Flexibility
- In trance, time becomes fluid
- Past, present, future can be visited
- Different "ages" of a person can be encountered

#### Unconscious Discovery
- The therapist doesn't explain
- The client discovers what they need
- Insights emerge from within, not from outside

## Creating Your Own Therapeutic Stories

### Step 1: Understand the Client's Situation
- What's the core challenge?
- What resources are needed?
- What metaphor fits?

### Step 2: Find Parallel Situations
- Nature metaphors (seasons, growth, weather)
- Historical or fictional stories
- Personal anecdotes
- Composite stories

### Step 3: Embed Key Messages
- Use presuppositions: "When you discovered..."
- Use truisms: "Everyone needs time to..."
- Use ambiguety: Let the unconscious fill in

### Step 4: Allow for Personal Meaning
- Don't over-explain
- Let the story breathe
- Trust the unconscious to extract what's needed

### Step 5: Return Gently
- Bring the story to a natural close
- Allow time for integration
- Don't demand immediate interpretation

## Examples of Therapeutic Metaphors

### The Winter Seed
"A seed that falls in autumn doesn't understand why it must wait through winter. It only knows darkness and cold. But the winter isn't punishment - it's preparation. And when spring comes, the seed that experienced winter has something the seed that stayed warm doesn't..."

### The Two Roads
"A traveler came to a fork in the road. Both paths looked similar. One traveler chose quickly, the other took time. The quick chooser arrived sooner but wondered about the other path. The careful chooser arrived later but knew why they chose. And both travelers learned something the other couldn't teach them..."

### The River and the Rock
"A river encounters a rock. The rock seems to block the way. But the river doesn't fight the rock - it flows around, over, through. Over time, the rock changes, and the river changes. Neither could have changed without the other..."

> **Exercise**: Think of a challenge you're facing. If it were a story, what would the main character need to learn? What would help them learn it?

---

*Secret: The story that heals is often not about the problem - it's about the resources needed to address the problem.*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 30,
      prerequisites: ['eh-2-3'],
      secretUnlocks: ['eh-secret-7'],
    },
    {
      id: 'eh-3-2',
      title: 'Post-Hypnotic Suggestions',
      content: `# Post-Hypnotic Suggestions: Beyond the Session

## What Are Post-Hypnotic Suggestions?

Post-hypnotic suggestions are instructions given during trance that are intended to take effect AFTER the trance has ended.

## How They Work

### Trigger-Action Patterns
- **Trigger**: A specific situation, word, or sensation
- **Action**: A response or change that occurs automatically

### Examples
- "When you feel that familiar tension in your shoulders, you'll automatically remember to breathe deeply"
- "The moment you sit in your car, you'll feel a wave of calm confidence"
- "Whenever you hear that phrase, you'll find yourself smiling"

### Key Principles

#### Timing
- Suggestions for the future are given when the future feels real
- Trance allows the future to be experienced in advance
- This pre-experience creates neural pathways

#### Positive Framing
- "You will feel calm" works better than "You won't feel anxious"
- The unconscious processes the main concept, not the negation
- Focus on what you want, not what you're avoiding

#### Congruence
- Suggestions should align with the person's values and desires
- Imposed suggestions may be rejected
- Collaborative suggestions are more effective

#### Layering
- Multiple related suggestions reinforce each other
- "As you breathe, you relax, and as you relax, you remember your confidence, and as you remember, you become more confident..."

## Crafting Effective Suggestions

### The Suggestion Formula

` + '`' + `Trigger + Process + Positive Outcome + Future Pacing` + '`' + `

**Example**:
- Trigger: "Each time you take a deep breath..."
- Process: "...and feel your shoulders dropping..."
- Outcome: "...you'll remember this calm, confident state..."
- Future pacing: "...and you'll find yourself carrying this into your meeting tomorrow..."

### Making Suggestions Stick

1. **Repeat** important suggestions (inside and across sessions)
2. **Associate** with existing habits or triggers
3. **Make it easy** - simple, natural responses
4. **Give choices** - "You might notice... or you might discover..."
5. **Future pace** - "And tomorrow when... you'll find..."

## Ethical Considerations

Post-hypnotic suggestions are powerful. Use them ethically:

✅ **Appropriate uses**:
- Therapeutic goals the person wants to achieve
- Replacing unwanted patterns with wanted ones
- Enhancing existing positive capacities

❌ **Inappropriate uses**:
- Making someone do something against their values
- Creating dependency on the hypnotist
- Manipulating behavior for selfish purposes

## Self-Post-Hypnotic Suggestions

You can give yourself post-hypnotic suggestions:
1. Enter a relaxed, focused state
2. Clearly state what you want to happen
3. Create a specific trigger
4. Visualize the trigger and response
5. Repeat with feeling and conviction

> **Practice**: Create a post-hypnotic suggestion for yourself. Choose a trigger you encounter regularly and pair it with a positive response you want to cultivate.

---

*Secret: The most powerful post-hypnotic suggestions are those that connect with your own values and desires - suggestions you would give yourself.*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 25,
      prerequisites: ['eh-3-1'],
      secretUnlocks: ['eh-secret-8'],
    },
    {
      id: 'eh-3-3',
      title: 'Self-Hypnosis & Self-Programming',
      content: `# Self-Hypnosis: Becoming Your Own Guide

## Why Self-Hypnosis?

Erickson believed everyone should learn self-hypnosis. It allows you to:
- Access your own unconscious resources
- Program positive patterns
- Manage your own state
- Continue therapeutic work between sessions

## Self-Hypnosis Methods

### Method 1: The Relaxation Induction
1. Find a quiet place, comfortable position
2. Focus on breathing, let body relax
3. Progress through body parts, releasing tension
4. Count down into deeper relaxation
5. Give yourself suggestions
6. Count up to return, refreshed

### Method 2: The Eye Fixation Method
1. Focus on a point slightly above eye level
2. Keep eyes fixed, notice strain building
3. Allow eyes to close as they tire
4. The eye fatigue carries into mental relaxation
5. Continue into trance

### Method 3: The 기억법 (Memory) Method
1. Recall a time you felt deeply relaxed, confident, or peaceful
2. Step into that memory fully
3. Notice what you see, hear, feel
4. Amplify those sensations
5. Associate a trigger with that state

### Method 4: The Breathing Method
1. Focus entirely on the breath
2. Count breaths or observe natural rhythm
3. Let thoughts come and go
4. As concentration deepens, trance emerges naturally

## Structuring Self-Suggestions

### Be Clear and Positive
✅ "I am becoming more confident in social situations"
❌ "I won't be so anxious anymore"

### Use Present Tense
✅ "I handle challenges with calm competence"
❌ "I will handle challenges better"

### Be Specific
✅ "When I feel tension, I take a deep breath and relax my shoulders"
❌ "I stay relaxed all the time"

### Include the How
✅ "I access my natural calm by remembering past successes"
❌ "I am calm"

### Future Pace
✅ "Tomorrow in that meeting, I'll feel prepared and confident"
❌ "I'll do better next time"

## Daily Self-Hypnosis Practice

### Morning Programming
- Brief self-hypnosis to set the tone for the day
- Choose 1-3 focal points
- Program responses to anticipated challenges

### Mid-Day Reset
- 2-3 minute breathing and centering
- Reset to your chosen state
- Release accumulated stress

### Evening Integration
- Review the day without judgment
- Program restful sleep
- Prepare unconscious for next day's challenges

## Building Your Practice

### Start Small
- 5 minutes daily is more effective than 30 minutes weekly
- Consistency builds the pathway
- Depth increases naturally over time

### Keep a Journal
- Record your experiences
- Note what works
- Track patterns and progress

### Be Patient
- Changes happen gradually
- Small shifts compound over time
- Trust the process

> **Challenge**: Commit to 7 days of 5-minute self-hypnosis. Choose one suggestion and repeat it daily. Notice what changes, even if subtle.

---

*Secret: The unconscious mind is always listening. What are you programming it with?*`,
      type: 'exercise',
      difficulty: 3,
      estimatedMinutes: 20,
      prerequisites: ['eh-3-2'],
      secretUnlocks: ['eh-secret-9', 'eh-final'],
    },
  ],

  body_language: [
    {
      id: 'bl-1-1',
      title: 'Foundations of Nonverbal Communication',
      content: `# The Science of Reading People

## Why Body Language Matters

Research suggests that a significant portion of human communication is nonverbal. While the famous "7-38-55" statistic (from Albert Mehrabian) is often misapplied, the core truth remains: **how** something is said often matters as much as **what** is said.

## The Three Channels

### 1. Verbal
- The actual words chosen
- Tone, pitch, pace, volume
- Pauses and hesitations

### 2. Paralinguistic
- How words are spoken
- Emotional content in voice
- Incongruence between words and tone

### 3. Nonverbal (Body Language)
- Facial expressions
- Gestures and movements
- Posture and positioning
- Eye behavior
- Physical distances

## Basic Principles

### 1. Context Is Everything
A crossed arm might mean:
- Cold (literally)
- Comfort (relaxed pose)
- Defensiveness (in specific context)
- Habit (just how someone sits)

Never interpret a single signal in isolation.

### 2. Look for Clusters
Single signals can mislead. Look for **clusters** of signals pointing in the same direction:
- Crossed arms + turned away + minimal eye contact = likely discomfort
- Crossed arms + leaning forward + engaged expression = likely interest (cold room?)

### 3. Establish Baselines
Everyone has unique baseline behaviors. What's normal for one person may signal something for another.
- How do they sit when relaxed?
- How much do they gesture normally?
- What's their typical eye contact pattern?

### 4. Look for Changes
Changes from baseline often signal something important:
- Sudden stillness may indicate focus or stress
- Increased movement may indicate discomfort or excitement
- Changes in eye contact pattern may signal deception or intimacy

### 5. Comfort vs. Discomfort
Much of body language signals either comfort (approach, relax, engage) or discomfort (avoid, tense, withdraw).

## The Face: Our Most Expressive Tool

### Evolutionary Significance
The face is highly evolved for communication:
- Universal emotional expressions (Ekman's research)
- Microexpressions lasting fractions of a second
- Hundreds of facial muscles working in coordination

### What to Observe
- **Eye region**: Crow's feet (genuine vs. fake smiles), eye contact patterns
- **Mouth region**: Lip compression, asymmetry, timing of smiles
- **Forehead and brow**: Worry lines, surprise, anger signals
- **Overall symmetry**: Genuine emotions tend toward symmetry

> **Exercise**: Watch a conversation (in person or video) with the sound off. What can you determine from body language alone? Then watch with sound - how does your interpretation change?

---

*Next: Master the art of observation*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 20,
      prerequisites: [],
      secretUnlocks: ['bl-secret-1'],
    },
    {
      id: 'bl-1-2',
      title: 'The Art of Observation',
      content: `# Becoming a Skilled Observer

## The Observer's Mindset

Observation is a skill that can be developed. The key shifts:

### From Passive to Active
- Passive: "I notice things when they're obvious"
- Active: "I systematically gather information"

### From Judgment to Curiosity
- Judgment: "That's weird/shifty/defensive"
- Curiosity: "That's interesting - what might that mean?"

### From Single Signal to Pattern
- Single: "They crossed their arms"
- Pattern: "They've crossed their arms, turned slightly away, and their feet point toward the exit"

## The OBSERVE Framework

### O - Objective Stance
Approach observation without assumptions. Gather data before drawing conclusions.

### B - Baseline First
Understand the normal before interpreting the unusual.
- How do they hold their body generally?
- What's their speech pattern?
- How do they react to neutral topics?

### S - Systematic Scanning
Have a method for observing:
- Face → Body → Hands → Feet → Environment
- Or: Head-to-toe sweep every few moments

### E - Establish Context
- What's the setting?
- What's the relationship?
- What was just said or done?
- What's at stake?

### R - Note Changes
What changed?
- Sudden vs. gradual?
- In response to what?
- How long did it last?

### V - Verify (When Possible)
- Do other signals confirm?
- Does the context support the interpretation?
- What other explanations exist?

### E - Evaluate Carefully
- What's the most likely interpretation?
- What are alternative explanations?
- How confident am I, and why?

## Common Observation Errors

### The Othello Error
Mistaking fear for guilt. An innocent person may show stress signals simply from being accused or feeling pressure.

### Confirmation Bias
Seeing what you expect to see. If you think someone is deceptive, you'll interpret ambiguous signals as confirmation.

### Mirror Bias
Assuming others feel what you would feel in the same situation. People have different emotional responses.

### Cultural Bias
Body language varies across cultures. Eye contact, personal space, gestures all have different meanings in different contexts.

## Practical Exercises

### Exercise 1: The People Watch
Spend 10 minutes in a public place. Observe without judgment:
- Note different postures and what might indicate
- Watch interactions - who's comfortable, who's not?
- Try predicting before checking (when possible)

### Exercise 2: The Baseline Game
Pick someone you interact with regularly. Note their baseline:
- How do they sit when relaxed?
- What are their typical gestures?
- How's their eye contact pattern?
- Then notice deviations

### Exercise 3: Silent Observation
Watch 5 minutes of a video with sound off:
- What emotions do you detect?
- Who seems dominant? Submissive? Comfortable?
- What relationships do you infer?
- Then watch with sound - how accurate were you?

> **Practice**: Today, observe three interactions. Don't analyze deeply - just notice. Build the observation muscle before adding interpretation.

---

*Secret: The best observers are not the most analytical - they're the most present and curious.*`,
      type: 'exercise',
      difficulty: 2,
      estimatedMinutes: 20,
      prerequisites: ['bl-1-1'],
      secretUnlocks: ['bl-secret-2'],
    },
    {
      id: 'bl-1-3',
      title: 'Facial Expressions & Microexpressions',
      content: `# Reading the Face: universal Expressions and Fleeting Truths

## Paul Ekman's Research: Universal Emotions

Paul Ekman's research (partially funded by the CIA and FBI) identified **seven universal emotions** that appear similarly across cultures:

### 1. Happiness/Joy
- **Genuine (Duchenne) smile**: Crow's feet around eyes, cheeks raised, eye muscles engage
- **Fake smile**: Mouth smiles, eyes don't - no crow's feet
- **Timing**: Genuine smiles build gradually, fade naturally

### 2. Sadness
- Inner eyebrows raised and pulled together
- Corners of lips may pull down slightly
- Gaze may drop or become vacant
- Often asymmetrical (genuine sadness often shows more on one side)

### 3. Anger
- Eyebrows lowered and drawn together
- Eyes glare, may bulge slightly
- Lips: pressed together, squared, or opened in shout
- Flaring nostrils possible
- Tension in jaw and neck

### 4. Fear
- Eyebrows raised and drawn together (different from surprise)
- Upper eyelids raised, lower eyelids tense
- Mouth: lips stretched horizontally
- May include freezing response

### 5. Surprise
- Eyebrows raised high and curved
- Skin below brow stretched
- Eyes wide open, upper lid raised
- Jaw drops open (different from fear's stretched mouth)
- Usually brief - prolonged "surprise" may be performed

### 6. Disgust
- Nose wrinkled
- Upper lip raised
- May include squinting eyes
- Can be physical (bad smell/taste) or moral (behavior repulsion)

### 7. Contempt
- **Only asymmetric universal expression**
- One corner of mouth tightened and raised
- Looks like a half-smile, half-sneer
- Signals moral superiority or disrespect

## Microexpressions

### What They Are
- Brief, involuntary facial expressions
- Last 1/25 to 1/5 of a second
- Reveal concealed or suppressed emotions
- Universal across cultures

### When They Appear
- When someone is actively concealing emotion
- During high-stakes situations
- When the emotional impulse is strong but suppressed
- At moments of transition between emotions

### Common Contexts
- **Deception contexts**: Microexpressions of fear, anger, or contempt may leak
- **Interview situations**: Stress emotions may flash
- **Intimate conversations**: Genuine reactions may briefly appear
- **Negotiations**: Reactions to offers may leak

## Reading Approach

### Don't Overinterpret
- A single microexpression doesn't mean deception
- Consider context, baseline, and clusters
- The absence of microexpressions doesn't prove honesty

### Look for Congruence
- Do facial expressions match words?
- Do they match tone of voice?
- Do they match body language?
- Incongruence is more meaningful than any single signal

### Consider Timing
- Appropriate timing supports genuineness
- Delayed expressions may indicate fabrication
- Abrupt cutoff may indicate suppression
- Held too long may be performed

> **Exercise**: Practice with Friends TV show or similar (available online). Try to identify emotions from faces alone. Ekman's training tools (METT) can also help develop this skill.

---

*Secret: The face reveals much, but it also lies. The truth is in the pattern, not the moment.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['bl-1-2'],
      secretUnlocks: ['bl-secret-3'],
    },
    {
      id: 'bl-2-1',
      title: 'Body Positioning & Proxemics',
      content: `# Reading the Body: Posture, Position, and Space

## Posture Signals

### Open vs. Closed Posture
**Open posture** (generally signals comfort, receptivity):
- Arms uncrossed, visible
- Torso facing toward others
- Hands visible and relaxed
- Chest open

**Closed posture** (generally signals discomfort, defensiveness, or self-protection):
- Arms crossed (but consider: cold, habit, comfort pose)
- Torso turned away
- Hands hidden or closed
- Shoulders hunched

### Confidence Signals
- **Expanded posture**: Taking up space, chest out
- **Grounding**: Feet planted, weight evenly distributed
- **Stillness**: Not fidgeting (when appropriate)
- **Slow movements**: Decisive, controlled motion

### Insecurity Signals
- **Contracted posture**: Making oneself smaller
- **Protective gestures**: Touching neck, face, vital areas
- **Fidgeting**: Restless hands, feet, body
- **Quick, jerky movements**: Nervous energy

### Dominance and Status
- **Higher status**: More physical space, less movement, more eye contact, others oriented toward them
- **Lower status**: Less space, more deference signals, more movement when uncertain
- **Status games**: How people establish and respond to status through body language

## Proxemics: The Use of Space

Edward T. Hall's research on personal space zones:

### Intimate Distance (0-18 inches)
- For intimate relationships
- Invasion causes strong reactions
- Used in comforting, romantic contexts

### Personal Distance (1.5-4 feet)
- For friends and family
- Normal conversation distance
- Varies by culture

### Social Distance (4-12 feet)
- For formal, business interactions
- Allows observation without threat
- Multiple people can fit

### Public Distance (12+ feet)
- For public speaking
- Little personal interaction
- Performative communication

### Space Violations and Responses
When space is invaded:
- **Back away** (if possible)
- **Place barrier** (bag, cup, arm)
- **Reduce eye contact**
- **Tense muscles**
- **Turn away**

Understanding these responses helps you recognize when others feel their space is threatened.

## Seating and Positioning

### Power Positions
- Head of table / head of room
- With back to wall (security advantage)
- Elevated position
- Open sight lines

### Cooperative Positions
- Side-by-side (collaborative)
- Corner-to-corner (balanced)
- Circular arrangements (egalitarian)

### Competitive Positions
- Directly opposite (adversarial)
- Blocking someone's exit or view
- Standing while other sits (status play)

## Reading Groups

### Who's the Leader?
- Who do others look at when something happens?
- Who speaks first or most?
- Who's physical position commands attention?
- Who do others orient toward?

### Alliance Detection
- Who sits/stands near whom?
- Who mirrors whom?
- Who laughs at whose jokes?
- Who defends or supports whom?

> **Exercise**: In your next meeting or gathering, map the dynamics. Who holds status? Who's allied with whom? Who seems uncomfortable? See if your observations match reality.

---

*Next: The secret language of hands and gestures*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 20,
      prerequisites: ['bl-1-3'],
      secretUnlocks: ['bl-secret-4'],
    },
    {
      id: 'bl-2-2',
      title: 'Hands, Gestures & Eye Behavior',
      content: `# The Expressive Extremities

## Hands: What They Reveal

### Hand Visibility
- **Visible, open hands**: Generally signals honesty, openness, trust
- **Hidden hands**: Can signal concealment, discomfort, formality
- **Hands in pockets**: Casual, but can also signal discomfort or concealment
- **Hands behind back**: Authority signal, or hiding something

### Common Hand Gestures and Meanings

#### Illustrators (accompany speech, emphasize)
- Natural, fluid hand movements that match speech
- More illustrators often signal engagement and comfort
- Reduction in illustrators can signal discomfort or deception

#### Adaptors (self-touching, soothing)
- Touching face, neck, hair, arms
- Often signals discomfort, anxiety, or self-soothing
- Context matters: some people adapt habitually
- Notable: increased adaptors during stress or deception

#### emblems (culturally specific signals)
- Thumbs up, OK sign, peace sign
- Culturally learned, culturally specific
- Different meanings in different cultures

#### Barrier Gestures
- Crossing arms (classic but overinterpreted)
- Holding object in front of body (cup, bag, laptop)
- Touching neck or throat (self-protection)
- Turning objects to create barriers

### Specific Hand Signals

**Touching the neck/suprasternal notch**:
- Self-soothing behavior
- Often indicates discomfort, stress, or vulnerability
- Women: may touch necklace area
- Men: may grab/touch Adam's apple area

**Hand-to-face gestures**:
- Covering mouth: may indicate withholding, deception
- Rubbing eyes: discomfort, disbelief, tiredness
- Touching nose: various meanings (allergies, stress, "lying" myth - be careful)
- Hand on chin: evaluation, judgment, thinking

**Steepling** (fingertips together, palms apart):
- Confidence, authority signal
- Often used when certain about something
- Can be genuine confidence or performed confidence

**Palm displays**:
- Open palms up: supplication, honesty, "see, nothing hidden"
- Open palms down: authority, calm assurance
- Both hands presenting: emphasis, truthfulness attempt

## Eye Behavior

### Eye Contact Patterns
- **Too little**: Discomfort, deception (sometimes), submission, cultural norm
- **Too much**: Aggression, intimacy attempt, intimidation, cultural norm
- **Appropriate**: Varies by context, culture, relationship

### Eye Direction and Accessing Cues (NLP-related, use cautiously)
Some research suggests eye movements may correlate with cognitive processing:
- Up and left: Possibly visual memory (recalling what was seen)
- Up and right: Possibly visual construction (imagining)
- Left/right at eye level: Auditory processing
- Down: Internal dialogue, feeling

**IMPORTANT**: These patterns are NOT reliable lie detection. They vary by individual and context. Use as curiosity, not conclusion.

### Pupil Dilation
- **Dilated pupils**: Interest, arousal, attraction, low light, certain drugs
- **Constricted pupils**: Disgust, bright light, certain drugs
- Subtle signal, hard to observe, many confounding factors

### Blink Rate
- **Increased blinking**: Stress, cognitive load, fatigue
- **Decreased blinking**: Intense focus, sometimes predatory focus
- Baseline varies significantly

### Eye Blocking Behaviors
- Covering eyes: "I don't want to see this"
- Eye rub: "I don't want to see / I'm tired of this"
- Long blink: Momentary withdrawal

## The Feet and Legs: The Honest Extremities

### Why Feet Are Honest
- Farther from the brain's control
- Less consciously managed
- People pay less attention to feet
- Often reveal true intentions

### What Feet Reveal

**Foot direction**:
- Feet pointing toward someone: interest, engagement
- Feet pointing away (especially toward exit): desire to leave, disengagement
- One foot pointed away: partial disengagement

**Foot movement**:
- Jiggling, tapping: anxiety, impatience, excess energy
- Stillness: focus, or freeze response
- Sudden stop: Something captured attention

**Leg position**:
- Crossed legs toward someone: engagement
- Crossed legs away: discomfort, barrier
- Spread legs (standing): confidence, dominance, readiness
- Legs together: formality, submission, or physical comfort

**Knee clip** (one knee clipped by hands):
- Self-restraint, discomfort
- "Holding oneself back"

> **Exercise**: In your next conversation, notice the feet. Where are they pointing? How do they move? Compare what feet "say" with what the person is verbally expressing.

---

*Secret: The face may lie, but the feet often don't. They're the furthest thing from the lying brain.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 30,
      prerequisites: ['bl-2-1'],
      secretUnlocks: ['bl-secret-5'],
    },
    {
      id: 'bl-2-3',
      title: 'Detecting Deception: Myths & Methods',
      content: `# Deception Detection: What Works and What Doesn't

## The Harsh Reality

Research shows that most people - including professionals like police officers, judges, and psychologists - perform only slightly better than chance at detecting deception (typically 54-60% accuracy).

## Common Myths

### Myth 1: Liars Avoid Eye Contact
**Reality**: Some liars avoid eye contact, but many overcompensate with too much eye contact. Staring can be as suspicious as avoiding.

### Myth 2: Liars Fidget More
**Reality**: Some liars fidget more, but others freeze. High-stakes liars may be more still due to increased cognitive control.

### Myth 3: Specific Signs = Lying
**Reality**: No single behavior or set of behaviors reliably indicates deception. Signs of stress ≠ signs of lying.

### Myth 4: Polygraphs Detect Lies
**Reality**: Polygraphs detect arousal, not lies. Innocent people can fail; practiced liars can pass.

### Myth 5: You Can Spot a Liar If You Know the Signs
**Reality**: Even trained professionals struggle. Context, individual differences, and countermeasures all complicate detection.

## What Actually Helps

### 1. Baseline Comparison
Know how someone behaves when truthful and relaxed. Look for deviations that can't be explained by context.

### 2. Cognitive Load Induction
Lying is cognitively demanding. Increase cognitive load and observe:
- Ask unexpected questions
- Request reverse-order recall
- Ask for detailed descriptions
- Introduce time pressure

Deception may become harder under increased cognitive demand.

### 3. Strategic Questioning
- Ask open-ended questions
- Let them talk (more opportunity for inconsistency)
- Ask for the story in different orders
- Introduce new information and observe reactions

### 4. Inconsistency Detection
- Internal inconsistency (contradictions within their story)
- External inconsistency (contradictions with known facts)
- Inconsistency with baseline behavior

### 5. Emotional Congruence
Does the emotional expression match the content?
- Timing appropriate?
- Duration appropriate?
- Intensity appropriate?
- Facial expression matches words?

## Specific Indicators That MAY Signal Deception (Use Carefully)

### Verbal Indicators
- **Distancing language**: Less use of "I," more formal language
- **Overly detailed**: Too much unnecessary detail
- **Lack of detail**: Vague, no sensory information
- **Speech errors**: More hesitations, corrections (but also occurs when nervous)

### Nonverbal Indicators
- **Asymmetry**: Fake expressions often less symmetric
- **Timing issues**: Emotional expressions mistimed relative to speech
- **Duration issues**: Expressions held too long or cut off abruptly
- **Stiffness**: Reduced natural movement (but also could be deliberate control)

### Cognitive Load Signs
- Longer response times to questions
- Reduced illustrators (hand gestures)
- Increased pause fillers
- Simplified language under pressure

## The Othello Error Revisited

The biggest challenge: **deception cues and stress cues overlap significantly**. Innocent people may show "deception indicators" simply from:
- Fear of being disbelieved
- Nervousness in high-stakes situations
- Cultural differences
- Personality differences
- Neurodivergence

## A Better Approach: Creating Conditions for Truth

Rather than trying to catch liars, create conditions where truth is more likely:
- Build rapport and trust
- Reduce fear of consequences for honesty
- Ask questions that make truth easier than lies
- Listen more than you speak

> **Reflection**: When have you been wrongly suspected? How did it feel? Use that empathy to avoid Othello errors with others.

---

*Secret: The best deception detection isn't catching lies - it's creating relationships where people don't need to lie.*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 30,
      prerequisites: ['bl-2-2'],
      secretUnlocks: ['bl-secret-6', 'bl-final'],
    },
  ],

  personality_theories: [
    {
      id: 'pt-1-1',
      title: 'The Big Five Personality Model',
      content: `# The Five-Factor Model: Science's Leading Personality Theory

## Why the Big Five?

Unlike MBTI (which lacks strong scientific support), the Big Five (aka OCEAN or CANOE) is the most empirically validated personality model in psychology.

## The Five Dimensions

Each dimension is a spectrum. Most people fall somewhere in the middle.

### O - Openness to Experience
**High**: Imaginative, curious, creative, open to new ideas, appreciative of art
**Low**: Practical, conventional, prefers familiarity, down-to-earth

**Relevance to social interaction**:
- High openness: May enjoy abstract conversation, new experiences, intellectual exploration
- Low openness: May prefer concrete topics, established routines, practical discussions

### C - Conscientiousness
**High**: Organized, disciplined, reliable, goal-directed, detail-oriented
**Low**: Spontaneous, flexible, less structured, sometimes disorganized

**Relevance**:
- High C: Values punctuality, follow-through, clear agreements
- Low C: More adaptable, may frustrate high-C people with flexibility

### E - Extraversion
**High**: Energetic from social interaction, talkative, assertive, seeks stimulation
**Low (Introversion)**: Energized by solitude, reserved, reflective, avoids excess stimulation

**Relevance**:
- Extraverts may process by talking; introverts may process internally
- Misunderstandings: extraverts see introverts as aloof; introverts see extraverts as overwhelming

### A - Agreeableness
**High**: Compassionate, cooperative, trusting, helpful, conflict-avoidant
**Low**: Competitive, skeptical, challenging, less concerned with harmony

**Relevance**:
- High A: May have difficulty with necessary conflict, may be taken advantage of
- Low A: May be effective in negotiations but struggle with relationships

### N - Neuroticism (Emotional Stability)
**High**: More sensitive to stress, prone to negative emotions, vigilant to threats
**Low**: Emotionally stable, calm under pressure, less reactive

**Relevance**:
- High N: May need more reassurance, more affected by criticism
- Low N: May seem unflappable, may underestimate emotional situations

## Applications

### Understanding Others
- Recognize different needs and styles
- Adapt communication approach
- Avoid judging differences as defects

### Understanding Yourself
- Know your own tendencies
- Identify potential blind spots
- Leverage strengths, manage weaknesses

### Prediction (Limited but Real)
- Extraverts more likely to seek social jobs
- Conscientious people more likely to follow through
- High N people more vulnerable to stress

## Important Limitations

- Personality is not destiny
- People can and do change
- Situation matters enormously
- The Big Five describes tendencies, not fixed traits
- Cultural factors influence expression

> **Exercise**: Where do you fall on each dimension? Where do important people in your life fall? How do these differences create friction or synergy?

---

*Next: Attachment theory and how early bonds shape adult relationships*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 25,
      prerequisites: [],
      secretUnlocks: ['pt-secret-1'],
    },
    {
      id: 'pt-1-2',
      title: 'Attachment Theory',
      content: `# Attachment: The Foundation of Relationships

## Origins: Bowlby and Ainsworth

Attachment theory, developed by John Bowlby and Mary Ainsworth, explains how early bonds with caregivers shape our expectations and behaviors in relationships throughout life.

## The Four Attachment Styles

### 1. Secure Attachment
**Development**: Caregivers were consistently responsive and available
**Adult pattern**:
- Comfortable with intimacy and independence
- Trusting of others (with good reason)
- Can depend on others and be depended upon
- Handles conflict constructively
- Doesn't play games

### 2. Anxious-Preoccupied Attachment
**Development**: Caregivers were inconsistently available
**Adult pattern**:
- Craves intimacy but fears abandonment
- Hypervigilant to relationship threats
- May be "clingy" or demanding
- Overanalyzes partner's behavior
- May use "Protest behaviors" (withdrawal, acting out) to get response

**Relevant games**: May play "Kick Me" (self-sabotage that confirms fear) or "Poor Me" (seeking reassurance)

### 3. Dismissive-Avoidant Attachment
**Development**: Caregivers were emotionally unavailable or rejecting
**Adult pattern**:
- Equates intimacy with loss of independence
- Distances when things get close
- Suppresses emotional needs
- May seem cold, detached, self-sufficient
- Actually: fears engulfment

**Relevant games**: May play emotional distancing games, resistance to vulnerability

### 4. Fearful-Avoidant (Disorganized) Attachment
**Development**: Caregivers were both source of comfort and fear (often abusive or highly unpredictable)
**Adult pattern**:
- Wants closeness but fears it
- Confusing push-pull behavior
- Difficulty regulating emotions in relationships
- May have trauma history

## Attachment in Adult Relationships

### The Security-Editing Function
Secure attachment provides:
- "Security base" for exploring the world
- "Safe haven" to return to when stressed
- Internal working model: "I am worthy, others are generally trustworthy"

### Activation and Deactivation
- **Anxious**: Attachment system easily activated, hard to soothe
- **Avoidant**: Attachment system deactivated, needs suppressed
- **Secure**: Attachment system activates appropriately, soothes effectively

### Triggers Vary by Style
- **Anxious trigger**: Perceived distance, delay in response, ambiguity
- **Avoidant trigger**: Perceived demands, expectations, vulnerability requests

### The Anxious-Avoidant Trap
Common dysfunctional pairing:
1. Anxious person pursues (triggered by distance)
2. Avoidant person distances (triggered by pursuit)
3. Anxious person pursues harder
4. Avoidant person distances more
5. Cycle intensifies

Breaking the cycle requires:
- Anxious: Self-soothing, not escalating pursuit
- Avoidant: Staying present, not completely withdrawing
- Both: Recognizing the pattern, communicating needs directly

## Earning Security

The good news: Attachment styles can change. Pathways to security:

- **Secure relationships**: Being with secure partners/friends provides corrective experience
- **Therapy**: Working through attachment wounds
- **Self-awareness**: Recognizing your patterns
- **Practice**: Learning new responses gradually

> **Exercise**: What's your attachment style? How does it show up in your relationships? What would "earned security" look like for you?

---

*Secret: Understanding attachment helps explain why reasonable people sometimes behave unreasonably in relationships.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['pt-1-1'],
      secretUnlocks: ['pt-secret-2'],
    },
    {
      id: 'pt-2-1',
      title: 'Narcissism & Dark Traits',
      content: `# Understanding Dark Personality Traits

## The Dark Triad

Psychology recognizes three overlapping "dark" personality traits:

### 1. Narcissism
**Core features**:
- Grandiosity (overt or covert)
- Need for admiration
- Lack of empathy
- Sense of entitlement
- Exploitative of others

**Overt narcissism**: Obvious grandiosity, dominance, attention-seeking
**Covert narcissism**: Victim stance, hidden grandiosity, sensitivity to slights

**Games they may play**:
- "I'm Superior" / status games
- "Look at Me" / admiration seeking
- "You Owe Me" / entitlement enforcement
- Playing the victim to control others

### 2. Machiavellianism
**Core features**:
- Strategic manipulation
- Cynicism about human nature
- Utility-focused relationships
- Emotional detachment
- Long-term strategic thinking

**Games they may play**:
- Long-con manipulation
- Creating dependencies
- Information control
- Divide and conquer

### 3. Psychopathy (Subclinical)
**Core features**:
- Low empathy and remorse
- Impulsivity
- Thrill-seeking
- Superficial charm
- Low anxiety (fearless)

**Important**: Clinical psychopathy is rare. "Subclinical" traits exist on a spectrum in the general population.

## Recognizing Manipulation Patterns

### Love Bombing
- Excessive affection, attention, gifts early in relationship
- Creates rapid attachment and obligation
- Often followed by devaluation

### Gaslighting
- Making someone doubt their perception/memory/reality
- Denying things that happened
- Claiming the other is "remembering wrong" or "too sensitive"
- Gradual erosion of confidence in own judgment

### Triangulation
- Bringing a third person into a dynamic
- Creating jealousy, competition, insecurity
- "Even [other person] agrees with me"

### Projection
- Accusing others of their own behavior
- "You're so angry" (when they're the angry one)
- Deflection through accusation

### Moving the Goalposts
- Never satisfied, requirements keep changing
- Ensures you keep trying to earn approval
- Impossible to "win"

### Future Faking
- Making promises about the future without intention to fulfill
- Creates hopeful attachment
- Reality never matches promises

## Protection Strategies

### 1. Slow Down
Dark traits often reveal themselves over time, not initially.

### 2. Watch Behavior, Not Words
Consistent pattern matters more than charming promises.

### 3. Trust Your Discomfort
If something feels off, pay attention even if you can't articulate why.

### 4. Maintain Other Connections
Don't let one person become your entire social world.

### 5. Set and Enforce Boundaries
How someone responds to your boundary tells you a lot.

### 6. Don't Try to "Win" Against Manipulators
The goal isn't to out-manipulate - it's to protect yourself and disengage.

> **Reflection**: Have you ever been in a relationship where you gradually lost confidence in your own perceptions? That's a red flag worth examining.

---

*Warning: Understanding manipulation should make you harder to manipulate, not interested in manipulating others.*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 30,
      prerequisites: ['pt-1-2'],
      secretUnlocks: ['pt-secret-3'],
    },
  ],

  hypnotic_influence: [
    {
      id: 'hi-1-1',
      title: 'The Mechanics of Suggestion',
      content: `# How Suggestion Works

## What Is Suggestion?

A **suggestion** is a communication that influences perception, feeling, thought, or behavior. It works implicitly or explicitly, consciously or unconsciously.

## The Spectrum of Influence

### Neutral Communication
- "The meeting is at 3 PM"
- Pure information, no implied action

### Persuasion
- "You should attend the meeting because..."
- Explicit argument for a position

### Suggestion
- "You might find the meeting valuable"
- Implicit, less direct, allows personal choice

### Hypnotic Suggestion
- "As you sit there, you can begin to notice a sense of interest growing"
- Works with unconscious processes, often indirect

## Conditions That Enhance Suggestibility

### 1. Rapport and Trust
We're more suggestible to people we trust and feel connected to.

### 2. Expectation
If you expect something to happen, it's more likely to happen. This is the placebo effect in a broader sense.

### 3. Focused Attention
When attention is narrowed and focused, peripheral information (including counter-arguments) is reduced.

### 4. Reduced Critical Faculty
Not eliminated - just less active. This occurs in trance but also in everyday absorption.

### 5. Emotional Arousal
Heightened emotion (positive or negative) can increase suggestibility by engaging the emotional brain more than the analytical brain.

### 6. Compliance Patterns
- **Foot in the door**: Small yes leads to larger yes
- **Door in the face**: Large request refused, then smaller request seems reasonable
- **Reciprocity**: We feel obligated to give when we've received

## The Structure of Effective Suggestions

### 1. Positive Framing
- "Feel more confident" works better than "Stop being anxious"
- The unconscious processes the main concept

### 2. Present Tense
- "You are becoming more relaxed" more effective than "You will become..."

### 3. Specific and Concrete
- Vague: "You'll feel better"
- Specific: "Your shoulders relax and your breathing deepens"

### 4. Owned by the Recipient
- Suggestions that align with the person's desires work better
- Imposed suggestions meet resistance

### 5. Safe and Congruent
- Suggestions shouldn't violate values or create internal conflict

## Ethical Considerations

Suggestion is a neutral tool. It can be used:
- **Ethically**: Helping someone achieve their goals, therapeutic contexts, consent-based influence
- **Unethically**: Manipulation, coercion, exploitation, non-consensual influence

Key questions:
- Is this person capable of informed choice?
- Would they consent if they understood?
- Am I serving their interests or mine?
- What would they think if they knew?

> **Exercise**: Notice suggestions in your daily life. Advertising, social media, conversations. What's being suggested? How? How do you respond?

---

*Next: Building the foundation of influence - rapport*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 20,
      prerequisites: [],
      secretUnlocks: ['hi-secret-1'],
    },
    {
      id: 'hi-1-2',
      title: 'Rapport Building Mastery',
      content: `# The Foundation of Influence: Rapport

## What Is Rapport?

Rapport is a state of mutual trust, understanding, and harmony. It's the prerequisite for effective communication, influence, and therapy.

## Why Rapport Matters

- People are more open with those they feel connected to
- Suggestion and influence work better in rapport
- Conflict decreases and cooperation increases
- Information sharing improves
- Persuasion becomes possible rather than resisted

## Building Rapport: Core Techniques

### 1. Matching and Mirroring (Pacing)

**Physical matching**:
- Posture: Adopt similar posture (not mimicking)
- Gesture: Similar but not identical gestures
- Energy level: Match their energy, then lead

**Vocal matching**:
- Tone: Similar quality of voice
- Pace: Similar speed of speech
- Volume: Similar intensity
- Pitch: Somewhat similar (not identical)

**Language matching**:
- Key words: Use their important words
- Metaphors: Use their metaphorical language
- Representational systems: Visual, auditory, kinesthetic preferences

**Important**: Matching should be subtle and natural, not obvious mimicry. The goal is connection, not imitation.

### 2. Genuine Interest
- Ask questions you actually want to know the answer to
- Listen to understand, not to respond
- Remember details and reference them later
- Show that they matter to you

### 3. Validation
- Acknowledge their experience as valid (even if you disagree)
- "I can see why you'd feel that way"
- "That makes sense given what you've been through"
- Validation ≠ agreement

### 4. Appropriate Self-Disclosure
- Sharing appropriately builds connection
- Too little: You seem distant
- Too much: You seem oversharing or making it about you
- Right amount: Relevant, reciprocal, builds bond

### 5. Finding Common Ground
- Shared experiences
- Shared values (discovered, not assumed)
- Shared goals or challenges
- Shared humor

### 6. Non-Verbal Warmth
- Genuine smile (Duchenne smile with eye engagement)
- Open body language
- Appropriate eye contact
- Nodding and responsive gestures

## Rapport Killers

- Judging or criticizing
- Interrupting
- Checking phone/devices
- Looking around for someone more important
- Dismissing their feelings
- One-upping
- Giving unsolicited advice
- Not remembering what they told you

## Breaking Rapport (Sometimes Necessary)

Sometimes you need to break rapport:
- Setting boundaries
- Ending interactions
- Confronting problematic behavior

Do it cleanly:
- Be direct but kind
- Don't manipulate or play games
- Own your position

## The Calibration Loop

1. **Make an approach** (match, ask, share)
2. **Observe response** (do they lean in or pull back?)
3. **Adjust** (continue what works, change what doesn't)
4. **Continue** (build on what's working)

Rapport is dynamic, not static. It requires ongoing calibration.

> **Exercise**: In your next conversation, focus entirely on the other person. Ask questions, listen deeply, match their energy. Notice how the interaction differs from your usual pattern.

---

*Secret: The most powerful rapport builder is genuine curiosity about the other person's inner world.*`,
      type: 'exercise',
      difficulty: 2,
      estimatedMinutes: 20,
      prerequisites: ['hi-1-1'],
      secretUnlocks: ['hi-secret-2'],
    },
    {
      id: 'hi-2-1',
      title: 'Language Patterns of Influence',
      content: `# The Structure of Influential Language

## Language as a Tool

Language doesn't just describe reality - it shapes it. The words we use (and hear) influence how we think, feel, and act.

## NLP-Inspired Language Patterns

### 1. Presuppositions in Language

Words that assume something is already true or will be true:

**Existence presuppositions**:
- "When you make this change..." (assumes change will happen)
- "After you've learned this..." (assumes learning)

**Awareness presuppositions**:
- "As you become more aware..."
- "Notice how..."

**Choice presuppositions**:
- "Would you prefer to start now or in a few minutes?"
- "Which part will you apply first?"

**Time presuppositions**:
- "Before you decide..." (assumes they will decide)
- "While you're doing X..." (assumes they will do X)

### 2. Embedded Commands

Placing commands within larger sentences, often marked by subtle shift in tonality:

- "I'm not saying you should **feel more confident** right now"
- "You might discover that you can **relax deeply** whenever you choose"
- "Some people find that they **learn this quickly**"

The command is embedded in a larger statement that provides cover.

### 3. Double Binds

Illusion of choice between two positive outcomes:
- "Would you like to feel calmer now or in a few minutes?"
- "Should we work on A first or B first?"
- Both choices lead in the same direction

### 4. Truisms

Undeniable statements that create agreement momentum:
- "We're all sitting here breathing"
- "You can hear my voice"
- "This meeting is taking place right now"
- Each agreement makes the next "yes" more likely

### 5. Linking

Connecting ideas with causal or temporal language:
- "And as you sit there, you can begin to feel more relaxed"
- "Because you're interested in this, you'll find yourself remembering it"
- Linking something true to something you want to suggest

### 6. Ambiguity

Vague or ambiguous language that allows personal interpretation:
- "You can experience that change in a way that's right for you"
- "Something useful might happen"
- Leaves room for the unconscious to find the most useful meaning

### 7. Tag Questions

Softening statements with tags:
- "This makes sense, doesn't it?"
- "You can do this, can't you?"
- Reduces resistance by inviting (minor) agreement

### 8. Modal Operators

Words that indicate necessity or possibility:
- **Necessity**: "You must," "You have to," "You need to"
- **Possibility**: "You can," "You might," "You could"
- Different effects on different people

## Ethical Use

These patterns are tools. Consider:

✅ **Appropriate**:
- Helping someone access their own resources
- Therapeutic contexts
- Consent-based influence
- Aligning with the person's genuine interests

❌ **Inappropriate**:
- Manipulating someone against their interests
- Covertly influencing without consent
- Using for personal gain at others' expense

## Defense Against Manipulative Language

- **Slow down**: Don't respond immediately
- **Identify**: Notice when language patterns are being used
- **Clarify**: Ask direct questions
- **Check alignment**: Are this person's interests aligned with yours?
- **Trust discomfort**: If something feels manipulative, it probably is

> **Exercise**: Listen for presuppositions in everyday conversation, advertising, and media. What's being assumed? How does that assumption influence your response?

---

*Secret: The most powerful language patterns are the ones you use on yourself.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['hi-1-2'],
      secretUnlocks: ['hi-secret-3'],
    },
    {
      id: 'hi-2-2',
      title: 'Subliminal & Embedded Communication',
      content: `# Communication Below Conscious Awareness

## What Does "Subliminal" Mean?

"Subliminal" literally means "below threshold." In influence contexts, it refers to messages that are processed without conscious awareness or deliberate attention.

## Types of Subtle Communication

### 1. Non-Verbal Messages
- Microexpressions and subtle facial signals
- Body language that contradicts or reinforces words
- Proximity and positioning
- Touch (when appropriate and consensual)
- Eye contact patterns

### 2. Paralinguistic Messages
- Tone, pitch, pace shifts that carry meaning
- Pauses that emphasize or create anticipation
- Breathing that signals state
- Sighs, laughter, other vocalizations

### 3. Embedded Linguistic Messages
- As discussed in the previous lesson: embedded commands, presuppositions, etc.
- Messages "hidden" in plain sight within normal conversation

### 4. Contextual Messages
- Environment setup (comfortable room → relaxed state)
- Social context (everyone else is doing X → social pressure)
- Timing (asking when someone is tired vs. energized)

### 5. Priming

**Priming** is exposing someone to a stimulus that influences response to a later stimulus:

**Examples**:
- Seeing words related to "elderly" may cause slower walking (Bargh's research - though some replication issues exist)
- Positive mood induction may make people more agreeable
- Professional context primes professional behavior

**Mechanisms**:
- Activates related concepts in memory
- Sets expectations
- Influences attention and interpretation

### 6. Sensory Anchoring

**Anchoring** is associating a stimulus with a state:

**Example**:
- Someone laughs every time you touch your left ear
- Eventually, touching your left ear may elicit laughter or associated state
- Can be used intentionally (with consent) or develops naturally

**Applications**:
- Creating triggers for positive states
- Linking calming stimuli to stressful contexts
- Building conditioned responses

## The Reality of "Subliminal" Influence

### What's Possible
- Subtle messages that influence mood, attitude, and approach
- Environmental priming that affects behavior
- Non-verbal communication that's processed automatically
- Conditioning that creates subtle associations

### What's Not Proven
- "Subliminal" audio tapes with hidden messages causing major behavior change
- Brief flashed images causing complex behavior changes
- Powerful, long-lasting influence from minimal exposure
- Mind control through subliminal techniques

### The "Secret Message" Myth
Popular culture exaggerates subliminal influence. Real influence is more mundane:
- Repeated exposure
- Emotional connection
- Social pressure
- Consistency principles
- Genuine communication

## Developing Awareness

### For Your Own Protection
- Notice when you're being primed or anchored
- Pay attention to non-verbal messages
- Question the context and setup
- Trust your reactions even when you can't articulate why

### For Ethical Use
- Create positive environments
- Use priming and anchoring consensually and beneficially
- Build positive associations with beneficial behaviors
- Remember: subtlety doesn't equal ethics

> **Exercise**: Notice your environment today. What messages is it sending you? How does the setting influence your state and behavior?

---

*Secret: The most powerful subliminal message is the one you repeatedly tell yourself.*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 25,
      prerequisites: ['hi-2-1'],
      secretUnlocks: ['hi-secret-4'],
    },
  ],

  memory_mastery: [
    {
      id: 'mm-1-1',
      title: 'How Memory Actually Works',
      content: `# The Science of Memory

## Three Stages of Memory

### 1. Encoding
Getting information into memory:
- **Attention**: You can't remember what you never properly attended to
- **Elaboration**: Connecting new information to existing knowledge
- **Emotion**: Emotional events are better remembered
- **Rehearsal**: Repetition helps, but type matters

### 2. Consolidation
Stabilizing memory after initial encoding:
- **Time**: Memories strengthen over time after learning
- **Sleep**: Critical for memory consolidation
- **Reactivation**: Recalling strengthens the memory trace
- **Interference**: New similar information can disrupt consolidation

### 3. Retrieval
Getting information back out:
- **Cues**: Memory is cue-dependent; right cue aids recall
- **Context**: Matching learning context aids recall
- **State**: Matching internal state can aid recall
- **Interference**: Other memories can block retrieval

## Types of Memory

### Sensory Memory
- Fleeting (milliseconds to seconds)
- Iconic (visual) and echoic (auditory)
- Gateway to attention

### Short-Term / Working Memory
- Limited capacity (about 4-7 items, Miller's classic research)
- Limited duration (about 20-30 seconds without rehearsal)
- Where conscious processing happens

### Long-Term Memory
- **Explicit (declarative)**: Conscious recall
  - **Episodic**: Personal experiences, events
  - **Semantic**: Facts, knowledge
- **Implicit (non-declarative)**: Unconscious
  - **Procedural**: Skills, habits
  - **Priming**: Prior exposure influences response
  - **Conditioning**: Learned associations

## What Improves Memory?

### 1. Attention
You can't remember what you never properly encoded. In our distraction-rich environment, this is a major challenge.

### 2. Elaborative Encoding
- Connect new information to what you already know
- Ask: "How does this relate to...?"
- Create meaningful associations
- The more connections, the more retrieval paths

### 3. Spaced Repetition
- Review information at increasing intervals
- Far more effective than massed practice (cramming)
- Based on the forgetting curve (Ebbinghaus)

### 4. Active Recall
- Testing yourself is more effective than re-reading
- Retrieval practice strengthens memory
- Struggling to recall (then getting the answer) strengthens learning

### 5. Interleaving
- Mix different types of material or problems
- More effective than blocking (doing one type at a time)
- Helps with discrimination and flexible application

### 6. Dual Coding
- Combine verbal and visual information
- Creates multiple memory traces
- Words + images > words alone

### 7. Sleep
- Critical for consolidation
- Both sleep quantity and quality matter
- Sleep deprivation significantly impairs memory

### 8. Emotional Significance
- Emotionally meaningful information is better remembered
- Can be leveraged but also creates bias (we remember emotional events better, sometimes inaccurately)

## Common Memory Myths

❌ **Myth**: We only use 10% of our brain
✅ **Truth**: We use all of it; different parts for different functions

❌ **Myth**: Memory works like a video recorder
✅ **Truth**: Memory is reconstructive; each recall can modify the memory

❌ **Myth**: Some people have "photographic memory"
✅ **Truth**: Truly photographic memory is essentially nonexistent; exceptional memory is usually trained

❌ **Myth**: Cramming works as well as spaced study
✅ **Truth**: Spaced repetition is dramatically more effective for long-term retention

> **Exercise**: Think of something you learned recently. How many connections can you make between it and things you already know? More connections = stronger memory.

---

*Next: Build your first memory palace*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 25,
      prerequisites: [],
      secretUnlocks: ['mm-secret-1'],
    },
    {
      id: 'mm-1-2',
      title: 'The Memory Palace Technique',
      content: `# Method of Loci: Building Your Memory Palace

## What Is a Memory Palace?

The **Method of Loci** (memory palace) is an ancient technique that uses spatial memory to organize and recall information. Also called the "memory journey" or "mind palace."

## Why It Works

Human spatial memory is exceptionally good. We evolved to remember:
- Where food sources are
- Where dangers lurk
- How to navigate territory
- Locations of important resources

The memory palace leverages this evolved capacity for remembering locations to remember non-spatial information.

## Building Your First Memory Palace

### Step 1: Choose Your Palace
Use a place you know well:
- Your home (most common)
- Your workplace
- A familiar route (walking to work, driving)
- A fictional place you've visualized extensively

### Step 2: Define a Path
Establish a specific route through the palace:
- Start at a clear entry point
- Follow a consistent path
- Have clear landmarks along the way
- End at a clear endpoint

### Step 3: Identify Specific Locations (Loci)
Along your path, identify specific spots:
- Front door
- Entryway table
- Hallway mirror
- Living room sofa
- Kitchen sink
- etc.

Aim for 10-20 loci for your first palace. More advanced users have many palaces with hundreds of loci.

### Step 4: Create Memorable Images

For each item you want to remember, create a vivid, unusual image:

**Principles of memorable images**:
- **Vivid**: Rich in sensory detail (sight, sound, smell, touch)
- **Unusual**: The bizarre is more memorable than the mundane
- **Emotional**: Emotional content sticks better
- **Action**: Dynamic images are better than static
- **Exaggerated**: Bigger, smaller, more extreme than reality
- **Personal**: Your own associations are stronger than generic ones

### Step 5: Place Images in Locations

Place each image at a specific locus:
- **Interact** the image with the location
- Make the image **do something** at that location
- The more vivid the interaction, the stronger the memory

### Step 6: Walk Through and Recall

To recall:
- Mentally walk through your palace
- At each locus, observe what's there
- The image should trigger recall of the information

## Example: Remembering a Grocery List

Items: milk, eggs, bread, apples, chicken, soap

**Your palace**: Your home, entering from the front.

1. **Front door**: A waterfall of **milk** cascading down the door, soaking everything
2. **Entryway**: Giant **eggs** (size of pumpkins) cracking open on the console table, yolk everywhere
3. **Hallway**: A giant loaf of **bread** surfing down the hallway on a skateboard
4. **Living room**: **Apples** juggling themselves in the air, bouncing off the furniture
5. **Kitchen**: A **chicken** wearing a chef's hat, cooking itself on the stove
6. **Bathroom**: Bubbles of **soap** filling the entire bathroom, you're wading through them

The more vivid, bizarre, and interactive the images, the more memorable.

## Advanced Techniques

### Multiple Palaces
- Build multiple palaces for different purposes
- Have a "currently using" palace and "storage" palaces
- Refresh and reuse palaces over time

### Peg Systems
- Pre-memorize a set of images for numbers (1-100 or more)
- Use rhyming (1=bun, 2=shoe) or other associations
- Combine with memory palace for ordered recall

### Story Method
- Link items in a narrative sequence
- The story provides the structure
- Can be combined with memory palace

### Major System
- Convert numbers to consonant sounds
- Build words from those sounds
- Create images from the words
- Allows memorizing long strings of numbers

> **Practice**: Build your first memory palace today. Start with your home and 10 loci. Create a list of 10 items to remember. Practice until you can walk through and recall all items.

---

*Secret: The memory palace isn't a metaphor - it's a genuine technique used by memory champions worldwide. Your brain is already equipped for this.*`,
      type: 'exercise',
      difficulty: 2,
      estimatedMinutes: 30,
      prerequisites: ['mm-1-1'],
      secretUnlocks: ['mm-secret-2'],
    },
    {
      id: 'mm-2-1',
      title: 'Spaced Repetition & Learning Systems',
      content: `# Optimizing Long-Term Retention

## The Forgetting Curve

Hermann Ebbinghaus's research demonstrated that memory decays exponentially after learning:

- Without review, most information is forgotten within days
- The steepest drop occurs in the first hour and first day
- After a week, only a small fraction remains without reinforcement

## Spaced Repetition: The Solution

Spaced repetition fights the forgetting curve by reviewing information at strategic intervals:

### The Basic Principle
Review information just as you're about to forget it. This:
- Strengthens the memory trace
- Resets the forgetting curve (with slower decay)
- Each review extends the interval

### Optimal Spacing

Research suggests intervals like:
- First review: 1 day after learning
- Second review: 3 days later
- Third review: 1 week later
- Fourth review: 2 weeks later
- Fifth review: 1 month later
- Then: 2-3 month intervals for long-term retention

Adjust based on:
- How well you remember (easier = longer interval)
- How important the information is
- How quickly you need to access it

## Building a Spaced Repetition System

### Option 1: Flashcards with Spaced Repetition Software

**Anki** is the most popular option:
- Create cards with questions and answers
- Rate how well you recalled each card
- The software schedules reviews automatically
- Highly customizable
- Available on multiple platforms

### Option 2: Physical Flashcards

Leitner system:
- Box 1: Daily review
- Box 2: Every 3 days
- Box 3: Weekly
- Box 4: Biweekly
- Box 5: Monthly
- Move cards forward when answered correctly, back when wrong

### Option 3: Calendar-Based

Schedule review sessions:
- Put review dates on your calendar
- Manual but flexible
- Good for larger content units

## What to Put in Your System

### Good Candidates
- Vocabulary and definitions
- Key concepts and their explanations
- Important facts and dates
- Formulas and procedures
- Quotes and key passages
- Foreign language items

### Less Good Candidates
- Information you'll naturally encounter repeatedly
- Highly interconnected knowledge (context helps)
- Skills better learned through practice

## Effective Card Design

### Principles
- **One piece of information per card**: Don't overload
- **Clear, specific questions**: Ambiguous questions = ambiguous answers
- **Use your own words**: Processing into your own language aids learning
- **Include context when needed**: Some information needs context to be meaningful

### Card Types
- **Basic**: Question on front, answer on back
- **Cloze deletion**: Fill-in-the-blank style
- **Image occlusion**: Hide parts of an image
- **Concept relationship**: How do X and Y relate?

### Common Mistakes
- Cards too complex (multiple ideas in one)
- Questions too vague
- Recognizing answer without truly knowing it
- Not actually recalling, just recognizing
- Giving up too quickly (struggling is part of learning)

## Beyond Flashcards

### Practice Testing
- Self-testing without flashcards
- Practice problems
- Teach-back method (explain to someone else)
- Write from memory, then check

### Interleaving Practice
- Mix related but distinct topics
- Forces discrimination between similar concepts
- Better for application than blocked practice

### Elaborative Interrogation
- Ask "why" and "how" questions about the material
- Generate explanations
- Connect to prior knowledge

### Self-Explanation
- Explain your reasoning as you solve problems
- Identify gaps in understanding
- Make thinking explicit

## The Compound Effect of Learning

Small, consistent learning sessions compound over time:
- 15 minutes daily = 91 hours per year
- That's substantial knowledge accumulation
- Spaced repetition makes this time efficient

> **Challenge**: Install Anki or set up a spaced repetition system. Create your first 10 cards on something you want to learn. Commit to daily reviews.

---

*Secret: Consistency beats intensity. Small daily efforts with spaced repetition transform knowledge over months and years.*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 25,
      prerequisites: ['mm-1-2'],
      secretUnlocks: ['mm-secret-3'],
    },
    {
      id: 'mm-2-2',
      title: 'Accelerated Learning Methods',
      content: `# Learning How to Learn

## The Meta-Learning Perspective

How you learn matters as much as what you learn. Effective learning strategies can dramatically accelerate skill and knowledge acquisition.

## Foundational Principles

### 1. Active Over Passive
- Passive: Reading, watching, listening
- Active: Recalling, explaining, applying, creating
- Active learning is almost always more effective

### 2. Desired Difficulty
- Learning should feel somewhat difficult
- Too easy = not much learning
- Too hard = frustrated, not learning
- The sweet spot: challenged but capable

### 3. Feedback Loops
- You need to know if you're right or wrong
- Faster feedback = faster learning
- Accurate feedback matters more than encouraging feedback

### 4. Metacognition
- Thinking about your thinking
- Knowing what you know and don't know
- Monitoring your understanding
- Adjusting strategies based on results

## The Feynman Technique

Named after physicist Richard Feynman:

1. **Choose a concept** you want to learn
2. **Explain it simply** as if teaching a child
3. **Identify gaps** where your explanation falters
4. **Return to source material** to fill gaps
5. **Simplify and refine** until the explanation is clear

The test of understanding: Can you explain it simply?

## Deep Work and Focus

### The Cost of Context Switching
- Every interruption has a cost
- It takes time to refocus
- Multitasking is mostly a myth; we task-switch
- Deep work requires protected focus time

### Creating Focus Conditions
- Eliminate distractions (phone, notifications, etc.)
- Set clear goals for the session
- Time-box your work (Pomodoro technique: 25 min work, 5 min break)
- Gradually extend focused periods

### State Management
- Physical state affects cognitive performance
- Sleep, exercise, nutrition all matter
- Manage stress (some is good, too much impairs)
- Take breaks before exhaustion

## Reading for Learning (Not Just Information)

### Active Reading Process
1. **Preview**: Scan structure, headings, summary first
2. **Question**: What do I want to learn from this?
3. **Read**: Actively, with questions in mind
4. **Recite**: Summarize from memory after each section
5. **Review**: Go back over your notes, fill gaps

### Note-Taking That Works
- **Don't transcribe**: Process into your own words
- **Structure matters**: Organized notes are more useful
- **Connect to what you know**: Add associations
- **Review and refine**: Notes are starting points, not endpoints

Methods:
- **Cornell method**: Notes, cues, summary sections
- **Mind mapping**: Visual connections between ideas
- **Zettelkasten**: Atomic notes linked together
- **Outline method**: Hierarchical organizing

## Skill Acquisition Stages

### The Fitts & Posner Model

1. **Cognitive Stage**: Understanding what to do
   - Lots of conscious attention
   - Error-prone
   - Slow

2. **Associative Stage**: Refining the skill
   - Fewer errors
   - More fluid
   - Still conscious but less effortful

3. **Autonomous Stage**: Automatic execution
   - Little conscious attention needed
   - Can do while thinking about other things
   - Hard to change once established

### Implications
- Early learning requires full attention
- Practice must continue past "good enough" to build robust skills
- Old habits are hard to change (autonomous stage is sticky)
- Different skills at different stages need different practice approaches

## Avoiding Illusions of Competence

### Common Illusions
- **Recognition**: "I know this" (when you just recognize it)
- **Fluency**: "This is easy" (when it's familiar, not mastered)
- **Coverage**: "I read it all" (but didn't deeply process)
- **Productivity**: "I spent hours studying" (but how much actually stuck?)

### Reality Checks
- Can you explain it from memory?
- Can you apply it to a novel problem?
- Can you teach it to someone else?
- Can you connect it to other things you know?

> **Exercise**: Pick something you want to learn. Apply the Feynman technique: explain it as simply as possible. Where do you get stuck? That's your learning edge.

---

*Final Secret: The best learners aren't the most intelligent - they're the most intentional about how they learn.*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 30,
      prerequisites: ['mm-2-1'],
      secretUnlocks: ['mm-final'],
    },
  ],

  integration: [
    {
      id: 'int-1-1',
      title: 'Reading People in Real Time',
      content: `# Integrated People Reading

## Bringing It All Together

Now we combine:
- Transactional Analysis (ego states, games)
- Body language (facial expressions, posture, gestures)
- Behavioral analysis (baselines, clusters, context)
- Personality understanding (Big Five, attachment, traits)

## The Integrated Observation Process

### Phase 1: Quick Baseline (First 30 Seconds)
- Overall energy level
- General posture and movement patterns
- Initial impression of comfort/discomfort
- Key personality signals (extraversion? openness?)

### Phase 2: Active Observation (During Interaction)
- **Ego state tracking**: Which state seems active? Parent, Adult, Child?
- **Comfort signals**: Open posture, genuine smiles, relaxed movements
- **Discomfort signals**: Closed posture, adaptors, tension signs
- **Attention**: Where is their focus? What captures it?
- **Incongruence**: Do words, tone, and body align?

### Phase 3: Transaction Analysis
- What type of transaction is happening?
- Is this a complementary or crossed transaction?
- Are games appearing? Which ones?
- What strokes are being exchanged?

### Phase 4: Pattern Recognition
- Does this match their baseline?
- Are there changes from baseline?
- What might explain the changes?
- Multiple hypotheses, not single conclusions

### Phase 5: Hypothesis Testing
- Make a small intervention and observe response
- Change topic and see what shifts
- Adjust your approach based on feedback
- Verify or revise your hypotheses

## Practical Example

**Situation**: Business meeting with potential client

**Observations**:
- Firm handshake, good eye contact initially (confidence, engagement)
- As discussion moves to pricing: slight lip compression, blink rate increases, feet shift toward door
- Crosses arms briefly, then uncrosses (transitional discomfort)
- When discussing their goals: genuine smile with eye crinkles, body turns toward you, illustrators increase

**Analysis**:
- Initial confidence, genuine interest in goals
- Pricing triggers discomfort (need to explore why: budget concern? feeling pressured? past bad experience?)
- Not necessarily deception - could be normal discomfort with negotiation

**Responding**:
- Address the discomfort directly but gently
- "I noticed price seems to be on your mind - that's completely understandable"
- Give space for their concerns
- Continue monitoring for comfort/discomfort signals

## Common Mistakes in Integrated Reading

1. **Overconfidence**: Thinking you know more than you do
2. **Single-signal obsession**: Focusing on one sign, missing the pattern
3. **Confirmation bias**: Seeing what you expected to see
4. **Ignoring context**: Not accounting for situation, culture, personality
5. **Projection**: Assuming they feel what you would feel
6. **Negativity bias**: Interpreting ambiguous signals as negative

## The Humility Principle

The best readers of people maintain humility:
- Multiple possible interpretations always exist
- New information should update your understanding
- Being wrong is normal; failing to update is the problem
- The goal is better understanding, not being "right"

> **Exercise**: In your next three conversations, practice integrated observation. Don't try to analyze deeply - just notice. Build the observation habit.

---

*Next: Ethical influence in practice*`,
      type: 'theory',
      difficulty: 5,
      estimatedMinutes: 30,
      prerequisites: ['bl-2-3', 'pt-2-1', 'ta-2-3'],
      secretUnlocks: ['int-secret-1'],
    },
    {
      id: 'int-2-1',
      title: 'Ethical Influence in Practice',
      content: `# Using These Skills Responsibly

## The Ethics of Influence

You now have significant knowledge about:
- How people think and communicate
- How to read behavior and emotion
- How suggestion and influence work
- How to recognize and counter manipulation

With this knowledge comes responsibility.

## Why Ethics Matter

### For Others
- People can be harmed by manipulation
- Trust, once broken, is hard to rebuild
- Exploitative relationships are destructive
- Even "small" manipulation erodes authentic connection

### For Yourself
- Manipulation undermines genuine relationships
- You become someone others protect themselves from
- The manipulator often becomes isolated and suspicious
- Skills used unethically tend to corrupt the user

### For Society
- Social trust enables cooperation
- Manipulation degrades the social fabric
- We all benefit from more honest, authentic interactions

## Ethical Framework

### The Consent Principle
- Would this person consent if they understood?
- Am I being transparent about my intentions?
- Is this person capable of informed choice?

### The Beneficence Principle
- Am I serving their interests, mine, or both?
- Is the outcome beneficial or harmful?
- Would I be comfortable if this were done to me?

### The Respect Principle
- Am I treating this person as a full human being?
- Am I respecting their autonomy and dignity?
- Would I want my loved ones treated this way?

### The Authenticity Principle
- Am I being genuine or performing?
- Is this connection real or manufactured?
- Am I hiding my true intentions?

## Practical Ethical Guidelines

### In Business/Negotiation
✅ **Ethical**:
- Building genuine rapport
- Understanding their needs
- Finding mutually beneficial solutions
- Being honest about your product/service
- Appropriate persuasion within bounds

❌ **Unethical**:
- Deception about product capabilities
- Exploiting vulnerabilities
- Creating false urgency
- Hidden agendas
- "Closing techniques" that bypass rational decision-making

### In Relationships
✅ **Ethical**:
- Being honest about your feelings and intentions
- Respecting boundaries
- genuine interest in the other person
- Working through conflict authentically

❌ **Unethical**:
- Playing games to create attachment
- Love bombing to manufacture intimacy
- Using knowledge of attachment to manipulate
- Deliberately triggering insecurity

### In Therapy/Helping Contexts
✅ **Ethical**:
- Informed consent
- Clear boundaries
- Working toward client's goals
- Transparency about methods

❌ **Unethical**:
- Creating dependency
- Imposing your values
- Social/exploitative relationships with clients
- Using techniques without proper training

### In Everyday Interactions
✅ **Ethical**:
- Being a good listener
- Building genuine rapport
- Making requests clearly
- Accepting "no" gracefully

❌ **Unethical**:
- Covert manipulation
- Using NLP patterns to get unwanted compliance
- Social engineering for personal gain
- Exploiting gender, age, or status differences

## Red Flags: When to Pull Back

- You're thinking more about what you can get than give
- You're hiding your true intentions
- The other person seems confused about their own desires
- You'd be uncomfortable if they knew what you were doing
- You're getting better at reading people but worse at relationships

## The Highest Form of Influence

The most powerful influence isn't covert - it's:
- Being genuinely trustworthy
- Having real competence
- Caring about others' wellbeing
- Communicating clearly and honestly
- Respecting autonomy

These qualities create willing followers, eager collaborators, and devoted partners. And they're available to anyone willing to cultivate them.

> **Final Reflection**: What kind of person do you want to be? The knowledge in this course can make you more effective. But effectiveness without ethics is just refined selfishness. Choose wisely.

---

*You've completed the integration module. The secrets you've discovered are tools. Use them wisely.*

**Congratulations on completing the full curriculum.**`,
      type: 'theory',
      difficulty: 5,
      estimatedMinutes: 35,
      prerequisites: ['int-1-1', 'eh-3-3', 'hi-2-2'],
      secretUnlocks: ['int-final', 'master-secret'],
    },
  ],
};

// Secrets - hidden content to discover
export const secrets = {
  ta_secret_1: {
    code: 'ericsmile',
    title: 'The Secret of the Duchenne Smile',
    content: `## The Real Smile

Eric Berne understood something crucial: people can fake many things, but the genuine smile has a distinctive signature.

**The Duchenne Smile** (named after 19th century French neurologist Guillaume Duchenne):

- Involves the orbicularis oculi muscle (around the eyes)
- Creates "crow's feet" wrinkles at the outer corners of the eyes
- Raises the cheeks
- The eye cover fold moves downward
- Symmetrical

**The Fake Smile**:
- Only involves the zygomatic major (mouth corners)
- No eye engagement
- Asymmetrical
- Often doesn't reach the eyes

**Why This Matters for TA**:
- When someone gives you a "stroke," check if it's genuine
- Fake positive strokes can be part of a game
- Learning to detect genuine vs. performed warmth is essential

**Key Insight**: You can learn to spot the difference. Practice looking at the eyes, not just the mouth.

*This secret unlocked the door to understanding authentic vs. strategic communication.*`,
    hint: 'Think about what makes a smile real...',
  },
  ta_secret_2: {
    code: 'crossed',
    title: 'The Crossed Transaction Trigger',
    content: `## How Crossed Transactions Hijack Your Brain

When you experience a crossed transaction, something specific happens neurologically:

1. **Expected pathway**: Your Adult expects an Adult response
2. **Actual pathway**: You receive a Parent-to-Child or Child-to-Parent transaction
3. **Prediction error**: Your brain registers a mismatch
4. **Emotional activation**: The unexpected transaction activates emotional centers
5. **Ego state shift**: You're pulled into an unexpected ego state

**The Trigger Sequence**:
- You: Adult question ("What time is it?")
- Them: Parent criticism ("You're always asking me things!")
- Your brain: ERROR - unexpected input
- Your response options:
  - React from Child ("Why are you yelling at me?!")
  - React from Parent ("You have no right to speak to me that way!")
  - Stay in Adult ("I'm just asking the time. Is something wrong?")

**The skill**: Recognize the crossed transaction moment and CHOOSE your response rather than reacting automatically.

*This understanding helps you stay conscious instead of being pulled into games.*`,
    hint: 'What happens when communication goes wrong?',
  },
  ta_secret_3: {
    code: 'strokedeprivation',
    title: 'The Stroke Deprivation Trap',
    content: `## Why Negative Attention Beats No Attention

Eric Berne's stroke economy reveals a tragic reality: humans will accept negative strokes rather than go without.

**The Hierarchy of Stroke Acceptance**:
1. Positive unconditional strokes (best)
2. Positive conditional strokes
3. Negative strokes (better than nothing)
4. No strokes (worst - psychological death)

**Why Games Emerge**:
When positive strokes are unavailable, people seek ANY recognition:
- "Yes, But..." gets attention and sympathy
- "Kick Me" ensures you'll be noticed (even negatively)
- "Poor Me" guarantees people are looking at you

**The Tragic Irony**:
The player wants positive strokes but can only achieve negative ones. The game provides a substitute that maintains the hope of positive strokes while ensuring continued deprivation.

**Breaking Free**:
- Recognize when you're accepting negative strokes
- Learn to give yourself positive strokes (breaking the stroke economy rules)
- Find healthy sources of positive recognition
- Accept that some negative strokes are inevitable - don't let them define you

*Understanding this trap is the first step to finding authentic connection.*`,
    hint: 'Why do people seek negative attention?',
  },
  ta_secret_4: {
    code: 'gamepayoff',
    title: 'The Hidden Payoff of Every Game',
    content: `## Follow the Payoff

Every psychological game has a hidden payoff - a familiar negative feeling that confirms the player's world view.

**Common Payoffs**:

**"I knew it" payoff**:
- "See? Nobody understands me"
- "Everyone betrays eventually"
- "I can't trust anyone"

**Victim payoff**:
- Being right about life being hard
- Moral superiority through suffering
- Exemption from normal expectations

**Control payoff**:
- Being the one who withholds
- Being the critic, not the criticized
- Maintaining emotional distance safely

**Intimacy-avoidance payoff**:
- Games keep real intimacy at bay
- Familiar negative feelings are "safer" than unknown positive ones
- "At least I know what to expect from this"

**How to Identify the Payoff**:
Ask: "What does the player GET from this interaction, even if it ends badly?"

The answer reveals:
- The hidden motivation
- The script belief being reinforced
- What would need to change for the game to end

*To end a game, you must address the payoff, not just the surface behavior.*`,
    hint: 'What do people really get from their games?',
  },
  ta_secret_5: {
    code: 'antigame',
    title: 'Anti-Game Responses That Work',
    content: `## How to Step Out of Games

When you recognize a game in progress, you have choices:

**Option 1: The Adult Response**
- Stay in Adult ego state
- Address the actual content, not the game
- "What would you like to happen?"
- "What have you already tried?"
- "What would constitute a real solution for you?"

**Option 2: Name the Pattern**
- "I notice that every suggestion gets rejected"
- "It seems like you don't actually want solutions"
- "What are you really looking for right now?"
- Use carefully - can trigger defensiveness

**Option 3: Change the Transaction**
- If they're seeking sympathy, give understanding then redirect
- If they're testing you, show consistent Adult response
- If they want to play Parent, refuse to play Child

**Option 4: Withdraw**
- Some games require two players
- Refuse to participate
- "I can see this isn't productive. Let's talk when we're both in a better frame of mind."

**Option 5: Give Unconditional Positive Stroke**
- Break the stroke deprivation pattern
- Genuine appreciation without conditions
- May be unexpected enough to disrupt the pattern

**Key Principle**: You can't force someone to stop playing games. You can only refuse to play along and offer genuine alternatives.

*The power is in your choice, not their change.*`,
    hint: 'How do you stop playing?',
  },
  ta_secret_6: {
    code: 'victimidentity',
    title: 'When Victimhood Becomes Identity',
    content: `## The Addiction to Victim Status

Why do people cling to victim-playing games?

**Psychological Rewards of Victim Identity**:

1. **Specialness**: "My suffering makes me unique"
2. **Moral superiority**: "I'm more ethical because I suffer"
3. **Exemption**: "I shouldn't have to do normal things because of my hardship"
4. **Attention**: Victim status guarantees focus from others
5. **Predictability**: If I'm the victim, I know my role
6. **Avoidance**: Victimhood explains (excuses) failure to achieve

**The Hard Truth**:
Victim experiences are real. But when victimhood becomes identity, it prevents healing and growth.

**Signs Victim Has Become Identity**:
- All conversations return to suffering
- No interest in solutions, only in being understood
- Resentment toward those who've moved on
- Identity collapse without the suffering narrative
- Continuous need for validation of victim status

**Compassionate Truth-Telling**:
- Acknowledge real suffering
- Distinguish past victimization from current choices
- Support agency and growth
- Don't enable permanent victim identity

*Balancing compassion with truth is one of the hardest social skills.*`,
    hint: 'What keeps people in victim roles?',
  },
  ta_secret_7: {
    code: 'scriptrewrite',
    title: 'Rewriting Your Life Script',
    content: `## You Can Change Your Story

Scripts feel like fate because they're unconscious. Making them conscious gives you choice.

**The Script Rewriting Process**:

### Step 1: Identify the Script
Ask yourself:
- What themes repeat in my life?
- What do I expect will happen?
- What "always" or "never" statements do I make?
- What do I believe about myself, others, and the future?

### Step 2: Trace the Origin
- When did I first decide this about myself?
- What was happening in my life then?
- Who influenced this belief?
- Was this decision made by a child with limited information?

### Step 3: Examine the Function
- What did this script do for me then?
- What does it do for me now?
- What would I lose if I changed it?
- What would I gain?

### Step 4: Grieve the Old Script
- Acknowledge the real losses the script contains
- Grieve what you didn't get
- Honor the intelligence of the child who made those decisions (they were doing their best with limited options)

### Step 5: Write the New Script
- What would you prefer to believe?
- What new decisions would serve you better?
- What would "success" look like by new definition?
- Write it in the present tense, as if it's already true

### Step 6: Practice the New Script
- Notice when the old script tries to run
- Consciously choose the new response
- Celebrate small wins
- Expect the old script to persist for a while

**Key Insight**: Scripts were written by a child. You can rewrite them as an adult.

*The most powerful game you can choose to stop playing is the game of your own limitation.*`,
    hint: 'Who wrote your story?',
  },
  ta_secret_8: {
    code: 'autonomychoice',
    title: 'The Moment of Choice',
    content: `## Freedom Is a Moment

Eric Berne wrote about autonomy as the goal of TA. But autonomy isn't a permanent state - it's a series of moments.

**The Autonomy Moment**:

Something triggers an old pattern...
A familiar transaction appears...
The game invites you to play...

And in that moment, you have a choice:

- Continue the pattern (automatic)
- Choose something different (autonomous)

**What Makes This Hard**:

- The automatic response is well-worn and fast
- The autonomous response requires awareness and effort
- The payoff of the game is immediate
- The payoff of autonomy is often delayed

**Building Autonomy**:

1. **Awareness**: Notice when you're in a pattern
2. **Pause**: Create a gap between trigger and response
3. **Choice**: Deliberately select a response
4. **Practice**: Do this repeatedly

**The Paradox**:

The more you practice autonomy in small moments, the easier it becomes. Eventually, what was effortful becomes natural. But it always requires attention. Autonomy is a practice, not a destination.

*Every moment offers a new choice. That's both the burden and the beauty of being human.*`,
    hint: 'What is true freedom?',
  },
  ta_final: {
    code: 'taawakening',
    title: 'TA Final Awakening',
    content: `## You Have Completed Transactional Analysis

You now understand:

✓ The three ego states (Parent, Adult, Child)
✓ Complementary and crossed transactions
✓ Strokes as the currency of recognition
✓ Psychological games and their structure
✓ Game analysis (Yes But, Kick Me, Poor Me)
✓ Life scripts and their origins
✓ How to rewrite limiting scripts
✓ The path to autonomy

**What Now?**

1. **Practice awareness**: Notice ego states in daily interactions
2. **Identify games**: Spot them in yourself and others
3. **Choose differently**: Practice stepping out of automatic patterns
4. **Seek genuine connection**: Build relationships based on authentic Adult-to-Adult contact

**The Ultimate Insight**:

Games are attempts to meet human needs for connection, significance, and structure - but in ways that ultimately fail. The solution isn't to become game-free through willpower - it's to find healthier ways to meet those needs.

Autonomy isn't cold rationality. It's the freedom to be genuinely human, without the distortions of unconscious scripts and compulsive games.

*You hold the tools. Use them wisely.*`,
    hint: 'What have you learned?',
  },
  eh_secret_1: {
    code: 'ericksonrevolution',
    title: 'Why Erickson Changed Everything',
    content: `## The Ericksonian Revolution

Before Erickson, hypnosis was largely:
- Authoritarian ("You will...")
- Direct ("You are getting sleepy...")
- Standardized (same approach for everyone)
- Focused on the hypnotist's power

Erickson transformed it:
- Permissive ("You might notice...")
- Indirect (stories, metaphors, confusion)
- Individualized (tailored to each person)
- Focused on the client's unconscious resources

**Why This Matters**:

Erickson recognized that:
- Resistance is information, not opposition
- The unconscious is wise and resourceful
- Everything can be utilized
- The person has the answers within

**His Legacy**:
- Modern hypnotherapy foundations
- Influence on NLP (Neuro-Linguistic Programming)
- Influence on strategic family therapy
- The idea that therapy should be tailored to the individual

*Understanding Erickson means understanding that human change is far more subtle and elegant than direct instruction.*`,
    hint: 'How did Erickson do hypnosis differently?',
  },
  eh_secret_2: {
    code: 'everydaytrance',
    title: 'You\'re Already Hypnotizable',
    content: `## Trance Is Natural, Not Artificial

Consider these everyday experiences:

**Daydreaming**: You're sitting in a lecture or meeting, and your mind drifts to somewhere else. The external world fades. You're in a mild trance.

**Highway hypnosis**: You've driven a familiar route and arrived without consciously remembering the journey. Your unconscious handled the driving while your mind was elsewhere.

**Absorption in a book or movie**: Hours pass like minutes. You're emotionally engaged with fictional events. Your reality has shifted.

**Flow state**: Deep engagement in an activity where self-consciousness disappears and time distorts.

**Meditation**: Whether focused attention or open awareness, the shift in consciousness is a form of trance.

**Sleep onset**: The transition state between waking and sleeping, where images and thoughts flow freely.

**The Point**:

You already know how to enter trance. Hypnotherapy doesn't create something new - it deliberately utilizes what already comes naturally.

The question isn't "Can I be hypnotized?" It's "Can I learn to enter trance more deliberately, at will, for beneficial purposes?"

*And the answer is yes.*`,
    hint: 'When have you been in a trance-like state?',
  },
  eh_secret_3: {
    code: 'metaphormagic',
    title: 'Why Stories Change People',
    content: `## The Neuroscience of Metaphor

Why do metaphors and stories affect us more deeply than direct statements?

**Brain-Level Reasons**:

1. **Multiple regions activated**: Stories activate language areas AND sensory areas AND emotional areas. More brain engagement = deeper encoding.

2. **Simulation**: When we hear about an experience, our brain simulates it partially. Reading about running activates some of the same areas as actual running.

3. **Indirect access**: Metaphor bypasses the critical faculty because it's "just a story." The conscious mind doesn't defend against stories the way it defends against direct challenges.

4. **Personal meaning**: Each person extracts what's relevant to them. The same story means different things to different people - and the meaning they extract is exactly what they need.

5. **Emotional engagement**: Stories engage emotion, and emotional memory is stronger than purely cognitive memory.

6. **Integration time**: Metaphors continue working after the telling. The unconscious processes them over hours, days, even years.

**The February Man Specifically**:

The story of visiting one's father at different ages works because:
- It allows exploration of relationship at different life stages
- It creates emotional distance (it's a story, not direct work)
- It enables the unconscious to make connections
- The "visitor" discovers things about themselves, not just the father

*The story isn't about the content. It's about what your unconscious does with the content.*`,
    hint: 'Why do stories affect us deeply?',
  },
  eh_secret_4: {
    code: 'confusionkey',
    title: 'The Hidden Purpose of Confusion',
    content: `## Confusion as a Gateway

When Erickson created confusion, he wasn't trying to disorient for its own sake. He was creating a specific psychological state.

**What Confusion Does**:

1. **Overshadows conscious processing**: When the conscious mind can't make sense of something, it steps back. This creates space for unconscious processing.

2. **Creates a learning state**: Confusion is actually a optimal state for learning - you recognize you don't understand, which creates openness to new understanding.

3. **Bypasses resistance**: There's nothing specific to resist when language is ambiguous. The usual defense mechanisms don't know what to defend against.

4. **Forces pattern-finding**: The human brain hates unresolved patterns. When confused, the unconscious keeps working to find meaning. This unconscious work can lead to insights.

5. **Creates suggestibility**: In the moment of "I don't understand," the mind is more open to new input.

**The Critical Factor**:

Confusion must be followed by resolution or new pattern. Endless confusion is frustrating, not therapeutic. The pattern is:
- Create confusion (briefly)
- Provide new framework or suggestion
- Mind accepts new pattern because it resolves the confusion

**Balance**:

Too little confusion: Conscious mind analyzes and possibly rejects
Too much confusion: Frustration, disengagement
Just right: Conscious steps back, unconscious steps forward

*Confusion is a tool, not a goal. Used wisely, it opens doors.*`,
    hint: 'Why make someone confused?',
  },
  eh_secret_5: {
    code: 'utilizationkey',
    title: 'The Power of Working With Reality',
    content: `## Utilization: Erickson's Master Move

Utilization is perhaps Erickson's most powerful contribution. The principle: work with whatever the client brings, including resistance, symptoms, and limitations.

**Classic Erickson Example**:

A patient refused to enter trance. Erickson said: "That's fine. You don't need to go into trance. Just notice whether you go into trance or not. And if you don't, that's fine too."

By accepting and utilizing the resistance, Erickson removed the resistance. The patient could now allow trance because there was no pressure against it.

**The Utilization Mindset Shift**:

From: "How do I fix this problem?"
To: "What is this problem trying to accomplish? How can I use it?"

**Examples**:

- **Client falls asleep in session**: "Good - your body knows how to sleep. And you can notice whether your unconscious is listening even while you rest."
- **Client is skeptical**: "Perfect. You don't need to believe. Just discover what's true for you."
- **Client is talkative**: "And as you talk, you can discover what's important to say and what isn't."
- **Client has pain**: "And that pain - does it have a shape? A color? Has it changed at all?"

**The Deeper Principle**:

Nothing is wasted. Everything can be used. This includes:
- Resistance
- Symptoms
- Mistakes
- "Failure" to respond as expected
- Emotional reactions
- Even the therapeutic relationship itself

*When you stop fighting reality and start working with it, everything becomes useful.*`,
    hint: 'What if resistance is useful?',
  },
  eh_secret_6: {
    code: 'depthmyth',
    title: ' 트ance Depth Is Not the Goal',
    content: `## The Depth Fallacy

Many people assume deeper trance = better outcomes. Erickson would disagree.

**When Light Trance Is Sufficient**:
- Simple suggestions (stop smoking, confidence)
- Psychoeducation
- Brief interventions
- When the goal is awareness, not dissociation

**When Deeper Trance Helps**:
- Significant trauma work
- Age regression
- Complex pain management
- When significant restructuring is needed

**The Real Question**:

Not "How deep can I go?" but "How deep does this person need to go for their goal?"

**Signs You've Gone Deep Enough**:
- The work is happening
- The person is responding to suggestions
- Processing is occurring
- There are signs of unconscious engagement

**Going Too Deep Can Be Problematic**:
- Harder to reorient
- May not be necessary
- Can be disorienting for some
- May complicate rather than help

**Erickson's Approach**:

He often worked in light to medium trance. He was more interested in the right intervention than the deepest trance.

*Depth is a tool, not a trophy.*`,
    hint: 'Does deeper always mean better?',
  },
  eh_secret_7: {
    code: 'storycrafting',
    title: 'Crafting Your Own Therapeutic Stories',
    content: `## The Art of Therapeutic Storytelling

Creating effective therapeutic stories is both art and technique.

**The Essential Elements**:

1. **Parallel situation**: The story mirrors the client's situation in some way, but not too obviously.

2. **Identification possibility**: The listener can see themselves in the story, but doesn't have to.

3. **Process over outcome**: The story emphasizes the process of discovery/change, not just the result.

4. **Embedded resources**: The story contains resources the listener needs (courage, patience, perspective, etc.).

5. **Open endings**: Not everything is explained. The unconscious fills in gaps.

6. **Positive assumption**: The story assumes change is possible, growth occurs, resources exist.

**Story Sources**:

- **Personal anecdotes**: Your own experiences (authenticity matters)
- **Historical stories**: Real events with universal themes
- **Nature metaphors**: Growth, seasons, adaptation, ecosystems
- **Myths and legends**: Archetypal patterns
- **Composite stories**: Blended from multiple sources
- **Imagined stories**: Pure invention guided by therapeutic intent

**Telling the Story**:

- Match the story to the person (their interests, experiences, language)
- Use their words and metaphors when possible
- Don't over-explain - let the story breathe
- Pay attention to their responses
- Allow silence after the story
- Don't force interpretation

**Practice**:

Start collecting story material:
- Interesting things that happened to you
- Observations of human nature
- Stories from books, movies, history
- Metaphors from nature and daily life

The more stories you have available, the more you can match to the situation.

*Every life contains therapeutic stories. You just have to notice them.*`,
    hint: 'Where do healing stories come from?',
  },
  eh_secret_8: {
    code: 'suggestioncraft',
    title: 'The Anatomy of Perfect Suggestion',
    content: `## What Makes a Suggestion Effective?

Effective suggestions share certain characteristics:

**1. Positive Framing**
- "You will feel calm" not "You won't feel anxious"
- The unconscious processes the main image/concept

**2. Present Tense or "As If"**
- "You are becoming more confident" not "You will become..."
- Present tense feels more real to the unconscious

**3. Specific Process**
- Not just "feel better" but "your breathing slows, your shoulders soften..."
- Specificity allows the mind to follow a path

**4. Alignment with Values**
- Suggestions that align with the person's desires work better
- Imposed suggestions create resistance

**5. Safety**
- The person must feel safe to accept the suggestion
- Safety comes from rapport, trust, and the nature of the suggestion

**6. Permission**
- "You can..." rather than "You must..."
- Permissive language reduces resistance

**7. Future Pacing**
- "And tomorrow, when you enter that meeting, you'll remember this calm..."
- Pre-experiencing the future strengthens the neural pathway

**8. Layering**
- Multiple reinforcing suggestions
- "As you breathe, you relax, and as you relax, you remember your capability..."

**The Formula**:

` + '`' + `Trigger + Process + Positive Outcome + Future Pacing + Permission` + '`' + `

Example:
"As you sit there (trigger), noticing your breathing (process), you can discover a natural calm spreading through your body (outcome), and you might find this calm available whenever you need it (future pacing + permission)."

*Perfect suggestions feel like the person's own idea.*`,
    hint: 'What makes a suggestion work?',
  },
  eh_secret_9: {
    code: 'selfhypnosisguide',
    title: 'Your Self-Hypnosis Practice Guide',
    content: `## Complete Self-Hypnosis Protocol

**Preparation**:

1. **Choose your time**: When you won't be interrupted
2. **Choose your place**: Comfortable, quiet, safe
3. **Set your intention**: What do you want from this session?
4. **Limit your suggestions**: 1-3 focal points maximum

**Induction (5 minutes)**:

Option A - Relaxation:
- Sit or lie comfortably
- Focus on your breathing
- Progressively relax each body part
- Count down from 10 to 1, deeper with each number

Option B - Eye Fixation:
- Focus on a point slightly above eye level
- Keep eyes open, notice the strain
- Let eyes close as they tire
- Allow the eye fatigue to carry into mental relaxation

Option C - Breathing:
- Focus entirely on natural breathing
- Count breaths or simply observe
- Let thoughts come and go
- Allow trance to emerge naturally

**Deepening (2-3 minutes)**:

- "And with each breath, twice as relaxed..."
- "Going deeper into this comfortable state..."
- Use your own deepening imagery (stairs, garden, etc.)

**Suggestions (5-10 minutes)**:

- State your suggestions clearly and positively
- Use present tense
- Include how you want to feel/respond
- Future pace: "And tomorrow, when..."
- Repeat key suggestions

**Emergence (1-2 minutes)**:

- "In a moment I'll count from 1 to 5..."
- "With each number, becoming more alert..."
- "1... returning to full awareness..."
- "5... eyes open, alert, refreshed, and positive..."

**After**:

- Take a moment to orient
- Notice how you feel
- Consider journaling about the experience
- Trust that your unconscious continues working

**Daily Practice Tips**:

- Same time each day builds habit
- 10-15 minutes is ideal for beginners
- Consistency matters more than duration
- Keep a brief journal of experiences
- Be patient - changes accumulate over time

*You are both the operator and the subject. Treat yourself with the same care you'd offer another.*`,
    hint: 'How do you practice self-hypnosis?',
  },
  eh_final: {
    code: 'ericksonmaster',
    title: 'Ericksonian Mastery Complete',
    content: `## You Have Completed The February Man Module

You now understand:

✓ Erickson's revolutionary approach to hypnosis
✓ The nature of trance and how to induce it
✓ Indirect suggestion and metaphor
✓ Confusion techniques and their purpose
✓ Utilization - working with reality
✓ Fractionation and deepening
✓ Therapeutic storytelling
✓ Post-hypnotic suggestions
✓ Self-hypnosis practice

**The Ericksonian Legacy**:

Erickson taught us that:
- The unconscious is wise and resourceful
- Everything can be utilized
- Indirect approaches often work better than direct
- Each person is unique and needs individual treatment
- Therapy is about enabling the person's own resources

**What Now?**

1. **Practice self-hypnosis daily** - build the skill
2. **Observe trance in daily life** - recognize it everywhere
3. **Practice storytelling** - develop your metaphorical language
4. **Study Erickson's cases** - read his actual case studies
5. **Apply ethically** - use these skills responsibly

**The Deepest Secret**:

The most powerful hypnotic agent is not the therapist's technique - it's the client's own unconscious mind, finally given permission to help itself.

*Ericksonian hypnosis isn't about control. It's about liberation.*`,
    hint: 'What is the essence of Ericksonian hypnosis?',
  },
  bl_secret_1: {
    code: 'contextking',
    title: 'Context Is Everything',
    content: `## The Supreme Rule of Body Language

A single signal means almost nothing without context.

**Crossed arms could mean**:
- Cold (room temperature or feeling cold)
- Comfort (relaxed, at ease pose)
- Defensiveness (in response to threatening content)
- Habit (just how they sit)
- Concentration (self-containment for focus)
- Physical support (arm rest, pain reduction)

**Only context reveals the meaning**:

- Crossed arms + shivering + looking at thermostat = cold
- Crossed arms + leaning back + smile = comfortable
- Crossed arms + turned away + frown = defensive
- Crossed arms + identical pose every time you see them = habit

**The Three Context Levels**:

1. **Physical context**: What's happening in the environment?
2. **Social context**: What's the nature of the interaction?
3. **Personal context**: What's this person's baseline and history?

**Always Ask**:

"Compared to what?" (baseline)
"What else is happening?" (context)
"What are the other signals saying?" (cluster)
"What are alternative explanations?" (humility)

*The best body language readers are the most cautious about their conclusions.*`,
    hint: 'Why can\'t you trust single signals?',
  },
  bl_secret_2: {
    code: 'baselinepower',
    title: 'The Power of Knowing Normal',
    content: `## Baseline: The Foundation of All Reading

Without a baseline, you're interpreting in a vacuum.

**What Baseline Includes**:

- **Posture**: How do they typically hold their body?
- **Movement**: How much do they fidget? Gesture? Shift?
- **Eye contact**: How much is normal for them?
- **Facial expressiveness**: Animated or reserved?
- **Speech patterns**: Fast/slow, loud/quiet, formal/casual?
- **Personal space**: How close do they stand to others?
- **Typical reactions**: How do they respond to stress, humor, questions?

**How to Establish Baseline**:

1. **Observe in neutral situations**: When nothing's at stake
2. **Observe across contexts**: Different situations reveal different aspects
3. **Observe over time**: Patterns emerge with repeated observation
4. **Notice consistency**: What's stable vs. variable?

**Why Baseline Matters**:

Without baseline, you can't distinguish:
- Personality from state
- Habit from signal
- Normal from unusual
- Comfort from discomfort

**Example**:

If someone is naturally fidgety, fidgeting doesn't signal anxiety. If someone is normally still, sudden fidgeting may signal a shift.

**The Humility of Baseline**:
You never have a complete baseline. You're always working with limited data. Good observers acknowledge this limitation.

*Start building baselines for the people you interact with regularly. You'll be amazed at what you notice.*`,
    hint: 'How do you know what\'s normal?',
  },
  bl_secret_3: {
    code: 'microtruth',
    title: 'Microexpressions: Truth in a Flash',
    content: `## Reading the Fleeting Face

Microexpressions are brief, involuntary facial expressions that reveal concealed or suppressed emotions.

**The Seven Universal Emotions** (Ekman):

1. **Happiness**: Crow's feet, raised cheeks, eye narrowing
2. **Sadness**: Inner eyebrows raised, lip corners down
3. **Anger**: Brows lowered, eyes glaring, lips pressed/square
4. **Fear**: Brows raised and together, upper eyelids up, mouth stretched
5. **Surprise**: High raised brows, wide eyes, dropped jaw
6. **Disgust**: Nose wrinkled, upper lip raised
7. **Contempt**: One-sided lip raise (only asymmetric universal expression)

**Key Facts**:

- Last 1/25 to 1/5 of a second
- Involuntary - hard to fake or suppress consistently
- Universal across cultures
- Most commonly leak when someone is actively concealing emotion

**What Microexpressions Can and Can't Tell You**:

CAN:
- Reveal an emotion someone is trying to hide
- Indicate emotional arousal
- Show incongruence with verbal message

CAN'T:
- Prove deception (emotion ≠ lying)
- Tell you WHY they're feeling that emotion
- Work in isolation (need context, baseline, clusters)

**The Training Reality**:

Learning to spot microexpressions takes practice. The Facial Action Coding System (FACS) is the comprehensive system, but you don't need full FACS training for practical use.

**Practical Approach**:

- Watch for flashes that don't match the conversation
- Notice when emotions appear and disappear at odd times
- Look for asymmetry (genuine emotions tend symmetric)
- Consider: what emotion would make sense here? Does the flash match or contradict?

*Like all body language, microexpressions are clues, not conclusions.*`,
    hint: 'What flashes across the face before someone can hide it?',
  },
  bl_secret_4: {
    code: 'positionpower',
    title: 'How Position Signals Power',
    content: `## Reading Status Through Position

Where someone places their body reveals their sense of power and status.

**High Status Positions**:
- Taking up more space (expanded posture)
- Higher physical position (standing while others sit, elevated seat)
- Back to wall (security advantage, can see everyone)
- Open sight lines (not blocked by others)
- Central position in group
- Others oriented toward them

**Low Status Positions**:
- Making themselves smaller (contracted posture)
- Lower position
- Facing exit (readiness to leave)
- Edge of group
- Turning away from center

**Power Signals in Specific Contexts**:

**Seating**:
- Head of table = authority position
- Facing door = security and control
- Side-by-side = collaboration
- Opposite = potential opposition

**Standing**:
- Dominant foot forward can signal confidence
- Weight on back foot can signal readiness to engage or leave
- Spreading feet apart (especially men) signals dominance

**In Groups**:
- Who do others watch when something happens?
- Who sits where others want to sit?
- Who arrives and others adjust to them?
- Who leaves and conversation continues without them?

**The Fluidity of Status**:

Status isn't fixed:
- People shift status based on context
- Someone can be high status at work, low status at home
- Status can be claimed, granted, or challenged
- Body language both reflects and creates status

**Practical Application**:

- Notice who holds status in different contexts
- Observe how status shifts during interactions
- Consider: is this person's body language matching their claimed status?

*Power writes itself on the body before it's ever spoken.*`,
    hint: 'How can you tell who holds power?',
  },
  bl_secret_5: {
    code: 'feethonest',
    title: 'Why Feet Don\'t Lie',
    content: `## The Honest Extremities

Feet and legs are often the most honest parts of the body because:

1. **Farther from conscious control**: We think about our faces, maybe our hands. Rarely our feet.

2. **Less social training**: We're taught to control our facial expressions. We're not taught to control our feet.

3. **We don't watch feet**: People look at faces during interaction. They miss what the feet are "saying."

4. **Evolutionary legacy**: Feet reveal readiness to move - approach or avoid. This was survival-relevant and may be deeply encoded.

**What Feet Reveal**:

**Direction**:
- Feet pointing toward someone = interest, engagement
- Feet pointing away = desire to leave, disengagement
- One foot pointed away = partial disengagement, checking exit

**Movement**:
- Jiggling, tapping = anxiety, impatience, excess energy
- Sudden stillness = something captured attention
- Increased movement after stillness = shift in state

**Position**:
- Crossed at ankles = containment, perhaps discomfort
- Crossed at knees = relaxation or disengagement (direction matters)
- Spread apart = confidence, readiness, sometimes aggression
- Together = formality, submission, or just comfort

**The Leg Tell**:

Legs also reveal:
- **Barrier crossing**: Thighs together can signal discomfort; spread can signal comfort or dominance
- **Knee direction**: Which way are the knees pointing?
- **Under-table behavior**: Often completely unconscious

**Practical Tip**:

In your next conversation, notice the feet. Don't stare - that's creepy. But peripherally observe. Are the feet engaged with the conversation or trying to leave?

*The face may lie. The feet usually don't.*`,
    hint: 'Which body part doesn\'t know how to lie?',
  },
  bl_secret_6: {
    code: 'deceptionreality',
    title: 'The Truth About Lie Detection',
    content: `## Hard Truths About Deception Detection

Let's be honest about what the research shows:

**Most People**:
- Perform at 54-60% accuracy (barely above chance)
- This includes professionals (police, judges, psychologists)
- Confidence in ability doesn't correlate with accuracy

**No Single Cue Is Reliable**:
- No expression, gesture, or behavior consistently indicates lying
- The "Pinocchio effect" doesn't exist
- Even trained observers struggle

**Why It's So Hard**:

1. **No unique deception signal**: Lying doesn't produce a unique physiological or behavioral pattern
2. **Individual differences**: Some people are naturally more animated; others more still
3. **Context effects**: High-stakes situations create stress in both liars and truth-tellers
4. **Counter-measures**: People can learn to control signals
5. **Othello error**: Stress looks like deception

**What Actually Helps**:

1. **Baseline comparison**: How do they behave when truthful?
2. **Cognitive load techniques**: Lying is harder than truth-telling under cognitive demand
3. **Strategic questioning**: Open-ended, unexpected questions
4. **Inconsistency detection**: Internal contradictions, contradictions with known facts
5. **Multiple channels**: Look for incongruence across verbal, vocal, and nonverbal

**The Ethics of Detection**:

- Don't assume you can spot lies
- Err on the side of believing (false accusations are costly)
- Use detection skills to probe, not to accuse
- Remember: even if someone is lying, you may not be able to prove it

**A Better Goal**:

Instead of "catching liars," focus on:
- Creating conditions where truth is more likely
- Building trust that reduces motivation to lie
- Asking questions that reveal inconsistencies gently
- Understanding WHY someone might lie (fear, shame, manipulation, protection)

*The goal isn't to be a human polygraph. It's to navigate a world where some people sometimes lie, with wisdom and appropriate caution.*`,
    hint: 'Can you really tell when someone is lying?',
  },
  bl_final: {
    code: 'bodylanguagemaster',
    title: 'Body Language Mastery Complete',
    content: `## You Have Completed FBI Body Language Module

You now understand:

✓ The three channels of communication (verbal, paralinguistic, nonverbal)
✓ Basic principles: context, clusters, baselines, changes, comfort/discomfort
✓ The seven universal facial expressions (Ekman)
✓ Microexpressions and their limitations
✓ Body positioning and proxemics (Hall's zones)
✓ Hand gestures: illustrators, adaptors, emblems, barriers
✓ Eye behavior: contact, direction, dilation, blocking
✓ The honesty of feet and legs
✓ Deception detection: myths, methods, and realities
✓ The Othello error and confirmation bias

**Key Principles to Remember**:

1. **Context is everything** - never interpret single signals
2. **Look for clusters** - patterns matter, not isolated signs
3. **Establish baselines** - you need to know normal to spot unusual
4. **Be humble** - multiple interpretations always possible
5. **Avoid the Othello error** - stress isn't deception
6. **Ethical use** - these skills for understanding, not manipulation

**What Now?**

1. **Practice observation** - make it a habit
2. **Build baselines** - for people you interact with regularly
3. **Stay curious** - observe, don't judge
4. **Continue learning** - body language is deep and nuanced
5. **Use ethically** - understanding others should help, not harm

*The body speaks constantly. You've learned to listen.*`,
    hint: 'What have you learned about reading bodies?',
  },
  pt_secret_1: {
    code: 'oceanprofile',
    title: 'Mapping Your Personality',
    content: `## Understanding the Big Five in Yourself and Others

Take a moment to consider where you fall on each dimension:

**Openness**: Do you seek new experiences or prefer the familiar?
- High: "I love trying new foods, visiting new places, exploring new ideas."
- Low: "I prefer what I know. New things can be stressful."

**Conscientiousness**: How organized and disciplined are you?
- High: "I make lists, meet deadlines, keep my space organized."
- Low: "I'm more spontaneous. Organization isn't my strength."

**Extraversion**: Where do you get your energy?
- High: "I love being around people. Socializing energizes me."
- Low: "I need alone time to recharge. Too much socializing drains me."

**Agreeableness**: How much do you prioritize harmony?
- High: "I hate conflict. I want everyone to get along."
- Low: "I'll speak up even if it causes disagreement. Truth matters more than harmony."

**Neuroticism**: How sensitive are you to stress?
- High: "I worry a lot. Small things can throw me off."
- Low: "I'm pretty even-keeled. Stress doesn't affect me much."

**How This Helps**:

Understanding personality dimensions helps you:
- Predict potential friction points in relationships
- Adapt your communication approach
- Understand why different people need different things
- Recognize your own biases in judging others
- Choose environments and roles that fit

**Important Reminders**:

- These are spectrums, not categories
- People can and do change over time
- Context matters enormously
- No dimension is inherently better
- Cultural factors influence expression

*Understanding personality isn't about labeling - it's about understanding.*`,
    hint: 'What makes people different?',
  },
  pt_secret_2: {
    code: 'attachmentlens',
    title: 'Seeing Relationships Through Attachment',
    content: `## How Attachment Shapes Everything

Once you understand attachment theory, you start seeing it everywhere.

**In Romantic Relationships**:
- The anxious-avoidant trap explains countless relationship dynamics
- Different needs for closeness create misunderstanding
- What's "normal" depends on your attachment style

**In Friendships**:
- Some friends need more contact; others need more space
- Attachment style affects how friendships are maintained
- Understanding reduces taking things personally

**In Work Relationships**:
- Secure bosses give clear direction without micromanaging
- Anxious employees may need more reassurance
- Avoidant colleagues may seem distant but aren't necessarily uncaring

**In Parenting**:
- Your attachment style affects how you parent
- Children develop attachment based on your responsiveness
- Earning security as a parent helps children develop security

**In Yourself**:
- How do you react when someone is distant?
- How do you react when someone gets too close?
- What's your automatic pattern in relationships?
- What would "earned security" look like?

**The Compassionate Perspective**:

Attachment styles developed for good reasons:
- They're adaptations to early environments
- They made sense given what the child experienced
- They're not character flaws; they're survival strategies
- They can change with new experiences

*Understanding attachment creates compassion - for others and for yourself.*`,
    hint: 'How do early bonds shape adult relationships?',
  },
  pt_secret_3: {
    code: 'darkrecognition',
    title: 'Recognizing Dark Traits Early',
    content: `## Spotting Manipulation Before It's Too Late

Dark traits exist on spectrums. Most people have some of these tendencies. The key is recognizing when they're pronounced and harmful.

**Early Warning Signs**:

**Love bombing**:
- Overwhelming affection early in relationship
- "You're perfect," "I've never felt this way before"
- Expensive gifts, constant attention
- Rushing intimacy ("soulmates," "meant to be")

**Inconsistency between words and actions**:
- Promises that don't materialize
- "I'll change" with no sustained change
- Explanations for why their behavior doesn't match their words

**Disrespect of boundaries**:
- "You're too sensitive" when you express discomfort
- Pushing after you've said no
- Testing limits to see what they can get away with

**Triangulation**:
- "Even [other person] agrees with me"
- Comparing you to exes, friends, coworkers
- Creating jealousy or competition

**Blame-shifting**:
- Nothing is ever their fault
- All problems are caused by others
- You're "too sensitive," "crazy," "remembering wrong"

**Gut feelings**:
- Something feels off even if you can't articulate why
- You feel confused after interactions
- You feel worse about yourself around them
- You're walking on eggshells

**Trusted Friend Feedback**:
- Friends express concern
- You find yourself defending behavior you wouldn't normally defend
- Isolation from other perspectives

**Protection Strategies**:

1. **Slow down**: Dark traits often hide behind charm initially
2. **Watch behavior over time**: Patterns reveal more than first impressions
3. **Trust your discomfort**: Don't talk yourself out of gut feelings
4. **Maintain connections**: Don't let one person become your entire world
5. **Set clear boundaries**: See how they respond
6. **Don't try to fix them**: People with pronounced dark traits rarely change through love

*The best protection is awareness. You've now learned what to look for.*`,
    hint: 'How do you spot manipulation early?',
  },
  hi_secret_1: {
    code: 'suggestionawareness',
    title: 'Noticing the Invisible',
    content: `## Developing Suggestion Awareness

Once you understand how suggestion works, you'll notice it everywhere.

**In Advertising**:
- "Everyone is switching to..." (social proof)
- "You deserve..." (appeal to values)
- "Imagine..." (visualization, future pacing)
- Subtle associations (product with attractive people, fun scenes)

**In Politics**:
- Framed questions that presuppose certain answers
- Emotional language that primes reactions
- Repetition that creates familiarity and acceptance
- "We" vs. "they" language that creates in-group identification

**In Daily Conversation**:
- "You know how it is..." (presupposes shared experience)
- Leading questions: "You were nervous, weren't you?"
- Embedded suggestions in stories and anecdotes
- Tone and pacing that influences state

**In Social Media**:
- Curated images that prime comparison
- Algorithms that create echo chambers
- Notification design that creates conditioned responses
- Language designed to trigger engagement (outrage, fear, excitement)

**Developing Awareness**:

Practice noticing:
- What's being suggested, not just stated?
- What's being presupposed?
- How does the language make you feel?
- What response is being invited?

This awareness is protective. You can't stop all influence, but you can notice it and choose your response.

*Between stimulus and response, there's a space. In that space lies your freedom.*`,
    hint: 'How is language influencing you right now?',
  },
  hi_secret_2: {
    code: 'rapportsecret',
    title: 'The Real Secret of Rapport',
    content: `## What Rapport Really Is

Techniques matter, but the foundation of rapport isn't technique.

**The Foundation**:

**Genuine curiosity**: Really wanting to know about the other person. Not strategic curiosity, but genuine interest in their experience.

**Presence**: Being fully there, not thinking about your next response or looking for an exit.

**Acceptance**: Meeting the person as they are, not as you'd like them to be. Not necessarily agreeing, but accepting that this is their experience.

**Warmth**: A genuine wish for the interaction to go well, for the person to feel comfortable.

**Authenticity**: Not performing rapport but actually being connected.

**Why This Matters**:

People can sense when you're using techniques versus when you're genuinely present. The techniques work better when they emerge from genuine interest rather than manipulation.

**The Paradox**:

The less you try to "get" rapport, the more it tends to emerge. Rapport is a byproduct of genuine connection, not a goal to pursue directly.

**Practical Integration**:

- Use matching and mirroring as a starting point, not the whole game
- Let techniques fade into the background as genuine connection develops
- Focus on the person, not your technique
- If you notice you're "doing rapport," return to curiosity

*The techniques are the training wheels. Eventually, you just connect.*`,
    hint: 'What\'s the real foundation of connection?',
  },
  hi_secret_3: {
    code: 'languagepower',
    title: 'Words That Shape Reality',
    content: `## The Constructed Nature of Reality Through Language

Language doesn't just describe reality - it shapes how we perceive and experience it.

**Framing Effects**:
- "Occupying" vs. "invading" a country
- "Pro-choice" vs. "pro-life"
- "Freedom fighter" vs. "terrorist"
- Same reality, different frames, different responses

**Emotion Words**:
- Labeling emotions changes the experience of them
- "I feel angry" is different from "I feel frustrated" or "I feel hurt"
- The words available to you shape emotional granularity

**Identity Language**:
- "I am anxious" vs. "I feel anxiety" vs. "Anxiety is visiting"
- "I am bad at this" vs. "I'm learning this"
- Language that fixes identity vs. language that allows change

**Presupposition Awareness**:
- "When we solve this..." assumes it will be solved
- "What made you so upset?" presupposes you were upset
- "How long have you been..." presupposes you have been

**The Power and Responsibility**:

Understanding how language shapes reality means:
- You can choose language that empowers rather than limits
- You can help others reframe limiting beliefs
- You can recognize when language is being used to manipulate
- You have responsibility for how you speak

**Practice**:

Notice your own language:
- What frames are you using?
- What presuppositions are in your speech?
- How might you rephrase limiting statements?

Notice others' language:
- What frames are they offering?
- What are they assuming?
- How does their language affect your state?

*Language is the lens through which we experience reality. Clean the lens.*`,
    hint: 'How do words shape what we experience?',
  },
  hi_secret_4: {
    code: 'subtleinfluence',
    title: 'The Reality of Covert Influence',
    content: `## What's Real and What's Myth

Popular culture exaggerates covert influence. Let's separate reality from myth.

**What's Real**:

**Priming**: Exposure to stimuli influences subsequent responses. Real but often subtle and short-lived.

**Conditioning**: Repeated pairings create associations. Real and powerful, but requires repetition.

**Non-verbal communication**: We constantly send and receive non-verbal messages. Real and significant.

**Rapport**: Connection facilitates influence. Real and well-documented.

**Suggestion**: Language can influence perception and behavior. Real within certain bounds.

**What's Exaggerated**:

**Subliminal self-help tapes**: Limited evidence for effectiveness beyond placebo.

**Instant behavioral change from single exposures**: Generally not realistic.

**Mind control**: Not possible in the sci-fi sense.

**Hypnotic compulsion**: People don't do things under hypnosis that violate their values.

**The Practical Reality**:

Real influence is usually:
- Gradual, not instant
- Subtle, not dramatic
- Builds over time
- Works with existing motivations
- Requires some level of consent (even if unconscious)

**Self-Protection**:

- Be aware of primes and anchors in your environment
- Notice when you're being rushed or pressured
- Trust your reactions even when you can't explain them
- Maintain awareness of your own state
- Remember: if something seems too clever, it might be manipulation

*Real influence is more mundane than myths suggest - which makes it both less scary and more worth paying attention to.*`,
    hint: 'What influence is real vs. myth?',
  },
  mm_secret_1: {
    code: 'memorymyths',
    title: 'Memory Myths Debunked',
    content: `## What Science Actually Says About Memory

**Myth: We Only Use 10% of Our Brain**
Reality: We use all of our brain; different regions for different functions. The 10% myth has no scientific basis.

**Myth: Memory Works Like a Video Recorder**
Reality: Memory is reconstructive. Each time you recall something, you reconstruct it - and it can change. This is why memories diverge between people who experienced the same event.

**Myth: Photographic Memory Exists**
Reality: Truly photographic (eidetic) memory is essentially nonexistent in adults. Exceptional memory is usually the result of training and technique, not innate ability.

**Myth: Cramming Works**
Reality: Massed practice (cramming) produces quick short-term results but poor long-term retention. Spaced repetition is dramatically more effective.

**Myth: Left Brain/Right Brain Personalities**
Reality: While some functions are lateralized, people don't have "left brain" or "right brain" personalities. Both hemispheres work together.

**Myth: Memory Declines Inevitably With Age**
Reality: Some aspects of memory do decline, but much age-related change is due to factors like reduced attention, less mental stimulation, health conditions. Many older adults maintain excellent memory.

**Myth: You Can't Improve Your Memory**
Reality: Memory is highly trainable. Techniques like memory palaces, spaced repetition, and mnemonic devices dramatically improve memory performance.

**Myth: Forgetting Is Always Bad**
Reality: Forgetting is functional. We're designed to forget irrelevant information. The problem is forgetting what we want to remember, not forgetting in general.

**The Practical Truth**:

Memory is:
- Malleable (can be improved)
- Reconstructive (not perfectly accurate)
- Influenced by many factors (attention, emotion, sleep, etc.)
- Trainable with the right techniques

*Understanding what memory is and isn't allows you to work with it effectively.*`,
    hint: 'What are the myths about memory?',
  },
  mm_secret_2: {
    code: 'palacebuilder',
    title: 'Building Multiple Memory Palaces',
    content: `## Scaling Your Memory System

Once you've built one memory palace, you can build many.

**Different Palaces for Different Purposes**:

**Topic-specific palaces**:
- One palace for vocabulary in each language
- One palace for medical terms
- One palace for historical dates
- One palace for technical concepts

**Function-specific palaces**:
- Daily tasks palace (what to do today)
- Reading notes palace (what you're learning)
- Presentation palace (what you need to remember to say)
- Names palace (people you meet)

**Location Ideas**:

Beyond your home:
- Your workplace or school
- Your daily walking/driving route
- A friend's house you know well
- A fictional castle or mansion you've visualized
- Your childhood home
- Your favorite museum or building
- A video game world you know intimately

**The Peg System Integration**:

Pre-memorize numbers 1-100 with images:
1 = Bun
2 = Shoe
3 = Tree
4 = Door
5 = Hive
...and so on (rhyming system).

Then combine with memory palace:
- Locus 1: Put the "bun" image with your first item
- Locus 2: Put the "shoe" image with your second item

This allows memorizing ordered lists with numbered items.

**Maintaining Palaces**:

- Visit your palaces periodically to keep them fresh
- You can reuse palaces after a period (months) by "clearing" the old images
- Some people maintain permanent palaces and rotate content
- Others build new palaces for each learning project

**Advanced Applications**:

- Memorizing speeches (each locus is a key point)
- Learning sequences (steps in a process)
- Remembering names (associate name with person's location in a palace)
- Learning anatomy (body itself as the palace)
- Memorizing entire books (each chapter is a locus)

*The limit is your imagination and willingness to practice.*`,
    hint: 'How do you expand your memory palace system?',
  },
  mm_secret_3: {
    code: 'spacedscience',
    title: 'The Science of Spaced Repetition',
    content: `## Why Spacing Works

Spaced repetition isn't just effective - we understand why it works.

**The Mechanisms**:

**Desirable difficulty**: Retrieving information just as you're about to forget creates optimal learning challenge. Too easy = no learning. Too hard = frustration.

**Memory strengthening**: Each successful retrieval strengthens the memory trace and makes it more resistant to forgetting.

**Context variability**: Reviewing at different times and in different contexts creates multiple retrieval paths, making the memory more accessible.

**The Forgetting Curve Reset**:

Each review doesn't just restore memory to 100% - it resets the forgetting curve with a slower decay rate. Over time, well-consolidated memories can last years with minimal review.

**Individual Optimization**:

The optimal spacing varies by:
- Individual differences in memory
- Difficulty of the material
- How well it was initially learned
- How quickly you need to access it
- How long you need to retain it

**Signs Your Spacing Is Right**:

- You recall most items successfully (70-90%)
- You feel slight challenge in recall (not too easy, not impossible)
- Progress feels steady over time
- Old items occasionally need refresher review

**Signs to Adjust**:
- Consistently forgetting = intervals too long or material not well encoded
- Everything too easy = intervals too short (wasting time)
- Progress feels random = inconsistent practice

**Digital Tools**:

Anki and similar tools handle scheduling automatically, but understanding the principles helps you use them better:
- Create good cards (the input matters)
- Be honest in your ratings
- Trust the algorithm
- Do your reviews consistently

*The magic isn't in the tool - it's in the spacing.*`,
    hint: 'Why does spacing out learning work better?',
  },
  mm_final: {
    code: 'learningmaster',
    title: 'Learning Mastery Complete',
    content: `## You Have Completed Memory Mastery Module

You now understand:

✓ How memory actually works (encoding, consolidation, retrieval)
✓ The types of memory (sensory, working, long-term)
✓ What improves memory (attention, elaboration, spacing, recall, etc.)
✓ The memory palace technique in depth
✓ Spaced repetition systems and how to use them
✓ Accelerated learning methods (Feynman technique, active reading, etc.)
✓ Common illusions of competence
✓ How to avoid them

**The Meta-Skill**:

Learning how to learn is perhaps the most important skill you can develop. Everything else you want to know or be able to do depends on it.

**Your Learning Toolkit**:

1. **Memory palaces** for memorizing ordered information
2. **Spaced repetition** for long-term retention
3. **Active recall** for strengthening memory
4. **Feynman technique** for deep understanding
5. **Interleaving** for flexible application
6. **Dual coding** for richer memory traces
7. **Good sleep** for consolidation
8. **Metacognition** for monitoring your learning

**The Compound Effect**:

Small, consistent learning sessions compound dramatically over time. 15 minutes daily with spaced repetition can transform your knowledge over months and years.

*You now have the tools to learn anything more effectively.*`,
    hint: 'What are the keys to effective learning?',
  },
  int_secret_1: {
    code: 'integratedreading',
    title: 'The Complete People Reader',
    content: `## Integration in Action

You've learned multiple systems. Now let's integrate them.

**The Complete Observation Stack**:

**Layer 1: Immediate Impressions**
- Overall energy and affect
- Initial comfort/discomfort
- Key personality signals

**Layer 2: Body Language Reading**
- Facial expressions (emotions, genuineness)
- Posture and positioning (confidence, status, comfort)
- Gestures (illustrators, adaptors, barriers)
- Eye behavior (contact, direction, dilation)
- Feet direction (engagement vs. desire to leave)

**Layer 3: Transactional Analysis**
- Which ego state is active?
- What type of transaction is occurring?
- Is this a game? Which kind?
- What strokes are being exchanged?

**Layer 4: Behavioral Analysis**
- Baseline comparison
- Changes from baseline
- Clusters and patterns
- Context considerations

**Layer 5: Personality Integration**
- Big Five tendencies
- Attachment patterns
- Possible dark traits (if relevant)
- How personality might explain behavior

**Layer 6: Hypothesis and Testing**
- Formulate multiple hypotheses
- Test with small interventions
- Observe responses
- Update understanding

**The Key Insight**:

No single layer gives the full picture. Integration across layers creates understanding. But always maintain humility - you're interpreting, not accessing truth directly.

*Integration is a skill that develops over time with practice.*`,
    hint: 'How do you combine all these skills?',
  },
  int_final: {
    code: 'mastercompletion',
    title: 'Complete Course Completion',
    content: `## 🎉 You Have Completed the Full Course 🎉

**Transactional Analysis (Eric Berne's Games People Play)**:
✓ Three ego states: Parent, Adult, Child
✓ Complementary and crossed transactions
✓ Strokes and the stroke economy
✓ Psychological games and their structure
✓ Game analysis: Yes But, Kick Me, Poor Me
✓ Life scripts and script analysis
✓ Path to autonomy

**The February Man (Milton H. Erickson's Hypnotherapy)**:
✓ Ericksonian approach vs. traditional hypnosis
✓ Nature of trance states
✓ Indirect suggestion and metaphor
✓ Confusion techniques
✓ Utilization principle
✓ Fractionation and deepening
✓ Therapeutic storytelling
✓ Post-hypnotic suggestions
✓ Self-hypnosis practice

**FBI Body Language & Behavioral Analysis**:
✓ Communication channels
✓ Observation principles
✓ Seven universal expressions
✓ Microexpressions
✓ Body positioning and proxemics
✓ Hand gestures and eye behavior
✓ The honesty of feet
✓ Deception detection realities

**Personality Theories**:
✓ Big Five (OCEAN)
✓ Attachment theory and styles
✓ Narcissism and dark traits
✓ Recognition and protection

**Hypnotic Influence**:
✓ Mechanics of suggestion
✓ Rapport building
✓ Language patterns of influence
✓ Subliminal and embedded communication
✓ Ethics of influence

**Memory Mastery**:
✓ How memory works
✓ Memory palace technique
✓ Spaced repetition
✓ Accelerated learning methods

**Integration**:
✓ Real-time people reading
✓ Ethical influence in practice

**You Now Possess**:

A comprehensive toolkit for understanding human behavior, communication, and influence. These skills can be applied in:
- Personal relationships
- Professional interactions
- Self-understanding and growth
- Helping others (when appropriately trained)
- Self-protection from manipulation

**Remember the Ethics**:

With this knowledge comes responsibility. Use these skills:
- To understand, not to manipulate
- To connect, not to control
- To protect yourself and others from harm
- To build authentic relationships
- To grow in wisdom and compassion

*The deepest mastery isn't technical skill - it's wisdom in how to use it.*

**Thank you for completing this journey.**`,
    hint: 'What have you discovered?',
  },
  master_secret: {
    code: 'wisdomkey',
    title: 'The Master Key: Wisdom Over Technique',
    content: `## The Ultimate Secret

All the techniques in this course are valuable. But the most important thing cannot be taught as a technique.

**It's wisdom.**

**Wisdom knows**:
- When to speak and when to listen
- When to act and when to wait
- When to use these skills and when to set them aside
- The difference between understanding someone and using them
- That every person is more complex than any model can capture
- That relationships are more important than being right
- That authenticity builds more than manipulation ever could
- That the goal isn't to "win" but to connect

**Wisdom remembers**:
- Everyone is fighting battles you know nothing about
- People who seem difficult are often hurting
- Your perceptions are partial and biased
- You will sometimes be wrong - humility is essential
- The skills you've learned are tools, not identity

**Wisdom chooses**:
- Compassion over judgment
- Curiosity over certainty
- Connection over control
- Truth over convenience
- Growth over comfort
- Service over self-interest

**The Paradox**:

The more you learn about human psychology, the more you realize how much you don't know. The best practitioners remain humble students until the end.

*You've learned the techniques. Now develop the wisdom to use them well.*

**This is the final secret.**`,
    hint: 'What is the most important thing?',
  },
};

// Achievements
export const achievements = [
  { id: 1, name: 'First Steps', description: 'Complete your first lesson', icon: '👣', requirement: { type: 'first_lesson' }, xpReward: 50 },
  { id: 2, name: 'Dedicated Learner', description: 'Complete 5 lessons', icon: '📚', requirement: { type: 'lessons_completed', count: 5 }, xpReward: 100 },
  { id: 3, name: 'Scholarship', description: 'Complete 10 lessons', icon: '🎓', requirement: { type: 'lessons_completed', count: 10 }, xpReward: 200 },
  { id: 4, name: 'Explorer', description: 'Discover your first secret', icon: '🗝️', requirement: { type: 'secrets_found', count: 1 }, xpReward: 150 },
  { id: 5, name: 'Secret Hunter', description: 'Discover 5 secrets', icon: '🔐', requirement: { type: 'secrets_found', count: 5 }, xpReward: 300 },
  { id: 6, name: 'Master Detective', description: 'Discover all secrets in a module', icon: '🔍', requirement: { type: 'module_secrets_complete', moduleId: null }, xpReward: 500 },
  { id: 7, name: 'Quiz Champion', description: 'Score 100% on a quiz', icon: '🏅', requirement: { type: 'perfect_quiz' }, xpReward: 100 },
  { id: 8, name: 'Century', description: 'Earn 100 total XP', icon: '💯', requirement: { type: 'total_xp', amount: 100 }, xpReward: 50 },
  { id: 9, name: 'Scholars', description: 'Earn 500 total XP', icon: '📖', requirement: { type: 'total_xp', amount: 500 }, xpReward: 100 },
  { id: 10, name: 'Sage', description: 'Earn 1000 total XP', icon: '🦉', requirement: { type: 'total_xp', amount: 1000 }, xpReward: 250 },
  { id: 11, name: 'Polymath', description: 'Complete all modules', icon: '🌟', requirement: { type: 'all_modules_complete' }, xpReward: 1000 },
  { id: 12, name: 'Streak Keeper', description: 'Maintain a 7-day study streak', icon: '🔥', requirement: { type: 'streak', amount: 7 }, xpReward: 150 },
  { id: 13, name: 'Dedicated', description: 'Maintain a 30-day study streak', icon: '⚡', requirement: { type: 'streak', amount: 30 }, xpReward: 500 },
  { id: 14, name: 'Social Scientist', description: 'Complete the Transactional Analysis module', icon: '🎭', requirement: { type: 'module_complete', moduleId: 'transactional_analysis' }, xpReward: 300 },
  { id: 15, name: 'Trance Master', description: 'Complete the Ericksonian Hypnosis module', icon: '🌀', requirement: { type: 'module_complete', moduleId: 'erickson_hypnosis' }, xpReward: 300 },
  { id: 16, name: 'Behavioral Analyst', description: 'Complete the Body Language module', icon: '🔍', requirement: { type: 'module_complete', moduleId: 'body_language' }, xpReward: 300 },
  { id: 17, name: 'Personality Expert', description: 'Complete the Personality Theories module', icon: '🧩', requirement: { type: 'module_complete', moduleId: 'personality_theories' }, xpReward: 300 },
  { id: 18, name: 'Influence Master', description: 'Complete the Hypnotic Influence module', icon: '✨', requirement: { type: 'module_complete', moduleId: 'hypnotic_influence' }, xpReward: 300 },
  { id: 19, name: 'Memory Champion', description: 'Complete the Memory Mastery module', icon: '🧠', requirement: { type: 'module_complete', moduleId: 'memory_mastery' }, xpReward: 300 },
  { id: 20, name: 'Grand Master', description: 'Complete the Integration module', icon: '🏆', requirement: { type: 'module_complete', moduleId: 'integration' }, xpReward: 500 },
];

export function getModuleByLessonId(lessonId: string): string | null {
  for (const [moduleKey, moduleLessons] of Object.entries(lessons)) {
    if (moduleLessons.some((l: LessonData) => l.id === lessonId)) {
      return moduleKey;
    }
  }
  return null;
}

export function getLessonIndex(moduleId: string, lessonId: string): number {
  const moduleLessons = lessons[moduleId as keyof typeof lessons];
  if (!moduleLessons) return 0;
  return moduleLessons.findIndex((l: LessonData) => l.id === lessonId);
}
