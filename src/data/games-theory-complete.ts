import type { Lesson, Puzzle } from './modules';

// Complete coverage of "Games People Play" by Eric Berne
// Organized to match the book's structure: Part I - Analysis of Games, Part II - Thesaurus of Games, Part III - Beyond Games

export const gamesTheoryLessons: Lesson[] = [
  {
    id: 'gt-structural-analysis',
    title: "Structural Analysis",
    subtitle: "Part I, Ch. 1 — The Architecture of Personality",
    content: [
      "Berne opens 'Games People Play' with Structural Analysis — the framework for understanding how personality is organized. This is not metaphor; these are OBSERVABLE, CONSISTENT patterns that you can verify in any conversation.\n\n**THE STRUCTURE OF PERSONALITY:**\n\nEvery human brain contains complete recordings of:\n1. Everything that ever happened to you (including prenatal)\n2. Everything you ever felt\n3. Everything you were ever told by authority figures\n\nThese recordings organize into three coherent systems — the ego states:\n\n**EXTEROPSYCHE (Parent Ego State):**\nBorrowed from external figures. Contains two functional modes:\n\n• **Controlling Parent (CP):** Sets limits, criticizes, judges. Observable markers: pointed finger, furrowed brow, 'always/never/should/must' language, authoritative posture, chin down eyes up.\n\n• **Nurturing Parent (NP):** Protects, comforts, permits. Observable markers: head tilted, arms open, soothing voice, 'let me help,' 'don't worry,' 'poor thing.'\n\n**NEOPSYCHE (Adult Ego State):**\nThe data-processing computer. Assesses probability, gathers facts, operates in present reality. Observable markers: thoughtful pauses, direct eye contact without challenge, 'what are the facts,' 'the data suggests,' measured tone, upright relaxed posture.\n\n**ARCHAEOPSYCHE (Child Ego State):**\nOriginal recordings of early experience. Three functional modes:\n\n• **Free Child (FC):** Spontaneous, creative, joyful, rebellious. Observable: laughter, tears, wide eyes, loud voice, physical movement.\n\n• **Adapted Child (AC):** Modified behavior for survival. Observable: whining, compliance, passive aggression, 'I can't,' 'I'll try,' slouching, downcast eyes.\n\n• **Little Professor (LP):** Intuitive, manipulative, creative. The source of gut feelings, people-reading, and cunning. Observable: sideways glances, conspiratorial whispers, sudden insights.",

      "**DIAGNOSING EGO STATES — Berne's Four Methods:**\n\n**1. Behavioral Diagnosis:** Observe voice, gesture, posture, vocabulary\n- Parent: loud or soft voice extremes, gesticulating, rigid body\n- Adult: moderate, even, factual, relaxed but alert\n- Child: variable, animated or withdrawn, playful or sulky\n\n**2. Social Diagnosis:** Watch how others respond\n- If people around someone become childlike → that person is in Parent\n- If people become parental → that person is in Child\n- If people engage in problem-solving → that person is in Adult\n\n**3. Historical Diagnosis:** Ask 'Who used to say/do that?'\n- 'My father always said that' → Parent ego state\n- 'I felt this way as a kid' → Child ego state\n\n**4. Phenomenological Diagnosis:** The person re-experiences the original state\n- 'I can HEAR my mother's voice saying this' → Parent\n- 'I FEEL exactly like I did when I was 6' → Child\n\n**CONTAMINATION:**\nWhen ego state boundaries blur:\n- Parent contamination of Adult = PREJUDICE ('Everybody knows that foreigners are...' stated as fact)\n- Child contamination of Adult = DELUSION ('I just know everyone is watching me' stated as fact)\n- Double contamination = both simultaneously\n\nThe therapeutic goal: DECONTAMINATE the Adult so it can process reality accurately, then strengthen the Adult's executive function over Parent and Child."
    ],
    keyPoints: [
      "Three ego states are observable in real-time through voice, gesture, posture, vocabulary",
      "Exteropsyche (Parent) = borrowed behavior from authority figures",
      "Neopsyche (Adult) = present-reality data processor",
      "Archaeopsyche (Child) = original emotional recordings",
      "Four diagnostic methods: Behavioral, Social, Historical, Phenomenological",
      "Contamination = blurred boundaries between ego states (prejudice, delusion)"
    ],
    exercise: "For one hour, observe 3 different conversations. For each statement made, write P, A, or C. Use all four diagnostic methods. Note which ego state each person defaults to under stress. Record instances of contamination (opinions stated as facts).",
    quiz: [
      {
        question: "A man says 'Everyone knows you can't trust politicians' with absolute certainty. What's happening structurally?",
        options: ["He's in his Adult, stating a fact", "Parent contamination of Adult — a prejudice presented as data", "He's in Free Child expressing frustration", "This is a valid Adult observation"],
        correct: 1,
        explanation: "When a Parent value ('you can't trust X group') is expressed through the Adult's language of certainty ('everyone knows'), this is contamination. The person believes they're being rational, but they're actually replaying a Parent recording as if it were Adult data."
      }
    ],
    secret: "🔓 STRUCTURAL SECRET: Berne noted that the most successful people have a 'contamination-free Adult' — they can distinguish between what they were TOLD (Parent), what they FEEL (Child), and what is ACTUALLY TRUE (Adult). Most people never achieve this distinction. The first step to social mastery is learning to hear which ego state is talking INSIDE YOUR OWN HEAD."
  },
  {
    id: 'gt-time-structuring',
    title: "The Six Ways of Structuring Time",
    subtitle: "Part I, Ch. 3 — Withdrawal to Intimacy",
    content: [
      "Berne identified that humans have a fundamental HUNGER for time structure. Unstructured time creates anxiety. People fill time in six hierarchical ways — from safest/least rewarding to riskiest/most rewarding:\n\n**1. WITHDRAWAL** (Safest)\nPhysically present but mentally absent. Daydreaming, scrolling, dissociating. Zero risk of rejection. Zero reward of connection.\n- Function: Protects from social stimulation overload\n- Pathological form: Complete social isolation\n- Example: Person at a party mentally composing emails\n\n**2. RITUALS** (Very safe)\nHighly predictable, socially programmed exchanges. Each person knows their lines.\n- Function: Provides social acknowledgment without vulnerability\n- Example: 'Hi, how are you?' 'Fine, thanks, you?' 'Good.'\n- Berne called this exchange 'an eight-stroke ritual' (4 strokes given, 4 received)\n- Ritual intensity varies by culture — American rituals are brief; Southern European rituals are elaborate\n\n**3. PASTIMES** (Moderately safe)\nSemi-structured conversations about safe topics. Serve as social sorting — finding people compatible for deeper interaction.\n- Function: Provide strokes while testing compatibility\n- Types Berne identified:\n  • 'General Motors' (comparing cars/possessions — sorting by status)\n  • 'Who Won' (sports discussion — sorting by tribal identity)\n  • 'Grocery' (comparing prices — sorting by economic class)\n  • 'How To' (DIY tips — sorting by competence)\n  • 'Ever Been To' (travel — sorting by lifestyle)\n  • 'Do You Know' (mutual acquaintances — sorting by social network)\n  • 'What Became Of' (old classmates — processing nostalgia)\n  • 'Morning After' (hangover stories — bonding through shared excess)\n  • 'Cocktail Party' (light flirtation — sorting for attraction)",

      "**4. ACTIVITIES** (Moderate risk)\nGoal-directed behavior — work, projects, hobbies. Structured by the task itself.\n- Function: Material rewards, sense of accomplishment, Adult satisfaction\n- Social aspect: Provides excuse for contact without vulnerability ('We're working on the same project')\n- Why people are workaholics: Activities provide time structure with minimal emotional risk\n\n**5. GAMES** (High risk)\nRepeating patterns of ulterior transactions with predictable payoffs.\n- Function: Provide intense strokes (even negative ones) while avoiding true intimacy\n- Games advance the life script\n- Games provide a 'reason' for familiar bad feelings\n- Covered extensively in subsequent chapters\n\n**6. INTIMACY** (Highest risk, highest reward)\nGame-free, authentic exchange between two people's Natural Child ego states.\n- Function: Deepest human connection, most genuine strokes\n- Characteristics: No ulterior motives, no hidden agendas, complete vulnerability\n- Extremely rare — most people go their entire lives without experiencing true intimacy\n- Berne noted that intimacy is what EVERYONE wants but what MOST people arrange their lives to avoid\n\n**THE HIERARCHY OF COURAGE:**\nMoving up this hierarchy requires increasing courage:\n- Withdrawal requires no courage\n- Rituals require social convention\n- Pastimes require small talk ability\n- Activities require competence\n- Games require willingness to engage emotionally (even negatively)\n- Intimacy requires the courage to be seen without protection\n\n**CLINICAL OBSERVATION:**\nWatch where someone habitually operates on this hierarchy. It reveals their deepest comfort and fear:\n- Stuck in Withdrawal/Rituals = fear of rejection\n- Stuck in Pastimes/Activities = fear of vulnerability\n- Stuck in Games = fear of genuine intimacy\n- Capable of Intimacy = emotionally developed adult"
    ],
    keyPoints: [
      "Six time-structuring modes: Withdrawal → Rituals → Pastimes → Activities → Games → Intimacy",
      "Each level requires more courage and offers more genuine connection",
      "Pastimes are social sorting — people unconsciously test compatibility",
      "Games provide intense strokes while avoiding the vulnerability of intimacy",
      "True intimacy (game-free, Child-to-Child) is what everyone wants but most avoid",
      "Where someone habitually operates reveals their core emotional capacity and fears"
    ],
    exercise: "Track your own time-structuring for one day. For each hour, note: Was I in Withdrawal, Ritual, Pastime, Activity, Game, or Intimacy? At day's end, calculate the percentage of time in each. This reveals your social comfort zone and growth edge.",
    quiz: [
      {
        question: "Two coworkers discuss the weather for 5 minutes before a meeting. Which time-structuring mode is this?",
        options: ["Ritual", "Pastime", "Activity", "Intimacy"],
        correct: 1,
        explanation: "Pastimes are semi-structured conversations on safe topics that serve as social sorting. Weather talk is a classic pastime — it fills time, provides mild strokes, and tests social compatibility, all without emotional risk."
      }
    ],
    secret: "🔓 BERNE'S DEEPEST INSIGHT: The reason most people play Games is not because they enjoy the negative payoffs — it's because Games are the CLOSEST THEY CAN GET to intimacy without the terror of true vulnerability. Games guarantee emotional engagement. Intimacy doesn't guarantee anything."
  },
  {
    id: 'gt-complete-game-catalog',
    title: "The Complete Thesaurus of Games",
    subtitle: "Part II — All Games Categorized and Analyzed",
    content: [
      "Berne categorized ALL psychological games into families. Each game is described with: thesis, aim, roles, dynamics, moves, advantages, and antithesis.\n\n**LIFE GAMES:**\n\n🎮 **'Alcoholic'** — The most complex game. Requires FIVE players:\n- The Alcoholic (It): 'I can't help it'\n- The Persecutor: 'You're disgusting'\n- The Rescuer: 'I'll save you'\n- The Patsy: provides support without criticism\n- The Connection: the supplier (bartender, enabler)\n\nDynamic: The game continues as long as all five roles are filled. Remove any role and the system destabilizes. The Alcoholic's payoff is the hangover (self-punishment satisfying the Child) AND the act of drinking (defying the Parent). Recovery requires all five people to stop playing.\n\n🎮 **'Debtor'** — 'I owe everybody'\nThesis: Accumulate obligations that can never be repaid.\nPayoff: 'What do you expect from someone who owes so much?'\nAntithesis: Refuse to lend and refuse to be owed to.\n\n🎮 **'Kick Me'** — provokes rejection then says 'Why does this always happen to me?'\nThesis: Behave in ways that invite punishment.\nRoles: Kick Me player + anyone willing to kick.\nPayoff: Confirms 'I deserve to be punished' script.\nAntithesis: Refuse to kick. 'I notice you'd like me to be critical, but I'm not going to play that game.'\n\n🎮 **'Now I've Got You, You Son of a Bitch' (NIGYSOB)**\nThesis: Wait for a real or imagined slight, then attack with stored fury.\nExample: Husband does dishes badly → Wife explodes about 'everything'\nReal agenda: The slight is the excuse; the rage was pre-loaded.\nPayoff: Justification for a rage that has nothing to do with the triggering event.\nAntithesis: 'You seem angry about more than just the dishes. What's really going on?'",

      "**MARITAL GAMES:**\n\n🎮 **'Corner'** — Maneuver partner into a lose-lose position.\nExample: 'Let's go out tonight.' Partner agrees → 'You never want to stay home.' Partner disagrees → 'You never want to go out.'\nPayoff: 'See? You can never win with me' → confirms unlovability script.\n\n🎮 **'Courtroom'** — Seek a third party to judge the relationship.\nThesis: Present your case, force partner to present theirs, get the judge to declare you right.\nExample: Couples who bring every argument to friends/therapist for a verdict.\nPayoff: Being declared 'right' (Parent satisfaction).\n\n🎮 **'Frigid Woman/Man'** — Seduce then reject.\nThesis: Invite sexual or emotional approach, then punish for responding.\nPayoff: 'All you want is sex/closeness' → moral superiority.\n\n🎮 **'Harried'** — Overwork to collapse.\nThesis: Take on impossibly many responsibilities, then collapse saying 'I can't cope.'\nPayoff: Permission to abdicate all responsibility temporarily.\n\n🎮 **'If It Weren't For You' (IWFY)** — Blame partner for self-limitation.\nThis is the game that sparked Berne's entire theory. A woman blamed her controlling husband for never pursuing a career. When he left, she discovered she was terrified of the outside world — she'd CHOSEN a controlling husband because he gave her an excuse to stay safe.\nPayoff: Avoidance of one's own fears while maintaining a sense of victimhood.\nAntithesis: Grant full permission. The phobia behind the game is exposed.",

      "**PARTY GAMES:**\n\n🎮 **'Ain't It Awful'** — Group complaint session.\nThesis: Exchange horror stories about how terrible things/people/the world are.\nPayoff: Connection through shared negativity without vulnerability.\nVariations: Political AIA, Medical AIA, Parental AIA.\n\n🎮 **'Blemish'** — Find the one flaw.\nThesis: In any person, situation, or thing, identify the single imperfection.\nPayoff: 'Nothing/nobody is good enough' → avoidance of commitment.\n\n🎮 **'Schlemiel'** — Disguised aggression as accidents.\nThesis: Spill drinks, break things, make messes — then apologize charmingly.\nPayoff: The forgiveness is the payoff, not the mess. Getting forgiven for aggression.\nRelated game: **'Schlemazel'** — the chronic victim of the Schlemiel.\n\n**SEXUAL GAMES:**\n\n🎮 **'Let's You and Him Fight'** — Get two people to compete for your attention.\nThesis: Flatter two rivals simultaneously until they conflict.\nPayoff: 'I'm so desirable that people fight over me.'\n\n🎮 **'Rapo'** (First, Second, Third Degree) —\nFirst Degree: Mild flirtation followed by withdrawal. Social.\nSecond Degree: More intense engagement followed by 'How dare you.' Private.\nThird Degree: Legal consequences. 'I'll have you arrested.' Courtroom/morgue.\n\n🎮 **'The Stocking Game'** — Drawing attention to sexuality while maintaining propriety.\nThesis: Deliberately revealing clothing/behavior + 'What? I wasn't doing anything.'\n\n**UNDERWORLD GAMES:**\n\n🎮 **'Cops and Robbers'** — The thrill of the chase.\n🎮 **'How Do You Get Out of Here'** — Finding loopholes in systems.\n🎮 **'Let's Pull a Fast One on Joey'** — Con games for superiority.",

      "**CONSULTING ROOM GAMES (Therapy Games):**\n\n🎮 **'I'm Only Trying to Help You' (IOTHY)** — Help that isn't helpful.\nThesis: Offer unsolicited advice, get rejected, feel hurt.\nPayoff: 'People are so ungrateful' (collecting evidence of sainthood).\nVERY common among therapists, teachers, and parents.\nAntithesis: Only help when asked. Only help in the way requested.\n\n🎮 **'Indigence'** — 'What am I supposed to do if I can't work?'\nThesis: Use poverty/disability to avoid responsibility.\n\n🎮 **'Peasant'** — 'I'm just a simple person.'\nThesis: Present as humble/ignorant to manipulate.\n\n🎮 **'Psychiatry'** — 'Let me analyze you.'\nThesis: Use psychological knowledge as a weapon.\nPayoff: Intellectual superiority. 'I understand your defenses.'\n\n🎮 **'Stupid'** — 'I'm too dumb to understand.'\nThesis: Present as incompetent to avoid challenges.\nPayoff: Lower expectations = lower demands.\n\n🎮 **'Wooden Leg'** — 'What do you expect of someone with my problem?'\nThesis: Use a real or exaggerated disability as a universal excuse.\n\n**GOOD GAMES (Berne's positive category):**\n\n🎮 **'Busman's Holiday'** — Finding enjoyment in off-duty versions of your work.\n🎮 **'Cavalier'** — Charming, witty social engagement without ulterior motives.\n🎮 **'Happy to Help'** — Genuine helpfulness without payoff-seeking.\n🎮 **'Homely Sage'** — Offering wisdom without superiority.\n🎮 **'They'll Be Glad They Knew Me'** — Genuine ambition to make others proud.\n\nBerne noted that 'good games' are rare because they require the courage to be genuine — they're really just intimacy with a thin game structure to make it less frightening."
    ],
    keyPoints: [
      "Every game has: thesis, aim, roles, dynamics, moves, advantages, and antithesis",
      "'Alcoholic' requires five players — the most complex social system of any game",
      "'IWFY' was the game that launched Berne's entire theory — fear hiding behind blame",
      "Party games provide group connection through negativity — avoiding individual vulnerability",
      "Therapy games are especially dangerous because they masquerade as helping",
      "Good games exist but are rare — they're intimacy wearing a thin disguise"
    ],
    exercise: "Map every game you recognized in your own relationships. For each: (1) What is the thesis? (2) What role do YOU play? (3) What is your payoff? (4) What would happen if you stopped playing? The last question usually reveals the fear underneath the game.",
    quiz: [
      {
        question: "In the game 'Alcoholic,' why does Berne say removing any one of the five players destabilizes the entire system?",
        options: [
          "Because the alcoholic needs all five to feel guilty enough to drink",
          "Because the game is a complete social ecosystem — each role requires the others to function",
          "Because there aren't enough people to have a game with fewer",
          "Because Berne liked the number five"
        ],
        correct: 1,
        explanation: "The game of 'Alcoholic' is a self-sustaining social ecosystem. The Persecutor gives reason to drink (rebellion). The Rescuer gives hope (which enables continued drinking). The Patsy provides material support. The Connection provides access. Remove any role and the system crashes — which is why AA removes ALL roles simultaneously by replacing the entire social system."
      }
    ],
    secret: "🔓 BERNE'S HIDDEN CHAPTER: In the original manuscript, Berne included a game called 'Therapy' — where the therapist plays a game of 'Look How Hard I'm Trying to Help You' while the client plays 'Why Don't You — Yes But.' Both get their payoffs (therapist feels noble, client proves nobody can help). Berne warned that the MOST dangerous games are the ones disguised as healing."
  },
  {
    id: 'gt-beyond-games',
    title: "Beyond Games — Autonomy",
    subtitle: "Part III — Awareness, Spontaneity & Intimacy",
    content: [
      "The final section of 'Games People Play' is the most important and least discussed. Berne describes what lies BEYOND games: AUTONOMY — the capacity for game-free living.\n\n**THE THREE CAPACITIES OF AUTONOMY:**\n\n**1. AWARENESS**\nThe ability to experience the present moment directly, without filtering through Parent prejudices or Child fears.\n\n'Awareness means the capacity to see a coffeepot and hear the birds sing in one's own way, and not the way one was taught.'\n— Eric Berne\n\nMost people never SEE the coffeepot. They see what they were taught to see. They don't HEAR the birds. They classify the sound and move on. Awareness means direct, unmediated sensory experience.\n\n**Signs of awareness:**\n- Noticing sensory details others miss\n- Being fully present in conversations\n- Responding to what IS rather than what you expect\n- Experiencing emotions as they arise without suppressing or dramatizing\n\n**2. SPONTANEITY**\nThe freedom to CHOOSE which ego state to respond from, rather than automatically reacting from whichever state was triggered.\n\nExample: Someone criticizes you.\n- Automatic: Child feels hurt OR Parent counterattacks\n- Spontaneous: You CHOOSE to respond from Adult ('That's interesting feedback. Tell me more.')\n\nSpontaneity doesn't mean impulsiveness. It means FREEDOM OF CHOICE. The spontaneous person can be Parent when appropriate, Adult when needed, and Child when desired.\n\n**3. INTIMACY**\nThe crown jewel. Game-free exchange between two Natural Children.\n\nBerne described intimacy as:\n- Candid (honest)\n- Game-free (no ulterior transactions)\n- Unilateral (each person is intimate independently, not as a deal)\n- Eidetic (intensely vivid and real)\n\n'The moment one person begins to maneuver, intimacy ceases.'\n— Eric Berne",

      "**WHY PEOPLE AVOID AUTONOMY:**\n\nBerne understood that games are not simply 'bad habits.' They serve essential functions:\n\n1. **Time structuring:** Games fill time that might otherwise feel empty\n2. **Stroke provision:** Even negative strokes beat no strokes at all\n3. **Existential position maintenance:** Games confirm one's fundamental position ('I'm OK/Not OK, You're OK/Not OK')\n4. **Script advancement:** Games move the life script toward its predetermined ending\n5. **Homeostatic function:** Games maintain the familiar, even when the familiar is painful\n\n**THE FOUR EXISTENTIAL POSITIONS (fundamental to everything):**\n\n1. **I'm OK — You're OK** (The healthy position)\n   Life stance: 'Let's get things done together'\n   Game-free or plays good games\n\n2. **I'm OK — You're Not OK** (The paranoid/superiority position)\n   Life stance: 'You need to be fixed/controlled/punished'\n   Games: NIGYSOB, Blemish, Psychiatry\n\n3. **I'm Not OK — You're OK** (The depressive position)\n   Life stance: 'I'm inadequate, you're better'\n   Games: Kick Me, Stupid, Wooden Leg\n\n4. **I'm Not OK — You're Not OK** (The futility position)\n   Life stance: 'Nothing matters, nobody's worth anything'\n   Games: Heavy games, withdrawal, nihilistic scripts\n\n**BERNE'S FINAL MESSAGE:**\n\nThe book ends with perhaps the most profound paragraph in all of psychology:\n\n'For certain fortunate people there is something which transcends all classifications of behavior, and that is awareness; something which rises above the programming of the past, and that is spontaneity; and something that is more rewarding than games, and that is intimacy. But all three of these may be frightening and even perilous to the unprepared. Perhaps they are better off as they are, seeking their solutions in popular techniques of social action, ritual, and pastime. But perhaps not.'\n\nThis is Berne saying: I've shown you the game. Now you have to choose whether to keep playing or to step into the terrifying freedom of authenticity."
    ],
    keyPoints: [
      "Autonomy = Awareness + Spontaneity + Intimacy — the goal beyond all games",
      "Awareness means direct sensory experience without filtering through P, A, or C",
      "Spontaneity means CHOOSING which ego state to respond from, not reacting automatically",
      "Intimacy is game-free, candid, Natural Child to Natural Child exchange",
      "Four existential positions underlie all games: I'm OK/Not OK — You're OK/Not OK",
      "People avoid autonomy because games provide time structure, strokes, and familiar pain",
      "Berne's final message: freedom is available but frightening — the choice is yours"
    ],
    exercise: "Practice each autonomy capacity for 10 minutes: (1) AWARENESS: Sit quietly and describe 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste — as if seeing/hearing for the first time. (2) SPONTANEITY: Think of a recent conflict. Practice responding from all three ego states — which would you CHOOSE? (3) INTIMACY: Tell someone one genuine truth about yourself without any strategic purpose.",
    quiz: [
      {
        question: "According to Berne, why is the 'I'm Not OK — You're Not OK' position the most dangerous?",
        options: [
          "Because it leads to violence",
          "Because it's the futility position — nothing matters, no one is worth engaging with, leading to total withdrawal or destruction",
          "Because it's the most common",
          "Because it can't be treated"
        ],
        correct: 1,
        explanation: "The 'I'm Not OK — You're Not OK' position is existential futility. If neither you nor others have worth, there's no motivation for life, growth, or connection. This position underlies the most severe pathology and the heaviest games. It's also the hardest to treat because the person sees no point in treatment."
      }
    ],
    secret: "🔓 THE ULTIMATE SECRET OF GAMES THEORY: Berne's entire book is itself a game — the 'good game' of education. By teaching people to recognize games, he was making it impossible for them to play games unconsciously ever again. Once you see the game, you can't un-see it. This book is a red pill. You're now aware. The question isn't whether games exist — it's whether you have the courage to stop playing."
  }
];

export const gamesTheoryPuzzles: Puzzle[] = [
  {
    id: 'gt-puzzle-time-structure',
    title: "Map the Time Structure",
    description: "Identify the time-structuring modes in this social situation.",
    type: 'pattern',
    difficulty: 3,
    scenario: "At a company holiday party: Anna arrives and says 'Hi, how are you? Fine, thanks!' to the doorman (Exchange 1). She joins a circle discussing last night's game scores (Exchange 2). She excuses herself to check work emails on her phone (Exchange 3). Later, she tells her colleague about a problem, rejecting every solution offered (Exchange 4). Late in the evening, she sits with her closest friend and says, with tears in her eyes, 'I'm scared about the restructuring. I might lose my job. I don't know who I am without my work.' (Exchange 5).",
    options: [
      { text: "1: Ritual, 2: Pastime ('Who Won'), 3: Withdrawal, 4: Game ('Why Don't You—Yes But'), 5: Intimacy", feedback: "PERFECT ANALYSIS! Exchange 1 is a predictable eight-stroke ritual. Exchange 2 is the pastime Berne named 'Who Won.' Exchange 3 is withdrawal (physically present, mentally absent). Exchange 4 is the game YDYB — she's not seeking solutions, she's collecting rejections. Exchange 5 is genuine intimacy — candid, vulnerable, game-free Child-to-Child sharing. Anna moved through five of the six modes in one evening, ending at the highest and scariest level.", correct: true },
      { text: "All five exchanges are just normal conversation", feedback: "Berne's framework reveals the STRUCTURE underneath 'normal conversation.' Each exchange has a different function, different risk level, and different reward. This is what structural analysis reveals.", correct: false },
      { text: "1: Pastime, 2: Activity, 3: Game, 4: Ritual, 5: Pastime", feedback: "Review the definitions. 'Hi how are you / fine thanks' is a RITUAL (fixed, predictable). Sports discussion is a PASTIME (semi-structured safe topic). Checking email is WITHDRAWAL (mentally leaving the social scene).", correct: false }
    ],
    hint: "Apply Berne's six time-structuring categories to each exchange. Look for the level of emotional risk and predictability in each one."
  },
  {
    id: 'gt-puzzle-existential',
    title: "Identify the Existential Position",
    description: "What life position does this person occupy?",
    type: 'scenario',
    difficulty: 4,
    scenario: "Marcus is a talented manager who constantly micromanages his team. When someone makes a mistake, he says 'This is why I have to do everything myself.' He dismisses his colleagues' ideas ('They just don't get it') but privately feels exhausted and unappreciated. In performance reviews, he rates himself highly but everyone else poorly. When his boss praises a peer, Marcus thinks 'She doesn't deserve it — she's just political.' At home, he tells his wife 'Nobody at that company has any standards except me.'",
    options: [
      { text: "'I'm OK — You're Not OK' (Superiority/Paranoid position). His game is a combination of NIGYSOB and Blemish, and his script says 'I must do everything because nobody else is capable.'", feedback: "EXCELLENT! Marcus occupies the 'I'm OK — You're Not OK' position. He sees himself as competent and others as inadequate. His games (NIGYSOB when mistakes happen, Blemish when evaluating peers) maintain this position. His script dictates that HE must carry the burden — which provides Parent satisfaction ('I'm so responsible') while his Child collects the payoff of exhaustion ('Nobody appreciates me'). The antithesis: someone genuinely outperforming him forces a script crisis.", correct: true },
      { text: "'I'm Not OK — You're Not OK' — he thinks nobody is good enough", feedback: "Close, but Marcus clearly rates HIMSELF as OK — he rates himself highly and sees himself as the only competent person. He's not in futility; he's in superiority. The 'Not OK' applies only to others in his worldview.", correct: false },
      { text: "'I'm OK — You're OK' — he's just a perfectionist trying to help", feedback: "The 'I'm OK — You're OK' person collaborates and trusts. Marcus does neither. His dismissal of ALL colleagues' abilities isn't perfectionism — it's a systematic devaluation of others to maintain his superiority position.", correct: false }
    ],
    hint: "The existential position explains both his behavior AND his emotional payoff. Which of the four positions explains why he sees himself as the only competent person?"
  }
];
