import type { Lesson, Puzzle } from './modules';

/**
 * PHYSIOLOGICAL ANALYSIS — the hard science layer beneath body language.
 * Autonomic nervous system, polyvagal theory, pupillometry, vocal analysis,
 * thermal/blood-flow signatures, respiration, and clinical baselining.
 */

export const physiologyLessons: Lesson[] = [
  {
    id: 'phys-autonomic',
    title: "The Autonomic Nervous System",
    subtitle: "The Machinery Under Every Involuntary Tell",
    content: [
      "Everything people call 'body language' is downstream of the Autonomic Nervous System (ANS). If you understand the ANS, you stop memorizing gesture lists and start reading the actual machine.\n\n**THE TWO BRANCHES:**\n\n**SYMPATHETIC (SNS) — 'Fight or Flight'**\nActivation time: 0.2–0.5 seconds. Faster than conscious thought.\nWhen threat is detected, the amygdala fires before the prefrontal cortex processes what happened. The result is a cascade you can SEE:\n\n• **Pupil dilation (mydriasis)** — more light in, wider visual field. Involuntary.\n• **Blood shunting** — blood leaves skin and viscera, floods large muscles. Face pales, lips thin and lose color, fingers go cold.\n• **Sweat onset** — palmar and forehead sweat begins in 1–3 seconds (eccrine glands are sympathetically driven).\n• **Respiration** — shifts from diaphragmatic (belly) to thoracic (chest), rate increases, depth decreases.\n• **Heart rate** — rises, visible in the carotid pulse at the side of the neck and the suprasternal notch (the hollow at the throat base).\n• **Dry mouth** — salivation is suppressed. Watch for lip licking, swallowing, reaching for water.\n• **Muscle tension** — jaw masseter tightens, trapezius rises, hands grip.\n• **Digestive shutdown** — 'butterflies' are literally blood leaving the gut.\n\n**PARASYMPATHETIC (PNS) — 'Rest and Digest'**\nActivation is slower (seconds to minutes) and produces the opposite profile:\n• Pupil constriction, skin flush and warmth, deep belly breathing, slowed heart rate, increased salivation, muscle softening, visible 'settling' of the body into the chair.\n\n**WHY THIS MATTERS:** You are not reading 'crossed arms mean defensive.' You are reading *whether this person's nervous system just switched branches* — and precisely WHEN it switched. The switch point is the data.",

      "**POLYVAGAL THEORY (Stephen Porges) — The Third State**\n\nPorges demonstrated that the classic two-branch model is incomplete. The vagus nerve has two distinct pathways, giving humans THREE physiological states arranged in an evolutionary hierarchy:\n\n**STATE 1 — VENTRAL VAGAL (Social Engagement System) — Safe**\nThe newest, most evolved state. Only accessible when the nervous system detects safety.\nObservable signature:\n• Facial muscles are mobile and expressive (the ventral vagus innervates face and head muscles)\n• Prosody in the voice — melodic variation, warmth, range\n• Middle-ear muscles tune to human vocal frequency — they can actually HEAR you better\n• Eye region is soft, orbicularis oculi engages easily (genuine smiles happen)\n• Head tilts and nods naturally\n• Breathing is slow and diaphragmatic\n\n**STATE 2 — SYMPATHETIC (Mobilization) — Danger**\n• Face flattens, prosody drops toward monotone\n• Middle-ear muscles detune toward low-frequency (predator) sounds — they literally stop hearing your words clearly\n• Body prepares to move: weight shifts, feet reorient, hands come out of pockets\n• Speech accelerates or clips\n\n**STATE 3 — DORSAL VAGAL (Immobilization/Shutdown) — Life Threat**\nThe oldest, most primitive state. When fight and flight are impossible, the system collapses.\nObservable signature:\n• Facial mask — near-total loss of expression (the 'flat affect')\n• Voice goes monotone and quiet\n• Gaze becomes distant, unfocused, or fixed\n• Postural collapse — shoulders round, spine slumps\n• Slowed movement, delayed responses to questions\n• Skin may become pale and cool\n• Reported experience: numbness, 'not being here,' time distortion\n\n**THE CLINICAL IMPLICATION:** A person in dorsal vagal shutdown CANNOT process complex language, cannot access memory reliably, and cannot make decisions. Interrogators, therapists, and negotiators who push someone into shutdown get nothing but compliance-shaped noise. The first job is always to bring the person back to ventral vagal — through prosody, warmth, predictability, and pacing.",

      "**NEUROCEPTION — Detection Below Awareness**\n\nPorges coined 'neuroception' for the nervous system's continuous, unconscious threat scanning. It runs constantly and it is FASTER and often MORE ACCURATE than conscious judgment.\n\nThis explains the 'gut feeling.' Your subcortical systems detected a micro-incongruence — a mismatch between someone's words and their prosody, a fractional delay in a smile, a pupil that constricted at the wrong moment — and flagged it before your cortex could articulate why.\n\n**Training implication:** Your intuition is a real sensor. But it is noisy and it is biased by your own history. The professional's job is to (1) NOTICE the intuitive flag, (2) then consciously hunt for the physiological evidence that triggered it, and (3) verify against baseline. Never act on the flag alone; never ignore it either.\n\n**THE AROUSAL–PERFORMANCE CURVE (Yerkes–Dodson)**\n\nSympathetic arousal is not simply 'bad.' Performance rises with arousal to an optimum, then collapses.\n\n• **Low arousal:** flat, disengaged, poor recall, low motivation\n• **Optimal arousal:** sharp, focused, best memory retrieval and decision quality\n• **High arousal:** tunnel vision, auditory exclusion, loss of fine motor control, degraded memory encoding\n• **Extreme arousal (>175 bpm):** cognitive processing collapses, irrational behavior, dorsal shutdown likely\n\nHeart rate thresholds documented in performance-under-stress research (Grossman):\n- ~115 bpm: fine motor skill deterioration begins\n- ~145 bpm: complex motor skills degrade\n- ~175 bpm: cognitive processing severely impaired, tunnel vision, auditory exclusion\n- Above 175: freezing, voiding, irrational fleeing\n\n**Application:** If you need accurate information from someone, you must manage their arousal into the optimal band. Too calm and they are disengaged; too aroused and their memory is literally inaccessible."
    ],
    keyPoints: [
      "All body language is downstream of the autonomic nervous system — read the machine, not the gesture list",
      "Sympathetic activation takes 0.2–0.5s: pupils dilate, skin pales, breathing goes thoracic, mouth dries",
      "Polyvagal theory adds a third state: ventral vagal (safe), sympathetic (danger), dorsal vagal (shutdown)",
      "Dorsal vagal shutdown shows as facial mask, monotone voice, postural collapse — the person cannot think clearly",
      "Neuroception is unconscious threat detection — your 'gut feeling' is a real sensor that needs conscious verification",
      "Yerkes–Dodson: memory and reasoning collapse above ~175 bpm — manage arousal to get accurate information"
    ],
    exercise: "Spend one day tracking YOUR OWN state transitions. Set 6 random phone alarms. At each, record: (1) Which state am I in — ventral, sympathetic, or dorsal? (2) What is my breathing pattern — belly or chest? (3) Are my hands warm or cold? (4) What triggered the last transition? Building interoceptive accuracy in yourself is the prerequisite for reading it in others.",
    quiz: [
      {
        question: "A witness being questioned suddenly goes quiet, their face loses expression, their voice drops to monotone, and they stare at a fixed point. What is happening physiologically?",
        options: [
          "They are lying and constructing a story",
          "Dorsal vagal shutdown — the nervous system has collapsed into immobilization and they cannot access memory or process complex language",
          "They are bored with the questioning",
          "They are in optimal arousal for recall"
        ],
        correct: 1,
        explanation: "Facial mask + monotone + fixed gaze + postural collapse is the dorsal vagal signature. Pushing harder here yields nothing — the person's memory retrieval and language processing are physiologically offline. The correct move is to reduce threat, warm the prosody, slow down, and re-establish safety before continuing."
      },
      {
        question: "Why do interrogators who maximize stress get unreliable information?",
        options: [
          "Because stressed people become defiant",
          "Because above roughly 175 bpm, memory retrieval and cognitive processing are physiologically impaired regardless of willingness",
          "Because it is illegal",
          "Because stress makes people talk too fast"
        ],
        correct: 1,
        explanation: "Yerkes–Dodson and stress-performance research show that extreme arousal degrades the very faculties needed for accurate recall. A terrified person cannot retrieve accurate memory even if they desperately want to comply — which is precisely how false confessions are produced."
      }
    ],
    secret: "🔓 PHYSIOLOGICAL SECRET: The single most useful skill is detecting the exact MOMENT of state transition. Not 'is he nervous' but 'his breathing went thoracic 0.4 seconds after I said the word *accountant*.' The transition timestamp is the data. Everything before it is baseline; everything after it is response. Professionals do not read states — they read state CHANGES and what preceded them by half a second."
  },
  {
    id: 'phys-pupillometry',
    title: "Pupillometry & Ocular Physiology",
    subtitle: "The Eye as an Unfakeable Instrument",
    content: [
      "The pupil is controlled entirely by smooth muscle under autonomic control. There is no voluntary pathway. You cannot train pupil control. This makes it the single most honest observable in the human body.\n\n**THE TWO MUSCLES:**\n• **Iris sphincter** (parasympathetic, via cranial nerve III) — constricts the pupil\n• **Iris dilator** (sympathetic) — dilates the pupil\n\n**WHAT DILATES A PUPIL (beyond darkness):**\n\n1. **Cognitive load** — Kahneman's foundational work. Pupil diameter tracks mental effort with remarkable precision. Give someone a 3-digit multiplication problem and watch the pupil expand as they work, then snap back when they finish or give up. This is the 'pupillary response to task-evoked load.'\n\n2. **Emotional arousal** — of ANY valence. Both attraction and fear dilate. This is critical: dilation alone tells you INTENSITY, not direction.\n\n3. **Interest and attraction** — Eckhard Hess's classic studies showed pupils dilate to preferred images. Notably, observers rated faces with artificially enlarged pupils as more attractive without knowing why. (Renaissance women used belladonna — literally 'beautiful woman' — to dilate their pupils.)\n\n4. **Surprise and novelty** — orienting response.\n\n5. **Pain.**\n\n**WHAT CONSTRICTS A PUPIL:**\n1. Light (obviously — always control for this)\n2. Disgust and aversion\n3. Rejection of a stimulus\n4. Near focus (accommodation triad)\n5. Deep parasympathetic relaxation\n6. Many opioids (pinpoint pupils) and some medications\n\n**THE PROFESSIONAL PROTOCOL:**\nBecause light is the dominant variable, you must control it. Keep lighting constant. Keep the subject's gaze distance roughly constant (near focus constricts). Then look for CHANGES that correlate with specific topics, images, or names — not absolute size.\n\nThis is precisely how a mentalist appears to read minds: hold up five cards, watch which one produces dilation, and you have their choice.",

      "**BEYOND THE PUPIL — The Complete Ocular Panel:**\n\n**BLINK RATE**\nBaseline: 15–20 blinks/minute in conversation.\n• **Elevated (30+/min):** sympathetic arousal, stress, cognitive load, deception effort, dry eye, or stimulant use\n• **Suppressed (under 8/min):** intense concentration, fixation, threat monitoring, or predatory focus\n• **Blink flurry after a question:** a burst of rapid blinks immediately following a specific question is a high-value stress marker\n• **Blink at the moment of speech onset:** often marks internal editing\n\n**EYELID BEHAVIOR**\n• **Eye block (prolonged closure):** the limbic 'I don't want to see this.' Duration matters — anything over ~0.3s is meaningful.\n• **Squint / lid tightening (AU7):** disagreement, suspicion, or difficulty accepting what is being said — even when the mouth agrees\n• **Upper lid raise (AU5):** fear or surprise; shows sclera above the iris\n• **Lower lid tension:** anger or determination\n\n**GAZE MECHANICS**\n• **Gaze aversion during recall is NORMAL and healthy** — looking away reduces cognitive load while retrieving memory. Punishing this in an interview degrades recall.\n• **Gaze anchoring** — where the eyes settle at rest reveals attentional priority\n• **Visual fixation duration** — longer fixation on a stimulus indicates processing difficulty OR high interest; disambiguate with pupil data\n• **Saccadic suppression** — during rapid eye movement, vision is suppressed; skilled magicians time moves to saccades\n\n**LACRIMATION**\nTearing without emotional expression is a strong parasympathetic/trance indicator. In hypnosis, spontaneous lacrimation typically signals medium-to-deep trance. In interviews, it often precedes emotional disclosure by several seconds — it is an early warning that something is surfacing.\n\n**IMPORTANT CAVEAT — CONFOUNDS:**\nBefore attributing meaning, rule out: ambient light changes, contact lenses, dry eye, allergies, alcohol, cannabis, stimulants, opioids, antidepressants (many affect pupil size), neurological conditions, recent screen exposure, and simple fatigue. A professional never reads an eye in isolation."
    ],
    keyPoints: [
      "The pupil has no voluntary control pathway — it is the most honest observable in the body",
      "Dilation = cognitive load, arousal, interest, surprise, or pain — it signals INTENSITY, not direction",
      "Constriction = light, disgust, aversion, rejection, or near focus",
      "Always control for lighting and gaze distance before interpreting pupil change",
      "Baseline blink rate is 15–20/min; flurries after specific questions are high-value stress markers",
      "Gaze aversion during recall is normal and healthy — it reduces cognitive load and improves memory retrieval",
      "Rule out confounds: medication, substances, dry eye, fatigue, and screen exposure"
    ],
    exercise: "Pupillometry drill: Sit with a partner in stable lighting. Show them five playing cards face-up, one at a time, for four seconds each, and ask them to silently pick a favorite. Watch pupil diameter on each. Then name their card. With practice and good light control, hit rates well above chance are routine — this is the mechanism behind many 'mind reading' demonstrations.",
    quiz: [
      {
        question: "You notice someone's pupils dilate when discussing a business partner. What can you conclude?",
        options: [
          "They are attracted to that partner",
          "They are afraid of that partner",
          "Arousal or cognitive load increased on that topic — the valence is undetermined without additional signals",
          "They are lying about the partner"
        ],
        correct: 2,
        explanation: "Pupil dilation is valence-neutral. Attraction, fear, anger, and pure mental effort all dilate. The pupil tells you the topic is SIGNIFICANT and demanding. To determine direction, you must combine it with facial action units, prosody, proxemics, and baseline."
      }
    ],
    secret: "🔓 OCULAR SECRET: Combine pupil with the orbicularis oculi. Dilation WITH cheek raise (AU6) and soft lids = positive arousal — attraction, delight, excitement. Dilation WITH lid tightening (AU7) and brow lowering (AU4) = negative arousal — anger, suspicion, threat. Dilation with upper lid raise (AU5) and brow raise = fear or surprise. The pupil supplies the volume knob; the surrounding muscles supply the channel."
  },
  {
    id: 'phys-vocal',
    title: "Vocal Physiology & Paralinguistics",
    subtitle: "Reading the Larynx, Breath, and Prosody",
    content: [
      "The voice is produced by physical structures under partial autonomic control. Stress physically changes the vocal apparatus in measurable ways, and most people have no idea it is happening.\n\n**THE MECHANISM OF STRESS ON VOICE:**\n\n1. **Laryngeal muscle tension** — Under sympathetic arousal, the cricothyroid and surrounding muscles tighten. This stretches the vocal folds and RAISES fundamental frequency (pitch). Measurable pitch elevation under stress is one of the most replicated findings in the literature.\n\n2. **Reduced lubrication** — Salivation drops, the vocal folds dry, and voice quality becomes rougher or 'creakier.' Throat clearing increases.\n\n3. **Respiratory shift** — Breathing moves from diaphragmatic to thoracic. This shortens the breath supply, which shortens phrase length and forces more frequent, audible inhalations.\n\n4. **Jaw and tongue tension** — Articulation becomes either over-precise (over-control) or degraded (slurring, stumbling).\n\n**THE MEASURABLE VOCAL PANEL:**\n\n• **Fundamental frequency (F0):** baseline pitch. Elevation under stress is reliable WITHIN a person, never across people.\n• **Pitch variance (prosody range):** collapses toward monotone in dorsal shutdown; expands in ventral vagal safety.\n• **Speech rate:** typically accelerates under sympathetic arousal; slows dramatically in shutdown or heavy cognitive load.\n• **Response latency:** the gap between question end and answer start. Both unusually LONG (construction, retrieval difficulty) and unusually SHORT (rehearsed answer) deviations are meaningful.\n• **Filled pauses:** 'um,' 'uh,' 'you know.' Rate changes matter more than presence.\n• **Volume:** drops with shame, guilt, and shutdown; rises with anger and defensiveness.\n• **Vocal fry / creak:** end-of-phrase creak can indicate breath depletion or disengagement.\n• **Swallowing:** audible or visible swallow before answering is a classic dry-mouth stress marker.\n• **Throat clearing:** a self-soothing and lubrication behavior, frequently clustered with stress.",

      "**PROSODY AND THE SOCIAL ENGAGEMENT SYSTEM**\n\nPorges's work links prosody directly to physiological state. This is not stylistic — it is anatomical. The ventral vagal complex innervates the muscles of the face, middle ear, larynx, and pharynx as a single functional unit.\n\nConsequences you can use:\n\n1. **A person in threat state literally hears you differently.** The middle-ear muscles detune away from human vocal frequency toward low-frequency ranges. Shouting at a frightened person makes comprehension WORSE, not better.\n\n2. **Prosody is contagious.** Warm, melodic, moderately-paced speech with gentle falling intonation activates the listener's ventral vagal system. This is why skilled negotiators and therapists deliberately use what Chris Voss calls the 'late-night FM DJ voice' — downward inflection, slow, warm. It is not a rhetorical trick; it is direct nervous-system regulation.\n\n3. **Rising terminal inflection** (uptalk) signals uncertainty and submission, and invites correction. Falling terminal inflection signals certainty and closes the topic.\n\n**THE THREE VOICES (Voss framework, physiologically grounded):**\n• **Late-night FM DJ voice:** downward inflection, calm, slow. Regulates the other person's nervous system into safety. Use as default.\n• **Playful/positive voice:** the workhorse. Light, easy, with a smile actually present (a smile changes vocal tract shape and is audible).\n• **Direct/assertive voice:** rare. Use sparingly; it triggers sympathetic activation in the listener.\n\n**BASELINE PROTOCOL FOR VOICE:**\nSpend the first several minutes on genuinely neutral, low-stakes conversation. Record mentally: their normal pitch range, normal rate, normal latency, normal filler frequency, normal volume. Only then introduce target topics. Everything you learn is a DELTA from that baseline. A fast talker who slows dramatically is as significant as a slow talker who speeds up.\n\n**CRITICAL LIMITATION:** No vocal parameter detects deception on its own. Commercial 'voice stress analysis' products have repeatedly failed independent validation. What voice reliably gives you is AROUSAL and STATE — which, combined with topic tracking and baseline, is genuinely powerful."
    ],
    keyPoints: [
      "Sympathetic arousal tightens laryngeal muscles and raises pitch — reliable within a person, never across people",
      "Dry mouth from suppressed salivation produces swallowing, throat clearing, and rougher voice quality",
      "Response latency deviations matter in BOTH directions: too long (construction) and too short (rehearsed)",
      "Prosody is anatomically linked to vagal state — a threatened person's middle ear detunes from human speech",
      "Warm, slow, downward-inflected speech directly regulates the listener's nervous system into safety",
      "Establish a multi-minute neutral baseline first — everything meaningful is a delta from it",
      "Voice stress analysis does NOT detect lies; it detects arousal, which is a different thing"
    ],
    exercise: "Record yourself answering ten questions: five mundane ('what did you have for breakfast') and five emotionally loaded ('describe your biggest regret'). Play back and measure: pitch change, rate change, latency, filler frequency, and swallowing. You will hear your own stress signature clearly. Knowing your own tells is the fastest route to hearing them in others.",
    quiz: [
      {
        question: "Why does shouting at a panicked person make them comprehend LESS?",
        options: [
          "Because they are too emotional to care",
          "Because in threat state the middle-ear muscles detune away from human vocal frequencies, physically degrading speech comprehension",
          "Because loud noise damages hearing",
          "Because they stop paying attention deliberately"
        ],
        correct: 1,
        explanation: "Porges showed the middle-ear muscles are part of the ventral vagal social engagement system. Under threat, they retune toward low-frequency sounds — the evolutionary signature of predators. Human speech frequencies are literally filtered out. The remedy is warm prosody and safety cues, not volume."
      }
    ],
    secret: "🔓 VOCAL SECRET: The most diagnostically valuable moment is the half-second BEFORE someone answers a hard question. In that window you get: the inhalation (depth and audibility), the swallow (dry mouth), the throat clear (lubrication), the latency (retrieval versus construction), and the pitch of the very first syllable. Professionals listen to the gap, not the sentence."
  },
  {
    id: 'phys-thermal-vascular',
    title: "Thermal, Vascular & Dermal Signals",
    subtitle: "Blood Flow, Sweat, and Skin as a Readout",
    content: [
      "Blood flow is under tight autonomic control and produces some of the most reliable — and least faked — signals available.\n\n**THE BLOOD-SHUNTING RESPONSE**\n\nUnder sympathetic activation, blood is redirected from the periphery and viscera to the large skeletal muscles. Observable consequences:\n\n• **Facial pallor** — the face loses color, most visible around the mouth and nose\n• **Lip blanching and thinning** — lips lose blood and appear thinner and paler. Lip compression compounds this. This is a strong, fast, and difficult-to-suppress signal.\n• **Cold extremities** — hands go cold within seconds; a handshake can tell you a great deal\n• **Nail bed color change** — visible in good light\n\n**THE FLUSH RESPONSE (the opposite direction)**\n\nVasodilation of facial capillaries. Distinct patterns carry distinct meanings:\n\n• **Anger flush:** typically diffuse across the face, often with neck involvement, accompanied by AU4 (brow lowerer) and AU7 (lid tightener), and jaw tension\n• **Embarrassment blush:** characteristically cheeks, ears, and upper chest ('the blush triangle'), accompanied by gaze aversion, a rapid partial smile, and head lowering. Notably, blushing is uniquely human and specifically social — it is an involuntary appeasement display\n• **Arousal flush:** chest and neck mottling, often with pupil dilation and lip reddening\n• **Exertion or heat flush:** even distribution, accompanied by sweating and elevated respiration — always rule this out first\n\n**THE NECK — Underrated and Highly Informative**\n\n• **Suprasternal notch:** the hollow at the base of the throat. Touching or covering it is a strong insecurity/threat pacifier. In women this often appears as playing with a necklace; in men as adjusting a tie or collar.\n• **Carotid pulse:** visible pulsation at the side of the neck indicates elevated heart rate. In a thin-necked individual under good lighting, you can literally count it.\n• **Neck flush/mottling:** highly reliable stress indicator, very difficult to control\n• **Neck touching/massage:** stimulates the vagus nerve and genuinely lowers heart rate — a functional self-soothing behavior, not just a habit",

      "**SUDOMOTOR (SWEAT) RESPONSE**\n\nEccrine sweat glands on the palms, soles, forehead, and upper lip are innervated exclusively by the sympathetic nervous system. This makes palmar sweat a near-direct readout of sympathetic tone — it is the basis of the electrodermal channel in polygraphy.\n\nObservables:\n• Palm wiping on trousers or thighs\n• Visible forehead or upper-lip moisture\n• Damp handshake\n• Repeated hand rubbing\n\nOnset is fast (1–3 seconds) but decay is slow (minutes). This asymmetry matters: sweat tells you that arousal occurred recently, but it is poor for pinpointing the exact trigger moment. Use faster channels (pupil, breath, micro-expression) for timing.\n\n**RESPIRATION PATTERNS — A Complete Panel**\n\n• **Diaphragmatic (belly) breathing:** parasympathetic, safe, regulated\n• **Thoracic (chest) breathing:** sympathetic activation\n• **Clavicular (shoulder) breathing:** high sympathetic arousal or panic\n• **Breath-holding:** the freeze response. Often occurs at the precise instant of threat detection — one of the fastest and most useful markers available.\n• **Sudden deep inhalation ('preparatory breath'):** frequently precedes a difficult disclosure or a decision to speak\n• **Sighing:** typically a parasympathetic reset attempt; often marks resignation or release\n• **Rate:** adult baseline is roughly 12–20/min at rest; deviations track arousal\n\n**BREATHING AS AN INTERVENTION CHANNEL**\n\nBecause respiration is the only autonomic function under easy voluntary control, it is the main lever for changing state — yours or theirs.\n\n• **Extended exhale** is the key. Exhalation activates the parasympathetic branch via respiratory sinus arrhythmia. An inhale of 4 with an exhale of 8 reliably down-regulates arousal.\n• **Physiological sigh** (double inhale through the nose, long exhale through the mouth) is the fastest known voluntary method to reduce acute arousal — it reinflates collapsed alveoli and offloads CO2 rapidly.\n• **Pacing another person's breath and then slowing your own** is the mechanism behind rapport-based calming. They will follow. This is not mysticism; it is entrainment, and it works reliably.\n\n**CONFOUNDS TO RULE OUT ALWAYS:** ambient temperature, exertion, caffeine, nicotine, alcohol, thyroid conditions, menopause, rosacea, anxiety disorders, beta-blockers (which blunt the entire sympathetic display), antihistamines, and fever."
    ],
    keyPoints: [
      "Blood shunting under stress causes facial pallor, lip blanching and thinning, and cold hands within seconds",
      "Blush patterns differ by cause: anger is diffuse with AU4/AU7, embarrassment hits cheeks/ears/chest with gaze aversion",
      "The suprasternal notch (throat hollow) is a high-value pacifier location — covering it signals insecurity",
      "Palmar sweat is a near-direct sympathetic readout: fast onset (1–3s) but slow decay (minutes)",
      "Breath-holding is the freeze response and often marks the exact instant of threat detection",
      "Extended exhale activates the parasympathetic branch — inhale 4, exhale 8 reliably lowers arousal",
      "Beta-blockers blunt the entire sympathetic display — always ask about medication before drawing conclusions"
    ],
    exercise: "Thermal awareness drill: Before a stressful event (presentation, difficult conversation), place your fingertips against your cheek. Note the temperature difference. Then perform four physiological sighs (double nasal inhale, long mouth exhale). Re-check. You will feel your hands warm measurably as peripheral vasoconstriction releases. You have just consciously moved yourself down the arousal curve.",
    quiz: [
      {
        question: "Someone's hands were warm during small talk. Five minutes into a difficult topic, their handshake is cold and damp. What does this indicate?",
        options: [
          "They are lying about the topic",
          "Sympathetic activation occurred during the conversation — peripheral vasoconstriction plus eccrine sweat. It marks significance and stress, not deception",
          "The room got colder",
          "They have a circulation disorder"
        ],
        correct: 1,
        explanation: "Cold plus damp is the classic sympathetic signature: blood shunted away from the periphery while sympathetically-driven eccrine glands activate. This establishes that the topic produced genuine physiological stress. It does NOT establish deception — innocent people under accusation produce identical physiology."
      }
    ],
    secret: "🔓 VASCULAR SECRET: Watch the lips specifically. Lip blanching and thinning is one of the fastest, most reliable, and least-controllable distress signals in the entire body. Most people never learn to mask it because they cannot see their own mouth. When you see full lips suddenly compress and lose color, the nervous system has just registered a threat — and you will usually see it before the person has consciously registered their own reaction."
  },
  {
    id: 'phys-baseline-protocol',
    title: "The Professional Baselining Protocol",
    subtitle: "The Discipline That Separates Analysts from Guessers",
    content: [
      "Every serious practitioner — FBI behavioral analysts, clinical psychologists, elite negotiators — follows a formal baselining discipline. Without it, all reading is projection.\n\n**WHY BASELINE IS NON-NEGOTIABLE**\n\nHuman physiological and behavioral variance is enormous. Consider:\n• Some people blink 8 times per minute at rest; others blink 35\n• Some people gesture constantly; others are nearly still\n• Some people maintain near-continuous eye contact; others find it painful\n• Autistic individuals, ADHD individuals, and people with anxiety disorders present baselines that are routinely misread as deception by untrained observers\n• Cultural norms for proxemics, gaze, and touch vary dramatically\n\nWithout baseline, you are measuring the person against YOUR expectations. That is not analysis; it is bias with extra steps.\n\n**THE FIVE-PHASE PROTOCOL**\n\n**PHASE 1 — ENVIRONMENTAL CONTROL (before contact)**\n□ Stable, even lighting (critical for pupil work)\n□ Comfortable temperature (thermal confounds ruled out)\n□ Minimal auditory distraction\n□ Seating arrangement that is non-confrontational (angled ~45°, not directly opposed)\n□ Note the time of day (circadian effects on arousal are real)\n\n**PHASE 2 — CONTEXT INTAKE**\n□ Medication? (Beta-blockers, SSRIs, stimulants, opioids, antihistamines all alter the display)\n□ Substances? (Caffeine, nicotine, alcohol, cannabis)\n□ Sleep? (Deprivation mimics many stress markers)\n□ Medical conditions? (Thyroid, rosacea, hyperhidrosis, neurological)\n□ Neurodivergence? (Autism and ADHD baselines differ substantially)\n□ Cultural background? (Gaze, proxemics, and expressivity norms)\n□ Is the person cold? Ill? In pain?\n\n**PHASE 3 — BEHAVIORAL BASELINE (5–10 minutes of genuinely neutral conversation)**\nTopics must be low-stakes and non-threatening: weather, traffic, the building, a neutral shared observation. Do NOT discuss the target subject.\n\nRecord across channels:\n□ Resting posture and habitual asymmetries\n□ Baseline blink rate\n□ Gesture frequency, amplitude, and handedness\n□ Illustrator rate (gestures that accompany speech)\n□ Habitual self-touch (some people always touch their face)\n□ Baseline pitch, rate, volume, latency, filler frequency\n□ Preferred personal distance\n□ Foot and leg position at rest\n□ Where the eyes settle when not engaged",

      "**PHASE 4 — STIMULUS AND DELTA DETECTION**\n\nNow introduce topics. The unit of analysis is the DELTA — the change from baseline — and its TIMING.\n\nFor each observed change, record:\n1. **What channel changed?** (pupil, breath, posture, voice, face, feet)\n2. **What was the precise stimulus?** (which word, name, or question)\n3. **What was the latency?** (immediate limbic response is under ~1 second; anything later may be cognitive)\n4. **How long did it persist?**\n5. **Did it return to baseline, or establish a new elevated baseline?**\n\n**THE HOT-SPOT DEFINITION:** A hot spot is a cluster of at least three simultaneous or near-simultaneous deltas across DIFFERENT channels, time-locked to a specific stimulus, that deviate from an established baseline. Anything less is noise.\n\n**PHASE 5 — CLUSTER VERIFICATION AND ALTERNATIVE HYPOTHESES**\n\nBefore concluding anything, you must generate and test alternatives. For any observed stress cluster, at minimum consider:\n\n• **Guilt** — they did the thing\n• **Fear of disbelief** — they did NOT do the thing but fear being blamed (produces IDENTICAL physiology)\n• **Protecting someone else** — stress about a third party\n• **Embarrassment** — the topic is shameful but irrelevant to your question\n• **Trauma activation** — the topic touches unrelated past trauma\n• **Physical discomfort** — they need the bathroom, they are cold, they are in pain\n• **Cognitive difficulty** — the question is genuinely hard to answer accurately\n• **Interviewer effect** — YOU triggered it with tone, posture, or word choice\n\n**THE OTHELLO ERROR** — named by Ekman — is the single most consequential mistake in the field: misinterpreting a truthful person's fear of being disbelieved as evidence of deception. In Shakespeare's play, Desdemona's genuine terror is read by Othello as proof of guilt, and he kills her for it. Innocent people under accusation produce textbook stress clusters. This error has destroyed real lives in real investigations.\n\n**THE PROFESSIONAL'S STANDARD OF CLAIM**\n\nWhat you may legitimately say:\n✓ 'A significant physiological stress response was observed, time-locked to the topic of X.'\n✓ 'This topic produced a marked deviation from baseline across three channels.'\n✓ 'Something about this subject matters to this person.'\n\nWhat you may NOT say:\n✗ 'They are lying.'\n✗ 'The body language proves guilt.'\n✗ 'I can tell they did it.'\n\nBody language reveals AROUSAL and SIGNIFICANCE. It does not reveal CAUSE. Meta-analyses of deception detection consistently find untrained accuracy near chance (~54%) and trained accuracy only modestly better. Anyone claiming 90%+ lie detection from body language is selling something."
    ],
    keyPoints: [
      "Without baseline, you are measuring people against your own expectations — that is bias, not analysis",
      "Five phases: environmental control, context intake, behavioral baseline, delta detection, cluster verification",
      "Always screen for medication, substances, sleep, medical conditions, neurodivergence, and culture",
      "A valid hot spot requires 3+ deltas across DIFFERENT channels, time-locked to a specific stimulus",
      "Limbic responses occur under ~1 second; later changes may be cognitive rather than emotional",
      "The Othello Error: a truthful person's fear of disbelief is physiologically identical to guilt",
      "Body language reveals arousal and significance, never cause — claim only what the data supports"
    ],
    exercise: "Run a full five-phase protocol on a willing friend. Spend a genuine 10 minutes on neutral topics while recording their baseline across all channels in writing. Then ask about something mildly emotional (a frustration at work). Document every delta with its timing. Finally, and most importantly, write down five alternative explanations for each delta you observed. This last step is what makes you a professional rather than a hobbyist.",
    quiz: [
      {
        question: "An innocent suspect shows a textbook stress cluster when asked about a crime. What is the professionally correct interpretation?",
        options: [
          "They are guilty — the cluster proves it",
          "The cluster indicates significant arousal on this topic; fear of being disbelieved produces physiology identical to guilt (the Othello Error)",
          "The cluster is meaningless",
          "They must be hiding something else"
        ],
        correct: 1,
        explanation: "This is the Othello Error, and it is the most damaging mistake in applied behavior analysis. An innocent person facing a serious accusation experiences genuine terror. That terror generates the same sympathetic cascade as guilt. The cluster establishes that the topic is significant and threatening — nothing more."
      },
      {
        question: "What is the minimum requirement for a valid 'hot spot'?",
        options: [
          "Any single unusual gesture",
          "Three or more deltas across different channels, time-locked to a specific stimulus, deviating from an established baseline",
          "The person looking away",
          "Increased blinking"
        ],
        correct: 1,
        explanation: "Single-channel signals are noise. A valid hot spot requires convergent evidence: multiple independent channels (say pupil + breath + foot orientation) changing together, tied to a specific stimulus, and measured against a properly established baseline."
      }
    ],
    secret: "🔓 THE BASELINE SECRET NOBODY TEACHES: The most valuable baseline is not of the subject — it is of YOURSELF. Your own state leaks into every interaction and changes the person in front of you. If you are anxious, you generate anxiety in them and then read it as their tell. Before any serious read, regulate yourself first: four physiological sighs, hands warm, breath in the belly, prosody soft. A dysregulated observer creates the very signals they then misinterpret."
  }
];

export const physiologyPuzzles: Puzzle[] = [
  {
    id: 'phys-puzzle-state-id',
    title: "Identify the Autonomic State",
    description: "Read the physiological signature and determine the nervous system state.",
    type: 'observation',
    difficulty: 4,
    scenario: "During an interview, a subject who had been animated and conversational undergoes a change over about 90 seconds. Their facial expression flattens almost completely. Their voice, previously melodic with wide pitch variation, drops to near-monotone at reduced volume. Their shoulders round forward and their spine slumps. Their gaze fixes on a point on the table and stops tracking. Response latency to questions extends from under a second to four or five seconds, and answers become minimal. Their hands, previously gesturing, go still in their lap. When asked a direct question they say 'sorry, what?' twice in a row.",
    options: [
      { text: "Dorsal vagal shutdown (immobilization). The facial mask, prosodic collapse, postural slump, fixed gaze, extended latency, and processing failure form the complete dorsal signature. Memory retrieval and complex language processing are physiologically impaired. The correct intervention is to reduce threat, warm the prosody, slow the pace, and re-establish safety before continuing.", feedback: "EXPERT-LEVEL READ. You correctly identified all six dorsal vagal markers and — critically — you identified the correct INTERVENTION. This is the difference between an observer and a practitioner. Continuing to question someone in dorsal shutdown produces unreliable information and can be actively harmful. Porges's framework tells you the person is not being evasive; their nervous system has collapsed into the oldest defensive state.", correct: true },
      { text: "Sympathetic fight-or-flight activation", feedback: "Sympathetic activation looks nearly opposite: accelerated speech, elevated pitch, increased movement, postural readiness, faster blinking, and mobilization of the body. What is described here is collapse and immobilization, not mobilization. This is the dorsal branch.", correct: false },
      { text: "They are being deliberately evasive and stonewalling", feedback: "This is a critical and common misread. Deliberate stonewalling typically retains postural tone, normal facial mobility, and intact processing — the person is choosing not to answer. Here we see loss of facial mobility, prosodic collapse, and genuine processing failure ('sorry, what?' twice). This is involuntary physiological shutdown, not strategy.", correct: false },
      { text: "Simple boredom with the interview", feedback: "Boredom does not produce facial masking, prosodic collapse, and processing failure. Bored people typically show restlessness, increased self-touch, environmental scanning, and normal response latency. The described pattern is far more severe and specific.", correct: false }
    ],
    hint: "Map each observation against the three polyvagal states. Is the body mobilizing for action, or collapsing away from it? And critically — what does that state imply about their ability to answer accurately?"
  },
  {
    id: 'phys-puzzle-othello',
    title: "The Othello Test",
    description: "Apply professional analytical discipline to a high-stakes scenario.",
    type: 'scenario',
    difficulty: 5,
    scenario: "You are helping a company investigate a data leak. You interview an employee named Devi. During neutral baseline conversation over eight minutes she is relaxed: warm hands, belly breathing, blink rate around 17/min, easy prosody with wide range, response latency under a second. When you raise the leak, over the next two minutes you observe: her breathing shifts to her chest, her blink rate rises to 34/min, she touches her suprasternal notch three times, her hands go cold and she wipes her palms on her thighs, her lips compress and blanch, and her response latency extends to two to three seconds. She maintains eye contact and answers every question. She says clearly: 'No, I did not leak anything.' You later learn she was recently passed over for promotion and is afraid management is looking for someone to blame.",
    options: [
      { text: "Report a significant multi-channel stress response time-locked to the leak topic, explicitly note that fear of being disbelieved produces identical physiology to guilt (Othello Error), note her direct past-tense denial and the confirmed contextual fear of being scapegoated, and recommend the investigation proceed on evidence rather than physiology.", feedback: "TEXTBOOK PROFESSIONAL CONDUCT. You did four things correctly: (1) You reported the physiology accurately and neutrally — a genuine multi-channel cluster occurred. (2) You explicitly flagged the Othello Error rather than letting a reader assume guilt. (3) You noted the linguistic quality of her denial — 'No, I did not leak anything' is direct, first-person, past-tense, and unqualified, which is the structure truthful denials typically take. (4) You correctly bounded the claim: physiology establishes significance and stress, never cause. Recommending evidence-based investigation is the only defensible conclusion. This is precisely how a competent analyst protects both the investigation and an innocent person.", correct: true },
      { text: "Conclude she is the leaker — seven simultaneous stress indicators is overwhelming evidence", feedback: "This is the Othello Error in its most dangerous form. Yes, the cluster is real and well-observed. But an employee who was just passed over for promotion and fears being scapegoated for a serious breach will produce EXACTLY this physiology while being completely innocent. Terror of false accusation and guilt are physiologically indistinguishable. Concluding guilt from this data is how careers and lives get destroyed.", correct: false },
      { text: "Conclude she is innocent because she maintained eye contact throughout", feedback: "Eye contact is one of the most overrated and least reliable indicators in the field. Deceptive individuals frequently INCREASE eye contact precisely because they know the folk belief that liars look away. Maintained gaze tells you almost nothing. Also note: you should not be concluding innocence or guilt from physiology in either direction.", correct: false },
      { text: "Dismiss all findings since she has a plausible reason to be stressed", feedback: "Over-correction. The cluster genuinely occurred and should be documented accurately — suppressing real observations is as unprofessional as over-interpreting them. The correct approach is to report the physiology precisely AND report the confounding context AND bound the claim appropriately. Report everything; conclude carefully.", correct: false }
    ],
    hint: "Two questions decide this: What does the physiology actually license you to claim? And what does the contextual information about the promotion do to your alternative hypotheses?",
    secret: "🔓 FIELD SECRET: Experienced analysts run a mandatory mental checklist before any conclusion — 'What would an INNOCENT person who is terrified of being blamed look like right now?' If the answer is 'exactly like this,' your physiological data cannot distinguish the hypotheses, and you must say so explicitly. The willingness to state 'this data does not discriminate' is the clearest marker of genuine expertise."
  }
];
