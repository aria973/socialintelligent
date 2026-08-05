// Complete Professional Hypnotherapy & Mentalism Curriculum
// Based on: Eric Berne's "Games People Play", Milton H. Erickson's "The February Man",
// FBI behavioral analysis, Paul Ekman's microexpression research, and professional mentalism techniques

export const professionalModules = {
  // ==================== FOUNDATIONS ====================
  foundations: {
    id: 'foundations',
    title: 'Foundations of Influence',
    subtitle: 'The Science of Human Behavior',
    description: 'Master the fundamental principles of human psychology, communication, and influence that underpin all advanced techniques.',
    icon: '🧠',
    color: 'from-slate-600 to-slate-800',
    totalLessons: 8,
    difficulty: 'Foundational',
    professional: true,
  },
  
  // ==================== TRANSACTIONAL ANALYSIS ====================
  transactional_analysis: {
    id: 'transactional_analysis',
    title: 'Transactional Analysis',
    subtitle: "Eric Berne's Games People Play",
    description: 'Complete mastery of TA theory: ego states, transactions, psychological games, life scripts, and autonomy. Essential for understanding interpersonal dynamics.',
    icon: '🎭',
    color: 'from-purple-600 to-indigo-600',
    totalLessons: 18,
    difficulty: 'Intermediate',
    professional: true,
  },
  
  // ==================== ERICKSONIAN HYPNOTHERAPY ====================
  erickson_hypnosis: {
    id: 'erickson_hypnosis',
    title: 'Ericksonian Hypnotherapy',
    subtitle: "Milton H. Erickson's Methods",
    description: 'The complete Ericksonian approach: indirect suggestion, trance induction, confusion techniques, utilization, therapeutic storytelling, and naturalistic hypnosis.',
    icon: '🌀',
    color: 'from-cyan-600 to-blue-600',
    totalLessons: 22,
    difficulty: 'Advanced',
    professional: true,
  },
  
  // ==================== CLINICAL HYPNOTHERAPY ====================
  clinical_hypnosis: {
    id: 'clinical_hypnosis',
    title: 'Clinical Hypnotherapy',
    subtitle: 'Professional Practice & Applications',
    description: 'Professional hypnotherapy techniques: pain management, anxiety treatment, habit change, trauma work, regression therapy, and ethical practice standards.',
    icon: '🏥',
    color: 'from-emerald-600 to-teal-600',
    totalLessons: 20,
    difficulty: 'Advanced',
    professional: true,
  },
  
  // ==================== BODY LANGUAGE & NONVERBAL ====================
  body_language: {
    id: 'body_language',
    title: 'Nonverbal Mastery',
    subtitle: 'FBI-Grade Behavioral Analysis',
    description: 'Total mastery of nonverbal communication: microexpressions, body language, voice analysis, deception detection, and behavioral prediction.',
    icon: '👁️',
    color: 'from-rose-600 to-pink-600',
    totalLessons: 20,
    difficulty: 'Advanced',
    professional: true,
  },
  
  // ==================== MENTALISM & RECONSTRUCTION ====================
  mentalism: {
    id: 'mentalism',
    title: 'Professional Mentalism',
    subtitle: 'The Art of Psychological Illusion',
    description: 'Learn professional mentalism techniques: cold reading, hot reading, psychological forcing, memory demonstration, prediction effects, and performance psychology.',
    icon: '🎩',
    color: 'from-amber-600 to-orange-600',
    totalLessons: 24,
    difficulty: 'Expert',
    professional: true,
  },
  
  // ==================== READING PEOPLE ====================
  reading_people: {
    id: 'reading_people',
    title: 'Portrait of the Mind',
    subtitle: 'Comprehensive Personality Analysis',
    description: 'Master the art of rapid personality assessment: Big Five, attachment styles, psychological types, character analysis, and behavioral prediction.',
    icon: '🔮',
    color: 'from-violet-600 to-purple-600',
    totalLessons: 16,
    difficulty: 'Advanced',
    professional: true,
  },
  
  // ==================== HYPNOTIC LANGUAGE ====================
  hypnotic_language: {
    id: 'hypnotic_language',
    title: 'Hypnotic Language Patterns',
    subtitle: 'The Art of Persuasive Communication',
    description: 'Master hypnotic language: NLP patterns, embedded commands, double binds, presuppositions, metaphor construction, and conversational trance induction.',
    icon: '💬',
    color: 'from-pink-600 to-rose-600',
    totalLessons: 14,
    difficulty: 'Advanced',
    professional: true,
  },
  
  // ==================== RAPPORT & INFLUENCE ====================
  rapport_influence: {
    id: 'rapport_influence',
    title: 'Rapport & Influence',
    subtitle: 'Ethical Persuasion Mastery',
    description: 'Complete rapport building, ethical influence, persuasion psychology, compliance techniques, and the psychology of persuasion.',
    icon: '🤝',
    color: 'from-blue-600 to-indigo-600',
    totalLessons: 12,
    difficulty: 'Intermediate',
    professional: true,
  },
  
  // ==================== MEMORY & COGNITION ====================
  memory_cognition: {
    id: 'memory_cognition',
    title: 'Memory & Cognition',
    subtitle: 'Mental Performance Enhancement',
    description: 'Advanced memory techniques, cognitive enhancement, learning acceleration, mental calculation, and cognitive performance optimization.',
    icon: '🎯',
    color: 'from-cyan-600 to-blue-600',
    totalLessons: 12,
    difficulty: 'Intermediate',
    professional: true,
  },
  
  // ==================== PERFORMANCE PSYCHOLOGY ====================
  performance_psychology: {
    id: 'performance_psychology',
    title: 'Performance Psychology',
    subtitle: 'Stage Presence & Psychological Impact',
    description: 'The psychology of performance: stage presence, audience management, psychological pacing, dramatic structure, and creating memorable experiences.',
    icon: '🎭',
    color: 'from-orange-600 to-red-600',
    totalLessons: 10,
    difficulty: 'Expert',
    professional: true,
  },
  
  // ==================== PROFESSIONAL PRACTICE ====================
  professional_practice: {
    id: 'professional_practice',
    title: 'Professional Practice',
    subtitle: 'Ethics, Business & Career',
    description: 'Building a professional practice: ethics, client management, business setup, marketing, insurance, professional organizations, and career development.',
    icon: '💼',
    color: 'from-slate-600 to-gray-800',
    totalLessons: 10,
    difficulty: 'Professional',
    professional: true,
  },
  
  // ==================== INTEGRATION ====================
  mastery_integration: {
    id: 'mastery_integration',
    title: 'Mastery Integration',
    subtitle: 'The Complete Mentalist & Hypnotherapist',
    description: 'Bring everything together: integrated sessions, complex cases, performance demos, professional identity, and lifelong mastery.',
    icon: '🏆',
    color: 'from-yellow-600 to-amber-600',
    totalLessons: 12,
    difficulty: 'Master',
    professional: true,
  },
};

// ==================== LESSONS ====================
export const professionalLessons: Record<string, any[]> = {
  foundations: [
    {
      id: 'found-1-1',
      title: 'The Architecture of Human Behavior',
      content: `# The Architecture of Human Behavior

## Welcome to Professional-Level Training

This curriculum is designed to take you from beginner to professional-level competence in hypnotherapy and mentalism. We begin with foundations.

## The Three Levels of Human Experience

### 1. Conscious Mind
- Logical, analytical, critical
- Processes information sequentially
- Responsible for deliberate decisions
- Limited capacity (7±2 items in working memory)
- Easily distracted and exhausted

### 2. Unconscious Mind
- Vast reservoir of memories, resources, and processes
- Controls automatic functions (breathing, heartbeat)
- Stores implicit learning and habits
- Processes information holistically and simultaneously
- Often knows more than consciousness admits

### 3. The Interface: Where Change Happens

Most therapeutic and influential work happens at the interface between conscious and unconscious:
- Suggestions must reach the unconscious to create lasting change
- The conscious mind can resist or accept
- The art is in navigating this interface skillfully

## Key Principles for Professionals

### 1. Everything Is Information
Every response, behavior, and reaction contains information. The professional doesn't judge - they observe and utilize.

### 2. Resistance Is Communication
Resistance isn't failure; it's information about what the person needs, fears, or values.

### 3. The Person Is Whole
People aren't broken machines to fix. They're complete systems that sometimes need redirection, support, or new options.

### 4. Context Is Everything
The same technique that works brilliantly in one context may fail in another. Skills are adaptable, not formulaic.

### 5. Ethics Is Foundation
Professional work carries responsibility. Your skills can help or harm. The choice is yours, made moment by moment.

## The Professional's Mindset

- **Curiosity**: Genuine interest in understanding people
- **Humility**: Knowing the limits of your knowledge
- **Patience**: Change takes time; trust the process
- **Presence**: Being fully there with another person
- **Integrity**: Honesty with yourself and others

> **Reflection**: Why do you want these skills? What do you hope to accomplish? Your answer will shape your path.

---

*Next: The history and evolution of hypnotherapy and mentalism*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 20,
      prerequisites: [],
      professional: true,
    },
    {
      id: 'found-1-2',
      title: 'History of Hypnosis & Mentalism',
      content: `# The Historical Foundations

## Ancient Origins

### Shamanic Trance
- Altered states induced by rhythm, dance, plant medicines
- Healing, divination, spiritual purposes
- Community-based, ritual context

### Greek and Roman Practices
- Temple sleep therapies (Asclepius temples)
- Incubation: sleeping in sacred spaces for healing dreams
- Priests as healers using suggestion and expectation

### Eastern Traditions
- Yoga nidra (yogic sleep)
- Chan/Zen meditation states
- Tibetan Buddhist deity yoga (visuality and embodiment)

## Modern History: Mesmer to Erickson

### Franz Anton Mesmer (1734-1815)
- "Animal magnetism" - invisible fluid connecting all things
- Dramatic public sessions with crises and cures
- Although his theory was wrong, his observations of trance were valuable
- Term "mesmerize" comes from his name

### Marquis de Puységur (1751-1824)
- Discovered "artificial somnambulism" - a calm trance state
- Subject could communicate while in trance
- Laid groundwork for therapeutic hypnosis

### James Braid (1795-1860)
- Coined "hypnosis" (from Hypnos, Greek sleep god)
- Correctly identified it as a psychological, not magnetic, phenomenon
- Focused on fixation and attention as induction methods
- "Neuro-hypnotism" - nervous system focused

### Jean-Martin Charcot (1825-1893)
- Famous neurologist at Salpêtrière Hospital, Paris
- Used hypnosis to study hysteria
- Taught Freud and others
- Demonstrated hypnosis could produce and remove symptoms

### Pierre Janet (1859-1947)
- Discovered dissociation - mental separation of consciousness
- Hypnosis could reintegrate dissociated material
- Important bridge between hypnosis and psychotherapy

### Sigmund Freud (1856-1939)
- Initially used hypnosis extensively
- Later abandoned it for free association
- His work on unconscious processes enriched understanding
- Hypnosis and psychoanalysis diverged but shared territory

### Milton H. Erickson (1901-1980)
- Revolutionary approach to hypnosis
- Indirect, permissive, individualized methods
- Utilized everything the client brought
- Focused on unconscious resources and learning
- The model we build upon extensively

## History of Mentalism

### Ancient Roots
- Oracle traditions (Delphi, etc.)
- Prophet figures and divination
- "Mind reading" through observation and deduction

### 19th Century: Mental Magicians
- Daniel Dunglas Home - levitation and "spirit" phenomena
- Robert-Houdin -Father of modern magic, mental effects
- Transition from mystical claims to performance art

### 20th Century Mentalism
- **Joseph Dunninger** - Famous mentalist, radio performances
- **Alexander - The Great Mental Magician** - Mind reading acts
- **Kreskin** - Mentalism with challenge elements
- **Uri Geller** - Spoon bending, controversial figure
- **Derren Brown** - Modern psychological mentalism
- **Lior Suchard** - Contemporary mind reader
- ** banachek** - Mentalism and skepticism

### Mentalism Today
- Performance art combining psychology, magic, suggestion
- Can be presented as genuine ability or as artistic illusion
- Ethical considerations around claims
- Growing appreciation for the skill involved

## Lessons From History

1. **Hypnosis has always been with us** - in various forms across cultures
2. **The theories change, but effective practices endure**
3. **Ethics has always been challenged** - be among the ethical practitioners
4. **The best practitioners adapt to their time** while preserving core principles

> **Exercise**: Choose one historical figure from above. Research them further. What can you learn from their approach?

---

*Next: Understanding states of consciousness*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 25,
      prerequisites: ['found-1-1'],
      professional: true,
    },
    {
      id: 'found-1-3',
      title: 'States of Consciousness',
      content: `# Understanding States: The Foundation for Everything

## What Is a State?

A **state** is a temporary configuration of:
- Physiological arousal (tension, relaxation, energy)
- Emotional quality (fear, calm, excitement, etc.)
- Cognitive patterns (focus, fragmentation, flow)
- Beliefs and expectations active in the moment
- Sensory awareness (heightened or reduced)

States are not "things" - they're patterns that emerge from the interaction of many systems.

## Common States We Work With

### Ordinary Waking Consciousness
- Alert, oriented, critical faculty active
- Logic and analysis primary
- "Normal" baseline for most adults

### Trance States
- Focused attention, reduced peripheral awareness
- Critical faculty may be relaxed or bypassed
- Suggestibility may be increased
- Can range from light to profound
- Natural and common (daydreaming, absorption, etc.)

### Flow States
- Complete absorption in activity
- Sense of effortlessness
- Time distortion
- Optimal performance zone
- Challenge-skill balance

### Emotional States
- Fear, anger, joy, sadness, etc.
- Physiological components
- Cognitive appraisal components
- Can facilitate or interfere with change

### Stress States
- Fight/flight/freeze responses
- Narrowed attention
- Reduced access to resources
- Can be acute or chronic

### Dissociative States
- Separation of normally integrated functions
- Can be protective or problematic
- Mild: highway hypnosis, absorption
- More profound: dissociative disorders (clinical territory)

### Alert/Calm States
- Relaxed but aware
- Balanced arousal
- Access to resources
- Ideal for learning and therapeutic work

## State-Dependent Learning and Memory

Information learned in one state is often more accessible in that same state:
- Learn while calm → easier to recall while calm
- Learn while anxious → may only access while anxious
- This has profound implications for therapy and learning

## State Assessment

Professionals learn to assess state through:
- **Physiological indicators**: breathing, muscle tone, skin color, temperature
- **Behavioral indicators**: movement, speech patterns, eye behavior
- **Verbal indicators**: language use, logical coherence, emotional tone
- **Response patterns**: how they respond to input

## The Professional's Relationship with States

### Not "In" or "Out" of Trance
Trance is not a binary state. It's a continuum, and people move along it fluidly.

### States Change Naturally
States aren't permanent. People shift states throughout the day. Our job is often to facilitate beneficial shifts.

### You Can't Force a State
You can create conditions that make a state more or less likely, but you can't force someone into a state.

### Match, Then Lead
Meet the person where they are (their current state), then guide them where they want to go.

## States and Rapport

Rapport involves state matching:
- When you're in a similar state, connection is easier
- Mismatched states create disconnect
- You can help shift states through your own state and pacing

> **Practice**: Throughout your day, notice your own states. What triggers shifts? How do you recognize different states in yourself? This awareness is the foundation of working with others' states.

---

*Next: The structure of hypnotic experience*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 25,
      prerequisites: ['found-1-2'],
      professional: true,
    },
    {
      id: 'found-1-4',
      title: 'The Nature of Suggestion',
      content: `# Suggestion: The Core Tool

## What Is Suggestion?

A **suggestion** is a communication that influences perception, experience, thought, emotion, or behavior. It can be:
- Direct or indirect
- Conscious or unconscious
- Welcomed or resisted
- Temporary or lasting

All communication has suggestive elements. The question is not "Is this suggestive?" but "How is this suggestive, and to what effect?"

## The Spectrum of Suggestibility

Everyone is suggestible. The variation is in:
- **What** they're suggestible to
- **When** they're suggestible
- **To whom** they're suggestible
- **How** suggestibility manifests

### Factors That Increase Suggestibility

1. **Rapport and Trust**: We're more open to those we trust
2. **Expectation**: Anticipation shapes experience
3. **Focused Attention**: Narrowed attention reduces critical filtering
4. **Emotional Arousal**: Strong emotion can bypass analysis
5. **Fatigue or Stress**: Reduced critical capacity
6. **Expertise/Authority**: We tend to accept experts' suggestions
7. **Cultural Context**: Some contexts encourage acceptance
8. **Similarity**: We're more open to similar others

### Factors That Decrease Suggestibility

1. **Distrust or Fear**: Protective resistance
2. **Critical Analysis Mode**: Active evaluation
3. **Clear Values Conflict**: Suggestion violates important values
4. **Past Negative Experience**: Conditioning against suggestion
5. **Need for Control**: Resistance to perceived loss of autonomy

## Types of Suggestions

### Direct Suggestions
- Clear, explicit statements
- "You will feel relaxed"
- Can be effective but also can trigger resistance

### Indirect Suggestions
- Embedded in larger communication
- "You might notice yourself becoming more comfortable"
- Often more acceptable to conscious mind

### Permissive Suggestions
- "You can..." rather than "You will..."
- Allows choice and reduces resistance
- "You might discover..."

### Authoritarian Suggestions
- "You will..." commanding tone
- Can work in specific contexts (crisis, authority relationship)
- Often creates resistance in therapeutic contexts

### Positive Suggestions
- Frame what you want: "Feel confident"
- More effective than negative framing

### Negative Suggestions
- "Don't feel anxious" - unconscious focuses on "anxious"
- Generally less effective than positive framing

### Embedded Suggestions
- Hidden within larger sentences
- "I'm not saying you should FEEL MORE CONFIDENT now..."
- Conscious mind may not register as command

### Post-Hypnotic Suggestions
- Intended to take effect after the session
- "When you sit in your car, you'll feel calm"
- Requires proper setup and timing

## How Suggestions Work

### Through Expectation
- If you expect something, you're more likely to experience it
- The placebo effect is suggestion in action
- Setting positive expectations is powerful

### Through Association
- Pairing stimuli creates responses
- Anchoring: linking a trigger to a state
- Context becomes associated with experience

### Through Imagination
- Imagining creates neural patterns similar to experiencing
- Vivid imagination makes suggestions more real
- "As if" framing engages imagination

### Through Belief
- Beliefs shape experience profoundly
- Suggestions that align with existing beliefs work better
- Changing beliefs changes experience

### Through Repetition
- Repeated suggestions gain power
- Consistency builds expectation and neural pathways
- Multiple channels reinforce

## The Limits of Suggestion

### Cannot Make People Do Things Against Core Values
- Strong moral prohibitions resist suggestion
- People won't harm themselves or others if it violates deep values

### Cannot Create Something from Nothing
- Suggestions work with existing capacities, dispositions, and resources
- You can't suggest abilities the person fundamentally lacks

### Work Better When Aligned with the Person's Goals
- Imposed suggestions face resistance
- Collaborative suggestions thrive

### Are Influenced by Context and Relationship
- Same suggestion, different context = different result
- Trust and rapport matter enormously

## Professional Ethics of Suggestion

### Informed Consent
- People should understand what's happening when possible
- Covert suggestion without consent is manipulation

### Beneficence
- Suggestions should serve the person's wellbeing
- Not the practitioner's convenience or gain

### Respect for Autonomy
- People have the right to accept or reject
- Avoid creating dependency

### Competence
- Only use suggestions within your competence
- Know when to refer

> **Exercise**: Notice suggestions in your environment today. Advertising, conversations, requests. What's being suggested? How does it land with you?

---

*Next: Introduction to trance induction*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 30,
      prerequisites: ['found-1-3'],
      professional: true,
    },
    {
      id: 'found-1-5',
      title: "The Professional's Code of Ethics",
      content: `# Ethics: The Foundation of Professional Practice

## Why Ethics Matter

This work touches people's minds, emotions, and lives. Ethical practice isn't just professional requirement - it's moral necessity.

## Core Ethical Principles

### 1. Do No Harm (Non-Maleficence)
- Avoid causing harm
- Recognize potential for harm
- When in doubt, choose the more cautious path

### 2. Beneficence
- Act for the benefit of others
- Promote wellbeing
- Create positive outcomes

### 3. Autonomy
- Respect people's right to choose
- Informed consent is essential
- Don't manipulate or coerce

### 4. Justice
- Treat people fairly
- Don't discriminate
- Consider equity and access

### 5. Fidelity
- Keep commitments
- Be trustworthy
- Maintain confidentiality

### 6. Veracity
- Be truthful
- Don't deceive about your abilities or methods
- Honest about limitations

## Specific Ethical Considerations

### Informed Consent
People should understand:
- What you're doing and why
- What they can expect
- Potential risks and benefits
- Their right to refuse or stop
- Alternatives available

### Competence
- Work within your training and experience
- Continue learning and developing
- Know when to refer to others
- Be honest about what you can and can't do

### Confidentiality
- Client information is private
- Exceptions: risk of harm to self or others
- Be clear about limits of confidentiality

### Boundaries
- Professional boundaries protect both parties
- Dual relationships can be problematic
- Physical, emotional, financial boundaries matter

### Avoiding Exploitation
- Don't exploit vulnerability
- Don't create dependency
- Be aware of power dynamics
- Financial arrangements should be fair and clear

### Claims and Advertising
- Don't exaggerate abilities
- Don't make impossible promises
- Be honest about what you offer
- Distinguish entertainment from therapeutic work

### Handling Unusual Claims
Mentalism and hypnosis raise unique issues:
- **Mentalism**: Are you presenting as genuine ability or artistic illusion?
- **Hypnosis**: Are you making claims beyond evidence?
- **Memory**: Be careful about "recovered" memories - suggestibility can create false memories

## Ethics in Mentalism Performance

### Presentation Choices
- Presenting as genuine psychic vs. psychological performer
- Honesty about what you're doing
- Impact on audience's beliefs

### Vulnerable Audience Members
- Some may become overly invested in your "abilities"
- Some may make life decisions based on performances
- Consider the impact of your presentation

### Interaction with Belief Systems
- Don't reinforce harmful beliefs
- Be mindful of cultural and religious contexts
- Skepticism has its place, but respect different worldviews

## The Ethical Decision Framework

When facing an ethical question:

1. **Identify the issue**: What's the ethical concern?
2. **Consider stakeholders**: Who's affected?
3. **Review principles**: Which principles apply?
4. **Consider consequences**: Short and long-term, for all parties
5. **Check guidelines**: Professional codes, laws, standards
6. **Consider alternatives**: Other ways to handle the situation
7. **Decide and document**: When in doubt, think it through and record
8. **Reflect**: Learn from the experience

## Common Ethical Pitfalls

- **Overconfidence**: Believing you know more than you do
- **Rescue fantasy**: Wanting to "save" people
- **Special relationship**: Feeling uniquely connected to clients
- **Faith in your methods**: Assuming your approach is best
- **Boundary drift**: Slow erosion of professional limits
- **Productivity pressure**: Prioritizing income over wellbeing
- **Savior complex**: Need to be needed

## Self-Care as Ethics

You can't serve others well if you're depleted:
- Maintain your own mental health
- Have your own support system
- Watch for burnout
- Keep growing and learning
- Know when to step back

> **Reflection**: What ethical challenges do you anticipate in your work? What principles will guide you?

---

*This foundation is essential. All technique serves ethics, not the other way around.*

*Next: Professional development planning*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 35,
      prerequisites: ['found-1-4'],
      professional: true,
    },
    {
      id: 'found-1-6',
      title: 'Developing Your Professional Identity',
      content: `# Becoming a Professional

## The Journey from Student to Professional

### Phase 1: Foundation (Now)
- Learning core concepts and techniques
- Developing basic skills
- Understanding ethical frameworks
- Supervised practice

### Phase 2: Development
- More independent practice
- Specializing in areas of interest
- Building confidence and competence
- Continuing education

### Phase 3: Competence
- Reliable, effective practice
- Handling common situations well
- Recognizing limits and referring appropriately
- Contributing to the field

### Phase 4: Mastery
- Deep, intuitive understanding
- Handling complex situations
- Teaching and mentoring others
- Contributing to knowledge

## Professional Identity Elements

### Your Approach
- What theoretical frameworks guide you?
- What techniques do you favor and why?
- What's your style with clients/students/audiences?

### Your Values
- What principles are non-negotiable?
- What does "good work" mean to you?
- How do you measure success?

### Your Niche
- What population do you serve?
- What problems do you focus on?
- What makes your approach unique?

### Your Boundaries
- What will you and won't you do?
- What are your limits?
- When do you refer out?

### Your Growth Path
- Where are you now?
- Where are you going?
- What do you need to get there?

## Building Professional Habits

### Continuous Learning
- Read extensively in your field
- Attend workshops and conferences
- Seek supervision and consultation
- Learn from clients and outcomes
- Stay current with research

### Practice and Reflection
- Deliberate practice of skills
- Reflection on sessions and performances
- Journaling and documentation
- Seeking feedback

### Professional Community
- Connect with other practitioners
- Share knowledge and experience
- Support and be supported
- Contribute to the field

### Self-Care
- Maintain your own wellbeing
- Have practices that sustain you
- Monitor for burnout
- Know when to take breaks

## Professional Documents and Tools

### Informed Consent Forms
Clear, understandable explanation of:
- What you do
- Risks and benefits
- Confidentiality and limits
- Client rights
- Fees and policies

### Intake Forms
Collecting relevant information:
- Background and history
- Current concerns
- Goals
- Health information
- Consent documentation

### Session Notes
- What happened
- Your observations
- Interventions used
- Client response
- Plan for next session
- Keep appropriate detail, protect confidentiality

### Progress Tracking
- Goals and progress toward them
- Outcome measures where appropriate
- Adjustments to approach

## Your Professional Library

Start building your reference library:

### Essential Reading
- Original works by Erickson, Berne, and other masters
- Current research in relevant fields
- Ethics guidelines from professional organizations
- Books on practice management

### Reference Materials
- Quick reference for techniques
- Assessment tools
- Resource lists for referrals
- Emergency protocols

## The Ongoing Journey

Professional development never ends:
- New research emerges
- Techniques evolve
- You encounter new situations
- You deepen your understanding
- You refine your approach

Stay humble. Stay curious. Stay ethical. Stay growing.

> **Exercise**: Write a draft of your professional identity statement. Who are you becoming? What guides you? What do you offer?

---

*You've completed the foundations. Now you're ready to dive deep into specific disciplines.*

*Next: Choose your path - Transactional Analysis, Ericksonian Hypnosis, Clinical Hypnotherapy, or another module*`,
      type: 'theory',
      difficulty: 1,
      estimatedMinutes: 30,
      prerequisites: ['found-1-5'],
      professional: true,
    },
  ],
  
  // ==================== TRANSACTIONAL ANALYSIS (EXPANDED) ====================
  transactional_analysis: [
    // ... previous TA lessons plus new professional-level content
    {
      id: 'ta-prof-1',
      title: 'Advanced Ego State Mapping',
      content: `# Advanced Ego State Mapping

## Beyond the Basics: Understanding Complex Ego State Dynamics

### Ego State Spectrum

Eg states aren't just three discrete categories. They're:
- **Spectrums** of experience
- **Context-dependent** activations
- **Complex blends** of parent, adult, and child qualities
- **Historically formed** patterns with specific origins

### Structural Dissociation Model

More advanced understanding:
- **Apparently Normal Part (ANP)**: Handles daily life, often Adult-like
- **Emotional Parts (EPs)**: Contain emotional memories and responses
- These can correlate with TA's ego states but are more nuanced

### Mapping Ego States

**Step 1: Identify Observable Markers**
- Voice quality (tone, pace, volume)
- Body posture and movement
- Facial expression
- Language patterns (words, phrases, speech patterns)
- Emotional tone
- Relationship to time (past, present, future orientation)

**Step 2: Identify Triggers**
- What circumstances activate each ego state?
- What people, topics, or situations?
- What time of day or physical state?

**Step 3: Identify Functions**
- What does each ego state do for the person?
- What purpose does it serve?
- What does it protect or accomplish?

**Step 4: Identify Relationships Between States**
- Which states are cooperative?
- Which are conflicted?
- Which rarely appear together?
- Are there state switches that are particularly dramatic?

### Multiplicity and Complexity

People aren't simply "in" one ego state. Complex situations involve:
- **Primary state**: Most visible/dominant
- **Secondary states**: Underlying or emerging
- **Conflict**: Different states wanting different things
- **Confusion**: Not knowing which state is leading

### Working with Ego State Complexity

**Validation**: Each ego state has a positive intention, even problematic ones

**Communication**: Learn to speak to different ego states appropriately

**Integration**: Over time, facilitate cooperation between states

**Flexibility**: Help expand the person's range of ego state options

### Ego State in Therapy

**When to work with ego states directly:**
- Clear state switches
- Ego state conflicts causing problems
- Specific ego states holding trauma or resources
- Personality disorders with ego state complexity

**When to keep it simple:**
- Less complex situations
- When detailed mapping would overwhelm
- When the person benefits from simpler framing

### Red Flags and Cautions

- Don't overcomplicate when simplicity suffices
- Don't impose ego state frameworks that don't fit
- Be cautious with severe trauma and dissociation
- Know when you're out of your depth

> **Practice**: Observe people in different situations. Can you identify shifts in ego state? What markers do you notice?

---

*Next: Advanced game analysis*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 35,
      prerequisites: ['ta-2-3'],
      professional: true,
    },
    {
      id: 'ta-prof-2',
      title: 'Script Cure and Rewriting',
      content: `# Script Cure: The Deepest Work

## What Is Script Cure?

**Script cure** is the process of fundamentally rewriting the unconscious life plan. It goes beyond awareness into deep transformation.

## Understanding Script Depth

### Script Beliefs
- Core beliefs about self, others, world
- "I am...", "People are...", "Life is..."
- Often formed in childhood
- Operate unconsciously

### Script Decisions
- Decisions made in response to early experiences
- "I'll never...", "I must always...", "I can't..."
- Made by a younger self with limited understanding
- Can be revised with adult awareness

### Script Behaviors
- Patterns of behavior that enact the script
- Relationship patterns, career choices, life trajectory
- Often feel "natural" or "just who I am"
- Can be changed with awareness and new choices

## The Script Cure Process

### Phase 1: Full Awareness
- Complete identification of script elements
- Origins understood (not just intellectually, but emotionally)
- Impact fully recognized
- No more unconscious enactment

### Phase 2: Grief and Release
- Grieving what the script cost
- Letting go of identification with the script
- Mourning the child who needed that script
- Saying goodbye to old identity

### Phase 3: New Decisions
- Adult makes new decisions
- Based on current reality, not past limitations
- Tested and reinforced through experience
- Integrated into sense of self

### Phase 4: New Living
- Script behaviors replaced with chosen behaviors
- New patterns become natural
- Old script triggers no longer control
- Freedom to respond freshly

## Techniques for Script Work

### Script Analysis Interview
Systematic exploration of:
- Early memories and messages
- Parental messages (stated and implied)
- Childhood decisions
- Recurring life patterns
- Core beliefs about self

### Empty Chair Work
- Dialogue between different parts
- Script-bound part and free part
- Parent messages and adult understanding
- Past self and present self

### Re-decision Work
- Return to the moment of original decision (imaginally)
- Adult awareness present
- Make new decision with full understanding
- Practice new way of being

### Dream Work
- Scripts often appear in dreams
- Dream characters may represent ego states
- Dream analysis can reveal script patterns
- New dreams may signal change

### Writing and Narrative
- Write your life story from new perspective
- Rewrite key scenes with new understanding
- Create new life narrative

## Signs of Script Cure

- Old patterns don't automatically trigger
- Can choose responses rather than reacting
- Greater range of emotional and behavioral options
- Relationships change in positive ways
- Sense of freedom and authenticity
- Old dreams may change or cease
- Life trajectory shifts

## Cautions

- Script cure is profound work
- May need professional support
- Can bring up difficult material
- Pace appropriately
- Integration takes time

> **Reflection**: What scripts do you notice in your own life? What would script cure look like for you?

---

*Next: Teaching TA to others*`,
      type: 'theory',
      difficulty: 5,
      estimatedMinutes: 40,
      prerequisites: ['ta-prof-1'],
      professional: true,
    },
  ],

  // ==================== ERICKSONIAN HYPNOTHERAPY (EXPANDED) ====================
  erickson_hypnosis: [
    {
      id: 'eh-prof-1',
      title: 'Advanced Trance Phenomena',
      content: `# Advanced Trance Phenomena

## Beyond Basic Trance: Understanding the Full Range

### Ideomotor Responses

**What They Are**:
- Involuntary muscle movements in response to suggestions or questions
- Finger signals (yes/no, numbers)
- Arm levitation, hand clasp, magnetic hands
- Pupil dilation, swallowing, sighing

**Uses**:
- Yes/no communication when verbal response is difficult
- Accessing unconscious knowledge
- Demonstration of unconscious influence
- Building trance through successful responses

**Principles**:
- Can be conscious or unconscious
- Should be validated as genuine responses
- Can be influenced by expectation
- Need clear signal interpretation

### Amnesia

**Types**:
- **Spontaneous**: Naturally occurring in deeper trance
- **Suggested**: Suggested forgetting, often of the session or specific material
- **Functions**: Protection, focusing, creating space for new learning

**Applications**:
- Reducing post-session discomfort
- Temporarily setting aside troubling material
- Creating freshness for new experiences
- Demonstration of mind's capability

**Cautions**:
- Reversibility important
- Don't use to avoid necessary processing
- Ethical considerations around memory

### Time Distortion

**Types**:
- Time passing quickly (common in trance)
- Time passing slowly (less common, can be suggested)
- "Traveling" to past or future (subjective experience)

**Applications**:
- Making long sessions feel manageable
- Future pacing (experiencing future in present)
- Processing past material in present context
- Creating sense of adequate time for work

### Dreams and Dream-Like Experience

**In Trance**:
- Dreamy, symbolic experience
- Non-linear narrative
- Emotional and metaphorical content
- Can feel very real

**Uses**:
- Accessing unconscious material
- Problem-solving through imagery
- Processing emotional material
- Creative inspiration

### Catalepsy

**What It Is**:
- Muscle rigidity or fixed posture
- Limbs remaining in positioned place
- Can affect any muscle group

**Uses**:
- Demonstration of mind-body connection
- Building trance depth
-Creating doubt about voluntary vs. involuntary
- Foundation for other phenomena

### Anaesthesia and Analgesia

**Anaesthesia**: Complete loss of sensation
**Analgesia**: Reduced pain sensation

**Applications**:
- Pain management
- Medical procedures
- Dental work
- Chronic pain conditions

**Important Notes**:
- Should not replace necessary medical care
- Works best as part of comprehensive approach
- Training and practice required
- Not everyone can achieve profound anaesthesia

### Hallucinations

**Positive Hallucinations**: Seeing/hearing things not present
**Negative Hallucinations**: Not seeing/hearing things that are present

**Applications**:
- Demonstration effects (with proper context)
- Changing perceptual experience
- Addressing problematic perceptions

**Cautions**:
- Can be disturbing for some
- Need to distinguish from psychotic symptoms
- Proper screening required

### Age Regression and Progression

**Age Regression**: Subjective return to earlier age
- Can access earlier memories and experiences
- Can access earlier resources and states
- May include behavioral, cognitive, emotional aspects

**Age Progression**: Subjective move to future age
- Future pacing
- Rehearsing new ways of being
- Accessing future wisdom

**Important Distinctions**:
- **Revivification**: Complete return, amnesia for present
- **Guided imagery**: Visiting while maintaining present awareness
- Memory reliability: "Recovered" memories may not be accurate
- Not a truth machine - memories are reconstructed

### Spiritual and Transcendent Experiences

Some people experience:
- Sense of connection to something larger
- Profound peace or clarity
- Insights that feel beyond ordinary understanding
- Mystical or numinous quality

**Approach**:
- Respect the experience
- Don't impose interpretation
- Help integrate if useful
- Recognize when beyond your scope

## Developing Your Capacity

These phenomena:
- Develop with practice (yours and theirs)
- Are natural capacities, not supernatural
- Work better with some people than others
- Shouldn't be forced or chased

Focus on the person, not the phenomenon. Phenomena will emerge when appropriate.

> **Practice**: Experiment with ideomotor signals with willing partners. Notice the subtleties of response.

---

*Next: Complex induction methods*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 45,
      prerequisites: ['eh-3-1'],
      professional: true,
    },
    {
      id: 'eh-prof-2',
      title: 'Rapid and Instant Inductions',
      content: `# Rapid Induction Methods

## When Speed Matters

Rapid inductions serve various purposes:
- Demonstrating responsiveness
- Working with time-limited situations
- Building confidence through quick success
- Breaking through resistance
- Therapeutic urgency (crisis situations)

## Principles of Rapid Induction

### 1. Surprise and Pattern Interrupt
- Unexpected action breaks usual patterns
- Creates moment of uncheckability
- Conscious mind can't immediately evaluate
- Opportunity for suggestion in that moment

### 2. Intensity and Focus
- High-intensity experience commands attention
- All resources go to what's happening
- Less capacity for resistance or evaluation

### 3. Utilizing Existing Responsiveness
- Build on what's already happening
- Don't fight the current; ride it
- Look for the opening and move through it

### 4. Confidence and Authority
- Your confidence affects their response
- Hesitation invites hesitation
- Clear, decisive action carries more weight

### 5. Pre-Induction Setup
- Even rapid inductions benefit from prior work
- Rapport, expectation, willingness all help
- "Quickly" doesn't mean "without preparation"

## Common Rapid Induction Methods

### The Handshake Induction
- Initiate handshake
- At moment of connection, alter pattern (grip, direction, eye contact)
- Use the confusion/surprise to introduce trance
- Guide into relaxation

### The Shock Induction
- Sudden, unexpected stimulus (touch, sound, movement)
- Simultaneous deepening suggestion
- "Sleep!" or similar command at moment of surprise
- Requires skill and appropriate context

### The Pattern Interrupt Arm Pull
- Extend hand as if to shake
- When they respond, pull arm slightly while pushing shoulder
- Off-balance moment creates opening
- Suggestion follows immediately

### The Count-Exception Induction
- "Count from 1 to 10 and feel yourself becoming more relaxed..."
- At some point before 10, interrupt with deepening
- "And at 4, you can just let go completely..."
- Exploits the established pattern

### The Visual Fixation Snap
- Intense visual focus on a point
- Eyes fatigue naturally
- At moment of fatigue, introduce trance
- Eye closure carries into mental shift

### Confusion-Based Rapid Induction
- Rapid, confusing language pattern
- Overwhelm conscious processing
- Insert suggestion in confusion
- "And you don't need to understand..."

## When to Use Rapid Inductions

**Appropriate**:
- When speed serves the purpose
- With responsive, willing subjects
- In appropriate settings
- With proper skill and caution

**Caution Required**:
- With fragile or traumatized individuals
- When surprise could be harmful
- In public or performance contexts (ethics of surprise)
- Without adequate rapport

**Generally Avoid**:
- With people who have experienced trauma involving similar actions
- Without clear consent
- As "trick" without context
- When gentler methods would work

## The Shock Factor

Rapid inductions often involve surprise or mild shock. Consider:

- Is this person likely to respond well to surprise?
- Are there trauma considerations?
- Is the context appropriate?
- What's my purpose and is it served by speed?

## After Rapid Induction

- Allow settling and adjustment
- Check in on the person's experience
- Provide grounding if needed
- Use the state effectively (don't waste the induction)

> **Practice**: Each rapid induction requires practice. Work with willing partners. Develop your timing, confidence, and sensitivity.

---

*Next: Working with complex clients*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 35,
      prerequisites: ['eh-prof-1'],
      professional: true,
    },
  ],

  // ==================== CLINICAL HYPNOTHERAPY ====================
  clinical_hypnosis: [
    {
      id: 'clin-1-1',
      title: 'Clinical Applications Overview',
      content: `# Clinical Hypnotherapy: Overview

## What Makes Clinical Hypnotherapy Different

Clinical hypnotherapy applies hypnosis within a therapeutic framework:
- Assessment and formulation
- Treatment planning
- Therapeutic goals
- Integration with other approaches
- Professional ethics and standards
- Documentation and accountability

## Common Applications

### Anxiety Disorders
- Generalized anxiety
- Panic disorder
- Social anxiety
- Specific phobias
- Performance anxiety

**Approaches**:
- Relaxation training
- Resource development
- Exposure-based work (carefully done)
- Cognitive restructuring with hypnosis
- Self-hypnosis training

### Depression
- Mild to moderate depression
- As adjunct to other treatments
- Focus on resources, hope, behavioral activation

**Cautions**:
- Not primary treatment for severe depression
- Suicide risk must be assessed and addressed
- Work collaboratively with other providers

### Pain Management
- Chronic pain
- Acute pain (procedural, surgical)
- Pain-related distress
- Improving function

**Approaches**:
- Anaesthesia/analgesia suggestions
- Distraction and dissociation
- Altering pain perception
- Addressing emotional component of pain
- Improving coping

### Habit Change
- Smoking cessation
- Weight management
- Nail biting, hair pulling
- Other habitual behaviors

**Approaches**:
- Understanding function of habit
- Alternative behaviors
- Motivational enhancement
- Relapse prevention
- Addressing underlying factors

### Trauma and PTSD
- **Requires specialized training**
- Stabilization first
- Careful titration of exposure
- Resource development essential
- Integration with trauma-focused therapies

**Cautions**:
- Don't push into trauma before ready
- Dissociation complicates work
- May need to work with other professionals
- Know your limits

### Gastrointestinal Disorders
- IBS (Irritable Bowel Syndrome)
- Gut-directed hypnotherapy has strong evidence
- Can reduce symptoms significantly

### Skin Conditions
- Psoriasis
- Eczema
- Warts
- Chronic skin conditions with stress component

### Insomnia and Sleep Problems
- Sleep onset issues
- Sleep maintenance
- Nightmares (careful approach)
- Sleep hygiene plus hypnosis

### Preparation for Medical Procedures
- Surgery preparation
- Childbirth (Hypnobirthing)
- Dental procedures
- Reduces anxiety and sometimes need for anesthesia

### Psychosomatic Conditions
- Conditions with psychological factors
- Somatic symptom disorders
- Conversion symptoms (specialized work)

## Conditions Where Caution Is Required

### Psychosis and Severe Mental Illness
- Hypnosis can be destabilizing
- Generally contraindicated without psychiatric oversight
- Risk of worsening dissociation or confusion

### Severe Depression with Suicide Risk
- Requires psychiatric care first
- Hypnosis as adjunct only
- Safety planning essential

### Severe Dissociative Disorders
- Requires specialized training
- Risk of destabilization
- Work with mental health professionals

### Substance Dependence
- Can be helpful but complex
- Often needs comprehensive treatment
- Don't oversimplify

## The Clinical Process

### Assessment
- Reason for referral/presentation
- History (including trauma, mental health, medical)
- Current symptoms and functioning
- Goals
- Suitability for hypnotherapy
- Risk assessment
- Other treatments involved

### Formulation
- Understanding the person's difficulties
- How hypnosis might help
- What approach seems indicated
- What to watch for

### Treatment Plan
- Goals (specific, collaborative)
- Methods to be used
- Sequence of work
- Estimated duration
- How progress will be evaluated

### Sessions
- Check-in
- Review
- Induction and work
- Post-trance processing
- Homework or suggestions
- Next session plan

### Evaluation and Conclusion
- Progress toward goals
- What worked and didn't
- Plan for maintenance
- When to conclude or refer

## Documentation

Clinical work requires appropriate documentation:
- Intake summary
- Treatment plan
- Session notes
- Progress notes
- Termination summary

Maintain confidentiality, appropriate detail, professionalism.

## Working with Other Professionals

Often you'll work as part of a team:
- With physician: medical issues, pain, procedural prep
- With psychologist/psychiatrist: mental health conditions
- With physical therapist: rehabilitation
- With other therapists: integrated care

Communication, consent, and clear roles are essential.

> **Exercise**: For each condition above, consider: What makes hypnosis helpful? What are the risks? What special training might be needed?

---

*Next: Building therapeutic rapport*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 35,
      prerequisites: [],
      professional: true,
    },
    {
      id: 'clin-1-2',
      title: 'Therapeutic Assessment and Formulation',
      content: `# Assessment and Formulation in Clinical Work

## The Importance of Assessment

Good clinical work begins with good understanding. Assessment isn't just intake - it's the foundation for everything that follows.

## Areas to Assess

### Presenting Problem
- What brings them now?
- How long has this been an issue?
- How severe is it?
- How does it affect their life?
- Previous attempts to address it?
- What do they hope for?

### Medical History
- Current medical conditions
- Medications
- Previous treatments
- Sleep, appetite, energy
- Pain issues
- Any neurological conditions

### Mental Health History
- Previous therapy or psychiatric treatment
- Diagnoses (if any)
- Hospitalizations
- Self-harm or suicide history
- Trauma history
- Substance use
- Family mental health history

### Psychological Factors
- Coping styles
- Personality patterns
- Attachment style
- Defense mechanisms
- Cognitive patterns
- Emotional regulation
- Relationship patterns

### Social and Contextual Factors
- Current life situation
- Relationships and support
- Work and finances
- Living situation
- Cultural background
- Spiritual/religious context

### Strengths and Resources
- What's working in their life?
- What strengths do they have?
- What support do they have?
- What have they overcome before?
- What gives them meaning?

### Capacity for Hypnosis
- Previous experience with hypnosis
- Responsiveness to suggestion
- Expectation and motivation
- Ability to focus and relax
- Any concerns or fears about hypnosis

## Formulation: Making Sense of the Information

### Biopsychosocial Formulation
- **Biological**: Medical factors, genetics, physiology
- **Psychological**: Thoughts, emotions, behaviors, personality
- **Social**: Relationships, context, culture, environment

### Cognitive-Behavioral Formulation
- Situations/triggers
- Thoughts/beliefs
- Emotions
- Behaviors
- Physical sensations
- How they interact and maintain problems

### Psychodynamic Formulation
- Unconscious conflicts
- Defense mechanisms
- Relational patterns
- Early experiences
- Transference patterns

### Hypnotic Formulation
- How might hypnosis help?
- What approach seems indicated?
- What trance phenomena might be useful?
- What language patterns fit?
- What to be cautious about?

## Developing Your Formulation Skills

### Look for Patterns
- What connects the information?
- What themes emerge?
- What maintains the problem?
- What would help?

### Consider Multiple Perspectives
- Don't settle on first explanation
- Different formulations suggest different approaches
- Remain open to revision

### Share Formulation (Appropriately)
- Can help person understand their experience
- Collaborative understanding
- Basis for shared goals

### Revise Over Time
- Formulations aren't fixed
- New information updates understanding
- Response to intervention teaches you

## Risk Assessment

### Suicide Risk
- Active suicidal ideation?
- Plan, means, intent?
- Previous attempts?
- Protective factors?
- What level of care is needed?

### Harm to Others
- Violence risk?
- Specific threats?
- Capacity for violence?
- Protective factors?

### Vulnerability
- At risk of exploitation?
- Severe impairment?
- Unable to care for self?
- Child or elder safety concerns?

### When to Refer or Escalate
- Risk beyond your competence
- Need for higher level of care
- Psychiatric concerns
- Need for medical evaluation

## Documentation of Assessment

Keep clear records:
- Presenting problem and history
- Assessment findings
- Risk assessment
- Formulation
- Treatment plan
- Consent documentation
- Referrals and coordination

> **Practice**: Review case examples. Practice developing formulations. Compare with experienced clinicians' formulations.

---

*Next: Specific therapeutic techniques*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 40,
      prerequisites: ['clin-1-1'],
      professional: true,
    },
  ],

  // ==================== BODY LANGUAGE & NONVERBAL (EXPANDED) ====================
  body_language: [
    // Previous lessons plus advanced content
    {
      id: 'bl-prof-1',
      title: 'Advanced Microexpression Training',
      content: `# Advanced Microexpression Mastery

## Beyond Basic Recognition: Professional-Level Skills

### The Facial Action Coding System (FACS)

**Comprehensive System**:
- 44 Action Units (AUs) describing individual muscle actions
- Combinations create expressions
- Objective, observable, trainable

**Key AUs for Professionals**:
- **AU 1**: Inner brow raiser
- **AU 2**: Outer brow raiser
- **AU 4**: Brow lowerer
- **AU 5**: Upper lid raiser
- **AU 6**: Cheek raiser (orbicularis oculi) - key for genuine smile
- **AU 7**: Lid tightener
- **AU 9**: Nose wrinkle
- **AU 12**: Lip corner puller - key for smile
- **AU 15**: Lip corner depressor
- **AU 17**: Chin raiser
- **AU 23**: Lip tightener
- **AU 25**: Lips part
- **AU 26**: Jaw drop
- **AU 27**: Mouth stretch

### Emotion Signatures

**Happiness/Joy**:
- AU 6 + AU 12 = Duchenne smile (genuine)
- AU 12 alone = non-Duchenne (can be polite/fake)
- Cheek raising, eye narrowing, crow's feet

**Sadness**:
- AU 1 + AU 2 + AU 4 (brow complex)
- AU 15 (lip corner depressor)
- Often asymmetrical
- Inner brows raised and together is most reliable

**Anger**:
- AU 4 (brow lowerer) - most reliable marker
- AU 5 (upper lid raise) or AU 7 (lid tighten)
- AU 23 (lip tightener) or AU 24 (lip presser)
- Jaw thrust possible
- Flaring nostrils (AU 38)

**Fear**:
- AU 1 + AU 2 (brow raise and draw together) - different from surprise
- AU 5 (upper lid raise)
- AU 20 (lip stretch) - horizontal mouth
- AU 26 (jaw drop) possible but less than surprise
- Freezing common

**Surprise**:
- AU 1 + AU 2 + AU 5 (brow raise, eyes wide)
- AU 26 or AU 27 (jaw drop)
- Brief duration (prolonged = performance)
- Different from fear (jaw drop vs. lip stretch)

**Disgust**:
- AU 9 (nose wrinkle) - key marker
- AU 10 (upper lip raise)
- Can generalize to moral disgust
- Eyes may narrow

**Contempt**:
- AU 14 (dimple) - one-sided
- Only reliably asymmetric universal expression
- Slight sneer quality
- Indicates moral judgment, superiority

**Surprise vs. Fear Distinction**:
- Surprise: brow raise high and curved, jaw drops
- Fear: brows pulled together, lip stretch horizontal, no jaw drop usually

### Intensity and Duration

**Intensity**:
- Subtle: barely detectable AUs
- Moderate: clear but not extreme
- Strong: full muscle engagement
- Different intensities matter differently

**Duration**:
- **Macroexpressions**: 0.5-4 seconds, visible to most
- **Microexpressions**: 1/25-1/5 second, trained detection
- **Macro to micro transition**: expressions that start macro then get cut off

### Asymmetry and Its Meaning

- Genuine emotions tend toward symmetry
- Asymmetry can indicate:
  - Performance/fabrication
  - Mixed emotions
  - Suppression
  - Weak or uncertain emotion

- But some asymmetry is normal in everyone
- Need baseline for comparison
- Don't overinterpret single instances

### display Rules

**Cultural Display Rules**:
- How emotions are expressed (or suppressed) in different cultures
- Can affect what's visible
- Some cultures value emotional control more
- Some encourage expressiveness

**Individual Display Rules**:
- Personal habits around emotional expression
- Family culture around emotions
- Gender socialization
- Professional training

### The Complexity of Real Expressions

Real emotions are often:
- **Blends**: Multiple emotions simultaneously or rapidly
- **Masked**: One emotion covering another
- **Ambiguous**: Hard to categorize
- **Subtle**: Low intensity, hard to detect
- **Partial**: Some markers present, some absent

### Training Methods

**FACS Training**:
- Official FACS manual and training
- Practice with still images and video
- Dr. Paul Ekman's METT (Microexpression Training Tool)
- Action Unit identification practice

**Practical Development**:
- Watch diverse video content
- Focus on one AU at a time
- Try to identify before seeing full context
- Practice with friends (ethical considerations)
- Develop your own sensitivity over time

### Limitations and Cautions

- Microexpressions indicate emotion, not truth/deception
- Some people naturally have harder-to-read faces
- Neurodivergence can affect expression
- Context changes everything
- Don't become so focused on faces you miss other information
- Professional use requires training and ethical awareness

> **Advanced Practice**: Set up systematic practice sessions. Use FACS training materials. Track your accuracy over time.

---

*Next: Voice and paralinguistic analysis*`,
      type: 'theory',
      difficulty: 5,
      estimatedMinutes: 45,
      prerequisites: ['bl-2-3'],
      professional: true,
    },
    {
      id: 'bl-prof-2',
      title: 'Voice Analysis and Paralinguistics',
      content: `# Voice Analysis: What Speech Reveals

## Beyond Words: The Information in How We Speak

### The Paralinguistic Channel

**Paralinguistics** = how something is said, beyond the words:
- Pitch (high/low)
- Volume (loud/soft)
- Pace (fast/slow)
- Rhythm (regular/irregular)
- Timbre (quality/tone)
- Pauses and hesitations
- Non-verbal sounds (sighs, laughs, gasps)

### What Voice Reveals

#### Pitch Changes
- **Pitch elevation**: Often signals arousal, emotion, uncertainty, or deception attempts
- **Pitch drop**: Can signal confidence, authority, or completion
- **Monotone**: Can indicate depression, boredom, dissociation, or deliberate control
- **Excessive variability**: Can indicate emotional arousal or instability

#### Volume Changes
- **Increased volume**: Can signal anger, confidence, enthusiasm, or attempt to dominate
- **Decreased volume**: Can signal insecurity, fatigue, or intimacy
- **Inconsistent volume**: Can indicate uncertainty or emotion

#### Pace Changes
- **Accelerated speech**: Excitement, anxiety, trying to fit in a lot
- **Slowed speech**: Depression, fatigue, contemplation, or deliberate control
- **Irregular pace**: Can indicate cognitive load, emotion, or deception

#### Pause Patterns
- **Filled pauses** (um, uh, er): Cognitive load, uncertainty, buying time
- **Unfilled pauses**: Can be thoughtful or avoidant
- **Increased pauses**: Can indicate cognitive load, emotion, or fabrication
- **Dramatic pauses**: Can be natural or performed

#### Speech Errors
- **Stuttering/stammering**: Can increase with stress
- **Slips of tongue**: Can reveal unconscious material (Freudian slips)
- **Wrong words**: Can indicate cognitive load or emotional arousal
- **Corrections**: Can indicate uncertainty or editing

#### Voice Quality
- **Tremor**: Anxiety, emotion, fatigue
- **Breathiness**: Various causes, can indicate emotion
- **Nasal quality**: Can increase with certain states
- **Tension**: Tight, constricted quality
- **Relaxation**: Loose, easy quality

### Stress and Cognitive Load Indicators

**Increased Cognitive Load May Show As**:
- Slower response time
- More pauses and hesitations
- Simpler language
- Fewer details (or sometimes more irrelevant details)
- Reduced fluency
- Increased "um/uh"
- Less varied pitch

**Important**: These are indicators of LOAD, not necessarily deception. Truthful material can also create load.

### Deception and Voice

**Common Beliefs vs. Reality**:
- **Belief**: Liars' voices change in predictable ways
- **Reality**: Some liars show changes, some don't, some truthful people show same changes
- **Research**: Some evidence for increased pitch, pauses in some contexts
- **But**: No reliable single indicator; context and baseline essential

**What May Sometimes Occur**:
- Subtle pitch increase
- More pauses or hesitations
- Reduced fluency
- Changes in volume control
- But all of these can also indicate stress, not just deception

### Emotional Content in Voice

**Fear**: Higher pitch, possible tremor, faster pace, tense quality
**Anger**: Lower pitch, increased volume, sharper articulation, faster pace
**Sadness**: Lower pitch, slower pace, reduced volume, monotone quality
**Happiness**: Higher pitch variability, moderate pace, warm quality
**Contempt**: Can have sneering quality, dismissive tone
**Surprise**: Sudden change, pitch spike, brief

### Voice in Different Contexts

**Clinical/Therapeutic**:
- Voice indicates emotional state
- Changes over course of session/ therapy
- Congruence with content
- Signs of progress or difficulty

**Investigation/Interview**:
- Baseline essential
- Changes from baseline meaningful
- But many confounds
- Never diagnostic alone

**Performance/Presentation**:
- Voice carries authority, confidence, connection
- Can be trained and developed
- Authenticity vs. performance

**Everyday Interaction**:
- Voice reveals emotional state
- Congruence with other channels
- Relationship dynamics

### Developing Voice Sensitivity

**Practice Methods**:
- Listen without watching (audio only)
- Try to identify emotional state
- Compare with visual information
- Notice your own voice in different states
- Record and review your own speech

**Develop Vocabulary**:
- More precise descriptions
- Not just "nervous" but what specifically
- Build nuanced perception

### Limitations

- Voice is just one channel
- Cultural and individual variation
- Physical conditions affect voice
- Don't overinterpret
- Never use voice alone for important judgments

> **Exercise**: Listen to a recorded conversation (with permission/pre-existing). Focus only on vocal qualities, not words. What do you notice? Then add words back in.

---

*Next: Behavioral prediction fundamentals*`,
      type: 'theory',
      difficulty: 4,
      estimatedMinutes: 40,
      prerequisites: ['bl-prof-1'],
      professional: true,
    },
  ],

  // ==================== MENTALISM ====================
  mentalism: [
    {
      id: 'ment-1-1',
      title: 'Introduction to Professional Mentalism',
      content: `# What Is Professional Mentalism?

## Definition

**Mentalism** is a performing art that creates the illusion of extraordinary mental abilities:
- Mind reading
- Prediction
- Psychic phenomena
- Extraordinary memory
- Influence and control

It combines:
- Psychology and suggestion
- Magic techniques and methods
- Observation and deduction
- Performance and presentation
- Psychology of belief and perception

## Mentalism vs. Related Fields

### Mentalism vs. Magic
- Magic: Physical effects (sleights, gimmicks, misdirection)
- Mentalism: Psychological effects (mind, thought, perception)
- Many mentalists also know magic
- Some effects blur the line

### Mentalism vs. Psychic Claims
- **Mentalism**: Presented as art/performance (when done ethically)
- **Psychic claims**: Presented as genuine paranormal ability
- Ethical mentalists are clear about their art
- Unethical mentalists exploit belief

### Mentalism vs. Psychology
- **Psychology**: Scientific study of mind and behavior
- **Mentalism**: Artistic application of psychological principles
- Mentalism uses psychology but is performance, not treatment

## The Elements of Mentalism

### 1. The Effect
What the audience experiences:
- "I read your mind"
- "I knew what you would choose"
- "I can tell your past"
- "My assistant can identify your card"

### 2. The Method
How the effect is achieved:
- **Psychological**: Suggestion, forcing, cold reading
- **Physical**: Hidden information, confederates, gimmicks
- **Mathematical**: Self-working principles
- **Observational**: Reading tells, deducing
- **Memory-based**: Mnemonics, recall

### 3. The Presentation
How the method is framed:
- Story and context
- Character and persona
- Language and framing
- Building the experience

### 4. The Performance
Actual execution:
- Timing and pacing
- Body language and presentation
- Handling of participants
- Managing environment and conditions

## Types of Mentalism Effects

### Mind Reading
- Thought identification
- "Telepathy" effects
- Reading what someone is thinking

### Prediction
- Predicting choices in advance
- Pre-written predictions
- Stacked decks and forces

### Cold Reading
- Making specific-seeming statements about strangers
- Using probability, observation, and feedback
- Creating impression of deep knowledge

### Hot Reading
- Having information in advance
- Research, confederates, technology
- More controversial ethically

### Memory Effects
- Extraordinary memory demonstrations
- Mnemonics and memory techniques
- Memory improvement framed as "psychic" or extraordinary

### Psychological Forcing
- Making someone feel they have free choice
- Actually influencing the outcome
- Elaborate psychological forces

### ESP and Psychic Effects
- Zener cards, telepathy demonstrations
- Often methods create the illusion
- Can be presented as demonstration of principles

### Mediumship-style Effects
- Appearing to contact the "other side"
- Reading about people in audience
- Significant ethical considerations

## Ethics in Mentalism

### Honesty About Your Art
- Are you presenting as genuine psychic ability?
- Or as psychological art and performance?
- There's a spectrum of presentation
- Consider the implications

### Vulnerable Audience Members
- Some may take mentalism seriously
- Some may make decisions based on readings
- Some may be grieving and vulnerable
- Consider the impact of your performance

### Claiming Abilities
- If you claim genuine psychic ability, that's a claim needing evidence
- If you present as performer/mentalist, that's different
- Be clear and honest about what you're doing

### After the Show
- Don't encourage belief in paranormal
- Don't take advantage of those who believe
- Be ethical in follow-up interactions

## The Skills of Mentalism

1. **Psychology**: Understanding how people think, decide, and believe
2. **Observation**: Reading people, situations, tells
3. **Suggestion**: Influencing subtly
4. **Performance**: Presentation, timing, character
5. **Methods**: Techniques, forces, gimmicks, preparation
6. **Memory**: Mnemonics, recall, association
7. **Deductive Reasoning**: Thinking on your feet
8. **Misdirection**: Attention management
9. **Storytelling**: Creating compelling narratives
10. **Ethics**: Knowing how to present responsibly

## Famous Mentalists (Study Them)

- **Joseph Dunninger** - Early master, radio era
- **Kreskin** - Challenge-based mentalism
- **The Amazing Kreskin** - Still performing
- **Banachek** - Mentalism and skepticism
- **Derren Brown** - Modern psychological mentalism, TV
- **Lior Suchard** - International mind reader
- **Max Maven** - Innovative mentalist, consultant
- **Ted Korange** - Mentalism and audience participation
- **Keith Barry** - TV mentalism
- **Omega Truxton** - Contemporary

Watch their performances. Analyze their methods. Study their presentation. Learn their timing.

> **Exercise**: Watch a mentalism performance video. Try to figure out the method. Then research if you can find explanations. Consider the ethics of the presentation.

---

*Next: The art of cold reading*`,
      type: 'theory',
      difficulty: 2,
      estimatedMinutes: 30,
      prerequisites: [],
      professional: true,
    },
    {
      id: 'ment-1-2',
      title: 'Cold Reading Fundamentals',
      content: `# Cold Reading: The Foundation of Mental Reading

## What Is Cold Reading?

**Cold reading** is the art of making specific-seeming statements about someone you don't know, using:
- Observation
- Probability and statistics
- Language patterns
- Feedback interpretation
- Psychological principles

It creates the impression of deep knowledge or psychic ability.

## The Cold Reading Process

### Phase 1: Observation (The "Read")
Before speaking, observe:
- Age, gender, approximate socioeconomic status
- Clothing, grooming, style
- Body type, posture, movement
- Facial features, expression
- Carries, accessories
- Energy level, confidence, mood
- Who they're with, how they interact

This gives you information to work with.

### Phase 2: The Rainbow Ruse
Describe a personality trait and its opposite:
- "You're usually quite patient, though when pushed too far you can lose your temper"
- "You're generally optimistic, but you have your moments of doubt"
- "You're outgoing, though you also value quiet time"

This covers almost everyone - most people are somewhere in the middle of spectrums.

### Phase 3: Tomorrow's News
Make statements that could apply to almost anyone:
- "You've been feeling uncertain about something lately"
- "There's someone in your life you haven't fully forgiven"
- "You're at a transition point in some area"
- "You've been worrying about someone's health"

### Phase 4: Fuzzy Language
Use ambiguous statements that can mean many things:
- "I'm sensing an older male figure..."
- "There's a feeling around the chest area..."
- "Something related to travel or movement..."
- "A name starting with M or N perhaps..."

### Phase 5: Feedback Loop
- Make a statement
- Watch for response (facial, body, verbal)
- Positive response: reinforce and expand
- Negative/uncertain: pivot or reframe
- No response: move on

The feedback guides your next statements.

### Phase 6: The Barnum Effect
People tend to accept vague, general statements as highly accurate for them personally. This is the **Barnum Effect** (named after circus owner P.T. Barnum: "We have something for everyone").

Examples:
- "You have a need for other people to like and admire you"
- "You have a tendency to be critical of yourself"
- "You have a great deal of unused capacity"
- "While you have some personality weaknesses, you are generally able to compensate for them"

Virtually everyone can relate to these.

### Phase 7: Shotgun Statements
Make multiple statements quickly:
- "I'm getting something about a journey... or maybe a change of location... or perhaps something ending and beginning..."
- Some will hit, some won't
- Hit statements remembered, misses forgotten

### Phase 8: Confirmation Bias
People naturally:
- Remember the hits
- Forget the misses
- Interpret ambiguous statements to fit
- Fill in details themselves

This works in the reader's favor.

## Cold Reading Techniques in Detail

### Statistical Probabilities
- Most people have siblings
- Most people have experienced loss
- Most people have career concerns
- Most people have relationship history
- Use what's probable as your base

### Fishing
- Make a statement that prompts information
- "You've been through something difficult recently...?"
- If they confirm, you get information
- If they question, you can backtrack: "I'm not sure, just a feeling"

### FNIO (Figure Number Initial Object)
- Start vague, get more specific based on feedback
- "A female... in her 60s?... with an M name... connected to water or travel..."
- Each detail narrows based on their response

### Rainbow Statements
- Everyone has some of every trait
- Frame traits with flexibility
- "You can be X, though sometimes you're more Y"

### Weepers (Statements That Elicit Emotional Response)
- Mention loss, difficulty, or meaningful experiences
- Can create emotional connection
- But be careful - don't manipulate grief

### The Pique Technique
- Do something slightly unusual that makes people curious
- "I have a feeling about the number 7..."
- Curiosity opens people to suggestion

## Cold Reading Ethics

### For Entertainment
- Clearly present as entertainment/performance
- Don't pretend to be psychic if you're a mentalist
- People can enjoy the art while knowing it's skill

### For Other Purposes
- **Therapy**: Cold reading has no place in therapy
- **Consulting**: Be honest about your methods
- **Advice**: Don't give life advice based on cold reading
- **Vulnerability**: Extra caution with vulnerable people

### What to Avoid
- Pretending to be psychic when you're not
- Encouraging belief in paranormal abilities
- Taking advantage of grief or vulnerability
- Making important decisions seem dependent on your reading
- Creating dependency on you

## Developing Cold Reading Skills

### Practice Components
1. **Observation**: Practice observing people in various settings
2. **Probability**: Learn what's common and uncommon
3. **Language**: Practice ambiguous, flexible language
4. **Feedback reading**: Learn to read micro-responses
5. **Storytelling**: Make statements interesting and compelling
6. **Control**: Manage the flow and pace

### Study Resources
- Cold reading books and resources
- Psychology of belief and perception
- Performance and presentation
- Observation and deduction practice

### Practice Methods
- Practice with friends (with their knowledge)
- Record yourself and analyze
- Work on specific skills individually
- Develop your own style and approach

> **Exercise**: Write 10 "cold reading" statements that would apply to almost anyone. Notice how they feel and how they could be misinterpreted as specific.

---

*Next: Hot reading and preparation*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 35,
      prerequisites: ['ment-1-1'],
      professional: true,
    },
    {
      id: 'ment-1-3',
      title: 'Hot Reading and Research Methods',
      content: `# Hot Reading: Having Information in Advance

## What Is Hot Reading?

**Hot reading** is having information about a subject before the performance:
- Prior research
- Information from others
- Technology-assisted information gathering
- Pre-show investigation

It differs from cold reading (no prior information) and warm reading (general knowledge applied).

## Types of Hot Reading

### Research-Based
- Social media investigation
- Public records
- News articles
- Professional backgrounds
- Family information
- Photographs and visual information

### Informant-Based
- Confederates in the audience
- Staff or assistants
- Audience members who provide information
- People who know the subject

### Technological
- Phone information
- Internet searches
- QR codes or forms filled in advance
- Digital footprint exploitation

### Contextual
- The setting itself provides information
- Event type, audience demographics
- Previous speakers or events
- Visible information in the environment

## Contemporary Information Sources

### Social Media
- Facebook, Instagram, LinkedIn, Twitter/X, TikTok
- Personal information, relationships, interests
- Photos revealing locations, possessions, people
- Check-ins and tagged locations
- Groups and activities

### Professional Information
- LinkedIn: career history, connections, skills
- Company websites: position, responsibilities
- Professional networks: reputation, accomplishments

### Public Records
- Property ownership (in some jurisdictions)
- Business registrations
- Court records (varies by location)
- Voter registration (in some places)

### Visual Information
- Photos on social media
- Appearance, style, age range
- Possessions visible in background
- Locations and travel

### Event Information
- Guest lists
- Programs or agendas
- Host provides introduction or bio
- Previous interactions

## Ethical Considerations

### Consent
- Is your subject aware information is being gathered?
- Is it appropriate to research people without their knowledge?
- What about children or vulnerable people?

### Privacy
- Just because information is publicly available doesn't mean using it is appropriate
- Consider the person's expectations of privacy
- Private information discovered accidentally requires ethical handling

### Presentation
- If you use hot reading, are you being honest about it?
- Is your performance claiming abilities you don't have?
- How would you feel if your methods were revealed?

### Context Matters
- **Mentalism show**: Some hot reading may be acceptable as part of the art (though full disclosure is rarer)
- **Psychic reading**: Hot reading while claiming psychic ability is deception
- **Party entertainment**: Depends on presentation and expectations
- **Professional context**: Generally inappropriate

## Warm Reading

**Warm reading** uses general knowledge that applies to many people:
- Statistical commonalities
- Developmental patterns
- Cultural knowledge
- Universal human experiences

This sits between cold and hot reading:
- More information than cold
- Less specific than hot
- Can be very effective with good execution

## Practical Methods

### Pre-Show Research (If Appropriate)
- Review available public information
- Prepare general statements that fit likely scenarios
- Have specific information ready if obtained ethically

### Audience Interaction
- Gather information through conversation
- Note responses and details
- Store information for later use

### Confederate Systems
- Have associates gather information
- Develop signals for communication
- Ensure confederates understand ethics

### Technology
- Devices that allow quick information access
- Hidden earpieces for receiving information
- Forms or digital input that provide information

## The Ethics of Hot Reading in Mentalism

This is debated in the mentalism community:

**Arguments for limited use**:
- It's part of the performance art
- Audience knows it's a show
- The effect matters more than method
- Mentalists have always used various methods

**Arguments against or for caution**:
- Full disclosure is rare
- Claiming psychic ability while hot reading is deception
- Even in entertainment, there are ethical lines
- You're presenting as having abilities you achieved through other means

**A reasonable middle position**:
- Be honest with yourself about what you're doing
- Don't claim genuine psychic ability
- Consider your audience and context
- Some mentalists avoid hot reading entirely
- Others use it sparingly and carefully

## Developing Information Gathering Skills

- Practice research techniques
- Develop observation skills
- Learn to gather information through conversation
- Understand what information is publicly available
- Develop efficient systems for organizing information

## Legal Considerations

- Privacy laws vary by jurisdiction
- Some information gathering may be illegal
- Stalking and harassment laws apply
- Using information in certain ways may have legal implications
- When in doubt, consult legal resources

> **Reflection**: What's your position on hot reading? What will you do and not do? How will you present your work?

---

*Next: Psychological forcing techniques*`,
      type: 'theory',
      difficulty: 3,
      estimatedMinutes: 30,
      prerequisites: ['ment-1-2'],
      professional: true,
    },
  ],

  // ==================== MORE MODULES CONTINUE... ====================
  // Due to length, this is a comprehensive foundation
  // Full curriculum would continue with all modules
};

// ==================== ACHIEVEMENTS ====================
export const professionalAchievements = [
  // Foundation achievements
  { id: 'f1', name: 'Foundation Laid', description: 'Complete all foundation lessons', icon: '🏛️', xp: 200 },
  { id: 'f2', name: 'Student of human Nature', description: 'Complete Foundations module', icon: '🧠', xp: 300 },
  
  // TA achievements
  { id: 'ta1', name: 'Games Identified', description: 'Learn to identify 5 psychological games', icon: '🎭', xp: 150 },
  { id: 'ta2', name: 'Script Analyst', description: 'Complete ego state mapping', icon: '📝', xp: 200 },
  { id: 'ta3', name: 'Script Therapist', description: 'Complete script cure training', icon: '✍️', xp: 300 },
  
  // Ericksonian achievements
  { id: 'eh1', name: 'Trance Inducer', description: 'Successfully induce trance in 10 people', icon: '🌀', xp: 200 },
  { id: 'eh2', name: 'Story Weaver', description: 'Create and deliver 5 therapeutic stories', icon: '📖', xp: 200 },
  { id: 'eh3', name: 'Confusion Master', description: 'Master confusion techniques', icon: '🌀', xp: 250 },
  { id: 'eh4', name: 'Ericksonian Practitioner', description: 'Complete Ericksonian module', icon: '🏆', xp: 500 },
  
  // Clinical achievements
  { id: 'cl1', name: 'Anxiety Specialist', description: 'Learn anxiety treatment protocols', icon: '😌', xp: 200 },
  { id: 'cl2', name: 'Pain Manager', description: 'Complete pain management training', icon: '🩹', xp: 250 },
  { id: 'cl3', name: 'Clinical Hypnotherapist', description: 'Complete clinical module', icon: '🏥', xp: 500 },
  
  // Body language achievements
  { id: 'bl1', name: 'Face Reader', description: 'Identify all 7 universal emotions', icon: '👁️', xp: 200 },
  { id: 'bl2', name: 'Microexpression Expert', description: 'Achieve 80%+ on microexpression test', icon: '🔬', xp: 300 },
  { id: 'bl3', name: 'Behavioral Analyst', description: 'Complete nonverbal module', icon: '🔍', xp: 400 },
  
  // Mentalism achievements
  { id: 'm1', name: 'Cold Reader', description: 'Successfully cold read 5 people', icon: '🎩', xp: 200 },
  { id: 'm2', name: 'Psychological Force', description: 'Master 5 psychological forces', icon: '🎯', xp: 250 },
  { id: 'm3', name: 'Prediction Expert', description: 'Create 3 prediction effects', icon: '🔮', xp: 300 },
  { id: 'm4', name: 'Mentalism Performers', description: 'Complete mentalism module', icon: '🎭', xp: 500 },
  
  // Language achievements
  { id: 'l1', name: 'Storyteller', description: 'Master therapeutic storytelling', icon: '📚', xp: 200 },
  { id: 'l2', name: 'Language Architect', description: 'Create 10 embedded commands', icon: '💬', xp: 200 },
  { id: 'l3', name: 'Hypnotic Speaker', description: 'Complete language patterns module', icon: '🎤', xp: 400 },
  
  // Special achievements
  { id: 'sp1', name: 'Rapport Master', description: 'Build instant rapport with anyone', icon: '🤝', xp: 300 },
  { id: 'sp2', name: 'Memory Champion', description: 'Memorize 100 items with memory palace', icon: '🧠', xp: 250 },
  { id: 'sp3', name: 'Ethical Practitioner', description: 'Complete all ethics training', icon: '⚖️', xp: 200 },
  { id: 'sp4', name: 'The Mentalist', description: 'Complete your first full mentalism performance', icon: '🎩', xp: 500 },
  { id: 'sp5', name: 'Hypnotherapist', description: 'Complete first supervised client session', icon: '🏥', xp: 500 },
  { id: 'sp6', name: 'Grand Master', description: 'Complete all professional modules', icon: '👑', xp: 2000 },
];

export { professionalModules as modules };
export default professionalModules;
