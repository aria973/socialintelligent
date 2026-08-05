export interface Lesson {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  keyPoints: string[];
  exercise?: string;
  quiz?: QuizQuestion[];
  secret?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Puzzle {
  id: string;
  title: string;
  description: string;
  type: 'scenario' | 'decode' | 'observation' | 'pattern' | 'manipulation';
  difficulty: 1 | 2 | 3 | 4 | 5;
  scenario?: string;
  options?: { text: string; feedback: string; correct: boolean }[];
  hint?: string;
  secret?: string;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  lessons: Lesson[];
  puzzles: Puzzle[];
  secrets: string[];
}

import { gamesTheoryLessons, gamesTheoryPuzzles } from './games-theory-complete';
import { februaryManLessons, februaryManPuzzles } from './february-man-complete';
import { physiologyLessons, physiologyPuzzles } from './physiology-complete';
import { patrickJaneLessons, patrickJanePuzzles } from './patrick-jane-complete';

export const modules: Module[] = [
  // Module 1: Transactional Analysis (Eric Berne)
  {
    id: 'transactional-analysis',
    title: "Games People Play",
    icon: "🎭",
    description: "Eric Berne's complete Transactional Analysis — structural analysis, time structuring, all games catalogued, and the path to autonomy",
    color: "from-purple-900 to-indigo-900",
    secrets: [
      "SECRET_BERNE_FORMULA: Every game follows G + R = Response → Switch → Payoff. Master this and you see the matrix.",
      "SECRET_SCRIPT_BREAK: To break someone's life script, interrupt their favorite game 3 times. They'll either escalate or awaken.",
      "SECRET_INTIMACY: True intimacy (game-free interaction) terrifies most people more than conflict.",
      "SECRET_AUTONOMY: Awareness + Spontaneity + Intimacy = Autonomy. This is the goal beyond all games.",
      "SECRET_POSITION: Your existential position (I'm OK/Not OK — You're OK/Not OK) was decided before age 5 and controls every relationship you'll ever have."
    ],
    lessons: [
      {
        id: 'ta-ego-states',
        title: "The Three Ego States",
        subtitle: "Parent, Adult, Child — The Trinity of Your Mind",
        content: [
          "Eric Berne discovered that every person operates from three distinct ego states at any given moment. These aren't abstract concepts — they're observable, measurable patterns of behavior, thinking, and feeling that you can learn to identify in real-time.",

          "**THE PARENT EGO STATE (P)**\nThis is the recorded collection of all the rules, judgments, attitudes, and behaviors you absorbed from authority figures (primarily parents) during your first five years. It operates in two modes:\n\n• **Critical Parent (CP):** Judgmental, controlling, rule-enforcing. Phrases like 'You should...', 'You must...', 'That's wrong.' Physical signs: pointed finger, furrowed brow, arms crossed, looking down at others.\n\n• **Nurturing Parent (NP):** Caring, protective, permissive. Phrases like 'Let me help you', 'Don't worry', 'You poor thing.' Physical signs: open arms, soft voice, leaning toward the other person, head tilted.",

          "**THE ADULT EGO STATE (A)**\nThis is your data-processing center — rational, objective, present-moment focused. It collects information, evaluates probability, and makes decisions without emotional contamination. Phrases: 'What are the facts?', 'Let me think about this', 'The data suggests...'. Physical signs: alert eyes, still body, thoughtful expression, measured tone.",

          "**THE CHILD EGO STATE (C)**\nThis is the recorded collection of all your early emotional experiences. It operates in three modes:\n\n• **Free Child (FC):** Spontaneous, creative, playful, rebellious. The authentic emotional self. Laughter, tears, curiosity, wonder.\n\n• **Adapted Child (AC):** Modified behavior learned to survive. Compliance, withdrawal, procrastination, passive aggression. 'I can't', 'I'll try', whining tone, downcast eyes.\n\n• **Little Professor:** The intuitive, manipulative part of the child. Creative problem-solving, reading people, sensing danger. This is where natural empathy and cunning live.",

          "**HOW TO IDENTIFY EGO STATES IN REAL-TIME:**\n\n1. Listen to the WORDS: Parent uses absolutes ('always', 'never', 'should'). Adult uses questions and data. Child uses feelings ('I want', 'I feel', 'wow').\n\n2. Watch the BODY: Parent is rigid or smothering. Adult is balanced and open. Child is animated or withdrawn.\n\n3. Feel the ENERGY: Parent feels heavy/authoritative. Adult feels calm/neutral. Child feels electric/vulnerable.\n\n4. Note the VOICE: Parent is loud/soft extremes. Adult is moderate and even. Child is high-pitched or mumbling."
        ],
        keyPoints: [
          "Every person has three ego states: Parent (P), Adult (A), and Child (C)",
          "Parent = recorded rules and attitudes from authority figures",
          "Adult = present-moment data processor, rational and objective",
          "Child = recorded emotional experiences and survival strategies",
          "You can identify ego states by words, body language, voice tone, and energy",
          "Most people shift between ego states unconsciously — awareness gives you choice"
        ],
        exercise: "For the next 24 hours, observe every conversation you have. Label each statement (yours and others') as P, A, or C. Notice which ego state you default to under stress. Write down 3 examples of each ego state you observed.",
        quiz: [
          {
            question: "Someone says 'You should never do that, it's simply not done.' Which ego state are they in?",
            options: ["Free Child", "Adult", "Critical Parent", "Adapted Child"],
            correct: 2,
            explanation: "The use of 'should', 'never', and the judgmental tone ('it's simply not done') are classic Critical Parent indicators."
          },
          {
            question: "A colleague analyzes a problem saying 'Based on the quarterly data, option B has a 73% success rate.' Which ego state?",
            options: ["Nurturing Parent", "Adult", "Little Professor", "Critical Parent"],
            correct: 1,
            explanation: "Data-driven, rational analysis without emotional charge is the hallmark of the Adult ego state."
          },
          {
            question: "Which part of the Child ego state is responsible for intuitive people-reading?",
            options: ["Free Child", "Adapted Child", "Little Professor", "Natural Child"],
            correct: 2,
            explanation: "The Little Professor is the intuitive, cunning part of the Child that naturally reads people and situations — it's the source of gut feelings."
          }
        ],
        secret: "🔓 HIDDEN INSIGHT: The ego state you're LEAST comfortable with reveals your deepest wound. If you can't access your Free Child, someone crushed your spontaneity. If you avoid your Adult, reality feels too painful. If your Parent is silent, you lacked role models."
      },
      {
        id: 'ta-transactions',
        title: "Reading Transactions",
        subtitle: "The Hidden Wires Between People",
        content: [
          "A transaction is any unit of communication between two people. Berne's genius was recognizing that every transaction has TWO levels:\n\n1. **Social Level** — what's being said openly\n2. **Psychological Level** — the hidden message underneath\n\nMastering transactions means you can see BOTH levels simultaneously.",

          "**COMPLEMENTARY TRANSACTIONS**\nThese are 'smooth' exchanges where the expected ego state responds. The communication lines are parallel.\n\nExample 1: Parent → Child / Child → Parent\nBoss: 'This report is terrible!' (Critical Parent → Adapted Child)\nEmployee: 'I'm sorry, I'll fix it right away.' (Adapted Child → Critical Parent)\n\nExample 2: Adult → Adult / Adult → Adult\n'What time is the meeting?' → 'It's at 3 PM.'\n\nRule: Communication continues smoothly as long as transactions remain complementary.",

          "**CROSSED TRANSACTIONS**\nThese create conflict, surprise, or communication breakdown. The response comes from an unexpected ego state.\n\nExample: Adult → Adult / Child → Parent\n'Do you know where my keys are?' (Adult → Adult)\n'Why do you always blame me for everything?!' (Child → Parent)\n\nThis is the MOST important concept for understanding conflict. Almost every argument involves a crossed transaction. The person SWITCHES ego states unexpectedly.",

          "**ULTERIOR TRANSACTIONS (The Secret Weapon)**\nThese are the most dangerous and powerful. Two messages are sent simultaneously — one social (overt), one psychological (covert). The psychological message is the REAL one.\n\nClassic example — The Car Salesman:\nSalesman: 'This model is probably too expensive for you.' (Social: Adult → Adult information. Psychological: Parent → Child challenge)\nCustomer: 'I'll take it!' (Responds to the psychological message, not the social one)\n\nThe customer's Child was hooked by the implied challenge to their status. They responded to the HIDDEN message while believing they responded to the overt one.\n\n**THIS IS THE FOUNDATION OF ALL PSYCHOLOGICAL GAMES.**",

          "**ADVANCED TRANSACTION READING:**\n\nStep 1: Identify the social-level message (what words are being said)\nStep 2: Identify the psychological-level message (body language, tone, context)\nStep 3: Notice which message the other person responds to\nStep 4: Predict the outcome based on which level drives the response\n\nWhen you can do this in real-time, you essentially have a superpower. You can see conversations the way a chess grandmaster sees a board — several moves ahead."
        ],
        keyPoints: [
          "Every transaction has a social (overt) and psychological (covert) level",
          "Complementary transactions = smooth communication (parallel lines)",
          "Crossed transactions = conflict and communication breakdown",
          "Ulterior transactions carry hidden messages — the psychological level is the real one",
          "All psychological games operate through ulterior transactions",
          "Reading both levels simultaneously is the key skill for social mastery"
        ],
        exercise: "Watch a TV drama or movie and diagram 5 transactions. Identify the social message, psychological message, and which ego states are involved. Can you predict when conflict will occur by spotting crossed transactions?",
        quiz: [
          {
            question: "In an ulterior transaction, which level determines the outcome?",
            options: ["The social level", "The psychological level", "Both equally", "Neither — it's random"],
            correct: 1,
            explanation: "Berne's key insight: the psychological (hidden) level ALWAYS determines the outcome of an ulterior transaction. The social level is just cover."
          },
          {
            question: "You ask 'What time should we leave?' and your partner snaps 'Stop trying to control everything!' What just happened?",
            options: ["Complementary transaction", "Crossed transaction", "Ulterior transaction", "Parallel transaction"],
            correct: 1,
            explanation: "You sent Adult → Adult, but got Child → Parent back. The lines crossed — your partner responded from their Adapted Child to your perceived Critical Parent, not from Adult to Adult."
          }
        ]
      },
      {
        id: 'ta-games',
        title: "The 36 Games People Play",
        subtitle: "Berne's Complete Catalog of Psychological Games",
        content: [
          "A psychological game is a series of ulterior transactions with a predictable outcome that provides a 'payoff' — usually a familiar bad feeling. Games are UNCONSCIOUS — the players don't know they're playing.\n\n**THE GAME FORMULA:**\nCon + Gimmick → Response → Switch → Crossup → Payoff\n\n• **Con:** The opening move (the hook)\n• **Gimmick:** The other person's vulnerability that makes them bite\n• **Response:** The back-and-forth that builds the game\n• **Switch:** The sudden role reversal\n• **Crossup:** The moment of confusion\n• **Payoff:** The familiar bad feeling both players 'win'",

          "**LIFE GAMES (First Degree — Socially Acceptable):**\n\n🎮 **'If It Weren't For You' (IWFY)**\nSetup: Person chooses a restrictive partner, then blames them for their own limitations.\nPayoff: Avoids facing their own fears. 'I could have been a great artist if it weren't for my demanding spouse.'\nHidden truth: They chose the restrictive partner BECAUSE they're afraid of success.\nAntithesis: Give them permission. When the restriction is removed, their anxiety is exposed.\n\n🎮 **'Why Don't You — Yes But' (YDYB)**\nSetup: Person presents a problem. Others offer solutions. Every solution is rejected.\nPayoff: Proves 'Nobody can help me' / proves they're smarter than everyone.\nHidden truth: They don't want solutions — they want to demonstrate the hopelessness of their situation.\nAntithesis: Don't offer solutions. Say 'That's a tough one. What do you think you'll do?'\n\n🎮 **'Look How Hard I've Tried' (LHHT)**\nSetup: Person makes half-hearted efforts at something, collects evidence of trying.\nPayoff: Permission to give up. 'See? I tried everything!'\nHidden truth: They decided to fail before starting.\nAntithesis: Don't validate the effort narrative. Ask 'What would succeeding actually look like?'",

          "**MARITAL GAMES:**\n\n🎮 **'Corner'**\nSetup: Maneuver partner into a position where anything they do is wrong.\nExample: 'Do you love me?' If yes: 'Then why don't you show it?' If no: 'I knew it!'\nPayoff: Confirms 'I'm not lovable' script.\n\n🎮 **'Frigid Woman/Man'**\nSetup: Seduce then reject. Invite intimacy then punish for attempting it.\nPayoff: 'See, all you want is sex' / righteous anger.\n\n🎮 **'Harried'**\nSetup: Take on impossible workload, collapse, then blame everyone.\nPayoff: 'Nobody appreciates me.'",

          "**PARTY GAMES:**\n\n🎮 **'Ain't It Awful' (AIA)**\nSetup: Group complaint session about how terrible everything is.\nPayoff: Connection through shared misery without vulnerability.\nAntithesis: 'What are you going to do about it?'\n\n🎮 **'Blemish'**\nSetup: Find one flaw in everything and everyone.\nPayoff: 'Nobody/nothing is good enough' → avoids intimacy.\n\n🎮 **'Schlemiel'**\nSetup: Create 'accidents' (spill drinks, break things), then apologize charmingly.\nPayoff: Gets forgiveness for aggression disguised as clumsiness.",

          "**UNDERWORLD GAMES:**\n\n🎮 **'Cops and Robbers'**\nSetup: Get caught doing something wrong, enjoy the chase.\nPayoff: The excitement of the game itself.\n\n🎮 **'Let's Pull a Fast One on Joey'**\nSetup: Con game where the real payoff is the feeling of superiority.\n\n**CONSULTING ROOM GAMES:**\n\n🎮 **'I'm Only Trying to Help You' (IOTHY)**\nSetup: Helper offers unsolicited help, gets rejected, feels hurt.\nPayoff: 'People are so ungrateful.'\nHidden truth: The 'help' is actually about control and feeling superior.\nAntithesis: Only help when explicitly asked, and only in the way requested.\n\n🎮 **'Wooden Leg'**\nSetup: 'What do you expect of someone with my problems?'\nPayoff: Excuse for everything. The disability (real or exaggerated) becomes a get-out-of-jail-free card.",

          "**DANGEROUS GAMES (Third Degree — Tissue Damage):**\n\n🎮 **'Now I've Got You, You Son of a Bitch' (NIGYSOB)**\nSetup: Wait patiently for someone to make a mistake, then attack with full fury.\nPayoff: Justified rage. The mistake may be trivial, but the fury is real.\nHidden truth: They were looking for a reason to attack all along.\nThis is one of the most common games in workplaces.\n\n🎮 **'Rapo'**\nSetup: Flirt provocatively, then scream harassment when someone responds.\nThird-degree version can involve legal consequences.\n\n🎮 **'Kick Me'**\nSetup: Behave in ways that invite punishment, then wonder 'Why does this always happen to me?'\nPayoff: Confirms 'I deserve to be punished' script.\n\n**GAME DEGREES:**\n• First Degree: Socially acceptable, mild payoffs\n• Second Degree: More serious, usually kept private\n• Third Degree: Ends up in courtroom, hospital, or morgue"
        ],
        keyPoints: [
          "Games are unconscious patterns of ulterior transactions with predictable payoffs",
          "The Game Formula: Con + Gimmick → Response → Switch → Crossup → Payoff",
          "Games serve to avoid intimacy while collecting familiar bad feelings",
          "Every game has an 'antithesis' — a response that breaks the pattern",
          "Games operate at three degrees of intensity, from mild to dangerous",
          "People play their favorite games repeatedly throughout life as part of their 'script'"
        ],
        exercise: "Identify ONE game you play regularly. Be honest. Write down: (1) The opening move, (2) What vulnerability in others you hook, (3) The switch moment, (4) The payoff feeling you get. Now practice the antithesis for one week.",
        quiz: [
          {
            question: "In 'Why Don't You — Yes But,' what is the player's real goal?",
            options: [
              "To find a genuine solution to their problem",
              "To prove that nobody can help them",
              "To make friends through conversation",
              "To learn from others' experience"
            ],
            correct: 1,
            explanation: "The YDYB player's real goal is to demonstrate that no one can help them, confirming their position of hopelessness or superiority. They reject every solution because solutions aren't what they're after."
          },
          {
            question: "What is the antithesis to most psychological games?",
            options: [
              "Play the game harder to exhaust them",
              "Refuse to play your expected role",
              "Analyze the game out loud to them",
              "Ignore them completely"
            ],
            correct: 1,
            explanation: "The antithesis to any game is refusing to play your expected role. When you don't provide the expected response, the game can't reach its payoff. This creates a moment of confusion that can lead to authentic interaction."
          }
        ],
        secret: "🔓 MASTER SECRET: Berne said the most dangerous game of all is 'Alcoholic' — not because of the substance, but because it requires FIVE players (Addict, Persecutor, Rescuer, Patsy, Connection). It's the only game that's a complete social system. Understanding this game reveals how ALL addiction works — it's never about the substance, it's about the roles."
      },
      {
        id: 'ta-life-scripts',
        title: "Life Scripts",
        subtitle: "The Unconscious Life Plan Written in Childhood",
        content: [
          "Between ages 3-7, every child writes a 'life script' — an unconscious plan for their entire life. This script determines who they marry, how they work, how they die, and what their gravestone says. Berne called this the most important concept in all of psychology.",

          "**SCRIPT COMPONENTS:**\n\n1. **Script Injunctions** — Messages received from parents' CHILD ego state (non-verbal):\n• Don't exist (the most destructive)\n• Don't be you (wrong gender, wrong personality)\n• Don't be a child (grow up too fast)\n• Don't grow up (stay dependent)\n• Don't succeed\n• Don't be important\n• Don't belong\n• Don't be close\n• Don't be well (or sane)\n• Don't think\n• Don't feel\n• Don't (do anything at all)\n\n2. **Counter-Injunctions** — Messages from parents' PARENT ego state (verbal):\n'Be perfect', 'Be strong', 'Try hard', 'Please others', 'Hurry up'\nThese five 'drivers' determine your moment-to-moment behavior under stress.",

          "**THE FIVE DRIVERS (Taibi Kahler):**\n\n🔸 **Be Perfect:** Never makes mistakes, over-prepares, paralyzed by imperfection.\nBody: Counts on fingers, precise gestures, steepled fingers.\nVoice: Measured, qualifying statements ('It's sort of, in a way...') \nWeakness: Procrastination through perfectionism.\n\n🔸 **Be Strong:** Never shows feelings, stoic, handles everything alone.\nBody: Rigid, minimal movement, arms crossed, face mask-like.\nVoice: Monotone, 'It doesn't bother me', third person ('One feels...')\nWeakness: Cannot ask for help even when dying.\n\n🔸 **Try Hard:** Always struggling, never finishing, values effort over results.\nBody: Furrowed brow, leaning forward, clenched fists, strained.\nVoice: 'I'll try', 'It's hard', 'I'm working on it.'\nWeakness: Starts everything, finishes nothing.\n\n🔸 **Please Others:** Reads room constantly, over-adapts, can't say no.\nBody: Head nodding, raised eyebrows, forward lean, smiling.\nVoice: Rising intonation (turns statements into questions?), 'Is that okay?'\nWeakness: Loses identity trying to make everyone happy.\n\n🔸 **Hurry Up:** Always rushed, impatient, fills every moment.\nBody: Foot tapping, fidgeting, checking watch/phone, rapid movements.\nVoice: Fast, interrupts, trails off ('And then I — anyway...')\nWeakness: Mistakes from rushing, never present.",

          "**SCRIPT TYPES:**\n\n• **Winner Script:** 'I will succeed and it's okay.' (Rare — about 15% of people)\n• **Non-Winner Script:** 'I'll get by, nothing special.' (Most common — about 70%)\n• **Loser Script:** 'I will fail / suffer / die young.' (About 15%, often dramatic)\n\n**SCRIPT SIGNS:**\nWatch for the 'script signal' — a physical gesture someone makes when discussing their future. It reveals their script:\n- Hand across throat = 'I'll be cut off / killed'\n- Hand waving away = 'It won't happen for me'\n- Fist pump = 'I'll fight and win'\n- Shrug = 'Whatever happens, happens'\n\n**BREAKING THE SCRIPT:**\nThe Adult ego state is the key. Scripts run on automatic (Parent/Child). To break free:\n1. Become aware of your script (most people resist this)\n2. Identify the key injunction\n3. Give yourself new permissions\n4. Practice 'script-free' moments (genuine intimacy)\n5. Make a new decision (redecision therapy)"
        ],
        keyPoints: [
          "Life scripts are unconscious life plans written between ages 3-7",
          "Scripts are built from injunctions (non-verbal) and counter-injunctions (verbal)",
          "Five drivers (Be Perfect, Be Strong, Try Hard, Please Others, Hurry Up) control moment-to-moment behavior",
          "Scripts can be Winner, Non-Winner, or Loser types",
          "The Adult ego state is the key to breaking free from script",
          "Script signals are physical gestures that reveal the script"
        ],
        exercise: "Identify your primary driver. For one full day, notice every time you're 'driven' by it. Example: if your driver is 'Please Others,' count how many times you say yes when you want to say no. At day's end, write your script as a fairy tale: 'Once upon a time there was a child who...'",
        quiz: [
          {
            question: "Which driver is indicated by someone who turns every statement into a question with rising intonation?",
            options: ["Be Perfect", "Be Strong", "Try Hard", "Please Others", "Hurry Up"],
            correct: 3,
            explanation: "'Please Others' turns statements into questions seeking approval. The rising intonation is literally asking 'Is this okay? Do you still accept me?'"
          },
          {
            question: "What is the most destructive script injunction according to Berne?",
            options: ["Don't succeed", "Don't exist", "Don't feel", "Don't be you"],
            correct: 1,
            explanation: "'Don't exist' is the most destructive injunction. It comes from a parent (usually unconsciously) who wished the child hadn't been born. It can lead to suicidal scripts and the deepest self-sabotage."
          }
        ],
        secret: "🔓 DEEPEST SECRET: Your script was a BRILLIANT SURVIVAL STRATEGY when you wrote it as a child. It kept you safe in your specific family. The problem is you're still running a 5-year-old's program as an adult. Honor the child who wrote it, then update the software."
      },
      ...gamesTheoryLessons
    ],
    puzzles: [
      {
        id: 'ta-puzzle-1',
        title: "The Meeting Game",
        description: "Read this scenario and identify the game being played.",
        type: 'scenario',
        difficulty: 2,
        scenario: "In a team meeting, Sarah presents a problem she's having with a client. Tom says 'Why don't you just call them directly?' Sarah: 'I tried that, they don't answer.' Lisa: 'Send an email with a deadline?' Sarah: 'They ignore emails.' Mark: 'Escalate to their manager?' Sarah: 'That would damage the relationship.' After 20 minutes, everyone is frustrated and Sarah says 'See, this client is impossible.'",
        options: [
          { text: "Sarah is playing 'Why Don't You — Yes But'", feedback: "CORRECT! Sarah isn't looking for solutions — she's proving the situation is hopeless. The antithesis: 'That's a tough one, Sarah. What do you think you'll do?' This refuses the game by not offering solutions.", correct: true },
          { text: "Sarah is playing 'Ain't It Awful'", feedback: "Close, but AIA is a group complaint game. Sarah is specifically soliciting and rejecting solutions, which is YDYB. In AIA, everyone would be complaining together.", correct: false },
          { text: "The others are playing 'I'm Only Trying to Help You'", feedback: "Interesting angle! The helpers ARE in a complementary game position, but the initiator and primary game is Sarah's YDYB. The helpers could break it by refusing to offer solutions.", correct: false },
          { text: "Nobody is playing a game — it's just a hard problem", feedback: "The pattern gives it away: every solution is rejected with a pre-prepared objection. Real problem-solving involves evaluating options, not dismissing them all. This is a classic game.", correct: false }
        ],
        hint: "Pay attention to what happens to every solution offered. Is the person seeking solutions or seeking confirmation?",
        secret: "🔓 In real life, the person playing YDYB often had a parent who 'knew better' about everything. They learned that the only way to feel smart was to outsmart the helpers."
      },
      {
        id: 'ta-puzzle-2',
        title: "Transaction Decoder",
        description: "Identify the ego states and transaction type in this exchange.",
        type: 'decode',
        difficulty: 3,
        scenario: "A husband comes home late. Wife says (sweetly): 'Oh, you must have had such a long day at work, you poor thing.' (She's checking his collar for lipstick while saying this.) Husband responds: 'Yes, the Henderson account kept us late.' (He avoids eye contact.)",
        options: [
          { text: "Complementary transaction: Nurturing Parent → Child / Child → Parent", feedback: "This is only the SOCIAL level. You missed the ulterior level entirely. Look at the behavior, not just the words.", correct: false },
          { text: "Ulterior transaction: Social NP→C, Psychological CP→AC (accusation disguised as nurture)", feedback: "EXCELLENT! The wife's sweet words (NP→C) hide a psychological message of 'I'm checking up on you' (CP→AC). The husband responds to both levels — his words respond to the social level, but his body (avoiding eye contact) responds to the psychological level.", correct: true },
          { text: "Crossed transaction — she says one thing, he says another", feedback: "The transaction isn't crossed — both are maintaining the fiction. It's ulterior because there's a hidden level of communication happening simultaneously.", correct: false },
          { text: "Adult-Adult information exchange", feedback: "Neither person is in their Adult ego state. Both are playing roles with hidden agendas. The Adult would sound like: 'Were you actually working late? I felt worried.'", correct: false }
        ],
        hint: "When someone's WORDS and ACTIONS don't match, you're looking at an ulterior transaction. What is the body language saying that the mouth isn't?"
      },
      {
        id: 'ta-puzzle-3',
        title: "Script Detective",
        description: "Read this life story and identify the script and primary driver.",
        type: 'pattern',
        difficulty: 4,
        scenario: "Maria, 42, is a successful lawyer who works 80-hour weeks. She has been divorced twice — both times, her husbands said she was 'never present.' She sleeps 4 hours a night and is proud of it. She hasn't taken a vacation in 6 years. Her mother was a single parent who worked three jobs. Maria's childhood memory: 'Mom was always running. She'd say: Hurry up, Maria, we're late!' When asked about retirement, Maria laughs nervously and draws her hand across her throat.",
        options: [
          { text: "Hurry Up driver, Loser script with 'Don't be close' injunction", feedback: "BRILLIANT! The 'Hurry Up' driver is obvious (never stopping, proud of no sleep). The 'Don't be close' injunction explains the failed marriages — intimacy requires slowing down, which her script forbids. The hand across the throat is a script signal suggesting she believes stopping = death.", correct: true },
          { text: "Be Perfect driver, Winner script", feedback: "She's successful materially, but a winner script includes satisfying relationships. Her compulsive overwork isn't perfection-driven (no mention of quality obsession) — it's speed-driven. And the script signal (hand across throat) suggests a tragic ending, not a winner.", correct: false },
          { text: "Be Strong driver, Non-Winner script", feedback: "Be Strong would show emotional suppression and stoicism. Maria's issue isn't hiding feelings — it's never stopping. Her mother's message was about speed, not strength.", correct: false },
          { text: "Try Hard driver, Winner script", feedback: "Try Hard never finishes things. Maria finishes everything — she's a successful lawyer. Her pattern is about speed and inability to stop, not about struggling to complete.", correct: false }
        ],
        hint: "Listen to the mother's literal words. That's the driver. Then look at the hand gesture — Berne said script signals never lie."
      },
      ...gamesTheoryPuzzles
    ]
  },

  // Module 2: Milton Erickson's Hypnotherapy
  {
    id: 'erickson-hypnosis',
    title: "The February Man",
    icon: "🌀",
    description: "Complete coverage of Erickson & Rossi's landmark book — the February Man case, ideodynamic healing, indirect techniques, naturalistic trance, and conversational hypnosis",
    color: "from-teal-900 to-emerald-900",
    secrets: [
      "SECRET_ERICKSON_CORE: All hypnosis is self-hypnosis. Erickson just created the conditions.",
      "SECRET_FEBRUARY_MAN: The February Man technique rewrites traumatic memories by inserting a comforting figure into the past.",
      "SECRET_NATURALISTIC: Everyday trance states (driving, daydreaming, scrolling) are hypnosis. You're already doing it.",
      "SECRET_IDEODYNAMIC: Every idea produces a physical response. Control the idea, control the body.",
      "SECRET_UTILIZATION: There are no resistant clients, only inflexible therapists. Utilize everything."
    ],
    lessons: [
      {
        id: 'me-foundations',
        title: "Erickson's Revolutionary Approach",
        subtitle: "How One Man Changed Everything We Know About the Mind",
        content: [
          "Milton H. Erickson (1901-1980) was arguably the greatest hypnotherapist who ever lived. Paralyzed by polio at 17, he taught himself to walk again by watching his baby sister learn to walk — observing micro-movements most people never notice. This experience made him the most observant human being in the history of psychology.",

          "**ERICKSON vs. TRADITIONAL HYPNOSIS:**\n\nTraditional: 'You are getting sleepy... you will obey my commands.'\nErickson: Told stories, used metaphors, made indirect suggestions, utilized whatever the patient brought.\n\nTraditional: One technique fits all.\nErickson: Every person is unique. Every induction must be crafted for that specific person.\n\nTraditional: The hypnotist has the power.\nErickson: The patient has ALL the resources they need. The hypnotist just helps them access what's already there.\n\nTraditional: Resistance must be overcome.\nErickson: Resistance is utilized. If a patient resists, THAT becomes the induction.",

          "**THE FEBRUARY MAN TECHNIQUE:**\n\nThis is Erickson's most famous and profound technique, documented in the book by Erickson and Rossi. A woman came to him with severe emotional problems stemming from a cold, neglectful childhood. No one had ever shown her warmth or comfort as a child.\n\nErickson's solution was breathtaking: Under hypnosis, he age-regressed her to key moments in her childhood and INSERTED HIMSELF as 'The February Man' — a kind stranger who visited her family every February. At each age (3, 5, 7, 9...), the February Man would offer the warmth, validation, and comfort she never received.\n\nThe woman's unconscious mind accepted these experiences as REAL MEMORIES. Her emotional landscape was fundamentally reorganized because she now had the experience of being loved as a child.\n\n**Key Principles of the Technique:**\n1. The unconscious mind doesn't distinguish between 'real' and vividly imagined memories\n2. Healing doesn't require understanding the problem — it requires new experiences\n3. The therapist enters the patient's internal world rather than pulling them into the therapist's framework\n4. Each intervention must be age-appropriate for the regressed state\n5. The inserted figure must be congruent with the patient's reality (a 'visitor' is plausible)",

          "**ERICKSON'S CORE PRINCIPLES:**\n\n1. **Utilization:** Use whatever the patient brings. If they're angry, utilize the anger. If they're resistant, utilize the resistance. If they tap their foot, synchronize with the tapping.\n\n2. **Naturalistic Trance:** Trance is natural. You go into trance while driving, reading, watching a fire. Therapy happens by deepening naturally occurring states.\n\n3. **Indirect Suggestion:** Instead of 'Relax your hand,' say 'I wonder if you've noticed how interesting it is when a hand begins to feel lighter...' The unconscious processes this without resistance.\n\n4. **Multilevel Communication:** Speaking to the conscious and unconscious minds simultaneously. Stories, metaphors, embedded commands, ambiguity — all create multiple levels of meaning.\n\n5. **Strategic Amnesia:** Sometimes the conscious mind needs to forget the intervention so the unconscious can work without interference.\n\n6. **Expectation of Change:** Erickson always assumed the patient could change. This expectation itself was therapeutic."
        ],
        keyPoints: [
          "Erickson revolutionized hypnosis by making it naturalistic, indirect, and patient-centered",
          "The February Man technique creates healing memories that reorganize emotional experience",
          "Utilization means using whatever the patient brings, including resistance",
          "All communication operates on multiple levels simultaneously",
          "Trance is natural — it happens daily in driving, reading, daydreaming",
          "The patient has all the resources they need; the therapist helps access them"
        ],
        exercise: "Practice noticing your own trance states for one day. When do you 'zone out'? While scrolling? Driving? Showering? These are natural trances. Notice the transition IN and OUT. What triggers them? What ends them? This awareness is the foundation of understanding hypnosis.",
        quiz: [
          {
            question: "What makes the February Man technique revolutionary?",
            options: [
              "It erases bad memories permanently",
              "It creates new positive experiences in the patient's past",
              "It uses fear-based conditioning",
              "It requires drugs to work"
            ],
            correct: 1,
            explanation: "The February Man technique inserts new, healing experiences into the patient's remembered past. The unconscious mind integrates these as if they really happened, providing the emotional resources the person never received."
          },
          {
            question: "How did Erickson handle patient resistance?",
            options: [
              "He confronted it directly",
              "He medicated resistant patients",
              "He utilized it — made resistance part of the process",
              "He sent resistant patients away"
            ],
            correct: 2,
            explanation: "Erickson's principle of utilization meant that resistance wasn't an obstacle — it was material to work with. If a patient said 'I can't be hypnotized,' Erickson might say 'That's right, and I wonder how deeply you can not be hypnotized...'"
          }
        ],
        secret: "🔓 HIDDEN INSIGHT: Erickson was once asked to hypnotize a man who insisted he couldn't be hypnotized. Erickson said 'You're absolutely right. You cannot be hypnotized. And you can continue to not be hypnotized while I talk about something entirely different...' Twenty minutes later, the man was in deep trance. The conscious mind was busy 'not being hypnotized' while the unconscious listened to everything."
      },
      {
        id: 'me-language-patterns',
        title: "Hypnotic Language Patterns",
        subtitle: "The Milton Model — Language That Bypasses Conscious Resistance",
        content: [
          "Erickson's language patterns were so effective that Richard Bandler and John Grinder modeled them into what they called 'The Milton Model' — the linguistic opposite of their 'Meta Model.' While the Meta Model seeks precision, the Milton Model deliberately creates productive ambiguity.",

          "**CATEGORY 1: PACING AND LEADING**\n\nPacing = matching the person's current experience\nLeading = guiding them toward a new experience\n\nExample: 'You're sitting there (pace)... reading these words (pace)... and you may notice (lead) that your breathing has begun to slow (lead)...'\n\nThe trick: Start with undeniable truths (3-4 paces), then add one lead. As they accept the paces, they're primed to accept the lead.\n\nAdvanced: 'You can hear the sounds around you (auditory pace)... feel the weight of your body in the chair (kinesthetic pace)... see these words on the screen (visual pace)... and begin to wonder (lead) what your unconscious mind is already learning (lead)...'",

          "**CATEGORY 2: EMBEDDED COMMANDS**\n\nHide commands inside larger sentences. The conscious mind processes the whole sentence; the unconscious extracts the command.\n\nExamples:\n• 'I don't know when you'll BEGIN TO FEEL more CONFIDENT.' (Commands: begin to feel, confident)\n• 'My friend told me that sometimes people can RELAX DEEPLY without even trying.' (Command: relax deeply)\n• 'I'm curious whether you'll DECIDE TO CHANGE NOW or after we talk more.' (Commands: decide to change, now)\n\n**How to deliver:** Mark the command with a subtle shift — slight pause before, slight emphasis, or slight lowering of voice. The conscious mind doesn't notice; the unconscious does.\n\n**Advanced technique — Analog marking:** Touch your left ear every time you deliver an embedded command. Over time, just touching your ear will trigger the response.",

          "**CATEGORY 3: PRESUPPOSITIONS**\n\nHide assumptions inside questions so they're accepted without examination.\n\n• 'When you realize how easy this is, will you tell your friends?' (Presupposes: it IS easy, you WILL realize this)\n• 'How quickly will you begin to notice the changes?' (Presupposes: changes WILL happen, you WILL notice)\n• 'Will you practice this tonight or tomorrow morning?' (Presupposes: you WILL practice, only the timing is in question)\n\nDouble bind presupposition: 'You can change quickly or slowly — either way, you WILL change.'",

          "**CATEGORY 4: ARTFUL VAGUENESS**\n\nBe deliberately vague so the listener fills in their own meaning.\n\n• 'You can learn things... important things... about yourself and others... in ways that are just right for you...'\n• 'A certain feeling... you know the one... is beginning to develop...'\n• 'Something interesting is about to happen...'\n\nWhy it works: Specific statements can be rejected. Vague statements are projected onto — the listener creates meaning that's perfectly tailored to their own unconscious needs.\n\n**CATEGORY 5: METAPHOR AND STORYTELLING**\n\nErickson's greatest tool. Tell a story that parallels the person's situation. Their unconscious maps it onto their own experience.\n\nExample: To a patient afraid of change, Erickson might tell a story about a tomato plant:\n'A tomato seed... doesn't know it's going to become a plant. It just responds to warmth... and water... and the seed coat breaks open not because it decides to, but because growth creates pressure from inside... and the little sprout pushes through soil that seemed impossibly heavy... and it doesn't even know it's growing... it just IS growing...'\n\nThe patient's unconscious hears: Change is natural. You don't need to force it. Growth happens on its own when conditions are right.",

          "**CATEGORY 6: CONVERSATIONAL POSTULATES**\n\nQuestions that are literally yes/no but function as commands:\n• 'Can you close the door?' (Not really a question — it's a command to close the door)\n• 'Do you know what time it is?' (Command to tell the time)\n• 'Could you imagine what it would feel like to be completely at ease?' (Command to imagine ease)\n\n**CATEGORY 7: STACKING REALITIES**\n\nEmbed stories within stories to confuse the conscious mind and speak directly to the unconscious:\n'A friend of mine was telling me about a conversation he had with his teacher, who once told a student that the most important thing anyone ever said to her was... [INSERT KEY MESSAGE HERE]... and my friend wasn't sure if the teacher meant that literally or...'\n\nBy the third level of embedding, the conscious mind has lost track and the unconscious is wide open."
        ],
        keyPoints: [
          "Pacing (matching experience) builds rapport; leading (guiding) creates change",
          "Embedded commands hide suggestions inside normal sentences",
          "Presuppositions sneak assumptions past the conscious mind",
          "Artful vagueness lets the listener create personally meaningful content",
          "Stories and metaphors speak directly to the unconscious",
          "Stacking realities (stories within stories) overwhelms conscious resistance"
        ],
        exercise: "Practice embedded commands in normal conversation today. Have 3 conversations where you embed at least one command per exchange. Examples: 'I think people who FEEL CONFIDENT tend to speak up more.' 'My cousin said it helped when he just DECIDED TO RELAX about the whole thing.' Notice if people's behavior shifts.",
        quiz: [
          {
            question: "Why does artful vagueness work better than specific suggestions for many people?",
            options: [
              "Because people are too stupid to notice",
              "Because vague statements can't be consciously rejected and the listener fills in personally relevant meaning",
              "Because vagueness is confusing and confusion is hypnosis",
              "Because Erickson was lazy about being specific"
            ],
            correct: 1,
            explanation: "Specific statements give the conscious mind something concrete to reject. Vague statements bypass resistance because the listener's unconscious fills in the details in a way that's perfectly meaningful to them."
          },
          {
            question: "In the pacing-and-leading pattern, why do you start with 3-4 paces before a lead?",
            options: [
              "Because odd numbers are hypnotic",
              "To waste time and bore them into trance",
              "Because matching their reality builds a 'yes set' that carries into the suggestion",
              "Because the number 4 has magical properties"
            ],
            correct: 2,
            explanation: "Each pace that's accepted creates an internal 'yes' response. After 3-4 'yeses,' the mind is primed to accept the next statement too — even if it's a lead into new territory. This is the 'yes set' principle."
          }
        ],
        secret: "🔓 HIDDEN TECHNIQUE: Erickson would often embed multiple commands targeting different sensory systems in the same paragraph: a visual command, an auditory command, and a kinesthetic command. This way, regardless of the person's primary representational system, at least one command would land. The others would reinforce it from different angles."
      },
      {
        id: 'me-induction-techniques',
        title: "Induction Techniques",
        subtitle: "Practical Methods for Inducing and Deepening Trance",
        content: [
          "**THE HANDSHAKE INDUCTION (Erickson's Signature)**\n\nErickson's most famous induction used the universal social ritual of the handshake. Here's how it works:\n\n1. Begin a normal handshake approach — right hand extended.\n2. Just as your hands connect, do something UNEXPECTED: grip differently, pause mid-shake, press a finger into the wrist.\n3. This creates a 'pattern interrupt' — the person's conscious mind was running a 'handshake program' that just crashed.\n4. In the 2-5 seconds of confusion, the unconscious is wide open to suggestion.\n5. Deliver a command: 'That's right... just let that hand stay right there... comfortable... floating...' (The hand often remains suspended — catalepsy.)\n\nWhy it works: Social rituals are run by automatic programs. Interrupting the program creates a gap in consciousness. In that gap, the unconscious is accessible.\n\n**WARNING:** This is an advanced technique. Practicing without proper training can create confusion and distrust. Use only in therapeutic or agreed-upon practice contexts.",

          "**PROGRESSIVE RELAXATION INDUCTION**\n\nThe most accessible technique. Walk through each body part, suggesting relaxation:\n\n'Notice your feet on the floor... and as you notice them, you might find they begin to feel a bit heavier... a pleasant heaviness... and that heaviness can spread up through your ankles... your calves... like a warm wave rising slowly... and your knees can relax... your thighs... letting the chair hold all your weight... and as your body relaxes, your mind can begin to drift... not sleeping... just drifting...'\n\n**Keys to effectiveness:**\n- Use a slower, softer voice than normal\n- Match your suggestions to their breathing (speak on their exhale)\n- Use permissive language ('you might notice' rather than 'you will')\n- Include some pacing ('that's right' when you see them respond)\n- Don't rush — each suggestion should hang in the air",

          "**CONFUSION TECHNIQUE**\n\nOverload the conscious mind with complexity until it gives up and trance occurs:\n\n'You might wonder whether the relaxation you're beginning to feel is starting in your left hand or your right hand, or perhaps it started before I mentioned it and you're only now noticing what was already there, or maybe it hasn't started yet and you're simply anticipating what it will feel like when it does begin, which is itself a kind of beginning, isn't it...'\n\nThe conscious mind tries to track all the logical threads, fails, and delegates to the unconscious. This is similar to how you zone out when someone gives you overly complicated directions.\n\n**UTILIZATION INDUCTION**\n\nUse whatever is happening in the environment:\n\nPatient says 'I can hear traffic outside.' Instead of saying 'Ignore it,' say: 'That's right, you CAN hear the traffic, and each sound you hear can help you go deeper, because the traffic is outside and you're inside, and you can notice the difference between outside sounds and inside feelings, and as those sounds continue, they become a gentle background rhythm that your breathing can follow...'\n\nEverything becomes part of the trance. Nothing is a distraction.",

          "**THE YES SET INDUCTION**\n\nMake a series of undeniably true statements, building unconscious agreement:\n\n'You're sitting in that chair... (yes)\nYou came here today because something matters to you... (yes)\nYou've been listening to my voice... (yes)\nAnd you know that people can learn in many ways... (yes)\nAnd your unconscious mind is always working, even when your conscious mind rests... (yes)\nAnd you can begin to notice, NOW, a certain shift in your awareness...'\n\nEach 'yes' deepens the agreeable state, making the final suggestion nearly irresistible.\n\n**DEEPENING TECHNIQUES:**\n\nOnce trance is established, deepen it with:\n\n1. **Counting down:** 'With each number from 10 to 1, going twice as deep...'\n2. **Staircase metaphor:** 'Imagine walking down a staircase, each step taking you deeper...'\n3. **Arm levitation:** Suggest the arm is getting lighter, floating up. The physical response deepens the trance.\n4. **Fractionation:** Bring them slightly OUT of trance, then back IN — each time they go deeper.\n5. **Time distortion:** 'A moment here can feel like an hour... or an hour can pass in what feels like moments...'"
        ],
        keyPoints: [
          "Pattern interrupts create momentary gaps where the unconscious is accessible",
          "Progressive relaxation is the most accessible and safe induction method",
          "Confusion techniques overload the conscious mind, creating natural trance",
          "Utilization turns every distraction into a deepening tool",
          "The Yes Set builds unconscious agreement through undeniable truths",
          "Deepening techniques (counting, stairs, fractionation) enhance trance depth"
        ],
        exercise: "Practice SELF-HYPNOSIS: Sit comfortably. Fix your eyes on a spot above eye level. Use progressive relaxation from toes to head. Count down from 20 to 1. Give yourself one simple suggestion (e.g., 'I feel calm and focused'). Count up from 1 to 5 to return. Practice daily for one week and journal the experience.",
        quiz: [
          {
            question: "Why does the handshake induction work?",
            options: [
              "Because handshakes are physically uncomfortable",
              "Because it interrupts an automatic social program, creating a consciousness gap",
              "Because people are naturally submissive when touched",
              "Because of electromagnetic energy transfer through the palms"
            ],
            correct: 1,
            explanation: "The handshake is run by an automatic 'program' in the mind. When this program is interrupted (something unexpected happens), there's a brief gap in conscious processing. In this gap, the unconscious is open to suggestion."
          }
        ],
        secret: "🔓 MASTER SECRET: Erickson once hypnotized an entire lecture hall by telling them a story about a colleague who studied induction, and within the story, he described an induction technique so vividly that the audience went into trance while listening to a description of trance. He was doing the thing while describing the thing."
      },
      {
        id: 'me-therapeutic-metaphors',
        title: "Therapeutic Metaphors & Stories",
        subtitle: "The Art of Speaking Directly to the Unconscious Mind",
        content: [
          "Erickson's greatest genius was his use of stories and metaphors. He rarely told patients what to do directly. Instead, he told stories that contained embedded solutions. The conscious mind heard an interesting tale; the unconscious mind extracted the relevant learning.\n\n**WHY METAPHORS WORK:**\n\n1. They bypass conscious resistance (you can't argue with a story)\n2. They activate multiple brain networks simultaneously (narrative, emotional, sensory)\n3. They allow the unconscious to make its own connections\n4. They're memorable — you'll forget advice but remember a good story\n5. They can address issues the patient can't consciously discuss",

          "**CONSTRUCTING THERAPEUTIC METAPHORS — Erickson's Method:**\n\n**Step 1: Identify the Structure**\nMap the patient's problem:\n- Who are the characters? (patient, relevant others)\n- What is the conflict? (what they want vs. what stops them)\n- What resources do they need? (what's missing)\n- What would resolution look like?\n\n**Step 2: Create an Isomorphic Story**\nBuild a story with the SAME STRUCTURE but different content:\n- Replace characters with analogous ones (person afraid of public speaking → seed afraid to sprout above ground)\n- Replace the conflict with a parallel one\n- Include the needed resource appearing naturally in the story\n- Show resolution happening organically\n\n**Step 3: Add Sensory Detail**\nMake it vivid — sights, sounds, feelings, smells. The more sensory, the deeper it penetrates.\n\n**Step 4: Embed Suggestions**\nHide the actual therapeutic suggestions within the story using embedded commands and presuppositions.",

          "**ERICKSON'S CLASSIC METAPHORS:**\n\n🌱 **The Tomato Plant (for growth/change):**\n'And a tomato seed is a small, hard thing... and it doesn't look like much... but inside it has everything it needs... and when conditions are right — just enough warmth, just enough water — something begins to happen inside that nobody planned... the seed coat breaks... and a tiny sprout pushes up through soil that seems impossibly heavy for something so small... but the sprout doesn't know it's small... it just grows... because that's what it does... and soon it's a plant with leaves reaching for the sun... and it never had to TRY to grow... growth just happened when the conditions were right...'\n\n🏔️ **The Mountain Climb (for overcoming obstacles):**\n'And sometimes when you're climbing a mountain, you look up and the peak seems so far away that it's discouraging... but experienced climbers know you don't look at the peak... you look at the next handhold... the next foothold... and then the next one... and somehow, without noticing when it happened, you're higher than you thought possible... and the view from up here shows you things you couldn't see from below...'\n\n🌊 **The River (for accepting change):**\n'A river doesn't fight the rocks in its path. It goes around them. Over time, the water shapes the rocks — not through force, but through persistence. And the river doesn't know where it's going. It just flows downhill, finding the easiest path, and somehow it always reaches the sea...'",

          "**THE TEACHING TALE FORMAT:**\n\nErickson often used a specific format:\n1. 'I had a patient once who...' or 'I knew a man who...'\n2. Describe the problem (mirroring the current patient's issue)\n3. Describe failed solutions (mirroring what the patient has already tried)\n4. Introduce an unexpected element or reframe\n5. Show natural resolution\n6. End ambiguously — let the patient wonder\n\nExample for someone afraid of rejection:\n'I knew a young man once who was so afraid of being rejected that he never asked anyone out. One day he was at a coffee shop and dropped his cup. A woman helped him clean it up and laughed about it. He was so embarrassed he forgot to be afraid. They've been married twelve years. He always said the best thing that ever happened to him was his worst moment. I never quite understood what he meant by that, but I think you might...'\n\n**MULTI-LEVEL METAPHORS:**\n\nErickson sometimes told a story within a story within a story:\n- Level 1: Story about a friend (conscious mind engages)\n- Level 2: Friend tells a story about their grandmother (conscious mind goes deeper)\n- Level 3: Grandmother's lesson (direct unconscious communication)\n\nThe conscious mind is tracking narrative levels and loses the ability to resist the deepest message."
        ],
        keyPoints: [
          "Metaphors bypass conscious resistance because you can't argue with a story",
          "Isomorphic metaphors mirror the patient's problem structure with different content",
          "Sensory detail makes metaphors penetrate more deeply",
          "Teaching tales follow a specific pattern: problem → failed solutions → unexpected element → natural resolution",
          "Multi-level embedded stories overwhelm conscious tracking and speak to the unconscious",
          "The patient's unconscious extracts relevant meaning automatically"
        ],
        exercise: "Write a therapeutic metaphor for yourself. Identify one problem you're facing. Map its structure (characters, conflict, needed resource). Create an isomorphic story using nature, animals, or a fictional character. Include embedded commands for the change you want. Tell it to yourself before sleep.",
        quiz: [
          {
            question: "Why did Erickson prefer metaphors over direct advice?",
            options: [
              "He wasn't good at giving direct advice",
              "Metaphors bypass conscious resistance and let the unconscious make its own healing connections",
              "He charged more for longer sessions",
              "Metaphors sound more impressive"
            ],
            correct: 1,
            explanation: "Direct advice activates conscious resistance ('Yes, but...'). Metaphors bypass this because the conscious mind processes them as 'just a story' while the unconscious extracts the relevant healing message and applies it automatically."
          }
        ],
        secret: "🔓 DEEPEST SECRET: Erickson's most powerful metaphors were about his own life. When he told patients about teaching himself to walk again after polio, he wasn't making conversation — he was delivering a therapeutic metaphor about recovery that was impossible to resist because it was TRUE. Authentic stories are the most powerful hypnotic tools."
      },
      ...februaryManLessons
    ],
    puzzles: [
      {
        id: 'me-puzzle-1',
        title: "Embedded Command Detector",
        description: "Find the hidden commands embedded in this seemingly normal conversation.",
        type: 'decode',
        difficulty: 3,
        scenario: "A manager says to a nervous employee before a presentation: 'You know, I was talking to Sarah yesterday and she mentioned that some people just NATURALLY FEEL CONFIDENT when they STAND UP to speak. I'm not sure why that is. Maybe it's because they TAKE A DEEP BREATH and TRUST THEMSELVES. Anyway, I think your slides look great. It's interesting how people can FEEL READY without even realizing they already are.'",
        options: [
          { text: "Commands: NATURALLY FEEL CONFIDENT, STAND UP, TAKE A DEEP BREATH, TRUST THEMSELVES, FEEL READY", feedback: "PERFECT! You identified all five embedded commands. The manager hid them in quotes, observations, and casual remarks. The conscious mind heard encouragement; the unconscious received direct programming for confidence.", correct: true },
          { text: "There are no hidden commands — it's just a pep talk", feedback: "Look again. Notice the commands that are slightly emphasized or that could stand alone as instructions: NATURALLY FEEL CONFIDENT, TAKE A DEEP BREATH, TRUST THEMSELVES, FEEL READY. These are embedded commands that the unconscious processes as direct instructions.", correct: false },
          { text: "The only command is 'TAKE A DEEP BREATH'", feedback: "You caught one, but there are four more! Read again and look for phrases that could function as direct commands if extracted from their surrounding sentences.", correct: false }
        ],
        hint: "Look for phrases that could be pulled out of the sentence and still function as direct commands or suggestions."
      },
      {
        id: 'me-puzzle-2',
        title: "Build a Metaphor",
        description: "Select the best therapeutic metaphor for this situation.",
        type: 'scenario',
        difficulty: 4,
        scenario: "A client is stuck in a dead-end job. They know they should leave but they're terrified of the unknown. They keep finding reasons to stay: the benefits, the familiarity, the fear of starting over. They describe feeling 'trapped in a comfortable cage.' Which metaphor would Erickson most likely use?",
        options: [
          { text: "A hermit crab that must find a new shell to grow — it's vulnerable during the transition, but staying in the old shell means death", feedback: "BRILLIANT! This is isomorphic to the client's situation. The hermit crab MUST change shells to survive (parallel to needing to leave). The vulnerability during transition is acknowledged (validating the fear). But staying in the too-small shell is the real danger (reframe: staying is riskier than leaving). This is exactly how Erickson would approach it.", correct: true },
          { text: "A lion breaking free from a zoo and conquering the wilderness", feedback: "Too dramatic and confrontational. Erickson would never use a metaphor that implies the client needs to be 'brave' or 'fierce.' That creates performance pressure. The best metaphors normalize the process and show it as natural, not heroic.", correct: false },
          { text: "A lecture about how fortune favors the bold", feedback: "This isn't a metaphor at all — it's direct advice, which is exactly what Erickson avoided. Direct advice activates conscious resistance. The client would immediately think 'Yes, but what about my benefits?'", correct: false },
          { text: "A person who won the lottery and became rich overnight", feedback: "This doesn't parallel the client's situation (no effort, no transition, no growth). Good metaphors must be isomorphic — they must mirror the structure of the problem while showing the path to resolution.", correct: false }
        ],
        hint: "Erickson's metaphors always mirror the STRUCTURE of the problem. What in nature must change its container to survive?"
      },
      ...februaryManPuzzles
    ]
  },

  // Module 3: FBI Body Language
  {
    id: 'fbi-body-language',
    title: "FBI Body Language",
    icon: "🕵️",
    description: "Professional-grade body language analysis as taught at the FBI Academy in Quantico",
    color: "from-red-900 to-orange-900",
    secrets: [
      "SECRET_LIMBIC: The limbic brain never lies. While the face can be controlled, the feet always tell the truth.",
      "SECRET_BASELINE: Without establishing a baseline first, all body language reading is guessing.",
      "SECRET_CLUSTERS: Single gestures mean nothing. Look for CLUSTERS of 3+ signals pointing the same direction."
    ],
    lessons: [
      {
        id: 'fbi-fundamentals',
        title: "The Limbic System: Your Body's Truth Teller",
        subtitle: "Why the Body Cannot Lie — The Neuroscience of Nonverbal Communication",
        content: [
          "Former FBI Special Agent Joe Navarro spent 25 years reading body language professionally. His key insight: the limbic brain (the ancient, emotional brain) controls nonverbal behavior INSTANTLY and HONESTLY. The neocortex (the thinking brain) controls speech and can lie. But the limbic responses are faster than conscious control.\n\n**THE LIMBIC RESPONSE SYSTEM:**\n\nThe limbic brain has three responses to threat:\n1. **FREEZE** — The first and most ancient response. Before fight or flight, animals freeze. In humans: sudden stillness, held breath, locked joints, feet wrapped around chair legs.\n2. **FLIGHT** — Distancing behaviors. Leaning away, angling body toward exit, covering face, blocking eyes, creating barriers with objects.\n3. **FIGHT** — Aggressive displays. Puffing up chest, invading space, jaw thrust, aggressive pointing, standing tall.\n\nThese responses happen in MILLISECONDS — before the conscious mind can intervene. That's why they're reliable.",

          "**THE BASELINE PRINCIPLE:**\n\nBefore reading anyone's body language, you MUST establish their baseline — how they normally behave when comfortable and truthful.\n\nProcess:\n1. Observe them in a relaxed, low-stakes situation\n2. Note their default posture, gestures, facial expressions, voice\n3. Note their personal space preferences\n4. Note their normal eye behavior\n5. THIS is their baseline\n\nThen look for DEVIATIONS from baseline. A deviation signals that something has changed in their emotional state.\n\nCritical: A person who always crosses their arms might just be comfortable that way (baseline). Crossed arms in someone who normally holds them open is a red flag.\n\n**COMMON MISTAKES:**\n- Reading body language without establishing baseline first\n- Interpreting single gestures instead of clusters\n- Projecting your own culture's signals onto others\n- Confusing correlation with causation\n- Reading body language from too far away",

          "**THE FEET — The Most Honest Body Part:**\n\nNavarro's biggest revelation: THE FEET DON'T LIE. People learn to control their face and hands but forget about their feet.\n\n👟 **Happy feet:** Bouncing, tapping (positive), wiggling — indicate excitement or happiness.\n👟 **Frozen feet:** Suddenly still feet after movement — freeze response, something alarming was said or perceived.\n👟 **Direction feet:** Feet point toward what the person wants. If their feet point toward the door during conversation, they want to leave. If feet point toward you, they're engaged.\n👟 **Foot lock:** Ankles wrapped around chair legs — restraining themselves, holding back.\n👟 **Foot withdrawal:** Pulling feet under chair — insecurity, withdrawal.\n👟 **Foot kick:** Sudden foot extension — excitement, positive surprise.\n👟 **Starter position:** One foot forward, weight shifted — ready to leave.\n\n**THE TORSO:**\n🫁 Ventral fronting (facing someone with full torso) = trust, engagement\n🫁 Ventral denial (angling away) = discomfort, distrust\n🫁 Torso shield (crossing arms, holding objects in front) = protection\n🫁 Torso lean forward = interest\n🫁 Torso lean back = establishing distance or dominance\n🫁 Shoulder shrug (one side) = lack of confidence in what they're saying (VERY reliable indicator of deception)\n🫁 Full shoulder shrug = genuine uncertainty",

          "**THE HANDS AND ARMS:**\n\n🤲 **Gravity-defying gestures:** Thumbs up, steepled fingers, palms up, arms up — indicate confidence, positive emotions. Gravity-defying = feeling up.\n\n🤲 **Gravity-succumbing gestures:** Thumbs tucked, hands in pockets, arms pressed to sides, slumped — indicate low confidence, negative emotions.\n\n🤲 **The hand steeple:** Fingertips touching, forming a church steeple. THE single most powerful confidence display. CEOs, surgeons, and top attorneys do this constantly. If someone steeples while making a claim, they believe what they're saying.\n\n🤲 **Thumb displays:** Thumbs visible = confidence. Thumbs hidden (tucked in pockets, wrapped in fists) = low confidence, insecurity. Thumbs hooked in belt loops = confidence and territorial display.\n\n🤲 **Pacifying behaviors:** Self-touching, neck touching, hair playing, lip touching, hand rubbing — these are the limbic brain's way of self-soothing under stress. When you see a SUDDEN increase in pacifying behaviors, the person is experiencing stress.\n\n🤲 **Hand wringing:** Severe anxiety.\n🤲 **Nail biting:** Insecurity or anxiety at a deep level.\n🤲 **Finger interlacing with thumbs up vs. down:** Thumbs up = still feel confident despite tension. Thumbs pressed down = low confidence.\n\n🤲 **The arm barrier:** Crossed arms isn't always defensive — check the context. Arms crossed while leaning back = closed. Arms crossed while leaning forward = possible cold, or comfortable baseline."
        ],
        keyPoints: [
          "The limbic brain controls body language faster than the conscious mind — it doesn't lie",
          "Always establish a BASELINE before reading body language",
          "Look for CLUSTERS of signals (3+), not single gestures",
          "The feet are the most honest body part — people forget to control them",
          "Gravity-defying gestures indicate confidence; gravity-succumbing indicate low confidence",
          "Pacifying behaviors (self-touching) signal stress — watch for SUDDEN increases",
          "The freeze response is the first and most reliable indicator of distress"
        ],
        exercise: "Go to a café and observe 5 different people for 5 minutes each. WITHOUT listening to their conversations, write down: (1) Their baseline posture, (2) Foot behavior, (3) Hand confidence level (steepled vs. hidden), (4) Any pacifying behaviors. Then note any changes when something happens (phone ring, person approaching, etc.).",
        quiz: [
          {
            question: "Why are the feet the most honest body part according to FBI analysis?",
            options: [
              "Because feet are connected to the brainstem directly",
              "Because people focus on controlling their face and hands but forget their feet",
              "Because feet have the most nerve endings",
              "Because shoes hide feet from view"
            ],
            correct: 1,
            explanation: "People spend their lives learning to control their facial expressions and hand gestures, but almost no one thinks about what their feet are doing. This makes feet the most reliable source of genuine emotional information."
          },
          {
            question: "What is the FIRST step before reading someone's body language?",
            options: [
              "Look at their feet",
              "Check their pupil dilation",
              "Establish their baseline behavior",
              "Note their clothing choices"
            ],
            correct: 2,
            explanation: "Without knowing someone's baseline (how they normally behave when comfortable), you can't identify meaningful deviations. Crossed arms might be their default comfort position, not a defensive gesture."
          }
        ],
        secret: "🔓 FBI SECRET: Navarro says the most reliable deception indicator isn't any single gesture — it's the TIMING. When someone's verbal and nonverbal messages are out of sync (they say 'yes' while briefly shaking their head 'no'), the nonverbal came from the limbic brain and is the truth. The verbal is the lie catching up."
      },
      {
        id: 'fbi-face-reading',
        title: "The Face: Micro-Expressions & Emotional Leakage",
        subtitle: "Reading the 7 Universal Emotions in Fractions of a Second",
        content: [
          "Paul Ekman's research (used by FBI, CIA, TSA) identified 7 universal emotions that display identically across ALL cultures. Micro-expressions — lasting 1/25th to 1/5th of a second — reveal true feelings before the person can mask them.\n\n**THE 7 UNIVERSAL EMOTIONS:**\n\n1. 😊 **HAPPINESS** (Genuine — Duchenne Smile)\n- Corners of mouth pulled up\n- Cheeks pushed up\n- Crow's feet wrinkles around eyes\n- The eye wrinkle is the KEY — it cannot be faked voluntarily\n- A social smile uses only the mouth. A genuine smile engages the orbicularis oculi muscle around the eyes.\n\n**Test:** Cover the mouth in a photo. If the eyes look happy, the smile is real. If the eyes look neutral while the mouth smiles, it's fake.\n\n2. 😢 **SADNESS**\n- Inner corners of eyebrows pulled UP (the most difficult expression to fake — only 10% of people can do it voluntarily)\n- Eyelids droop\n- Corners of mouth pull down\n- Lower lip may push up and tremble\n- Overall face 'falls' — gravity wins\n\n3. 😡 **ANGER**\n- Eyebrows pulled down and together\n- Tightened lower eyelids\n- Lips pressed together OR open in a square shape\n- Jaw thrust forward\n- Nostrils flare\n- Glaring eyes — hard, direct stare\n- Red flush may appear on face and neck",

          "4. 😨 **FEAR**\n- Eyebrows raised and pulled together (different from surprise — in fear, they come together; in surprise, they stay apart)\n- Upper eyelids raised, showing white above iris\n- Mouth open with lips pulled back (horizontally, not rounded like surprise)\n- Frozen expression — the face freezes briefly\n- Skin may pale (blood redirects to muscles for flight)\n\n5. 😲 **SURPRISE**\n- Eyebrows raised high (arched, not together)\n- Eyes wide open (round)\n- Mouth drops open (oval shape)\n- CRITICAL: Genuine surprise lasts less than ONE SECOND. If someone looks 'surprised' for longer, they're performing.\n\n6. 🤢 **DISGUST**\n- Upper lip raised (the snarl)\n- Nose wrinkled\n- Cheeks raised\n- Eyebrows lowered (not raised — this distinguishes it from anger)\n- May include head turn or pull-back\n- This expression evolved from the gag reflex — 'this is toxic'\n\n7. 😤 **CONTEMPT (The Most Dangerous Expression)**\n- One-sided expression — ONLY one corner of the mouth raises\n- This is the ONLY asymmetric universal expression\n- It signals SUPERIORITY — 'I am better than you'\n- John Gottman's research: contempt in a marriage predicts divorce with 93% accuracy\n- In any relationship, contempt is the single most corrosive emotion",

          "**MICRO-EXPRESSION DETECTION:**\n\nMicro-expressions flash across the face in 1/25th to 1/5th of a second. They appear when someone is trying to conceal their true emotion. They're involuntary — the limbic brain fires the expression before the prefrontal cortex can suppress it.\n\n**Training Protocol:**\n1. Study photographs of each pure emotion until you can identify them instantly\n2. Watch slow-motion video of micro-expressions\n3. Watch normal-speed video and try to catch them\n4. Practice in real conversations\n5. It takes approximately 40 hours of practice to become proficient\n\n**Where to look:**\n- The transition between expressions (the moment someone shifts from one emotion to another)\n- When someone is answering a question they want to lie about\n- When someone receives unexpected news\n- When someone is pretending to agree but actually disagrees\n\n**EMOTIONAL LEAKAGE:**\nEven when micro-expressions are suppressed, emotions 'leak' through:\n- Brief nostril flare (anger)\n- Lip compression (anger or determination)\n- Lip corner pull-down (sadness)\n- Chin dimpling (holding back tears)\n- Single eyebrow flash (disbelief or doubt)\n- Eye blocking (closing eyes slightly longer than a blink — 'I don't want to see this')",

          "**THE EYES:**\n\n👁️ **Pupil dilation:** Pupils dilate with interest, attraction, or cognitive effort. They constrict with dislike or bright light. You can't control this — it's pure limbic response.\n\n👁️ **Eye blocking:** Covering, narrowing, or closing eyes = limbic protection from something perceived as threatening or unpleasant. Watch for prolonged blinks.\n\n👁️ **Gaze aversion:** Looking away doesn't necessarily mean lying! Liars often maintain MORE eye contact because they know people expect liars to look away. Instead, watch for CHANGES in gaze behavior.\n\n👁️ **Squinting:** Brief squinting when hearing something = disagreement or dislike, even if they verbally agree.\n\n👁️ **Eye-accessing cues (NLP-derived):**\n- Up-right: Visual Construction (possibly imagining/creating)\n- Up-left: Visual Recall (accessing memory)\n- Lateral-right: Auditory Construction\n- Lateral-left: Auditory Recall\n- Down-right: Kinesthetic (feelings)\n- Down-left: Internal Dialogue\n\n**CAUTION:** These are statistical tendencies, not absolute rules. Left-handed people may reverse. Always calibrate to the individual's baseline.\n\n**THE ULTIMATE FBI FACE-READING PRINCIPLE:**\nDon't look for lying. Look for STRESS. Liars experience stress, but so do innocent people who fear they won't be believed. What body language reveals is emotional state, not guilt or innocence."
        ],
        keyPoints: [
          "7 universal emotions show identically across ALL cultures",
          "Genuine happiness includes eye wrinkles (crow's feet) — fake smiles don't",
          "Contempt (one-sided mouth raise) is the most dangerous expression in relationships",
          "Genuine surprise lasts less than ONE SECOND — longer is performance",
          "Micro-expressions flash in 1/25th to 1/5th of a second and reveal suppressed emotions",
          "Look for emotional leakage: nostril flare, lip compression, chin dimpling",
          "Don't look for lying — look for stress and deviations from baseline"
        ],
        exercise: "Watch a political interview or debate with the sound OFF. Focus entirely on facial expressions. Identify: (1) At least 3 micro-expressions, (2) Any contempt displays, (3) Genuine vs. fake smiles, (4) Emotional leakage. Then watch WITH sound and see if the words match the face.",
        quiz: [
          {
            question: "How can you tell a genuine (Duchenne) smile from a fake one?",
            options: [
              "Genuine smiles are bigger",
              "Genuine smiles engage the muscles around the eyes, creating crow's feet",
              "Genuine smiles show more teeth",
              "Genuine smiles last longer"
            ],
            correct: 1,
            explanation: "The orbicularis oculi muscle around the eyes contracts involuntarily during genuine happiness, creating crow's feet wrinkles. Most people cannot voluntarily contract this muscle, so its presence confirms a real smile."
          },
          {
            question: "Why is contempt considered the most dangerous emotion in relationships?",
            options: [
              "Because it causes physical violence",
              "Because it signals superiority, which corrodes respect and predicts relationship failure with 93% accuracy",
              "Because it's contagious",
              "Because it can't be resolved through therapy"
            ],
            correct: 1,
            explanation: "Gottman's research showed that contempt (the belief 'I am better than you') predicts divorce with 93% accuracy. It corrodes the fundamental respect required for any relationship to survive."
          }
        ],
        secret: "🔓 FBI SECRET: The single most reliable indicator that someone is lying about a specific topic is called 'the hot spot' — it's when their body language CHANGES precisely at the moment you introduce a specific topic. If they're relaxed discussing everything else but show stress indicators (pacifying, frozen feet, eye blocking) only when discussing the alibi, that's your hot spot."
      },
      {
        id: 'fbi-deception',
        title: "Deception Detection",
        subtitle: "Advanced FBI Interrogation Indicators — What Really Signals a Lie",
        content: [
          "**WHAT THE FBI ACTUALLY LOOKS FOR:**\n\nForget everything TV taught you about lie detection. Here's what actually works:\n\n**THE TRUTH ABOUT 'LIE DETECTION':**\n- There is NO single reliable indicator of lying\n- Eye direction doesn't reliably predict deception\n- Nervousness doesn't equal lying (innocent people are nervous too)\n- Confident delivery doesn't equal truth (psychopaths are confident liars)\n- The polygraph has a 15-25% error rate\n\nWhat DOES work is detecting **STRESS RESPONSES** when discussing specific topics, combined with **STATEMENT ANALYSIS** and **BEHAVIORAL CLUSTERS.**",

          "**VERBAL INDICATORS OF DECEPTION:**\n\n🗣️ **Distancing Language:**\n- 'That woman' instead of using her name\n- 'The car' instead of 'my car'\n- Avoiding pronouns 'I' and 'we'\n- Past tense for ongoing relationships ('She was my friend')\n\n🗣️ **Qualifying Statements:**\n- 'To be honest with you...' (Why specify? Were they being dishonest before?)\n- 'I swear to God...'\n- 'To the best of my knowledge...'\n- 'As far as I know...'\n- 'Honestly...' 'Truthfully...' 'Frankly...'\n\n🗣️ **Non-Answers:**\n- Repeating the question ('Where was I? You're asking where I was?')\n- Answering a question with a question ('Why would I do that?')\n- Attacking the questioner ('How dare you ask me that!')\n- Changing the subject\n- Overly specific irrelevant details (creating a convincing-sounding story)\n\n🗣️ **Statement Analysis:**\n- Truthful accounts: 'I drove home, ate dinner, watched TV, went to bed.'\n- Deceptive accounts often have: gaps in time, changes in verb tense, unnecessary detail in irrelevant parts, lack of detail in critical parts.\n- 'I don't remember' is a common deflection — but also a sometimes truthful one. Watch for selective memory: perfect recall of some things but blank on others.\n\n🗣️ **The Commitment Test:**\n- Ask directly: 'Did you do it?'\n- Truthful denial: 'No, I did not.' (Direct, past tense, first person)\n- Deceptive non-denial: 'I would never do something like that.' (Conditional tense, character reference, not a direct denial)\n- 'Not that I recall' = not a denial\n- 'I don't think so' = not a denial\n- 'Why would I?' = not a denial",

          "**BEHAVIORAL CLUSTERS — THE FBI METHOD:**\n\nNever rely on ONE signal. Look for CLUSTERS of 3+ indicators occurring together:\n\n**Deception Cluster Example:**\n1. Pacifying behavior increases (neck touching)\n2. Verbal distancing ('that situation' instead of specific details)\n3. Feet shift to starter position (oriented toward exit)\n4. Qualifying language ('To be perfectly honest...')\n5. Non-answer to direct question\n\nWhen 3+ of these occur simultaneously around a specific topic, stress is present. Combined with statement analysis, this is the FBI's actual method.\n\n**THE COGNITIVE LOAD TECHNIQUE:**\n\nLying requires more mental effort than truth-telling. Exploit this:\n- Ask them to tell the story BACKWARDS (liars struggle because they memorized it forward)\n- Ask unexpected detail questions ('What was playing on the radio?')\n- Ask the same question different ways at different times (liars' stories change; truth-tellers' are consistent with natural variation)\n- Increase cognitive load by asking them to do something else while talking (maintain eye contact, do math)\n\n**THE STRATEGIC EVIDENCE TECHNIQUE (Swedish Method):**\n- Don't reveal what you know upfront\n- Ask open-ended questions\n- Let them tell their story fully\n- THEN present evidence that contradicts their account\n- Watch the behavioral shift in real-time\n- This is the most effective interrogation technique ever scientifically validated",

          "**ADVANCED: READING DECEPTION IN GROUPS**\n\nWhen multiple people are involved in deception:\n- They avoid looking at each other when the topic comes up (afraid of being 'caught' coordinating)\n- Their stories are TOO similar (rehearsed) or TOO different (didn't coordinate)\n- They may unconsciously nominate a spokesperson (all eyes go to one person)\n- Watch for micro-expressions of relief when the topic changes\n- The weakest link often shows the most pacifying behavior and seeks reassurance from the group\n\n**ETHICAL FRAMEWORK:**\n\nThis knowledge is powerful and must be used ethically:\n1. Never accuse based on body language alone — it reveals stress, not guilt\n2. Cultural differences affect nonverbal behavior — calibrate to the individual\n3. Medical conditions, medications, and neurodivergence affect body language\n4. Use this skill to build understanding, not to manipulate\n5. The best interrogators are the most empathetic — they read people to connect, not to dominate"
        ],
        keyPoints: [
          "No single indicator reliably detects lying — look for CLUSTERS of 3+",
          "Verbal indicators: distancing language, qualifiers, non-answers, commitment avoidance",
          "The cognitive load technique exploits the extra mental effort required to lie",
          "The Strategic Evidence Technique is the most scientifically validated method",
          "Body language reveals STRESS, not guilt — context determines meaning",
          "Always establish baseline, look for deviations on specific topics (hot spots)"
        ],
        exercise: "Watch a press conference or public interview. Use statement analysis on one response: (1) Is the denial direct? (2) Are there distancing words? (3) Any qualifiers? (4) Does the body language cluster support or contradict the words? Write your analysis without claiming guilt — only note stress indicators.",
        quiz: [
          {
            question: "Someone responds to 'Did you take the money?' with 'I would never steal. I'm an honest person. Why would you accuse me?' What's happening?",
            options: [
              "They're clearly innocent and offended",
              "They gave a character reference and attacked the questioner but didn't actually deny taking the money",
              "Their anger proves they're lying",
              "They're using the Strategic Evidence Technique"
            ],
            correct: 1,
            explanation: "Notice: they never said 'No, I did not take the money.' Instead, they offered a character reference ('I'm honest') and attacked the questioner ('How dare you'). Both are classic non-denial strategies. A truthful person's first instinct is usually a direct denial."
          }
        ],
        secret: "🔓 CLASSIFIED TECHNIQUE: FBI profilers use 'the pregnant pause.' After someone finishes answering, don't respond. Just wait. Silently. Most people can't tolerate silence and will fill it — often with information they didn't intend to share. The truth lives in the uncomfortable silences."
      }
    ],
    puzzles: [
      {
        id: 'fbi-puzzle-1',
        title: "The Job Interview",
        description: "Read this scenario and identify deception indicators.",
        type: 'observation',
        difficulty: 3,
        scenario: "During a job interview, the candidate is relaxed and articulate when discussing their education and skills. When asked 'Why did you leave your last position?', the following happens: they uncross their legs and press their feet flat on the floor, touch their neck briefly, say 'Well, to be perfectly honest, it was just time for a change,' then immediately launch into a detailed story about a project they completed successfully at that job. Their voice pitch rises slightly. When you ask the follow-up 'Was there any conflict with your team?', they say 'Not that I recall, I mean, every workplace has its challenges, right?' and laugh.",
        options: [
          { text: "Multiple deception cluster indicators: feet freeze, pacifying behavior, qualifier ('to be perfectly honest'), topic redirect, voice pitch change, non-denial ('not that I recall'), and deflection with humor", feedback: "EXCELLENT FBI-GRADE ANALYSIS! You identified the cluster: (1) Feet freeze = limbic freeze response, (2) Neck touch = pacifying/self-soothing, (3) 'To be perfectly honest' = qualifier suggesting previous dishonesty, (4) Redirect to success story = avoidance, (5) Voice pitch rise = stress, (6) 'Not that I recall' = non-denial, (7) Deflection humor. This doesn't prove they're lying, but there's significant stress around this topic.", correct: true },
          { text: "They seem nervous but that's normal for an interview", feedback: "The key observation is that they were relaxed UNTIL this specific topic. The stress isn't generalized interview anxiety — it's specifically triggered by the question about leaving. This topic-specific stress is what the FBI calls a 'hot spot.'", correct: false },
          { text: "The laugh proves they're comfortable and telling the truth", feedback: "Laughter after a stressful question is actually a pacifying/deflecting behavior, not an indicator of comfort. Notice the laugh came WITH a non-denial ('Not that I recall') and a deflection ('every workplace has challenges, right?'). The laugh is covering, not revealing.", correct: false },
          { text: "You can't tell anything without seeing them in person", feedback: "While in-person observation is ideal, the behavioral PATTERN described here is rich with indicators. FBI analysts are trained to identify patterns from descriptions, transcripts, and recordings — not only live observation.", correct: false }
        ],
        hint: "Compare their behavior when comfortable (discussing education) versus when this topic arose. What CHANGED? Changes are the signal."
      }
    ]
  },

  // Module 4: Personality Theories
  {
    id: 'personality-theories',
    title: "Personality Decoder",
    icon: "🧬",
    description: "Complete guide to reading and understanding personality types, traits, and behavioral patterns",
    color: "from-amber-900 to-yellow-900",
    secrets: [
      "SECRET_DARK_TRIAD: Narcissism + Machiavellianism + Psychopathy = The Dark Triad. Learn to identify all three.",
      "SECRET_ATTACHMENT: Adult attachment style predicts relationship patterns with 85% accuracy.",
      "SECRET_DEFENSE: Every personality type has a signature defense mechanism. Learn the defenses, read the person."
    ],
    lessons: [
      {
        id: 'pt-big-five',
        title: "The Big Five Personality Traits (OCEAN)",
        subtitle: "The Only Scientifically Validated Personality Framework",
        content: [
          "The Big Five (OCEAN) is the ONLY personality model with robust scientific validation across cultures, ages, and contexts. Unlike MBTI (which has poor test-retest reliability), the Big Five has been replicated thousands of times.\n\n**THE FIVE TRAITS:**\n\n🌊 **O — OPENNESS TO EXPERIENCE**\nHigh: Creative, curious, adventurous, abstract thinking, loves novelty\nLow: Practical, conventional, prefers routine, concrete thinking\nBody language: High-O people gesture more, have more animated expressions, varied vocal patterns\nConversation tell: Ask about their hobbies. High-O has many diverse interests. Low-O has fewer, deeper ones.\nDark side of High-O: Can be impractical, scattered, pretentious\nDark side of Low-O: Rigid, closed-minded, boring\n\n📋 **C — CONSCIENTIOUSNESS**\nHigh: Organized, disciplined, reliable, goal-oriented, detail-focused\nLow: Spontaneous, flexible, disorganized, careless\nBody language: High-C people have precise movements, organized belongings, punctual\nConversation tell: Ask about their plans. High-C has detailed plans. Low-C is vague.\nDark side of High-C: Perfectionism, workaholism, judgmental of others' messiness\nDark side of Low-C: Unreliable, chaotic, underachiever",

          "🫂 **E — EXTRAVERSION**\nHigh: Energized by people, talkative, assertive, enthusiastic, seeks stimulation\nLow (Introversion): Energized by solitude, reflective, reserved, prefers depth over breadth\nBody language: Extraverts take up more space, louder voice, more eye contact, approach behavior\nConversation tell: Watch social situations. Extraverts move TOWARD groups. Introverts find the edge.\nDark side of High-E: Attention-seeking, shallow relationships, can't be alone\nDark side of Low-E: Isolation, social anxiety, missed opportunities\n\n💝 **A — AGREEABLENESS**\nHigh: Cooperative, trusting, helpful, empathetic, conflict-avoiding\nLow: Competitive, skeptical, challenging, argumentative, self-interested\nBody language: High-A people mirror others, nod frequently, maintain soft eye contact\nConversation tell: Disagree with them on something minor. High-A will accommodate. Low-A will debate.\nDark side of High-A: Doormat, exploitable, passive-aggressive when resentful\nDark side of Low-A: Abrasive, difficult to work with, alienating\n\n🧠 **N — NEUROTICISM (Emotional Instability)**\nHigh: Prone to anxiety, mood swings, stress, negative emotions, self-doubt\nLow (Emotional Stability): Calm, resilient, even-tempered, secure\nBody language: High-N shows more pacifying behaviors, startle response, tension in shoulders/jaw\nConversation tell: Notice their reaction to minor setbacks. High-N catastrophizes. Low-N shrugs it off.\nDark side of High-N: Chronic anxiety, relationship instability, burnout\nDark side of Low-N: May seem cold/uncaring, misses genuine danger signals",

          "**READING BIG FIVE IN REAL-TIME:**\n\n**Step 1: Observe the environment** — Their desk, car, phone home screen reveal O and C.\n- Messy desk with art: High O, Low C\n- Clean desk with color-coded files: Low O, High C\n- Messy desk with sticky note reminders: High C trying to compensate for Low C tendencies\n\n**Step 2: Observe social behavior** — Reveals E and A.\n- Approaches strangers easily, shares personal stories: High E, probably High A\n- Sits alone but seems content: Low E (introversion)\n- Engages socially but debates/challenges: High E, Low A\n\n**Step 3: Observe stress response** — Reveals N.\n- Minor frustration → large emotional response: High N\n- Major setback → measured response: Low N\n- Asks others 'Is everything okay?' repeatedly: High N + High A\n\n**BIG FIVE AND RELATIONSHIPS:**\n- Most compatible: Similar C levels, complementary E levels, both moderate N\n- Most conflicted: Very different C levels (neat + messy), very different A levels (agreeable + disagreeable)\n- Red flags: Very high N + Very low A = volatile and hostile"
        ],
        keyPoints: [
          "OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
          "The Big Five is the only scientifically validated personality framework",
          "Each trait has a 'dark side' at both extremes",
          "You can read Big Five traits through environment, social behavior, and stress response",
          "Compatibility depends on trait combinations, especially C, E, and N levels",
          "Always assess traits as a SPECTRUM, not binary categories"
        ],
        exercise: "Rate yourself on each Big Five trait (1-10). Then ask 3 close friends to rate you. Compare. The gap between self-perception and others' perception reveals your blind spots. Pay special attention to any trait where you and others disagree by more than 3 points.",
        quiz: [
          {
            question: "Why is the Big Five preferred over MBTI by psychologists?",
            options: [
              "It has more categories",
              "It's newer",
              "It has robust test-retest reliability and cross-cultural validation",
              "It's easier to understand"
            ],
            correct: 2,
            explanation: "The Big Five has been replicated across thousands of studies, multiple cultures, and different age groups. MBTI has poor test-retest reliability — about 50% of people get a different type when retested after 5 weeks."
          }
        ]
      },
      {
        id: 'pt-dark-triad',
        title: "The Dark Triad & Dark Personalities",
        subtitle: "Identifying Narcissism, Machiavellianism, and Psychopathy",
        content: [
          "The Dark Triad consists of three personality traits that share a common core of callousness, manipulation, and self-interest. They exist on a SPECTRUM — everyone has some degree of each. The danger zone is the extreme end.\n\n**1. NARCISSISM (Grandiose & Vulnerable)**\n\n**Grandiose Narcissist:**\n- Core belief: 'I am special and superior'\n- Behaviors: Dominates conversations, drops names, exaggerates achievements, needs constant admiration\n- Body language: Takes up space, loud voice, intense eye contact (not warm — penetrating), perfect grooming, dramatic gestures\n- Conversation tells: Always steers conversation back to themselves. Asks questions only to set up their own stories.\n- Relationship pattern: Love-bombing → devaluation → discard → hoover\n\n**Vulnerable Narcissist (harder to spot):**\n- Core belief: 'I am special but nobody sees it'\n- Behaviors: Passive-aggressive, victimhood, subtle put-downs, hypersensitive to criticism, envious\n- Body language: May appear shy but watches others intensely, facial expressions of contempt or disgust when others succeed\n- Conversation tells: 'Must be nice to have your advantages...' 'Not everyone had your opportunities...'\n\n**How to identify narcissistic manipulation:**\n- DARVO: Deny, Attack, Reverse Victim and Offender\n- Gaslighting: 'That never happened' / 'You're imagining things'\n- Flying monkeys: Enlisting others to do their bidding\n- Triangulation: Bringing a third party into the dynamic to create jealousy/insecurity",

          "**2. MACHIAVELLIANISM**\n\n- Core belief: 'The ends justify the means'\n- Named after Niccolò Machiavelli's 'The Prince'\n- Behaviors: Strategic, calculating, long-term planning of manipulation, pragmatic morality\n- Body language: Controlled, measured, reveals little. Excellent social performance. You may feel charmed without knowing why.\n- Conversation tells: They know everything about you but you know little about them. They ask strategic questions. They remember details about people's vulnerabilities.\n\n**Distinguishing from narcissism:** Narcissists manipulate for admiration. Machiavellians manipulate for power. Narcissists are often sloppy (ego gets in the way). Machiavellians are precise.\n\n**How Machiavellians operate:**\n1. Intelligence gathering (asking questions, listening carefully, filing information)\n2. Identifying leverage (what you want, what you fear)\n3. Creating obligation (favors, gifts, helping)\n4. Calling in favors strategically\n5. Plausible deniability (everything can be explained innocently)\n\n**3. PSYCHOPATHY (Primary & Secondary)**\n\n**Primary Psychopath:**\n- Core deficit: Reduced capacity for empathy and fear\n- Neurological: Smaller amygdala, reduced prefrontal cortex activity\n- Behaviors: Superficial charm, pathological lying, no remorse, thrill-seeking, parasitic lifestyle\n- Body language: Intense but 'flat' eye contact (the 'psychopathic stare'), controlled movements, predatory stillness, can mimic any emotion perfectly\n- Conversation tells: Too smooth, too charming, too fast with answers. Stories don't add up on closer inspection.\n\n**Secondary Psychopath (Sociopath):**\n- Environmentally created (trauma, abuse) rather than neurological\n- More impulsive, less controlled than primary psychopaths\n- Can feel emotion but regulates it poorly\n- More likely to be caught because of impulsivity",

          "**THE DARK TRIAD IN ACTION — RECOGNIZING THE PATTERN:**\n\nAll three share these behaviors:\n1. **Charm offensive** — Initially fascinating, magnetic, seem too good to be true\n2. **Rapid intimacy** — Push for emotional closeness very fast\n3. **Information asymmetry** — They know more about you than you know about them\n4. **Boundary testing** — Small violations first, escalating over time\n5. **Emotional manipulation** — Fear, obligation, and guilt (FOG)\n6. **Isolation** — Gradually separating you from support systems\n7. **Gaslighting** — Making you question your own reality\n\n**PROTECTION STRATEGIES:**\n\n1. **Trust the pace** — If it's too fast, it's too fast. Genuine connection develops gradually.\n2. **Maintain your support network** — Never let anyone isolate you\n3. **Watch for information asymmetry** — Are they learning about you while revealing nothing real?\n4. **The boundary test** — Set a clear boundary early. How they respond reveals everything.\n5. **The gut test** — If you feel confused, foggy, or off-balance around someone, your limbic system is warning you\n6. **The friend test** — If your friends are concerned, listen. Dark triad individuals are often charming to the target but visible to outside observers\n7. **The 90-day rule** — Most people can't maintain a false persona for more than 90 days. Wait."
        ],
        keyPoints: [
          "Dark Triad = Narcissism + Machiavellianism + Psychopathy, existing on a spectrum",
          "Grandiose narcissists seek admiration; vulnerable narcissists play victim",
          "Machiavellians manipulate for power with precision and long-term strategy",
          "Psychopathy involves reduced empathy; primary (neurological) vs. secondary (environmental)",
          "All three share: charm, rapid intimacy, boundary testing, isolation tactics",
          "Protection: trust the pace, maintain support, set boundaries early, trust your gut"
        ],
        exercise: "Think of the most manipulative person you've ever encountered. Without judgment, analyze: (1) Which Dark Triad trait was dominant? (2) What was their opening charm strategy? (3) When did you first feel 'off' about them? (4) What hook did they use on you specifically (what did you want or fear)? (5) How did you eventually see through it? This analysis protects you from future manipulation.",
        quiz: [
          {
            question: "What is the key difference between a narcissist and a Machiavellian?",
            options: [
              "Narcissists are smarter",
              "Narcissists manipulate for admiration, Machiavellians for power",
              "Machiavellians are more violent",
              "There is no difference"
            ],
            correct: 1,
            explanation: "The narcissist's currency is admiration — they need to be seen as special. The Machiavellian's currency is power — they need control. This makes narcissists more visible (they crave attention) and Machiavellians more dangerous (they work in the shadows)."
          }
        ],
        secret: "🔓 DARK SECRET: Research shows that people high in the Dark Triad are disproportionately found in certain professions: CEO, lawyer, media personality, surgeon, police officer, clergy, chef, civil servant, salesperson. This doesn't mean these professions are bad — it means they ATTRACT certain traits. Knowing which traits a profession attracts helps you read the people in it."
      },
      {
        id: 'pt-attachment',
        title: "Attachment Theory",
        subtitle: "How Your Childhood Bond Predicts Every Relationship You'll Ever Have",
        content: [
          "John Bowlby and Mary Ainsworth discovered that the bond formed between infant and caregiver creates a TEMPLATE that shapes all future relationships. This template is called your 'attachment style' and it operates UNCONSCIOUSLY.\n\n**THE FOUR ATTACHMENT STYLES:**\n\n💚 **SECURE ATTACHMENT (55-65% of population)**\nFormed by: Consistent, responsive caregiving\nCore belief: 'I am worthy of love. Others are reliable.'\nIn relationships: Comfortable with intimacy AND independence. Can self-soothe. Communicates needs directly. Handles conflict constructively. Doesn't play games.\nBody language: Relaxed, open posture. Comfortable with physical proximity. Maintains warm eye contact. Doesn't clutch or avoid.\nConversation tells: Talks about relationships with balance — acknowledges both good and bad. Doesn't idealize or demonize exes.\n\n❤️ **ANXIOUS ATTACHMENT (20-25% of population)**\nFormed by: Inconsistent caregiving (sometimes responsive, sometimes not)\nCore belief: 'I need to be closer. They might leave. I'm not enough.'\nIn relationships: Craves closeness, fears abandonment, reads into everything, needs constant reassurance, becomes distressed when partner is distant.\nBody language: Leans forward, seeks physical contact, watches partner's face intensely, mirrors constantly, restless when partner is away.\nConversation tells: Checks phone frequently, asks 'Are we okay?', tells long stories about relationship fears, remembers every slight.",

          "💙 **AVOIDANT ATTACHMENT (Dismissive) (20-25% of population)**\nFormed by: Emotionally unavailable caregiving (child learns needs won't be met)\nCore belief: 'I don't need anyone. Closeness is dangerous.'\nIn relationships: Values independence fiercely, uncomfortable with intimacy, withdraws when partner gets close, deactivates emotions.\nBody language: Maintains physical distance, limited touch, looks away during emotional conversations, arms crossed or hands in pockets.\nConversation tells: 'I'm fine on my own.' Talks about relationships with detachment. Idealizes freedom. Exes are dismissed casually.\n\n💜 **DISORGANIZED ATTACHMENT (Fearful-Avoidant) (5-10% of population)**\nFormed by: Caregiver who was both source of comfort AND source of fear (abuse, trauma)\nCore belief: 'I want closeness but closeness hurts. I need you but I'm afraid of you.'\nIn relationships: Push-pull pattern. Intense approach then sudden withdrawal. Hot and cold. Unpredictable.\nBody language: Contradictory signals — leaning in while crossing arms, making eye contact then looking away quickly, reaching out then pulling back.\nConversation tells: Difficulty creating coherent relationship narratives. Stories are fragmented, confused, emotional.",

          "**THE ANXIOUS-AVOIDANT TRAP:**\n\nThe most common painful pattern: Anxious + Avoidant individuals are magnetically attracted to each other.\n\nWhy: The anxious person's pursuit activates the avoidant's sense of being needed (which their childhood self craved). The avoidant person's distance activates the anxious person's abandonment fear (recreating their inconsistent caregiver).\n\nThe cycle:\n1. Anxious pursues → Avoidant withdraws\n2. Anxious escalates (texts, calls, demands) → Avoidant further withdraws\n3. Avoidant gives minimum reassurance → Anxious briefly calms\n4. Cycle repeats with increasing intensity\n\n**BREAKING THE TRAP:**\n- Anxious people: Practice self-soothing before reaching out. Wait 24 hours before sending that text. Ask: 'Am I seeking reassurance or connection?'\n- Avoidant people: Practice staying present when uncomfortable. Notice the urge to withdraw and choose to stay 10% longer each time.\n- Both: Date secure people. Secure attachment is EARNED, not born — it can be developed through practice.\n\n**READING ATTACHMENT STYLES IN OTHERS:**\n\n1. How do they handle separation? (Anxious = distressed, Avoidant = relieved, Disorganized = both)\n2. How do they handle reunion? (Anxious = clingy, Avoidant = distant, Disorganized = confused)\n3. How do they talk about relationships? (Secure = balanced, Anxious = preoccupied, Avoidant = dismissive, Disorganized = incoherent)\n4. How do they respond to your vulnerability? (Secure = meets it, Anxious = matches it intensely, Avoidant = changes subject, Disorganized = freezes)"
        ],
        keyPoints: [
          "Four attachment styles: Secure, Anxious, Avoidant, Disorganized",
          "Attachment style forms in infancy and persists into adulthood unless consciously changed",
          "Anxious-Avoidant pairing is the most common painful relationship dynamic",
          "Secure attachment can be EARNED through practice and healthy relationships",
          "Read attachment style through separation behavior, reunion behavior, and relationship narratives",
          "Understanding your own style is the first step to healthier relationships"
        ],
        exercise: "Identify your attachment style by answering: (1) What happens in your body when a partner doesn't text back for hours? (panic = anxious, relief = avoidant, both = disorganized, slight concern then moving on = secure). (2) After an argument, do you pursue or withdraw? (3) Can you name your feelings in the moment, or do you only identify them later?",
        quiz: [
          {
            question: "Why are anxious and avoidant people magnetically attracted to each other?",
            options: [
              "They're physically attracted to each other",
              "They recreate each other's childhood attachment patterns, creating familiar (though painful) dynamics",
              "It's just random chance",
              "Society pressures opposites together"
            ],
            correct: 1,
            explanation: "The anxious person's pursuit feels familiar to the avoidant (whose caregiver was intrusive), and the avoidant's withdrawal feels familiar to the anxious person (whose caregiver was inconsistent). Both recreate their childhood dynamic unconsciously."
          }
        ],
        secret: "🔓 HIDDEN INSIGHT: Here's the paradox of attachment — the people who need intimacy most (anxious) pursue it in ways that push it away (clinging, demanding). The people who fear intimacy most (avoidant) attract it through their mysteriousness and independence. The universe has a cruel sense of humor."
      }
    ],
    puzzles: [
      {
        id: 'pt-puzzle-1',
        title: "Profile the Personality",
        description: "Read this person's behavior and determine their Big Five profile and attachment style.",
        type: 'pattern',
        difficulty: 4,
        scenario: "Jake, 34, arrives 20 minutes late to a dinner party, unapologetic. He immediately begins telling a loud, animated story about his recent skydiving trip. He interrupts others frequently but makes people laugh. His phone is face-up on the table and he checks it every few minutes. When someone mentions their recent promotion, Jake says 'Cool' and immediately talks about his own plans to start a business. His desk at work is chaos. His relationships last 3-6 months — he usually ends them because he 'gets bored.' When his ex texted him last week, he didn't reply.",
        options: [
          { text: "High E, High O, Low C, Low A, Low N — Avoidant Attachment", feedback: "EXCELLENT! High Extraversion (loud, animated, center of attention). High Openness (skydiving, business plans, variety-seeking). Low Conscientiousness (late, messy desk, phone distracting). Low Agreeableness (interrupts, dismissive of others' news, self-focused). Low Neuroticism (unapologetic, doesn't worry about others' opinions). Avoidant Attachment (short relationships, 'gets bored' = deactivation strategy, ignores ex).", correct: true },
          { text: "Narcissistic personality, Anxious Attachment", feedback: "While Jake shows some narcissistic traits (self-focus, interrupting), these behaviors also match Low Agreeableness + High Extraversion without reaching pathological narcissism. And his attachment is clearly Avoidant, not Anxious — he ends relationships and ignores contact, rather than clinging or pursuing.", correct: false },
          { text: "High E, Low O, High C, High A — Secure Attachment", feedback: "Jake is clearly not High C (messy desk, late), not High A (interrupts, dismissive), and not Securely attached (can't maintain relationships). Re-examine each behavior against the trait descriptions.", correct: false }
        ],
        hint: "Map each observable behavior to a specific Big Five trait. Then look at his relationship pattern for attachment style."
      }
    ]
  },

  // Module 5: Influence & Persuasion
  {
    id: 'influence-persuasion',
    title: "The Art of Influence",
    icon: "🧲",
    description: "Complete mastery of ethical influence, persuasion, and the psychology of compliance",
    color: "from-violet-900 to-fuchsia-900",
    secrets: [
      "SECRET_CIALDINI: Robert Cialdini's 7 principles account for 90% of all persuasion.",
      "SECRET_FRAMING: Whoever controls the frame controls the conversation. Frame is everything.",
      "SECRET_ANCHORING: The first number in any negotiation anchors all subsequent numbers. Always anchor first."
    ],
    lessons: [
      {
        id: 'ip-cialdini',
        title: "Cialdini's 7 Principles of Influence",
        subtitle: "The Science of Why People Say Yes",
        content: [
          "Robert Cialdini spent 3 years undercover in sales organizations, cult recruitment, and fundraising operations to discover the universal principles of influence. His research identified 7 principles that account for the vast majority of compliance behavior.\n\n**1. RECIPROCITY — 'I gave you something, now you owe me'**\n\nThe Rule: When someone gives us something, we feel obligated to give back. This is a deep evolutionary impulse — societies that reciprocated survived.\n\nIn Action:\n- Free samples at grocery stores increase purchases by 500%\n- Waiters who bring a mint with the check get 14% more tips. Two mints: 21% more\n- The Hare Krishnas gave flowers to airport travelers BEFORE asking for donations — donations soared\n\nAdvanced Application:\n- Give FIRST, unexpectedly, and personalized\n- The gift should be meaningful (not transparently manipulative)\n- Create a sense of genuine obligation\n- The reciprocity impulse is so strong that even UNWANTED gifts create obligation\n\nDefense: Recognize the tactic. Redefine unwanted gifts as sales devices, not genuine generosity. You can accept without feeling obligated.\n\n**2. COMMITMENT & CONSISTENCY — 'I said it, so I must mean it'**\n\nThe Rule: Once people take a position (especially publicly), they feel compelled to behave consistently with it.\n\nIn Action:\n- 'Would you consider yourself an adventurous person?' (Yes) 'Great, would you like to try our new extreme sports package?'\n- Foot-in-the-door technique: Get a small yes first, then escalate\n- Written commitments are stronger than verbal. Public stronger than private. Active stronger than passive.\n\nAdvanced Application:\n- Get micro-commitments: 'Does that make sense?' 'Do you agree this is important?'\n- Each yes builds the consistency chain\n- Ask people to WRITE DOWN their goals — writing activates commitment\n- Public commitment is nearly unbreakable (which is why wedding vows are public)\n\nDefense: Ask yourself: 'Would I make this same choice if I were starting from scratch?' Don't let past commitments drive current decisions that no longer make sense.",

          "**3. SOCIAL PROOF — 'Everyone else is doing it'**\n\nThe Rule: We look to others to determine correct behavior, especially under uncertainty.\n\nIn Action:\n- Laugh tracks increase perceived funniness by 30%\n- Bartenders seed tip jars to suggest tipping is normal\n- '5 million copies sold!' — if millions bought it, it must be good\n- People are 62% more likely to pick up litter if they see someone else do it first\n\nAdvanced Application:\n- 'Most people in your situation choose...' (even if that's not strictly true)\n- Testimonials from SIMILAR people are most effective\n- Numbers matter: '95% of our customers...' is more powerful than 'many customers'\n- In uncertainty, social proof becomes the PRIMARY decision driver\n\nDefense: Ask: 'Would I want this if I were the only person on Earth?' Strip away the social context and evaluate on merits.\n\n**4. AUTHORITY — 'The expert says so'**\n\nThe Rule: We defer to perceived authority figures, even when their authority is irrelevant.\n\nIn Action:\n- Milgram's experiment: 65% of people administered lethal electric shocks when an 'authority' told them to\n- People obey uniforms (even fake ones)\n- Titles (Dr., Professor) increase compliance dramatically\n- Expensive clothes, luxury cars, and confident posture signal authority\n\nAdvanced Application:\n- Establish credentials early but subtly\n- Admit a weakness first — counterintuitively, this INCREASES perceived credibility\n- 'I have to tell you, this option isn't our biggest profit-maker, BUT it's the best one for you'\n- Expert + trustworthy = nearly irresistible\n\nDefense: Ask: 'Is this person actually an expert in THIS field?' Authority in one area doesn't transfer to others.",

          "**5. LIKING — 'I like you, therefore I believe you'**\n\nThe Rule: We say yes to people we like. Liking is driven by:\n- Physical attractiveness (halo effect)\n- Similarity ('We're so alike!')\n- Compliments (even ones we know are strategic)\n- Familiarity (mere exposure effect — we like what we see often)\n- Association (linking yourself to positive things)\n\nAdvanced Application:\n- Find genuine similarities and highlight them\n- Use the person's name (most beautiful sound in any language — Dale Carnegie)\n- Mirror their body language, speech pace, and vocabulary\n- Compliment sincerely and specifically ('Your analysis of the market data was incredibly thorough')\n\n**6. SCARCITY — 'It's running out!'**\n\nThe Rule: Things become more desirable when they're perceived as scarce or disappearing.\n\nIn Action:\n- 'Limited time offer!' 'Only 3 left in stock!' 'Exclusive invitation'\n- Loss aversion: People fear losing something MORE than they desire gaining something of equal value\n- Information that's 'secret' or 'censored' becomes more persuasive\n\nAdvanced Application:\n- Frame choices in terms of what they'll LOSE, not what they'll gain\n- 'This opportunity won't come again' is more powerful than 'This is a great opportunity'\n- Create genuine scarcity when possible (limited seats, deadlines, exclusive access)\n\n**7. UNITY — 'We are one' (Cialdini's newest principle)**\n\nThe Rule: We say yes to people who share our IDENTITY — not just similarity, but shared belonging.\n\nIn Action:\n- Shared nationality, religion, family, team, school\n- 'We're in this together' is more powerful than 'You and I are similar'\n- Creating in-group identity increases compliance dramatically\n\nAdvanced Application:\n- Find shared identities: 'As fellow parents/engineers/New Yorkers...'\n- Create new shared identities: 'We're the team that's going to crack this'\n- Co-creation builds unity: ask for advice, involvement, participation"
        ],
        keyPoints: [
          "Reciprocity: give first, create genuine obligation",
          "Commitment: get small yeses that build to big yeses",
          "Social Proof: show what others are doing, especially similar others",
          "Authority: establish expertise, then admit weaknesses to boost credibility",
          "Liking: similarity, compliments, familiarity, physical appearance",
          "Scarcity: frame as loss, create urgency, make exclusive",
          "Unity: shared identity is stronger than mere similarity"
        ],
        exercise: "Over the next week, identify each of the 7 principles being used on you. Advertising, sales, social media, workplace interactions — they're everywhere. Keep a log: (1) What principle was used? (2) Was it effective? (3) How would you defend against it? This awareness is your armor.",
        quiz: [
          {
            question: "A salesperson says 'I'll be honest, our product isn't the cheapest option, but here's why it's the best value...' Which principle are they using?",
            options: [
              "Scarcity", 
              "Authority — admitting a weakness increases perceived credibility",
              "Reciprocity",
              "Social Proof"
            ],
            correct: 1,
            explanation: "By admitting a weakness (not the cheapest), the salesperson dramatically increases their perceived trustworthiness and authority. This is the 'Admit-a-Flaw' technique — counterintuitively, showing honesty about a negative makes everything else you say more believable."
          }
        ],
        secret: "🔓 MASTER SECRET: Cialdini discovered that the most powerful persuasion uses MULTIPLE principles simultaneously. A charity dinner (unity + reciprocity) with testimonials from similar donors (social proof) hosted by a celebrity expert (authority + liking) for a cause that's 'almost fully funded' (scarcity) after attendees have publicly pledged support (commitment). That's 6 principles in one event. This is why gala fundraisers raise millions."
      },
      {
        id: 'ip-framing',
        title: "Frame Control & Reframing",
        subtitle: "Whoever Controls the Frame Controls the Conversation",
        content: [
          "A 'frame' is the lens through which a situation is interpreted. The same facts inside different frames lead to completely different conclusions and decisions.\n\n**WHAT IS A FRAME?**\n\nExample: A company laying off 20% of its workforce.\n- Frame A: 'The company is failing and cutting costs desperately.' (Fear, instability)\n- Frame B: 'The company is strategically restructuring for future growth.' (Confidence, opportunity)\n- Same facts. Completely different emotional and behavioral responses.\n\nWhoever SETS the frame first has the advantage, because everyone else is now reacting WITHIN that frame.",

          "**FRAME TYPES:**\n\n🖼️ **Gain vs. Loss Frame:**\n'This surgery has a 90% survival rate' vs. 'This surgery has a 10% mortality rate'\nSame data. Gain frame → people choose it. Loss frame → people avoid it.\n\n🖼️ **Scarcity Frame:**\n'We have plenty of time' vs. 'Time is running out'\nScarcity frame increases urgency, action, and value perception.\n\n🖼️ **Identity Frame:**\n'Would you like to donate?' (behavior request) vs. 'Would you like to be a donor?' (identity request)\nIdentity frame increases compliance because people want to be consistent with who they ARE.\n\n🖼️ **Authority Frame:**\n'I think we should try this approach' vs. 'The research clearly shows this approach works'\nAuthority frame removes personal opinion and replaces it with expertise.\n\n🖼️ **Temporal Frame:**\n'This is painful right now' vs. 'In five years, you'll look back on this as a turning point'\nTemporal reframing changes the emotional valence by changing the time horizon.",

          "**REFRAMING TECHNIQUES:**\n\n**Content Reframe:** Change what the situation MEANS.\nClient: 'I'm so stubborn.'\nReframe: 'You're determined and persistent — those are the traits of people who succeed.'\n\n**Context Reframe:** Change where/when the trait would be VALUABLE.\nClient: 'My obsessiveness ruins everything.'\nReframe: 'In what situation would obsessive attention to detail be exactly what's needed? Brain surgery? Engineering? I bet you'd be excellent.'\n\n**Meaning Reframe:** Change the IMPLICATION.\nClient: 'My boss yelled at me — he hates me.'\nReframe: 'Or he's under enormous pressure and trusts you enough to be real with you. People don't yell at people they don't care about — they ignore them.'\n\n**Pre-framing:** Set the frame BEFORE the experience.\n'Before we start, I want you to know that this process sometimes feels uncomfortable — and the research shows that the more uncomfortable it feels, the more growth is happening.'\nNow discomfort = progress. You pre-framed it.\n\n**Deframing:** Remove the frame entirely.\n'Let's step back from all interpretations for a moment. What are the raw, observable facts? Just what happened, without any story about what it means.'\nThis is the Adult ego state tool from Berne's TA — pure data processing.\n\n**ADVANCED: NESTED FRAMES**\n\nStack frames to create layered meaning:\n'As a leader (identity frame), in this critical moment (scarcity frame), the research shows (authority frame) that teams who take bold action (gain frame) are the ones who look back in five years (temporal frame) and say \"that's when everything changed.\"'\n\nFive frames in one paragraph. Almost irresistible."
        ],
        keyPoints: [
          "A frame is the interpretive lens that determines meaning and response",
          "The person who sets the frame first controls the conversation",
          "Gain/Loss, Scarcity, Identity, Authority, and Temporal are the major frame types",
          "Content, Context, and Meaning reframes change interpretation without changing facts",
          "Pre-framing sets expectations that shape subsequent experience",
          "Nested frames stack multiple persuasive elements for maximum impact"
        ],
        exercise: "Take one negative belief you hold about yourself. Apply all three reframing techniques: (1) Content reframe: what else could this trait mean? (2) Context reframe: where would this trait be valuable? (3) Meaning reframe: what positive implication could this situation have? Notice which reframe feels most powerful — that reveals your dominant processing style.",
        quiz: [
          {
            question: "A doctor says 'This surgery has a 10% mortality rate' vs. 'This surgery has a 90% survival rate.' Why do these produce different decisions?",
            options: [
              "The numbers are different",
              "Loss framing activates fear more strongly than gain framing activates hope, even with identical data",
              "People can't do math",
              "Doctors are more trustworthy when optimistic"
            ],
            correct: 1,
            explanation: "Loss aversion is one of the strongest cognitive biases — people feel the pain of loss roughly 2x more than the pleasure of equivalent gain. Framing the same data as loss vs. gain activates completely different emotional systems."
          }
        ],
        secret: "🔓 FRAME MASTER SECRET: Every argument is really a frame war. When couples fight about dishes, they're not fighting about dishes — they're fighting about whose FRAME gets accepted: 'You don't respect me' vs. 'You're too controlling.' The dishes are irrelevant. The frame is everything. Master reframing and you'll never truly lose an argument."
      }
    ],
    puzzles: [
      {
        id: 'ip-puzzle-1',
        title: "The Negotiation",
        description: "Choose the optimal influence strategy for this scenario.",
        type: 'manipulation',
        difficulty: 5,
        scenario: "You're negotiating a salary increase. Your current salary is $75,000. You want $90,000. Market rate for your role is $85,000. Your boss is known to be a numbers person (data-driven) who values loyalty and dislikes surprises. You have an offer from a competitor for $88,000 but you'd prefer to stay. How do you play this?",
        options: [
          { text: "Lead with market data and your contributions, anchor at $95,000, use the competing offer as leverage only if needed, frame as partnership not ultimatum", feedback: "MASTERFUL! Here's why: (1) ANCHORING at $95K means the negotiation centers around $90K. (2) DATA-FIRST respects your boss's thinking style (authority frame). (3) CONTRIBUTIONS establish reciprocity — 'Here's what I've done for you.' (4) HOLDING THE COMPETING OFFER in reserve avoids triggering a threat response. (5) PARTNERSHIP FRAME activates unity — 'We're on the same team.' (6) If needed, the competing offer proves MARKET VALUE without being an ultimatum. This hits 5 of Cialdini's principles.", correct: true },
          { text: "Threaten to leave unless they pay $90,000", feedback: "This triggers the fight response in your boss, damages the relationship, and even if successful, creates resentment. Ultimatums are lose-lose: you either damage the relationship or look weak if you don't follow through.", correct: false },
          { text: "Ask for $85,000 (market rate) and hope for the best", feedback: "By anchoring at market rate, you've already given away your negotiation room. The boss will negotiate DOWN from your anchor. You'll end up at $80-82K. Always anchor ABOVE your target.", correct: false },
          { text: "Send an email listing your demands without a meeting", feedback: "Negotiation is a human interaction that requires reading body language, adjusting in real-time, and building rapport. Email removes all of these tools. Never negotiate important matters via email when face-to-face is possible.", correct: false }
        ],
        hint: "Consider: What's the ideal anchor? How do you match your boss's decision-making style? When do you reveal the competing offer? What frame do you set?"
      }
    ]
  },

  // Module 6: Advanced Mind Techniques
  {
    id: 'advanced-mind',
    title: "Advanced Mind Arts",
    icon: "🔮",
    description: "NLP, cold reading, rapport mastery, and advanced psychological techniques",
    color: "from-pink-900 to-rose-900",
    secrets: [
      "SECRET_NLP_CORE: NLP is the user manual for the brain. Change the internal representation, change the response.",
      "SECRET_COLD_READ: A good cold reader doesn't read you — they let you read yourself and take credit.",
      "SECRET_RAPPORT: Deep rapport makes influence unnecessary. When someone feels truly understood, they follow willingly."
    ],
    lessons: [
      {
        id: 'am-nlp',
        title: "Neuro-Linguistic Programming (NLP)",
        subtitle: "The User Manual for Your Brain",
        content: [
          "NLP was created by Richard Bandler and John Grinder by modeling three master therapists: Fritz Perls (Gestalt), Virginia Satir (Family Therapy), and Milton Erickson (Hypnotherapy). It's a practical toolkit for changing thoughts, feelings, and behaviors.\n\n**CORE NLP PRINCIPLES:**\n\n1. **The Map is Not the Territory:** Your perception of reality is NOT reality — it's a filtered, distorted, generalized MAP. Everyone's map is different. Conflicts arise from confusing maps with territory.\n\n2. **Experience has Structure:** Every internal experience (memory, fear, confidence) is made of sensory components (visual, auditory, kinesthetic) that can be modified. Change the components, change the experience.\n\n3. **There is No Failure, Only Feedback:** Every result teaches you something. Reframe failure as data.\n\n4. **The Person with the Most Flexibility Controls the System:** The most adaptable person in any situation has the most options and therefore the most power.\n\n5. **Everyone Has All the Resources They Need:** (Erickson's influence) The issue isn't lacking resources — it's lacking ACCESS to resources in the right context.",

          "**REPRESENTATIONAL SYSTEMS:**\n\nPeople process information primarily through one sensory channel:\n\n👁️ **Visual (V):** Thinks in pictures. Speaks fast (trying to describe what they see). Uses words like: 'I SEE what you mean', 'It LOOKS good', 'PICTURE this', 'BRIGHT idea', 'CLEAR thinking'.\nBody: Looks up when thinking, gestures in the air, breathing high in chest, speaks quickly.\n\n👂 **Auditory (A):** Thinks in sounds and words. Moderate pace. Uses words like: 'SOUNDS good', 'I HEAR you', 'That RINGS a bell', 'LOUD and clear', 'TELL me more'.\nBody: Head tilted (ear toward sound), touches ear, rhythmic speech, may talk to themselves.\n\n🤲 **Kinesthetic (K):** Thinks in feelings and sensations. Speaks slowly (checking internal feelings). Uses words like: 'I FEEL like', 'That's HEAVY', 'GRASP the concept', 'SOLID idea', 'SMOOTH process'.\nBody: Looks down when thinking, touches chest/stomach, deep breathing, slower movements.\n\n**MATCHING REPRESENTATIONAL SYSTEMS:**\nTo build instant rapport, match the other person's system:\n- To a visual person: 'I see your perspective. Let me paint a picture for you.'\n- To an auditory person: 'I hear what you're saying. Let me tell you something.'\n- To a kinesthetic person: 'I feel what you're getting at. Let me walk you through this.'",

          "**POWERFUL NLP TECHNIQUES:**\n\n⚡ **ANCHORING:**\nAssociating a specific stimulus with a specific state.\n\n1. Recall a time you felt supremely confident (access the state)\n2. When the feeling peaks, squeeze your left earlobe (set the anchor)\n3. Break state (think of something neutral)\n4. Repeat 3-5 times to strengthen\n5. Test: squeeze the earlobe. If you feel a surge of confidence, the anchor is set.\n\nAdvanced: Stack multiple positive experiences on the same anchor for a supercharged state.\n\n⚡ **SWISH PATTERN (for changing habits):**\n1. Identify the trigger image (what you see right before the unwanted behavior)\n2. Create a desired-state image (how you want to be instead — make it big, bright, attractive)\n3. Start with the trigger image large and bright, desired image small and dark in the corner\n4. SWISH! Instantly make the trigger small/dark and the desired image large/bright\n5. Repeat 5-7 times rapidly\n6. Test: try to think of the trigger. If it's fuzzy or the desired image appears instead, it worked.\n\n⚡ **REFRAMING (Six-Step Reframe):**\n1. Identify the unwanted behavior/response\n2. Establish communication with the part responsible ('Thank you for protecting me')\n3. Discover the positive intention behind the behavior\n4. Ask the creative part to generate 3 new ways to fulfill that intention\n5. Get agreement from the responsible part to try the new ways\n6. Ecology check — make sure no other parts object\n\n⚡ **TIMELINE THERAPY:**\n1. Imagine floating above your timeline (past behind, future ahead)\n2. Float back to the root cause of a limiting belief\n3. Observe the event from above (dissociated — watching yourself)\n4. Understand what you needed to learn\n5. Give your younger self the resource they needed\n6. Float back to the present, noticing how the timeline has changed"
        ],
        keyPoints: [
          "NLP models three master therapists' techniques into practical tools",
          "The map is not the territory — your perception is a filter, not reality",
          "Visual, Auditory, and Kinesthetic systems determine how people process information",
          "Matching someone's representational system creates instant rapport",
          "Anchoring links a physical stimulus to a desired emotional state",
          "The Swish Pattern reprograms automatic behavioral responses"
        ],
        exercise: "Determine your primary representational system. Notice the words you use most: do you 'see' what people mean, 'hear' what they're saying, or 'feel' what they're getting at? Then practice matching someone else's system for one full conversation. Notice the difference in rapport.",
        quiz: [
          {
            question: "If someone says 'I need to get a handle on this situation — it just feels so heavy,' what representational system are they using?",
            options: [
              "Visual", "Auditory", "Kinesthetic", "Digital/Abstract"
            ],
            correct: 2,
            explanation: "'Handle' (touch), 'feels' (sensation), 'heavy' (physical weight) — all kinesthetic predicates. To build rapport, respond in kind: 'I sense your struggle. Let me help you get a grip on this.'"
          }
        ],
        secret: "🔓 NLP SECRET: The most powerful NLP technique is also the simplest — MODELING. Find someone who does what you want to do excellently. Study their beliefs, strategies, and physiology. Install these in yourself. You don't need to reinvent greatness — you can model it."
      },
      {
        id: 'am-cold-reading',
        title: "Cold Reading & Mentalism",
        subtitle: "How to Appear to Read Anyone's Mind",
        content: [
          "Cold reading is the art of telling strangers specific things about themselves without prior knowledge. Used by psychics, mentalists, fortune tellers, and — more usefully — by skilled therapists, negotiators, and social artists.\n\n**THE BARNUM EFFECT (Foundation of all cold reading):**\n\nStatements that feel personally specific but apply to almost everyone:\n- 'You have a tendency to be critical of yourself' (everyone does)\n- 'While you have some personality weaknesses, you're generally able to compensate for them' (universally true)\n- 'You have a great deal of unused capacity that you haven't turned to your advantage' (everyone believes this)\n- 'At times you're extroverted and social, while at other times you're introverted and reserved' (everyone varies)\n\nThe key: People WANT to believe you can read them. They'll do the work of making your statements fit their life.",

          "**COLD READING TECHNIQUES:**\n\n🔮 **The Rainbow Ruse:**\nAttribute BOTH ends of a spectrum: 'You can be very serious when the situation calls for it, but you also have a playful side that your closest friends see.'\nThis is always true. Everyone has both sides.\n\n🔮 **The Shotgun Statement:**\nMake multiple specific guesses rapidly. People remember the hits and forget the misses.\n'I'm getting something about a health concern — chest area, or maybe stomach... headaches recently? Or someone close to you having health issues?'\nWith enough shots, something will hit.\n\n🔮 **The Vanishing Negative:**\n'You don't work in technology, do you?' If yes: 'I thought so, I sensed that energy.' If no: 'No, I didn't think so — you have more of a creative energy.'\nYou can't lose.\n\n🔮 **The Fork:**\n'I see a significant relationship change... either a new relationship forming or an existing one deepening — or possibly ending.'\nCovers all possibilities. The person will latch onto whichever fits.\n\n🔮 **Statistical Fishing:**\nUse knowledge of probabilities:\n- 80% of people over 30 have lost a grandparent\n- 70% of people have back or neck pain\n- 50% of first names start with one of 5 letters (J, M, S, A, D)\n- Most people have a scar on their left knee from childhood\n\n🔮 **The Warm Read:**\nDeduce from observable information:\n- Ring tan line (recently divorced/separated)\n- Callused hands (manual work)\n- Pen in pocket (writes frequently — teacher? writer?)\n- Shoes (economic status, personality — flashy vs. practical)\n- Watch hand (left-handed people often wear watch on right)\n- Phone case/stickers (interests, identity)",

          "**ADVANCED: THE FULL COLD READING PERFORMANCE**\n\nStep 1: **Establish Authority** — 'I'm going to tell you some things about yourself. Some will be very accurate. Some may not make sense yet — they might relate to the future or to something you haven't consciously recognized.'\n(This pre-frames: hits are proof of ability, misses are 'future events')\n\nStep 2: **Barnum Openers** — Start with universally true statements delivered as specific insights.\n'I sense you've been going through a period of transition lately — not just external changes, but internal ones too. You're questioning things you used to take for granted.'\n\nStep 3: **Read and Respond** — Watch their reactions. When you see a hit (widened eyes, nodding, forward lean), DIVE DEEPER into that area. When you see a miss (flat expression, lean back), quickly pivot.\n\nStep 4: **Get Them Talking** — 'Does that resonate with you?' Then LISTEN. They'll give you everything you need for the rest of the reading.\n\nStep 5: **Specific Deductions** — Use your observation skills (body language, clothing, age, demographics) to make increasingly specific statements.\n\nStep 6: **The Clincher** — End with something emotionally powerful and universally true:\n'I want you to know that the path you're on is the right one, even when it doesn't feel like it. Trust yourself more. You have everything you need.'\n\n**ETHICAL NOTE:**\nCold reading is a skill, not a deception. Used ethically, it demonstrates empathy and observational skill. Used unethically, it exploits vulnerable people. The choice is yours."
        ],
        keyPoints: [
          "The Barnum Effect: people accept vague statements as personally specific",
          "Cold reading techniques: Rainbow Ruse, Shotgun, Vanishing Negative, Fork",
          "Statistical fishing uses probability to make educated guesses",
          "Warm reading deduces from observable physical evidence",
          "Watch reactions in real-time — hits get expanded, misses get abandoned",
          "Used ethically, cold reading develops deep empathy and observational skill"
        ],
        exercise: "Practice with a willing friend. Tell them: 'I'm going to practice reading people. I'll make statements — tell me if they're accurate.' Start with Barnum statements, then try statistical fishing, then deductions from their appearance. Track your hit rate. With practice, you'll develop genuine intuitive ability.",
        quiz: [
          {
            question: "Why do people believe cold readers even when statements are vague?",
            options: [
              "People are gullible",
              "Cold readers have genuine psychic abilities",
              "The Barnum Effect: people actively search for ways to make vague statements personally meaningful",
              "Cold readers use hypnosis secretly"
            ],
            correct: 2,
            explanation: "The Barnum Effect means people want to be understood so badly that they'll do the cognitive work of fitting vague statements to their specific lives. The reader provides the framework; the subject fills in the content."
          }
        ],
        secret: "🔓 MENTALIST SECRET: The most effective cold readers aren't performing tricks — they've developed genuine empathy through thousands of hours of intense observation. What starts as technique becomes intuition. After enough practice, you'll 'know' things about people that you can't explain. This is pattern recognition so fast it feels like psychic ability."
      },
      {
        id: 'am-rapport',
        title: "Deep Rapport & Connection",
        subtitle: "The Master Skill That Makes All Other Skills Unnecessary",
        content: [
          "Rapport is the deepest and most important social skill. When you have true rapport with someone, influence becomes unnecessary — they WANT to be on your side. Every technique in this course works 10x better with rapport and is nearly useless without it.\n\n**WHAT IS DEEP RAPPORT?**\n\nSurface rapport: Politeness, pleasantness, social lubrication.\nDeep rapport: The feeling of being profoundly understood, of psychological safety, of 'this person GETS me.'\n\nDeep rapport creates:\n- Immediate trust (bypassing the normal trust-building timeline)\n- Information flow (people share things they wouldn't normally share)\n- Influence (people naturally want to help those they feel rapport with)\n- Protection (people don't want to harm those they feel connected to)",

          "**THE FOUR PILLARS OF DEEP RAPPORT:**\n\n**PILLAR 1: MATCHING AND MIRRORING**\n\nMatch their:\n- Body posture (cross legs when they do, lean when they lean)\n- Breathing rate (breathe in sync — the MOST powerful matching technique)\n- Voice (pace, tone, volume, rhythm)\n- Language (their words, their metaphors, their values)\n- Energy level (if they're calm, be calm. If animated, be animated)\n\nIMPORTANT: Mirror with a 2-3 second delay, not simultaneously (which looks creepy). And mirror about 60-70% of their behavior, not 100%.\n\nWhen matching is working, you'll notice a phenomenon: when YOU shift your posture, THEY follow. This means rapport is established — you've moved from matching to leading.\n\n**PILLAR 2: ACTIVE LISTENING (Level 3)**\n\nLevel 1 Listening: Waiting for your turn to talk (most people)\nLevel 2 Listening: Hearing the content of what they say\nLevel 3 Listening: Hearing what they mean, what they feel, and what they need — often before they're aware of it themselves\n\nLevel 3 techniques:\n- Reflect FEELINGS, not just content: 'It sounds like that made you feel invisible' (not 'So your boss didn't invite you to the meeting')\n- Notice what they DON'T say (the elephant in the room)\n- Notice SHIFTS in energy, breathing, posture during conversation\n- Ask questions that nobody ever asks them: 'What was that like for you?' 'How did that FEEL?'\n- Use silence. Let pauses exist. Most profound sharing happens AFTER a pause.",

          "**PILLAR 3: VALIDATION**\n\nValidation is NOT agreement. It's communicating: 'Your experience makes sense.'\n\nPowerful validation phrases:\n- 'That makes sense.'\n- 'Anyone in your situation would feel that way.'\n- 'You had good reasons for doing what you did.'\n- 'I can see why that was important to you.'\n- 'That must have been incredibly difficult.'\n\nWhat validation does to the brain: When a person feels validated, their amygdala calms, their prefrontal cortex engages, and they literally become smarter and more open. Invalidation ('You shouldn't feel that way') does the opposite — it triggers the threat response.\n\n**PILLAR 4: VULNERABILITY RECIPROCITY**\n\nRapport deepens through mutual vulnerability. When you share something real about yourself (not a performance, not a calculated disclosure — something genuine), the other person is neurologically compelled to match your level of openness.\n\nThe sequence:\n1. They share something slightly personal\n2. You match their level (or go slightly deeper)\n3. They go deeper\n4. You match again\n5. Repeat until you reach the level of connection you're seeking\n\n**CAUTION:** Always match — don't leap ahead. If they share a casual anecdote and you share a childhood trauma, you'll create discomfort, not rapport. Match their pace.\n\n**ADVANCED RAPPORT: DEEP IDENTITY RESONANCE**\n\nThe deepest rapport occurs when you connect at the IDENTITY level:\n- Not 'I like the same music as you' (behavior)\n- Not 'I value honesty too' (values)\n- But 'I know what it's like to feel different from everyone around you' (identity)\n\nIdentity-level resonance creates bonds that last years. It's the difference between a pleasant acquaintance and a lifelong friend."
        ],
        keyPoints: [
          "Deep rapport = the feeling of being profoundly understood",
          "Four pillars: Matching/Mirroring, Level 3 Listening, Validation, Vulnerability Reciprocity",
          "Match breathing for the most powerful nonverbal connection",
          "Validation calms the amygdala and opens the prefrontal cortex",
          "Vulnerability must be matched in pace — never leap ahead",
          "Identity-level resonance ('I know what it's like to be you') creates the deepest bonds"
        ],
        exercise: "In your next meaningful conversation, focus ONLY on Level 3 listening and validation. Don't offer advice. Don't share your own stories. Just reflect feelings and validate. Use phrases like 'That must have been...' and 'It makes sense that you...' Afterward, notice how the other person responds to you. Most people report feeling more connected after this exercise than after any other.",
        quiz: [
          {
            question: "What is the most powerful matching technique for building rapport?",
            options: [
              "Wearing similar clothing",
              "Using the same vocabulary",
              "Matching their breathing rate",
              "Having similar political opinions"
            ],
            correct: 2,
            explanation: "Breathing is the most fundamental biological rhythm. When you synchronize your breathing with someone else's, you create a physiological connection that the unconscious recognizes as profound intimacy. It's also the hardest to fake, which makes it the most authentic signal of connection."
          }
        ],
        secret: "🔓 ULTIMATE SECRET: The greatest social skill masters in history (Erickson, Rogers, Mandela) all shared one trait — they were genuinely CURIOUS about people. Not performing curiosity, not strategic interest — real, childlike fascination with the human experience. When you develop genuine curiosity about every person you meet, all techniques become secondary. Curiosity IS rapport."
      }
    ],
    puzzles: [
      {
        id: 'am-puzzle-1',
        title: "The Cold Read Challenge",
        description: "Based on these observable details, what can you deduce about this person?",
        type: 'observation',
        difficulty: 4,
        scenario: "You're at a networking event. A woman, approximately 35, approaches the refreshment table. She's wearing well-fitted business casual with minimal jewelry — just a thin silver necklace. Her nails are short and clean, no polish. She has a slight tan line where a ring used to be on her left ring finger. Her phone case has a small National Park sticker on it. She grabs sparkling water instead of wine. She checks her watch (an analog watch, not a smartwatch) twice in 30 seconds. She positions herself at the edge of the group rather than the center. When someone nearby laughs loudly, she flinches slightly before recovering.",
        options: [
          { text: "Recently separated/divorced, nature-lover, possibly in recovery or health-conscious, introverted, time-pressured, slightly elevated stress response — likely High C, moderate-low E, possibly elevated N", feedback: "OUTSTANDING DEDUCTION! Ring tan line = recently removed wedding ring (separation/divorce). National Park sticker = nature/outdoor interest (moderate-high O). Sparkling water over wine = possibly avoiding alcohol (recovery, medication, or health choice). Analog watch = values tradition or aesthetics (moderate O). Edge positioning = introverted tendency (lower E). Double watch-check = time pressure or anxiety (high C or elevated N). Flinch at loud noise = elevated startle response (currently elevated stress/N). Minimal jewelry + clean nails = practical, low-maintenance (moderate C, lower display behavior).", correct: true },
          { text: "She's a doctor who hates parties", feedback: "There's nothing specifically indicating medical profession, and 'hates parties' is too strong — she CAME to the event, suggesting she's willing but uncomfortable. Always deduce what you can OBSERVE, not what you imagine.", correct: false },
          { text: "Not enough information to make any deductions", feedback: "There's actually a wealth of information! Every physical detail is data. The ring tan line, the sticker, the beverage choice, the positioning, the watch behavior, the startle response — each tells a story. Cold reading is about reading what's already visible.", correct: false }
        ],
        hint: "Every physical detail is a clue. What does the ring finger tell you? The beverage choice? The positioning? The watch behavior? The startle response?"
      }
    ]
  },

  // Module 7: Professional Hypnotherapy Certification
  {
    id: 'pro-hypnotherapy',
    title: "Professional Hypnotherapy",
    icon: "🌀",
    description: "Complete clinical hypnotherapy training — from basic induction to advanced regression therapy",
    color: "from-cyan-900 to-blue-900",
    secrets: [
      "SECRET_DEPTH_TRUTH: Most therapeutic change happens in LIGHT trance, not deep trance. Depth is overrated by beginners.",
      "SECRET_ABREACTION: The most powerful healing moment is the abreaction — the emotional release during age regression. Handle it gently.",
      "SECRET_SELF_HYPNOSIS: Every great hypnotherapist practices self-hypnosis daily. You cannot guide someone where you haven't been.",
      "SECRET_WAKING_HYPNOSIS: 90% of Erickson's work was 'waking hypnosis' — no formal induction needed. Conversation IS the trance."
    ],
    lessons: [
      {
        id: 'ph-depth-scales',
        title: "Trance Depth: The Davis-Husband & LeCron Scales",
        subtitle: "Understanding and Measuring Hypnotic Depth",
        content: [
          "Professional hypnotherapists use standardized scales to measure trance depth. The two most important are the Davis-Husband Scale and the LeCron-Bordeaux Scale.\n\n**THE DAVIS-HUSBAND SCALE (30 Levels):**\n\n**Hypnoidal (Levels 1-5) — Light Trance:**\n1. Relaxation\n2. Fluttering of eyelids\n3. Closing of eyes\n4. Complete physical relaxation\n5. Catalepsy of eyes (can't open)\n\n**Light Trance (Levels 6-11):**\n6. Limb catalepsy (arm stays where placed)\n7. Rigid catalepsy (whole body rigid)\n8. Glove anesthesia (numbness in hand)\n\n**Medium Trance (Levels 12-20):**\n9. Partial amnesia\n10. Post-hypnotic suggestion works\n11. Personality changes\n12. Simple post-hypnotic suggestions\n13. Kinesthetic illusions\n14. Complete amnesia\n15. Ability to open eyes without affecting trance\n\n**Deep Trance (Levels 21-30) — Somnambulism:**\n16. Bizarre post-hypnotic suggestions accepted\n17. Complete somnambulism\n18. Positive visual hallucinations (seeing things that aren't there)\n19. Positive auditory hallucinations\n20. Systematized post-hypnotic amnesia\n21. Negative visual hallucinations (not seeing things that ARE there)\n22. Negative auditory hallucinations\n23. Hyperesthesia (enhanced senses)\n\n**CLINICAL SIGNIFICANCE:**\nMost therapeutic work requires only levels 6-15 (light to medium trance). Deep somnambulism is impressive but rarely necessary for healing. The beginner's mistake is pursuing depth instead of therapeutic outcome.",

          "**THE LeCRON-BORDEAUX SCALE (Simplified Clinical Version):**\n\n**Stage 0: Waking State** — Normal consciousness. Subject is fully alert.\n\n**Stage 1: Hypnoidal** — Very light trance. Relaxation, reluctance to move, drowsy feeling. Subject may not believe they're hypnotized. Eye fixation, heaviness of limbs.\n\n**Stage 2: Light Trance** — Limb catalepsy, glove anesthesia, arm levitation possible. Subject can follow simple suggestions. May feel 'I could stop if I wanted to' — this is actually evidence of trance, not resistance.\n\n**Stage 3: Medium Trance** — Partial amnesia, personality changes, simple post-hypnotic suggestions work. Time distortion begins. Pain control possible for dental/minor procedures. Ideomotor responses reliable.\n\n**Stage 4: Deep Trance** — Complete amnesia, somnambulism, hallucinations positive and negative, age regression with vivid reliving (not just remembering), hypermnesia (perfect recall of forgotten events), anesthesia sufficient for surgery.\n\n**Stage 5: Profound Somnambulism** — Extremely rare. Eyes open without affecting trance. Subject appears fully awake while deeply hypnotized. Can carry on normal conversation while following post-hypnotic programs. Only about 5% of population reaches this level.\n\n**DEPTH INDICATORS IN REAL-TIME:**\n\nWatch for these observable signs:\n- Facial mask (flattening of expression) = entering trance\n- Swallowing reflex slows = medium trance\n- Lacrimation (tearing without emotion) = medium-deep trance\n- Catalepsy (arm stays where placed) = light-medium trance\n- Ideomotor finger signals become automatic = medium trance\n- Time distortion reported = medium-deep\n- Spontaneous amnesia = deep trance\n- REM (rapid eye movement under closed lids) = deep processing occurring\n\n**THE 80/20 RULE OF DEPTH:**\n80% of your clients will achieve light to medium trance. This is SUFFICIENT for virtually all therapeutic work. Only 20% will reach deep somnambulism, and it's rarely necessary. Focus on therapeutic outcome, not trance depth."
        ],
        keyPoints: [
          "Trance exists on a continuum from light relaxation to profound somnambulism",
          "Most therapeutic change occurs in light-to-medium trance (levels 6-15)",
          "Observable signs: facial mask, reduced swallowing, lacrimation, catalepsy, REM",
          "Only about 5% of people reach profound somnambulism — and it's rarely needed",
          "Focus on therapeutic outcome, not trance depth",
          "The subject saying 'I could have stopped' is actually EVIDENCE of trance, not failure"
        ],
        exercise: "Practice self-hypnosis and observe your own depth indicators. Can you achieve eye catalepsy? Limb catalepsy? Time distortion? Rate yourself on the LeCron scale. Most people can reach Stage 2-3 with practice.",
        quiz: [
          {
            question: "A client says 'I don't think I was really hypnotized — I could hear everything you said.' What's happening?",
            options: [
              "They weren't hypnotized at all",
              "They're in light-to-medium trance — hearing everything is normal and expected at most therapeutic depths",
              "They were faking cooperation",
              "You failed as a hypnotist"
            ],
            correct: 1,
            explanation: "This is the most common misconception. Clients expect to 'go unconscious' like in movies. In reality, hearing everything is normal at all but the deepest trance levels. Light-medium trance is sufficient for most therapeutic work."
          }
        ],
        secret: "🔓 PRO SECRET: Dave Elman, one of the fastest inductionists ever, said 'I can put anyone into somnambulism in three minutes.' His technique? He didn't PURSUE depth — he TESTED for it. If catalepsy was present, he tested for amnesia. If amnesia was present, he tested for hallucination. Each successful test DEEPENED the trance automatically."
      },
      {
        id: 'ph-professional-inductions',
        title: "Professional Induction Protocols",
        subtitle: "Clinical-Grade Induction Methods Used by Licensed Hypnotherapists",
        content: [
          "**THE DAVE ELMAN INDUCTION (The Gold Standard — 3-4 minutes):**\n\nThis is the most widely used clinical induction in the world. It's fast, reliable, and produces consistent medium-to-deep trance.\n\nScript outline:\n1. 'Take a long deep breath and close your eyes. Now I'd like you to relax every muscle around your eyes... relax them so completely that they just won't work. When you're sure they won't work, test them and make sure they won't work.'\n\n(Wait for eye catalepsy test — they try to open and can't)\n\n2. 'Good. Now I'm going to lift your hand and drop it. If you've followed instructions, it will be completely limp and will plop down like a wet rag.' (Physical relaxation test)\n\n3. 'Now we're going to relax your mind the same way you relaxed your body. In a moment I'll ask you to count backwards from 100. With each number, let yourself become more relaxed, and by the time you reach 97 or 96, the numbers will have faded away. Start now. 100... deeper... 99... deeper... 98...' \n\n(Most subjects lose the numbers by 97. If they continue, say 'Let them go... they're not important... let them fade away...')\n\n4. Test: 'The numbers are gone now, aren't they?' (This is the amnesia test — if they've lost the numbers, they're in somnambulism.)\n\n**WHY THIS WORKS:**\n- Eye catalepsy test is both a PROOF of trance and a DEEPENER\n- Physical limpness test reinforces the suggestion of relaxation\n- Counting task occupies the conscious mind while suggestions of 'deeper' work on the unconscious\n- Losing the numbers IS amnesia, which IS somnambulistic trance",

          "**THE PROGRESSIVE RELAXATION INDUCTION (Jacobson-Based — 15-20 minutes):**\n\nBest for: Anxious clients, first-time subjects, people who need to 'ease in.'\n\n'I'd like you to begin by bringing your attention to your feet... just notice them... and as you notice them, you might find that they begin to feel a little heavier... a comfortable heaviness... and let that heaviness spread up through your ankles... nice and slow... through your calves... your shins... like a warm wave of relaxation rising through your body...\n\n(Continue through each body part: thighs, hips, abdomen, chest, hands, arms, shoulders, neck, face, scalp)\n\n...and as your whole body relaxes, your mind can begin to drift... not asleep... just drifting... like lying on a comfortable raft on a calm lake... drifting... and you don't need to do anything at all... just let yourself drift...'\n\n**KEY TECHNIQUE: Match breathing.** Speak your suggestions on their EXHALE. The exhale is when the parasympathetic nervous system is dominant — suggestions given on the exhale are accepted more readily.",

          "**THE RAPID INDUCTION (2-8 seconds — Advanced):**\n\nUsed by stage hypnotists and experienced therapists. Requires confidence and precise timing.\n\n**The Arm-Pull Method:**\n1. Stand facing subject. Hold their right hand at head height.\n2. Say 'Look at my eyes. In a moment I'm going to pull you forward. When I do, your eyes will close and you'll go deep into hypnosis.'\n3. Give a firm, smooth pull toward you while simultaneously saying 'SLEEP!' in a commanding tone.\n4. Immediately support them (catch them) and begin deepening: 'That's right... deeper... deeper...'\n\n**Why it works:** The sudden unexpected physical movement creates a massive pattern interrupt. The 'SLEEP!' command fills the consciousness gap. The deepening suggestions prevent them from popping back out.\n\n**THE CONFUSION INDUCTION (Erickson):**\n\nOverload the conscious mind:\n'I wonder if you'll notice first that your left hand is lighter than your right hand, or that your right hand is heavier than your left hand, or perhaps it's the other way around, or maybe both hands are changing in ways you haven't noticed yet, and while you're noticing or not noticing, your breathing has already changed, hasn't it? Or has it? And the interesting thing about not knowing is that your unconscious knows exactly what it's doing even when you don't, which is why you can just let it...'\n\n**THE BUTTERFLY INDUCTION (For children):**\n'Close your eyes and imagine a beautiful butterfly landing on your nose... feel how light it is... what color is it? ... now it flies to your shoulder... so gentle... and now imagine a hundred butterflies all around you, their wings making the softest breeze... and you're floating up with them... higher and higher... safe and peaceful...'"
        ],
        keyPoints: [
          "Dave Elman Induction is the clinical gold standard — eye catalepsy → physical relaxation → mental relaxation (number amnesia)",
          "Progressive Relaxation is best for anxious or first-time clients — speak on their exhale",
          "Rapid Inductions require pattern interrupts and precise timing — advanced technique",
          "Confusion Inductions overload the conscious mind with paradoxes",
          "Always have a backup induction — if one doesn't work, seamlessly transition to another",
          "The induction is NOT the therapy — it's just the door. The real work begins after."
        ],
        exercise: "Practice the Dave Elman induction on yourself (self-hypnosis version): Close your eyes, relax your eye muscles until they won't work, test them. Then relax your body progressively. Then count backwards from 100, letting numbers fade. If you lose the numbers, you've achieved self-induced somnambulism.",
        quiz: [
          {
            question: "In the Dave Elman Induction, why is the eye catalepsy test so important?",
            options: [
              "It proves the subject is 'really' hypnotized",
              "It serves as both PROOF of compliance and a DEEPENER — passing the test deepens the trance",
              "It's just a tradition with no real purpose",
              "It tests whether the subject has weak eye muscles"
            ],
            correct: 1,
            explanation: "The eye catalepsy test serves a dual purpose: (1) It proves the subject can follow hypnotic suggestions, building their confidence, and (2) Successfully passing the test ('I can't open my eyes') actually DEEPENS the trance because the subject has now demonstrated to themselves that hypnosis is working."
          }
        ],
        secret: "🔓 CLINICAL SECRET: Elman discovered that the STATE the client is in when the suggestion is given matters more than the suggestion itself. A simple suggestion given in somnambulism ('You are a non-smoker') is more powerful than an elaborate suggestion given in light trance. Get the depth first, then give the suggestion."
      },
      {
        id: 'ph-regression-therapy',
        title: "Age Regression Therapy",
        subtitle: "Accessing and Healing Traumatic Memories — The Complete Protocol",
        content: [
          "Age regression is the most powerful therapeutic tool in hypnotherapy. Under trance, clients can access vivid memories from any age, including pre-verbal memories. The therapist can then facilitate healing by providing the resources the client needed at that age.\n\n**TYPES OF REGRESSION:**\n\n1. **Recall Regression:** Client REMEMBERS the event while remaining aware of being in the therapist's office. Like watching a movie of their past. Safe, controllable, suitable for most therapeutic work.\n\n2. **Revivification:** Client actually RELIVES the event as if it's happening NOW. Much more intense. Their body, voice, and emotions become age-appropriate. A 40-year-old may speak in a 5-year-old's voice. Requires deep trance and skilled handling.\n\n3. **Hypermnesia:** Enhanced recall — details emerge that were consciously forgotten. Colors, sounds, smells, exact words spoken. Can access information the conscious mind never registered.\n\n**IMPORTANT ETHICAL NOTE:** Regression can create vivid experiences that FEEL real but may be constructed memories. Never use regression as forensic evidence. The purpose is therapeutic, not investigative.",

          "**THE COMPLETE REGRESSION PROTOCOL:**\n\n**Step 1: Pre-Induction Interview (30-60 min)**\n- Build rapport extensively before any hypnosis\n- Take detailed history of the presenting problem\n- Identify when the problem started (approximate age)\n- Establish safety anchors (a physical gesture that brings them back to the present)\n- Get informed consent — explain what regression is and isn't\n- Establish ideomotor signals (finger signals for 'yes', 'no', 'I don't know')\n\n**Step 2: Induction & Deepening (5-15 min)**\n- Use appropriate induction (Elman for experienced, Progressive for anxious)\n- Deepen to at least medium trance\n- Test depth with ideomotor responses\n- Install safety: 'At any time, if anything becomes too intense, your finger will signal and we'll stop immediately'\n\n**Step 3: Affect Bridge (The Key Technique)**\n- Ask client to focus on the FEELING associated with their problem\n- 'Notice that feeling... where is it in your body? ... What does it feel like? ... Now I want you to let that feeling become a bridge... a bridge that takes you back... back to the very first time you ever felt this way... Let that feeling carry you back... back... to the first event... 3... 2... 1... BE THERE.'\n\n**Step 4: Exploration**\n- 'How old are you?' (They'll answer in present tense if revivified)\n- 'Where are you?'\n- 'What's happening?'\n- 'Who else is there?'\n- 'What do you see? Hear? Feel?'\n- Let them tell the story. Don't lead. Reflect and validate.\n\n**Step 5: Healing Intervention**\n- Bring their ADULT self into the scene: 'Now I want you to imagine your adult self walking into this scene. Your adult self can see the child you were. What does your adult self want to say to that child?'\n- This is the moment of healing — the adult self provides what the child needed (protection, validation, comfort, explanation)\n- The child receives the resource they lacked\n\n**Step 6: Reintegration**\n- 'Now bring that child up through all the years, with this new understanding, this new resource, up through every year... carrying this healing with them... all the way to the present...'\n- Amnesia or recall — your choice based on clinical judgment\n- Count up, emerge gradually",

          "**HANDLING ABREACTIONS:**\n\nAbreaction = intense emotional release during regression. Client may cry, scream, shake, or show strong fear.\n\n**RULES:**\n1. NEVER panic. Your calm IS their safety.\n2. Do NOT try to stop the emotion. It needs to be expressed.\n3. Reassure: 'That's right, let it out. You're safe. I'm right here.'\n4. If too intense: 'You can watch this from a safe distance now. Float up above the scene and watch from above. You're safe.'\n5. Dissociation technique: 'See it on a TV screen. You can adjust the volume. You're watching, not reliving.'\n6. Emergency return: Use the safety anchor. 'I'm going to count from 1 to 5 and you'll be fully alert, calm, and comfortable.'\n\n**POST-REGRESSION:**\n- Allow time for integration (don't rush them out)\n- Debrief: 'What was that experience like?'\n- Normalize: 'Whatever you felt was exactly right'\n- Give homework if appropriate\n- Schedule follow-up\n\n**CONTRAINDICATIONS:**\n- Active psychosis or schizophrenia\n- Severe personality disorders (without psychiatric supervision)\n- Heart conditions (intense abreactions can be physically stressful)\n- Clients on certain medications (consult prescribing physician)\n- Clients who are not emotionally stable enough to process the material\n- Children under 12 (use play therapy and guided imagery instead)"
        ],
        keyPoints: [
          "Regression accesses memories through the 'affect bridge' — following the FEELING back to its origin",
          "Three types: Recall (watching), Revivification (reliving), Hypermnesia (enhanced detail)",
          "The healing moment is when the adult self provides what the child needed",
          "Abreactions are natural and healing — never suppress them, but manage intensity",
          "Always use safety anchors and ideomotor signals",
          "Regression memories may be therapeutically valid but NOT forensically reliable"
        ],
        exercise: "Practice the affect bridge on yourself (in self-hypnosis): Focus on a MILD negative feeling (not trauma). Let it take you back to an early memory of that same feeling. Observe the memory without judgment. Then imagine your adult self offering comfort to the child. This is the essence of regression therapy.",
        quiz: [
          {
            question: "During a regression, your client begins sobbing intensely. What do you do?",
            options: [
              "Wake them up immediately",
              "Tell them to stop crying and focus",
              "Remain calm, reassure them they're safe, allow the emotional release while monitoring intensity",
              "Leave the room to get help"
            ],
            correct: 2,
            explanation: "Abreaction (emotional release) is a natural and healing part of regression. Your calm presence IS the safety container. Suppressing the emotion prevents healing. If intensity becomes too great, use dissociation ('watch from above') rather than terminating the session."
          }
        ],
        secret: "🔓 MASTER THERAPIST SECRET: The February Man technique IS a regression technique — but instead of just observing the past, Erickson CHANGED it by inserting himself as a healing figure. This is the most advanced form of regression therapy: creating new 'memories' that provide the emotional resources the client never received. Their brain literally rewires around the new experience."
      },
      {
        id: 'ph-suggestion-engineering',
        title: "Suggestion Engineering",
        subtitle: "Crafting Suggestions That Stick — The Science of Permanent Change",
        content: [
          "A hypnotic suggestion is only as good as its construction. Poorly crafted suggestions fail even in deep trance. Well-crafted suggestions work even in light trance.\n\n**THE RULES OF SUGGESTION CONSTRUCTION:**\n\n**Rule 1: Positive Framing Only**\nThe unconscious mind doesn't process negatives directly. 'Don't think of a pink elephant' → you thought of one.\n- WRONG: 'You will NOT feel anxious'\n- RIGHT: 'You will feel calm and confident'\n- WRONG: 'You won't crave cigarettes'\n- RIGHT: 'You are a non-smoker, breathing clean fresh air'\n\n**Rule 2: Present Tense**\nThe unconscious lives in the eternal NOW.\n- WRONG: 'You will become more confident in the future'\n- RIGHT: 'You ARE confident. Confidence is your natural state.'\n\n**Rule 3: Specific and Behavioral**\n- WRONG: 'You feel better about everything'\n- RIGHT: 'When you walk into that meeting room, your shoulders are back, your breathing is deep, and your voice is steady and clear'\n\n**Rule 4: Include Sensory Detail**\n- WRONG: 'You are a confident speaker'\n- RIGHT: 'As you stand at the podium, you notice your feet are firmly planted, you can feel the solid ground beneath you, you see the audience with curiosity and warmth, and your voice resonates with a depth and clarity that surprises even you'",

          "**Rule 5: Use Compounding**\nStack multiple suggestions together, connected by 'and':\n'With each breath you take, you become more relaxed AND more confident AND more focused, and these feelings grow stronger AND more permanent with every passing day...'\n\n**Rule 6: Ego-Strengthening**\nAlways include suggestions that strengthen the sense of self:\n'You are becoming more and more your true self... the self that was always there beneath the anxiety... the self that is strong, capable, and worthy of respect...'\n\n**Rule 7: Future Pacing**\nInstall the suggestions into upcoming real-world scenarios:\n'The next time you walk into that situation, you will automatically feel this calmness... you will remember this feeling without even trying... and each time you successfully use this state, it becomes stronger, more natural, more permanent...'\n\n**Rule 8: Utilize the Client's Own Words**\nDuring the pre-induction interview, note the exact words the client uses to describe their desired outcome. Feed these back to them during trance.\nIf they said 'I want to feel like myself again,' your suggestion should include 'feeling like yourself again' — not your paraphrase.\n\n**ADVANCED: THE IDEO-MOTOR SUGGESTION**\n\nLink suggestions to automatic physical processes:\n'Every time your heart beats... it pumps confidence through your body...'\n'With each breath you take... you breathe in calm and breathe out tension...'\n'Every time you blink... you reset your emotional state to calm...'\n\nThese create PERMANENT suggestion anchors because the body process happens thousands of times daily, each time reinforcing the suggestion."
        ],
        keyPoints: [
          "Frame all suggestions positively — the unconscious doesn't process 'not'",
          "Use present tense — the unconscious lives in the now",
          "Make suggestions specific, sensory, and behavioral",
          "Compound suggestions with 'and' for cumulative effect",
          "Future-pace suggestions into upcoming real situations",
          "Use the client's own words — not your paraphrases",
          "Link suggestions to automatic body processes for permanence"
        ],
        exercise: "Write a suggestion script for ONE goal you want to achieve. Follow ALL eight rules. Make it present tense, positive, sensory, specific, compounded, ego-strengthening, future-paced, and linked to a body process. Read it to yourself in self-hypnosis.",
        secret: "🔓 ENGINEERING SECRET: The most powerful suggestion structure is: 'Because [undeniable truth], [suggestion].' Example: 'Because your body is already relaxing (undeniable — they CAN feel relaxation), you WILL sleep soundly tonight (suggestion).' The undeniable truth makes the suggestion logically follow."
      },
      {
        id: 'ph-specialized-protocols',
        title: "Specialized Clinical Protocols",
        subtitle: "Smoking Cessation, Weight Management, Pain Control, Phobias, PTSD",
        content: [
          "**SMOKING CESSATION PROTOCOL (Herbert Spiegel's Single-Session Method):**\n\nThis protocol has a 60-70% success rate in a single session.\n\n**The Three Principles (given under trance):**\n1. 'For your body, smoking is a poison. You are poisoning your body with every cigarette.'\n2. 'You need your body to live. Your body deserves your respect and protection.'\n3. 'To the extent that you want to live, you owe it to your body to protect it from the poison of cigarettes.'\n\n**The Self-Hypnosis Component:**\nTeach the client self-hypnosis. Every time they feel a craving:\n1. Close eyes\n2. Take three deep breaths\n3. Repeat the three principles\n4. Open eyes — craving is diminished or gone\n\n**Post-Session:** Client practices self-hypnosis 10 times daily for 2 weeks, then as needed.\n\n**WEIGHT MANAGEMENT PROTOCOL:**\n\nHypnotherapy for weight is NOT about willpower — it's about changing the unconscious relationship with food.\n\n**Phase 1:** Identify the emotional function of overeating\n- Use regression to find when food became emotionally linked\n- Common findings: food = comfort, love, safety, control\n\n**Phase 2:** Under trance, disconnect the emotional link\n- 'Food is fuel. Your body tells you when it needs fuel and when it has enough. You listen to your body now.'\n\n**Phase 3:** Install new patterns\n- 'You eat slowly, savoring each bite'\n- 'You notice the moment you feel satisfied — not stuffed, just satisfied — and you stop naturally'\n- 'You choose foods that your body actually needs'\n\n**Phase 4:** Future pace\n- Walk them through a typical day with the new relationship with food",

          "**PAIN CONTROL PROTOCOL:**\n\n**IMPORTANT:** Never remove pain without medical clearance. Pain is a signal. Removing the pain signal without treating the cause can be dangerous.\n\n**The Glove Anesthesia Technique:**\n1. Under trance, suggest numbness developing in one hand: 'Your hand is becoming numb... as if it's in a bucket of ice water... tingling... then numb... test it by pinching it — notice how the feeling is different...'\n2. Once numbness is confirmed, transfer it: 'Now place your hand on the area that hurts... and as your hand rests there, the numbness transfers from your hand to that area... spreading... cooling... the pain signal dimming... like turning down a volume dial...'\n3. Teach self-application so client can repeat independently.\n\n**The Dial Technique:**\n'Imagine a dial from 0 to 10 that controls your pain level. Right now, where is the dial? ... Now I want you to reach out and turn it down... just one number... feel the difference... now another number... notice how you have this control... you can turn it down to whatever level is comfortable...'\n\n**PHOBIA PROTOCOL (Fast Phobia Cure — NLP-derived):**\n\n1. Under trance, access the phobic response safely\n2. Create a 'movie theater' dissociation:\n   - Client imagines sitting in a movie theater\n   - On the screen, they see a STILL IMAGE of themselves BEFORE the phobic situation\n   - They float up to the projection booth (double dissociation)\n   - From the booth, they watch a movie of themselves going THROUGH the phobic situation\n   - At the end, they freeze the frame\n   - Then they step INTO the frozen frame and run the movie BACKWARDS at high speed, with circus music playing\n   - Repeat 5-7 times, faster each time\n3. Test: Ask them to try to feel the phobia. In most cases, they can't access it — the neural pathway has been disrupted.\n\nSuccess rate: 80-90% for simple phobias in 1-3 sessions."
        ],
        keyPoints: [
          "Smoking cessation: Spiegel's 3 principles + self-hypnosis training = 60-70% success rate",
          "Weight management addresses the emotional function of food, not willpower",
          "Pain control uses Glove Anesthesia and Dial techniques — always with medical clearance",
          "Fast Phobia Cure uses double dissociation and backwards movie replay to disrupt the neural pathway",
          "Every protocol includes a self-hypnosis component for client independence",
          "The therapist's job is to make themselves unnecessary — teach skills, don't create dependence"
        ],
        exercise: "Practice the Dial Technique for a minor discomfort (headache, muscle tension). Under self-hypnosis, visualize the dial. Turn it down one number. Notice the change. Practice this skill — it's one of the most immediately useful hypnotic techniques.",
        secret: "🔓 CLINICAL SECRET: The best hypnotherapists in the world don't have 'techniques' — they have PRINCIPLES. Every technique in this lesson is just a variation of one principle: help the client's unconscious mind find a BETTER WAY to do what it's already trying to do. Smoking? The unconscious is trying to manage stress. Give it a better tool. Overeating? It's trying to provide comfort. Give it a better source."
      }
    ],
    puzzles: [
      {
        id: 'ph-puzzle-1',
        title: "The Resistant Client",
        description: "How do you handle this therapeutic challenge?",
        type: 'scenario',
        difficulty: 4,
        scenario: "A client comes for smoking cessation. During the Elman induction, their eyes pop open at the eye catalepsy test. They say 'This isn't working. I told my wife I'd try but I don't really think hypnosis is real.' Their arms are crossed, they're leaning back, and their voice is clipped. How do you proceed?",
        options: [
          { text: "Utilize the resistance: validate their skepticism, use it as a resource. 'You're absolutely right to be skeptical. That analytical mind of yours is actually an asset in this process. I wonder if you can be just as skeptical about whether cigarettes actually do anything for you...'", feedback: "MASTERFUL ERICKSON-STYLE RESPONSE! You validated them (reducing defensiveness), reframed skepticism as a strength (ego-strengthening), and redirected their analytical power toward the actual target (cigarettes, not hypnosis). You don't need them to 'believe' in hypnosis — you need them to question their relationship with smoking.", correct: true },
          { text: "Try a different, more forceful induction technique", feedback: "Force meets resistance with more resistance. This client needs their autonomy respected, not overridden. A more forceful approach would confirm their belief that hypnosis is about control.", correct: false },
          { text: "Tell them hypnosis won't work if they resist and send them home", feedback: "This abandons the client and confirms their skepticism. A skilled therapist utilizes whatever the client brings — including resistance. Erickson said there are no resistant clients, only inflexible therapists.", correct: false },
          { text: "Ignore the resistance and proceed with the script", feedback: "Ignoring resistance doesn't make it go away — it amplifies it. The client needs to feel heard before they can let their guard down.", correct: false }
        ],
        hint: "Remember Erickson's principle of UTILIZATION. What if their resistance itself became the therapeutic tool?"
      },
      {
        id: 'ph-puzzle-2',
        title: "Depth Assessment",
        description: "Identify the trance depth from these observable signs.",
        type: 'observation',
        difficulty: 3,
        scenario: "Your client has been in trance for 15 minutes. You observe: their facial expression is flat (facial mask), breathing is slow and deep, their arm stayed in place when you lifted it (catalepsy), they respond to ideomotor signals (finger lifts), but when you ask them to count backwards from 100, they count clearly: '100, 99, 98, 97, 96...' without losing any numbers. What depth are they in?",
        options: [
          { text: "Light-to-medium trance (LeCron Stage 2-3). Catalepsy present but no amnesia — sufficient for most therapeutic work but not somnambulism.", feedback: "CORRECT! The facial mask, deep breathing, and catalepsy confirm trance. Ideomotor responses show medium depth. But the failure to achieve number amnesia means they haven't reached somnambulism (Stage 4). This depth is COMPLETELY ADEQUATE for most therapeutic work — suggestion therapy, ego-strengthening, pain management, and even some regression work.", correct: true },
          { text: "They're not hypnotized at all", feedback: "Facial mask, catalepsy, slowed breathing, and ideomotor responses are all definitive trance indicators. They're clearly hypnotized — just not at somnambulistic depth.", correct: false },
          { text: "Deep somnambulistic trance", feedback: "Somnambulism requires amnesia (losing the numbers). Their clear counting shows the conscious mind is still tracking, which rules out somnambulism. But remember — somnambulism is rarely necessary for effective therapy.", correct: false }
        ],
        hint: "Match the observable signs to the LeCron scale. Which signs are present, and which critical sign of deep trance is absent?"
      }
    ]
  },

  // Module 8: The Mentalist Masterclass
  {
    id: 'mentalist-masterclass',
    title: "The Mentalist",
    icon: "🎩",
    description: "Patrick Jane-level mentalism — observation, deduction, memory palaces, misdirection, and showmanship",
    color: "from-rose-900 to-red-900",
    secrets: [
      "SECRET_MENTALIST_CORE: A mentalist doesn't read minds — they read PEOPLE. Every 'psychic' feat is observation + psychology + showmanship.",
      "SECRET_MEMORY_PALACE: The method of loci (memory palace) can store unlimited information. Sherlock Holmes wasn't fiction — the technique is real.",
      "SECRET_MISDIRECTION: Misdirection isn't about looking away. It's about giving them something MORE INTERESTING to look at.",
      "SECRET_PATTERN: After 10,000 hours of people-watching, pattern recognition becomes indistinguishable from mind-reading."
    ],
    lessons: [
      {
        id: 'mm-observation',
        title: "The Art of Observation",
        subtitle: "See Everything, Miss Nothing — The Patrick Jane Method",
        content: [
          "Patrick Jane (The Mentalist) demonstrates a skill that's real and trainable: EXTREME OBSERVATION. Every mentalist develops this through systematic practice.\n\n**LEVEL 1: PASSIVE OBSERVATION**\n\nMost people look but don't see. Train yourself to see:\n\n**The 3-Second Scan:**\nWhen entering ANY room or meeting ANY person, take 3 seconds to consciously scan:\n- Hands (rings, calluses, nails, jewelry, scars)\n- Shoes (condition, style, wear pattern)\n- Eyes (redness, bags, brightness, contact avoidance)\n- Posture (open/closed, dominant/submissive, rigid/relaxed)\n- Clothing (fit, style, condition, labels, colors)\n- Grooming (hair, beard, makeup, fragrance)\n- Objects (phone, bag, keys, accessories)\n\nEach of these is DATA. Train yourself to register all seven in under 3 seconds.\n\n**LEVEL 2: DEDUCTIVE OBSERVATION**\n\nTurn observations into deductions:\n- White dog hair on black pants + no ring + dog-themed phone case = Single dog owner\n- Callused fingers on left hand + short nails left / long right = Guitar player\n- Expensive watch + scuffed shoes = Values status in specific domains\n- Tan line where a ring was + weight loss visible in loose clothing = Recent divorce, self-improvement phase\n- Two phones = Work/personal divide (or something to hide)\n- Book in bag = What they're reading tells you their current mental state\n- Frequent checking of one specific part of phone = Waiting for a message from someone who matters",

          "**LEVEL 3: BEHAVIORAL OBSERVATION**\n\nObserve patterns over time:\n- Who do they look at when they laugh? (They look at the person they feel closest to)\n- Who do they mirror? (Unconscious mirroring reveals alliance and attraction)\n- What topics make them lean forward? (Interest/passion)\n- What topics make them lean back? (Discomfort/disinterest)\n- When do they touch their face? (Self-soothing = stress on that topic)\n- What's their baseline animation level? (Deviations reveal emotional shifts)\n\n**LEVEL 4: ENVIRONMENTAL OBSERVATION**\n\nRead spaces like you read people:\n- Office: Personal items = what they want you to know. Hidden items = what matters most.\n- Home: The first thing you see when entering is what they want to project. The bathroom tells the truth.\n- Car: Radio presets = personality. Clutter level = mental state. Bumper stickers = identity they broadcast.\n- Phone home screen: What app is in the top-left? That's their most-used. Wallpaper = their emotional anchor.\n\n**THE MENTALIST'S MEMORY:**\n\nJane doesn't just observe — he REMEMBERS everything. Two key techniques:\n\n1. **Engagement encoding:** Don't just see the detail — REACT to it internally. 'That's interesting that he wears his watch on his right wrist — he's left-handed.' The emotional engagement creates stronger memory traces.\n\n2. **Narrative encoding:** Connect observations into a STORY: 'She's recently divorced (ring tan line), throwing herself into fitness (new running shoes, athletic build), reading self-help (book visible in bag), and here alone (no plus-one, checking phone). Story: post-divorce reinvention phase.' Stories are remembered 22x better than facts.",

          "**THE DAILY OBSERVATION WORKOUT:**\n\nPractice these daily to develop mentalist-grade observation:\n\n**Exercise 1: The Room Test**\nEnter a room. Study it for 10 seconds. Close your eyes. List everything you can remember. Open eyes. Check accuracy. Repeat weekly — your retention will dramatically improve.\n\n**Exercise 2: The Person Test**\nAfter meeting someone new, immediately write down everything you observed: clothing details, jewelry, phone, bag, hair, nails, posture, voice, word choice, emotional state. Then write your DEDUCTIONS.\n\n**Exercise 3: The Prediction Test**\nBefore you enter a situation (meeting, party, store), PREDICT what you'll see. Then compare with reality. This trains your pattern recognition.\n\n**Exercise 4: Kim's Game (Military Intelligence Training)**\nHave someone place 20 random objects on a tray. Study for 60 seconds. Cover them. List all 20. Start with 10 and work up. Military snipers use this training.\n\n**Exercise 5: The Backward Walk**\nAfter walking down a street, turn around and describe everything behind you from memory. Where was the red car parked? How many people were at the bus stop? What was the barista wearing?"
        ],
        keyPoints: [
          "The 3-Second Scan: hands, shoes, eyes, posture, clothing, grooming, objects",
          "Turn observations into deductions by connecting data points into stories",
          "Behavioral observation: who they look at, mirror, lean toward — reveals true connections",
          "Environmental observation: spaces reveal what people want to show AND what they hide",
          "Engagement and narrative encoding dramatically improve memory for observations",
          "Daily practice (Room Test, Person Test, Kim's Game) builds mentalist-level skills"
        ],
        exercise: "Start Kim's Game today. Place 10 random objects on a table. Study for 60 seconds. Cover them. Write down all 10. Check accuracy. Do this daily, adding 2 objects per week. Within a month, your observational memory will be dramatically sharper.",
        quiz: [
          {
            question: "In a group, someone makes a joke and everyone laughs. According to mentalist observation, what does who each person looks at reveal?",
            options: [
              "Who they think is funniest",
              "Who they feel closest to or most want approval from",
              "Who told the joke",
              "Nothing significant"
            ],
            correct: 1,
            explanation: "When people laugh in a group, they instinctively look at the person they feel most connected to or want validation from. This is one of the most reliable indicators of hidden alliances, attractions, and social hierarchies."
          }
        ],
        secret: "🔓 MENTALIST SECRET: Patrick Jane's most impressive 'trick' — walking into a crime scene and reconstructing events — is pure observation + deduction. He looks at what everyone else overlooks: the undisturbed dust, the misplaced object, the wrong shoe by the door. The secret isn't supernatural — it's that he sees what's actually there while everyone else sees what they expect to see."
      },
      {
        id: 'mm-memory-palace',
        title: "The Memory Palace",
        subtitle: "Store Unlimited Information Using the Ancient Method of Loci",
        content: [
          "The Memory Palace (Method of Loci) is the most powerful memory technique ever developed. It was used by ancient Greek orators to memorize hour-long speeches without notes. Today, memory champions use it to memorize thousands of digits, entire books, and hundreds of names in minutes.\n\n**HOW IT WORKS:**\n\nYour spatial memory is the strongest memory system in your brain. You can remember the layout of your childhood home perfectly, even decades later. The Memory Palace exploits this by PLACING information in locations you already know.\n\n**Step 1: Choose Your Palace**\nUse a place you know extremely well:\n- Your home (most common)\n- Your route to work\n- Your school\n- A video game environment you know well\n\nWalk through it mentally. Identify SPECIFIC LOCATIONS (loci):\n- Front door\n- Hallway table\n- Kitchen counter\n- Refrigerator\n- Living room couch\n- Bathroom mirror\n- Bedroom closet\n\nEach location is a 'slot' for one piece of information.\n\n**Step 2: Place Information Vividly**\nThe key is VIVID, ABSURD, MULTISENSORY imagery.\n\nExample — remembering a grocery list:\n- Front door: A GIANT egg blocks the door (eggs — you have to crack it to enter)\n- Hallway table: A cow is sitting on the table, mooing angrily (milk)\n- Kitchen counter: A loaf of bread is breakdancing on the counter (bread)\n- Refrigerator: When you open it, a waterfall of orange juice pours out (OJ)\n- Couch: A chicken is watching TV on the couch, wearing sunglasses (chicken)",

          "**ADVANCED MEMORY PALACE TECHNIQUES:**\n\n**The Major System (Numbers → Sounds → Words → Images):**\nConvert numbers to consonant sounds to create memorable words:\n0 = s, z\n1 = t, d\n2 = n\n3 = m\n4 = r\n5 = l\n6 = j, sh, ch\n7 = k, g\n8 = f, v\n9 = p, b\n\nSo 314 = m-t-r = 'meter' or 'motor'\nPlace a MOTOR in a palace location to remember 314.\n\n**The PAO System (Person-Action-Object — for speed):**\nAssign each 2-digit number (00-99) a Person, Action, and Object:\n- 15 = Albert Einstein (P), writing equations (A), on a chalkboard (O)\n- 72 = Bruce Lee (P), kicking (A), a punching bag (O)\n\nTo memorize 157200: combine PAO from each pair:\n15-72-00 = Einstein (P from 15) kicking (A from 72) a soccer ball (O from 00)\nOne vivid image encodes SIX digits.\n\n**USING MEMORY PALACES FOR MENTALISM:**\n\n1. **Name Memorization:** When meeting someone, immediately place their name in your current palace. 'Sarah' = a princess tiara (Sarah = princess name) on the door handle. You'll remember every name.\n\n2. **Card Memorization:** Assign each card a person/image. Place them in palace locations. With practice, you can memorize the order of an entire shuffled deck in under 2 minutes.\n\n3. **Script Memorization:** Place key points of a presentation in palace locations. Walk through mentally during the speech.\n\n4. **Cold Reading Enhancement:** Store your reading of each person in a palace. When you meet them again, walk through the palace and recall every detail — they'll think you're psychic.\n\n**BUILDING SPEED:**\n- Start with 10-location palaces\n- Practice placing and recalling 10 items daily\n- Expand to 20, then 50, then 100 locations\n- Memory champions have palaces with 10,000+ locations\n- Speed comes from practice — the encoding becomes automatic"
        ],
        keyPoints: [
          "The Memory Palace exploits spatial memory — your strongest memory system",
          "Choose a well-known location and identify specific spots (loci) within it",
          "Place information using VIVID, ABSURD, MULTISENSORY images",
          "The Major System converts numbers to consonant sounds to words to images",
          "The PAO System encodes 6 digits in a single image for speed",
          "Apply to names, cards, presentations, and cold reading recall",
          "Daily practice with expanding palace size builds toward memory championship levels"
        ],
        exercise: "Build your first Memory Palace using your home. Identify 10 specific locations (front door to bedroom). Now memorize this list by placing absurd images at each spot: elephant, coffee, diamond, volcano, saxophone, rainbow, anchor, telescope, butterfly, lightning. Walk through your palace mentally. You'll likely recall all 10. This is your first palace.",
        quiz: [
          {
            question: "Why does the Memory Palace technique use absurd and vivid imagery?",
            options: [
              "Because it's more fun",
              "Because the brain preferentially encodes unusual, emotional, and multisensory experiences",
              "Because normal images don't work in memory palaces",
              "Because ancient Greeks liked weird things"
            ],
            correct: 1,
            explanation: "The brain's hippocampus preferentially encodes experiences that are novel, emotional, vivid, and multisensory. A normal image ('an egg on a table') is forgettable. An absurd image ('a 6-foot egg blocking your door, cracking as you push through it') creates strong neural pathways because it's novel and emotionally engaging."
          }
        ],
        secret: "🔓 MEMORY MASTER SECRET: Joshua Foer went from average memory to US Memory Champion in ONE YEAR using only the Memory Palace technique. He documented this in 'Moonwalking with Einstein.' The technique isn't rare talent — it's trainable skill. With daily practice, anyone can develop extraordinary memory within months."
      },
      {
        id: 'mm-showmanship',
        title: "Showmanship & Performance",
        subtitle: "The Art of Making the Impossible Seem Real",
        content: [
          "The difference between a skilled observer and a mentalist is SHOWMANSHIP. You can know everything about someone, but if you can't PRESENT it dramatically, it's just... being observant.\n\n**THE THREE PRINCIPLES OF MENTALIST SHOWMANSHIP:**\n\n**1. FRAMING — Set Expectations Before the Reveal**\n\nNever just blurt out what you've observed. Frame it:\n- BAD: 'You're recently divorced.'\n- GOOD: 'I'm getting something... a transition... something personal... a significant change in your life recently... not just external, but deeply personal...' (pause, watch reaction) '...a separation of some kind...' (watch) '...from someone who was very close...' (they nod) '...a marriage that ended...' (they confirm)\n\nThe framing does three things:\n1. Creates suspense and drama\n2. Gives you escape routes if you're wrong ('not a marriage... a close friendship?')\n3. Makes the eventual reveal feel BIGGER because it built gradually\n\n**2. THE PROGRESSIVE REVEAL**\n\nStart vague, get specific. Never lead with your strongest observation.\n\nSequence:\n1. Undeniable truth ('You've been through something significant recently')\n2. Moderate specificity ('It involves a relationship change')\n3. Specific deduction ('A romantic relationship ending')\n4. Clincher detail ('And you're the one who initiated it, even though it was the hardest thing you've done')\n\nEach step is riskier. The audience gasps louder at each step. If you're wrong at step 3, step 4 never happens and they still think steps 1-2 were impressive.",

          "**3. THE DRAMATIC PAUSE**\n\nThe pause is more powerful than the words. Use it:\n- Before the reveal (builds anticipation)\n- After the reveal (lets it land)\n- When 'receiving' information (creates the illusion of psychic reception)\n\nJane does this constantly: closes his eyes, tilts his head slightly, as if listening to something invisible... then opens his eyes and delivers the deduction. The performance makes the observation feel supernatural.\n\n**MENTALIST PERFORMANCE TECHNIQUES:**\n\n**The Hot Read (using advance information):**\nBefore meeting someone, check their social media, ask mutual contacts, or observe them before they know you're watching. Then 'cold read' them with information you already have. Ethically questionable for deception, but valuable for therapy (homework before sessions).\n\n**The Dual Reality:**\nSay something that means one thing to the subject and another to the audience.\n'I'm sensing... someone important... whose name starts with... M?' (Subject thinks of Mary; audience thinks you're reading minds; you saw 'M' on their phone notification)\n\n**The Force:**\nGuide someone to a 'free choice' that was actually predetermined.\n- Counting force: 'Think of a number between 1 and 10.' (Most people choose 7)\n- Card force: Spread cards offering a specific card at the natural finger-picking position\n- Verbal force: 'You're thinking of a color... not red, not blue... something brighter...' (pushing toward yellow)\n\n**The Pigeonhole Principle:**\nStatistically categorize people before meeting them:\n- Age + gender + context = narrow prediction range\n- Most 35-year-old women at a self-help event have a relationship concern\n- Most 50-year-old men at a corporate event worry about relevance\n- Most 25-year-old graduates worry about direction\n\nThese aren't stereotypes — they're probabilities. Use them as starting points.\n\n**PATRICK JANE'S SIGNATURE MOVES:**\n1. The casual scan (appearing relaxed while intensely observing)\n2. The disarming smile (lowering defenses before the reveal)\n3. The throwaway reveal (delivering insights casually, as if they're obvious)\n4. The empathetic pivot (after impressing them, showing genuine care)\n5. The admit-and-redirect (when wrong, admitting it charmingly and pivoting)"
        ],
        keyPoints: [
          "Frame observations with build-up and suspense — never blurt deductions",
          "Use progressive reveals: vague → specific, with escape routes at each step",
          "The dramatic pause creates the illusion of psychic reception",
          "Forces, hot reads, and statistical probabilities are legitimate mentalist tools",
          "Patrick Jane's power comes from combining genuine observation with masterful showmanship",
          "Always end with empathy — the goal is connection, not domination"
        ],
        exercise: "Practice the progressive reveal with a friend. Observe them for 30 seconds, then deliver a reading using the framing technique: start vague ('I'm sensing something about your current life situation...'), get progressively more specific, and use dramatic pauses. Notice how much more impressive it feels than just stating observations directly.",
        quiz: [
          {
            question: "Why do mentalists start with vague statements before getting specific?",
            options: [
              "Because they don't actually know anything",
              "To create progressive drama AND provide escape routes if initial deductions are wrong",
              "Because vague statements are more impressive",
              "To waste time"
            ],
            correct: 1,
            explanation: "The progressive reveal serves dual purposes: (1) Each step builds more dramatic impact, and (2) If you're wrong at step 3, you can redirect without losing credibility from steps 1-2. It's a risk-management strategy disguised as showmanship."
          }
        ],
        secret: "🔓 THE MENTALIST'S DEEPEST SECRET: Patrick Jane's greatest power isn't observation, deduction, or showmanship. It's EMPATHY. He genuinely cares about people, which makes them open up. The show demonstrates this repeatedly — his most powerful moments aren't when he reads minds, but when he uses his insights to HELP someone in pain. Real mentalism is empathy weaponized for good."
      },
      {
        id: 'mm-micro-expressions-advanced',
        title: "Advanced Micro-Expression Mastery",
        subtitle: "Reading Emotions at the Speed of Thought",
        content: [
          "Professional mentalists and FBI profilers can read micro-expressions at 1/25th of a second. This lesson provides the advanced training protocol used at Ekman's lab.\n\n**THE FACIAL ACTION CODING SYSTEM (FACS):**\n\nPaul Ekman developed FACS to objectively measure every possible facial movement. There are 46 Action Units (AUs) that combine to create every human expression.\n\n**KEY ACTION UNITS TO MASTER:**\n\nAU1: Inner Brow Raise — Sadness, worry\nAU2: Outer Brow Raise — Surprise, fear\nAU4: Brow Lowerer — Anger, concentration\nAU5: Upper Lid Raise — Fear, surprise\nAU6: Cheek Raise — Genuine happiness (CRUCIAL)\nAU7: Lid Tightener — Anger, determination\nAU9: Nose Wrinkle — Disgust\nAU10: Upper Lip Raise — Disgust\nAU12: Lip Corner Pull — Happiness\nAU14: Dimpler — Contempt (ONE side only)\nAU15: Lip Corner Depress — Sadness\nAU17: Chin Raise — Pouting, uncertainty\nAU20: Lip Stretch — Fear\nAU24: Lip Press — Anger suppression\nAU28: Lip Suck — Holding back speech\n\n**THE HAPPINESS FORMULA:** AU6 + AU12 = Genuine (Duchenne) smile\n**The ANGER FORMULA:** AU4 + AU5 + AU7 + AU24 = Anger\n**The FEAR FORMULA:** AU1 + AU2 + AU4 + AU5 + AU20 = Fear\n**The CONTEMPT FORMULA:** AU14 unilateral = Contempt",

          "**TRAINING PROTOCOL (40 hours to proficiency):**\n\n**Week 1: Static Expression Study (10 hours)**\n- Study photographs of each pure emotion for 2 hours\n- Practice producing each expression yourself in a mirror\n- Test: Can you identify all 7 emotions from photos in under 1 second?\n\n**Week 2: Slow-Motion Video (10 hours)**\n- Watch video at 1/4 speed, identifying expressions\n- Note the SEQUENCE: most expressions begin and end with specific muscles\n- Practice identifying the onset (when expression first appears)\n\n**Week 3: Real-Speed Detection (10 hours)**\n- Watch video at normal speed\n- Identify micro-expressions as they flash past (1/25th to 1/5th second)\n- Record your accuracy. Aim for 80%+ detection rate.\n\n**Week 4: Live Practice (10 hours)**\n- Practice in real conversations\n- Focus on the transition moments between expressions\n- Note when verbal content doesn't match facial display\n- Practice with different faces, ages, ethnicities\n\n**MENTALIST APPLICATION:**\n\nUse micro-expression reading to:\n1. Know when someone is lying (expression doesn't match words)\n2. Know what someone really feels about a topic (watch the flash)\n3. Guide cold readings (micro-expressions tell you when you've hit or missed)\n4. Build deeper rapport (respond to the REAL emotion, not the displayed one)\n5. Navigate negotiations (see their reaction before they speak)\n\n**THE UPPER FACE vs. LOWER FACE:**\n\nResearch shows: when people try to fake expressions, they control the LOWER face (mouth, chin) better than the UPPER face (eyes, brows, forehead). ALWAYS prioritize upper face reading.\n\nA fake smile: mouth smiles, eyes don't.\nA suppressed fear: mouth neutral, eyebrows flash AU1+AU2+AU4.\nA hidden contempt: mouth neutral, one cheek dimples briefly."
        ],
        keyPoints: [
          "FACS identifies 46 Action Units — combinations create all expressions",
          "Key formulas: Genuine happiness = AU6+AU12, Anger = AU4+AU5+AU7+AU24, Fear = AU1+AU2+AU4+AU5+AU20",
          "40-hour training protocol: static study → slow-motion → real-speed → live practice",
          "The upper face (eyes, brows) is harder to control than the lower face — prioritize it",
          "Micro-expressions appear in transition moments between displayed emotions",
          "Real-world application: lies, true feelings, cold reading calibration, negotiation advantage"
        ],
        exercise: "Spend 15 minutes in front of a mirror producing each Action Unit individually. Can you raise just your inner brows (AU1)? Just your outer brows (AU2)? Wrinkle just one side of your nose (AU9)? This muscle control awareness makes you a better reader because you understand the mechanics.",
        secret: "🔓 EKMAN'S SECRET: Paul Ekman discovered that PRODUCING a facial expression actually creates the corresponding EMOTION in the person making the face. If you make a genuine smile (AU6+AU12) and hold it for 20 seconds, you will feel happier. If you make a fear face, your heart rate will increase. The face doesn't just REFLECT emotions — it CREATES them. This is the basis of 'facial feedback hypothesis' and it's a mentalist superpower: control your face to control your emotional state."
      }
    ],
    puzzles: [
      {
        id: 'mm-puzzle-1',
        title: "The Mentalist Challenge",
        description: "You're at a party. Apply observation, deduction, and cold reading to this person.",
        type: 'observation',
        difficulty: 5,
        scenario: "A man, approximately 45, stands near the window holding a glass of red wine (barely sipped). He wears a well-tailored dark blue suit with a subtle plaid pattern, no tie, top button undone. His shoes are brown leather brogues, recently polished. He has a silver watch on his LEFT wrist (most people wear watches on non-dominant hand). His right hand shows a slightly flattened pinky nail. He carries no phone visibly. When someone tells a joke, he smiles but the smile fades from the LEFT side of his face first (expressions fade from the non-dominant hemisphere's side first in genuine expressions, opposite in fake). He's standing with feet shoulder-width apart, weight evenly distributed. When the host approaches, he briefly touches his earlobe before extending his hand for a shake. A small pin on his lapel shows a musical note.",
        options: [
          { text: "Right-handed professional (watch on left), possibly a pianist or musician (flattened pinky + music pin), genuine personality (smile fades from left = genuine for right-hander), slightly nervous in social settings (earlobe touch = self-soothing), confident stance but not dominant (even weight, no power pose), values quality over flash (tailored suit, polished shoes, no ostentation), deliberate about presence (no visible phone = choosing to be present). Likely an accomplished musician or music professional who is socially skilled but mildly introverted.", feedback: "OUTSTANDING MENTALIST ANALYSIS! Every deduction is supported by observable evidence. Watch on left = right-handed. Flattened pinky + music pin = pianist (the pinky flattens from years of reaching for octaves). Left-side smile fade on a right-hander = genuine expression (genuine expressions are controlled by the contralateral hemisphere). Earlobe touch = mild anxiety / self-soothing pacifier. Even weight distribution = confident but not aggressive. No visible phone = intentional presence. Quality grooming without ostentation = values substance over status.", correct: true },
          { text: "He's a businessman who likes music", feedback: "Too superficial! You missed the flattened pinky (specific to pianist), the smile asymmetry analysis, the pacifying behavior, and the significance of the phone absence. A mentalist extracts MAXIMUM information from every detail.", correct: false },
          { text: "Not enough information to make meaningful deductions", feedback: "A mentalist sees a WEALTH of data here. Every detail — the watch placement, the pinky nail, the smile fade pattern, the self-soothing gesture, the stance, the phone absence, the grooming choices — tells part of the story. Practice connecting the dots.", correct: false }
        ],
        hint: "Focus on the unusual details: why is the pinky nail flat? Why does the smile fade from a specific side? What does no visible phone tell you about this person?"
      },
      ...patrickJanePuzzles
    ]
  },

  // Module 9: Physiological Analysis
  {
    id: 'physiological-analysis',
    title: "Physiological Analysis",
    icon: "🫀",
    description: "The hard science beneath body language — autonomic nervous system, polyvagal theory, pupillometry, vocal physiology, and professional baselining",
    color: "from-emerald-900 to-teal-900",
    secrets: [
      "SECRET_ANS: Every 'tell' is downstream of the autonomic nervous system. Read the machine, not the gesture list.",
      "SECRET_TRANSITION: Professionals don't read states — they read state CHANGES and what preceded them by half a second.",
      "SECRET_OTHELLO: An innocent person's terror of being disbelieved is physiologically identical to guilt. This error destroys lives.",
      "SECRET_SELF_BASELINE: The most important baseline is your own. A dysregulated observer creates the signals they then misread."
    ],
    lessons: physiologyLessons,
    puzzles: physiologyPuzzles
  },

  // Module 10: The Patrick Jane Curriculum
  {
    id: 'patrick-jane',
    title: "Becoming Patrick Jane",
    icon: "☕",
    description: "The complete, honest curriculum — every skill Jane demonstrates, what's real, what's fiction, how to train it, and what it costs",
    color: "from-amber-900 to-orange-900",
    secrets: [
      "SECRET_JANE_PARADOX: Jane's skills came from being a fraudulent psychic. The skills are morally neutral — only direction matters.",
      "SECRET_CALIBRATION: Experts express MORE uncertainty than novices. Confident verdicts are the mark of an amateur.",
      "SECRET_CONVERGENCE: Five weak signals pointing the same direction beat one strong signal. Convergence is the real mechanism.",
      "SECRET_STATE_INDUCTION: Jane doesn't extract information — he creates emotional states where withholding is harder than disclosing.",
      "SECRET_FINAL: The last skill isn't reading people. It's caring about what you find."
    ],
    lessons: patrickJaneLessons,
    puzzles: []
  }
];
