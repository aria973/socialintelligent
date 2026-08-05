'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample lesson data for each module
const moduleData: Record<string, {
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  lessons: { id: string; title: string; type: string; duration: number; completed: boolean; secrets: number }[];
}> = {
  foundations: {
    title: 'Foundations of Influence',
    subtitle: 'The Science of Human Behavior',
    icon: '🧠',
    gradient: 'from-slate-600 to-slate-800',
    lessons: [
      { id: 'f1', title: 'The Architecture of Human Behavior', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'f2', title: 'History of Hypnosis & Mentalism', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'f3', title: 'States of Consciousness', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'f4', title: 'The Nature of Suggestion', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'f5', title: "The Professional's Code of Ethics", type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'f6', title: 'Developing Your Professional Identity', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'f7', title: 'Observation Skills Development', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'f8', title: 'Foundation Mastery Check', type: 'puzzle', duration: 15, completed: false, secrets: 1 },
    ],
  },
  transactional_analysis: {
    title: 'Transactional Analysis',
    subtitle: "Eric Berne's Games People Play",
    icon: '🎭',
    gradient: 'from-purple-600 to-indigo-600',
    lessons: [
      { id: 'ta1', title: 'Introduction to Transactional Analysis', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'ta2', title: 'The Three Ego States', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ta3', title: 'Complementary & Crossed Transactions', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'ta4', title: 'Strokes: Currency of Recognition', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ta5', title: 'Discovering Psychological Games', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ta6', title: 'Game Analysis: Why Don\'t You, Yes But', type: 'exercise', duration: 25, completed: false, secrets: 1 },
      { id: 'ta7', title: 'Game Analysis: Kick Me & Poor Me', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ta8', title: 'Script Analysis: Your Life Story', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ta9', title: 'Advanced Ego State Mapping', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ta10', title: 'Script Cure and Rewriting', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'ta11', title: 'Autonomy & Awakening', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ta12', title: 'TA in Clinical Practice', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ta13', title: 'Teaching TA to Others', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ta14', title: 'TA Case Studies', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'ta15', title: 'TA Integration Exercise', type: 'puzzle', duration: 20, completed: false, secrets: 1 },
      { id: 'ta16', title: 'Advanced TA Techniques', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ta17', title: 'TA for Personality Assessment', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ta18', title: 'Mastery: Transactional Analysis', type: 'theory', duration: 40, completed: false, secrets: 2 },
    ],
  },
  erickson_hypnosis: {
    title: 'Ericksonian Hypnotherapy',
    subtitle: "Milton H. Erickson's Methods",
    icon: '🌀',
    gradient: 'from-cyan-600 to-blue-600',
    lessons: [
      { id: 'eh1', title: 'Understanding Ericksonian Hypnosis', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'eh2', title: 'The Structure of Trance', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'eh3', title: 'Indirect Suggestion & Metaphor', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'eh4', title: 'Confusion Techniques', type: 'exercise', duration: 25, completed: false, secrets: 1 },
      { id: 'eh5', title: 'Utilization: Working With Reality', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'eh6', title: 'Fractionation & Deepening', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'eh7', title: 'Therapeutic Storytelling', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'eh8', title: 'Post-Hypnotic Suggestions', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'eh9', title: 'Self-Hypnosis & Self-Programming', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'eh10', title: 'Advanced Trance Phenomena', type: 'theory', duration: 45, completed: false, secrets: 1 },
      { id: 'eh11', title: 'Rapid Induction Methods', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'eh12', title: 'Ericksonian Language Patterns', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'eh13', title: 'Metaphor Construction', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'eh14', title: 'Working with Resistance', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'eh15', title: 'Ericksonian Case Analysis', type: 'exercise', duration: 35, completed: false, secrets: 1 },
      { id: 'eh16', title: 'Individualized Approaches', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'eh17', title: 'Trance in Daily Life', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'eh18', title: 'Advanced Utilization Techniques', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'eh19', title: 'Ericksonian Group Work', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'eh20', title: 'Integration: Ericksonian Approach', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'eh21', title: 'Ericksonian Supervision', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'eh22', title: 'Mastery: Ericksonian Hypnosis', type: 'puzzle', duration: 35, completed: false, secrets: 2 },
    ],
  },
  clinical_hypnosis: {
    title: 'Clinical Hypnotherapy',
    subtitle: 'Professional Practice & Applications',
    icon: '🏥',
    gradient: 'from-emerald-600 to-teal-600',
    lessons: [
      { id: 'ch1', title: 'Clinical Applications Overview', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ch2', title: 'Therapeutic Assessment & Formulation', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'ch3', title: 'Building Therapeutic Rapport', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ch4', title: 'Anxiety Disorders & Hypnosis', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'ch5', title: 'Depression & Hypnotherapy', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ch6', title: 'Pain Management with Hypnosis', type: 'theory', duration: 45, completed: false, secrets: 1 },
      { id: 'ch7', title: 'Habit Change Protocols', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ch8', title: 'Trauma-Informed Hypnotherapy', type: 'theory', duration: 50, completed: false, secrets: 1 },
      { id: 'ch9', title: 'Regression Therapy Techniques', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'ch10', title: 'Hypnosis for Gastrointestinal Disorders', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ch11', title: 'Sleep Disorders & Hypnosis', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ch12', title: 'Medical Procedure Preparation', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ch13', title: 'Psychosomatic Conditions', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'ch14', title: 'Clinical Case Documentation', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ch15', title: 'Working with Other Professionals', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'ch16', title: 'Contraindications & Cautions', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ch17', title: 'Clinical Ethics in Depth', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'ch18', title: 'Clinical Practice Management', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ch19', title: 'Clinical Case Studies', type: 'exercise', duration: 40, completed: false, secrets: 1 },
      { id: 'ch20', title: 'Mastery: Clinical Hypnotherapy', type: 'puzzle', duration: 45, completed: false, secrets: 2 },
    ],
  },
  body_language: {
    title: 'Nonverbal Mastery',
    subtitle: 'FBI-Grade Behavioral Analysis',
    icon: '👁️',
    gradient: 'from-rose-600 to-pink-600',
    lessons: [
      { id: 'bl1', title: 'Foundations of Nonverbal Communication', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'bl2', title: 'The Art of Observation', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'bl3', title: 'Facial Expressions & Microexpressions', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'bl4', title: 'Body Positioning & Proxemics', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'bl5', title: 'Hands, Gestures & Eye Behavior', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'bl6', title: 'Detecting Deception: Myths & Methods', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'bl7', title: 'Advanced Microexpression Training', type: 'theory', duration: 45, completed: false, secrets: 1 },
      { id: 'bl8', title: 'Voice Analysis & Paralinguistics', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'bl9', title: 'Behavioral Prediction Fundamentals', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'bl10', title: 'Reading Deception in Practice', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'bl11', title: 'Cultural Differences in Nonverbal', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'bl12', title: 'Lie Detection Training', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'bl13', title: 'Body Language in Therapy', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'bl14', title: 'Nonverbal in Negotiation', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'bl15', title: 'Reading Groups & Dynamics', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'bl16', title: 'Advanced Observation Drills', type: 'exercise', duration: 35, completed: false, secrets: 1 },
      { id: 'bl17', title: 'Nonverbal Assessment Tools', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'bl18', title: 'Body Language in Investigation', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'bl19', title: 'Integration: Nonverbal Analysis', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'bl20', title: 'Mastery: Nonverbal Communication', type: 'puzzle', duration: 40, completed: false, secrets: 2 },
    ],
  },
  mentalism: {
    title: 'Professional Mentalism',
    subtitle: 'The Art of Psychological Illusion',
    icon: '🎩',
    gradient: 'from-amber-600 to-orange-600',
    lessons: [
      { id: 'm1', title: 'Introduction to Professional Mentalism', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm2', title: 'Cold Reading Fundamentals', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'm3', title: 'Hot Reading & Research Methods', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm4', title: 'Psychological Forcing Techniques', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'm5', title: 'The Art of Cold Reading Practice', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'm6', title: 'Warm Reading Techniques', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'm7', title: 'Mentalism Routines I', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm8', title: 'Prediction Effects', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm9', title: 'Memory Demonstrations', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'm10', title: 'Card Mentalism', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm11', title: 'Number Forces', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'm12', title: 'Mentalism Routines II', type: 'exercise', duration: 35, completed: false, secrets: 1 },
      { id: 'm13', title: 'Audience Management', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'm14', title: 'Creating Mystery & Suspense', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'm15', title: 'The Mentalist Persona', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'm16', title: 'Misdirection in Mentalism', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'm17', title: 'Ethical Mentalism Performance', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm18', title: 'Building a Mentalism Act', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'm19', title: 'Performing for Different Audiences', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'm20', title: 'Business of Mentalism', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'm21', title: 'Advanced Cold Reading', type: 'exercise', duration: 35, completed: false, secrets: 1 },
      { id: 'm22', title: 'Creating Original Effects', type: 'exercise', duration: 40, completed: false, secrets: 1 },
      { id: 'm23', title: 'Mentalism Performance Workshop', type: 'exercise', duration: 45, completed: false, secrets: 1 },
      { id: 'm24', title: 'Mastery: Professional Mentalism', type: 'puzzle', duration: 50, completed: false, secrets: 2 },
    ],
  },
  reading_people: {
    title: 'Portrait of the Mind',
    subtitle: 'Comprehensive Personality Analysis',
    icon: '🔮',
    gradient: 'from-violet-600 to-purple-600',
    lessons: [
      { id: 'rp1', title: 'Introduction to Personality Assessment', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'rp2', title: 'The Big Five Model', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'rp3', title: 'Attachment Theory Deep Dive', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'rp4', title: 'Narcissism & Dark Traits', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'rp5', title: 'Psychological Types Overview', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'rp6', title: 'Rapid Personality Assessment', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'rp7', title: 'Character Analysis Techniques', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'rp8', title: 'Behavioral Prediction I', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'rp9', title: 'Lie Detection Integration', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'rp10', title: 'Profile Building Practice', type: 'exercise', duration: 35, completed: false, secrets: 1 },
      { id: 'rp11', title: 'Cultural Considerations', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'rp12', title: 'Assessment Ethics', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'rp13', title: 'Integration: Reading People', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'rp14', title: 'Advanced Profile Analysis', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'rp15', title: 'Real-World Application', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'rp16', title: 'Mastery: Portrait of the Mind', type: 'puzzle', duration: 40, completed: false, secrets: 2 },
    ],
  },
  hypnotic_language: {
    title: 'Hypnotic Language Patterns',
    subtitle: 'The Art of Persuasive Communication',
    icon: '💬',
    gradient: 'from-pink-600 to-rose-600',
    lessons: [
      { id: 'hl1', title: 'Mechanics of Suggestion', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'hl2', title: 'Rapport Building Mastery', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'hl3', title: 'Language Patterns of Influence', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'hl4', title: 'Subliminal & Embedded Communication', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'hl5', title: 'NLP Language Patterns', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'hl6', title: 'Embedded Commands Mastery', type: 'exercise', duration: 25, completed: false, secrets: 1 },
      { id: 'hl7', title: 'Double Binds & Illusion of Choice', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'hl8', title: 'Presuppositions in Language', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'hl9', title: 'Metaphor Construction', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'hl10', title: 'Conversational Trance Induction', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'hl11', title: 'Language for Therapy', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'hl12', title: 'Ethical Language Use', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'hl13', title: 'Language Pattern Practice', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'hl14', title: 'Mastery: Hypnotic Language', type: 'puzzle', duration: 35, completed: false, secrets: 2 },
    ],
  },
  rapport_influence: {
    title: 'Rapport & Influence',
    subtitle: 'Ethical Persuasion Mastery',
    icon: '🤝',
    gradient: 'from-blue-600 to-indigo-600',
    lessons: [
      { id: 'ri1', title: 'The Science of Rapport', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'ri2', title: 'Matching & Mirroring', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'ri3', title: 'Pace and Lead Technique', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ri4', title: 'Persuasion Psychology', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'ri5', title: 'Compliance Techniques', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ri6', title: 'Ethical Influence Framework', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ri7', title: 'Building Trust Quickly', type: 'exercise', duration: 20, completed: false, secrets: 1 },
      { id: 'ri8', title: 'Influence in Therapy', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ri9', title: 'Social Dynamics & Influence', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'ri10', title: 'Handling Resistance', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'ri11', title: 'Influence Ethics Case Studies', type: 'exercise', duration: 25, completed: false, secrets: 1 },
      { id: 'ri12', title: 'Mastery: Rapport & Influence', type: 'puzzle', duration: 30, completed: false, secrets: 2 },
    ],
  },
  memory_cognition: {
    title: 'Memory & Cognition',
    subtitle: 'Mental Performance Enhancement',
    icon: '🎯',
    gradient: 'from-cyan-600 to-blue-600',
    lessons: [
      { id: 'mc1', title: 'How Memory Actually Works', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'mc2', title: 'The Memory Palace Technique', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'mc3', title: 'Spaced Repetition Systems', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'mc4', title: 'Accelerated Learning Methods', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'mc5', title: 'Speed Reading & Comprehension', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'mc6', title: 'Mental Calculation Techniques', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'mc7', title: 'Cognitive Enhancement', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'mc8', title: 'Learning How to Learn', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'mc9', title: 'Memory for Mentalism', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'mc10', title: 'Cognitive Biases Mastery', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'mc11', title: 'Peak Performance States', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'mc12', title: 'Mastery: Memory & Cognition', type: 'puzzle', duration: 35, completed: false, secrets: 2 },
    ],
  },
  performance_psychology: {
    title: 'Performance Psychology',
    subtitle: 'Stage Presence & Impact',
    icon: '🎭',
    gradient: 'from-orange-600 to-red-600',
    lessons: [
      { id: 'pp1', title: 'The Psychology of Performance', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'pp2', title: 'Stage Presence Fundamentals', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'pp3', title: 'Audience Psychology', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'pp4', title: 'Pacing & Timing', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'pp5', title: 'Creating Dramatic Structure', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'pp6', title: 'Managing Nerves & Confidence', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'pp7', title: 'Storytelling for Performers', type: 'exercise', duration: 30, completed: false, secrets: 1 },
      { id: 'pp8', title: 'The Performance Persona', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'pp9', title: 'Audience Interaction Techniques', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'pp10', title: 'Mastery: Performance Psychology', type: 'puzzle', duration: 35, completed: false, secrets: 2 },
    ],
  },
  professional_practice: {
    title: 'Professional Practice',
    subtitle: 'Ethics, Business & Career',
    icon: '💼',
    gradient: 'from-slate-600 to-gray-800',
    lessons: [
      { id: 'prp1', title: 'Professional Ethics Deep Dive', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'prp2', title: 'Setting Up Your Practice', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'prp3', title: 'Client Management', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'prp4', title: 'Informed Consent & Documentation', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'prp5', title: 'Marketing Your Services', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'prp6', title: 'Insurance & Legal Considerations', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'prp7', title: 'Professional Organizations', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'prp8', title: 'Continuing Education', type: 'theory', duration: 20, completed: false, secrets: 1 },
      { id: 'prp9', title: 'Building Your Career', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'prp10', title: 'Mastery: Professional Practice', type: 'puzzle', duration: 30, completed: false, secrets: 2 },
    ],
  },
  mastery_integration: {
    title: 'Mastery Integration',
    subtitle: 'Complete Mentalist & Hypnotherapist',
    icon: '🏆',
    gradient: 'from-yellow-600 to-amber-600',
    lessons: [
      { id: 'mi1', title: 'The Integrated Practitioner', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'mi2', title: 'Designing Complete Sessions', type: 'theory', duration: 35, completed: false, secrets: 1 },
      { id: 'mi3', title: 'Complex Case Management', type: 'theory', duration: 40, completed: false, secrets: 1 },
      { id: 'mi4', title: 'Performance & Therapy Integration', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'mi5', title: 'Advanced Reading Techniques', type: 'exercise', duration: 35, completed: false, secrets: 1 },
      { id: 'mi6', title: 'Full Mentalism Performance', type: 'exercise', duration: 45, completed: false, secrets: 1 },
      { id: 'mi7', title: 'Full Hypnotherapy Session', type: 'exercise', duration: 40, completed: false, secrets: 1 },
      { id: 'mi8', title: 'Professional Identity', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'mi9', title: 'Teaching & Mentoring', type: 'theory', duration: 25, completed: false, secrets: 1 },
      { id: 'mi10', title: 'Lifelong Mastery Path', type: 'theory', duration: 30, completed: false, secrets: 1 },
      { id: 'mi11', title: 'Final Integration Exercise', type: 'exercise', duration: 45, completed: false, secrets: 1 },
      { id: 'mi12', title: 'Grand Master: Complete Mastery', type: 'puzzle', duration: 60, completed: false, secrets: 3 },
    ],
  },
};

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const module = moduleData[moduleId];

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showSecretInput, setShowSecretInput] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [secretMessage, setSecretMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<string[]>([]);

  if (!module) {
    return (
      <div className="iphone-container flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-xl font-bold mb-2">Module Not Found</h1>
          <p className="text-sm text-gray-500 mb-6">This module doesn't exist yet.</p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const completedCount = completedLessons.length;
  const progress = Math.round((completedCount / module.lessons.length) * 100);

  const handleCompleteLesson = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    setSelectedLesson(null);
  };

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = secretCode.toLowerCase().trim();
    
    // Simple validation - in real app would check against actual codes
    if (code.length >= 3 && !discoveredSecrets.includes(code)) {
      setDiscoveredSecrets([...discoveredSecrets, code]);
      setSecretMessage({ type: 'success', message: 'Secret discovered! 🎉' });
      setSecretCode('');
      setTimeout(() => setSecretMessage(null), 3000);
    } else if (discoveredSecrets.includes(code)) {
      setSecretMessage({ type: 'error', message: 'Already discovered this secret!' });
      setTimeout(() => setSecretMessage(null), 2000);
    } else {
      setSecretMessage({ type: 'error', message: 'Invalid code. Try again!' });
      setTimeout(() => setSecretMessage(null), 2000);
    }
  };

  const isLessonCompleted = (lessonId: string) => completedLessons.includes(lessonId);

  return (
    <div className="iphone-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋 94%</span>
      </div>

      {/* Header */}
      <div className="nav-bar" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <Link href="/" className="flex items-center gap-2 text-gray-400 text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xl">{module.icon}</span>
          <span className="text-sm font-semibold">{progress}%</span>
        </div>
      </div>

      {/* Module Header */}
      <div className={`bg-gradient-to-br ${module.gradient} p-5 pt-12`} style={{ background: 'linear-gradient(180deg, rgba(168,85,247,0.2), transparent 60%)' }}>
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center text-3xl shadow-xl`}>
            {module.icon}
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{module.title}</h1>
            <p className="text-sm text-white/70">{module.subtitle}</p>
          </div>
        </div>
        
        {/* Progress */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 bg-white/10 rounded-full h-2.5 overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white font-medium">{completedCount}/{module.lessons.length}</span>
        </div>
      </div>

      {/* Lessons List */}
      <div className="px-5 pt-6">
        <h2 className="section-title mb-4">Lessons</h2>
        
        <div className="space-y-2">
          {module.lessons.map((lesson, index) => {
            const completed = isLessonCompleted(lesson.id);
            const isLocked = index > 0 && !isLessonCompleted(module.lessons[index - 1].id);
            
            return (
              <div
                key={lesson.id}
                className={`lesson-item ${completed ? 'completed' : ''} ${isLocked ? 'opacity-50' : ''}`}
                onClick={() => !isLocked && setSelectedLesson(lesson.id)}
              >
                <div className={`lesson-checkbox ${completed ? 'completed' : isLocked ? 'locked' : ''}`}>
                  {completed ? '✓' : isLocked ? '🔒' : index + 1}
                </div>
                <div className="lesson-content">
                  <div className="lesson-title">{lesson.title}</div>
                  <div className="lesson-meta">
                    <span className={`lesson-type ${lesson.type}`}>{lesson.type}</span>
                    <span>{lesson.duration} min</span>
                    {lesson.secrets > 0 && (
                      <span className="secret-badge">🗝️ {lesson.secrets}</span>
                    )}
                  </div>
                </div>
                {completed && (
                  <div className="text-emerald-400 text-sm">Done</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Secret Discovery Section */}
      <div className="px-5 pb-20 mt-6">
        <div className="glass-card p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🗝️</span>
            <div>
              <h3 className="font-semibold text-sm">Secret Discovery</h3>
              <p className="text-xs text-gray-500">{discoveredSecrets.length} secrets found</p>
            </div>
          </div>

          {showSecretInput ? (
            <form onSubmit={handleSecretSubmit} className="space-y-3">
              <input
                type="text"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                placeholder="Enter secret code..."
                className="secret-input"
                maxLength={20}
              />
              <div className="flex gap-2">
                <button type="submit" className="btn-primary py-3" style={{ padding: '12px 20px', fontSize: '14px' }}>
                  Unlock
                </button>
                <button
                  type="button"
                  onClick={() => { setShowSecretInput(false); setSecretCode(''); }}
                  className="btn-secondary py-3"
                  style={{ padding: '12px 20px', fontSize: '14px', flex: 1 }}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowSecretInput(true)}
              className="btn-secondary"
              style={{ padding: '12px 20px', fontSize: '14px' }}
            >
              <span className="text-lg mr-2">🔓</span> Enter Secret Code
            </button>
          )}

          {secretMessage && (
            <div className={`mt-4 p-3 rounded-xl text-sm ${secretMessage.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
              {secretMessage.message}
            </div>
          )}

          {discoveredSecrets.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <h4 className="text-xs text-gray-500 mb-2">Discovered:</h4>
              <div className="flex flex-wrap gap-1">
                {discoveredSecrets.map((code, i) => (
                  <span key={i} className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Current Lesson Content (if selected) */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end" style={{ paddingBottom: '80px' }}>
          <div className="bg-[#12121a] w-full max-w-lg rounded-t-3xl p-6 overflow-y-auto" style={{ maxHeight: '85vh' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">
                {module.lessons.find(l => l.id === selectedLesson)?.title}
              </h3>
              <button
                onClick={() => setSelectedLesson(null)}
                className="text-gray-400 hover:text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="prose-mobile">
              <p>Select a lesson to view its content. Each lesson contains valuable information, exercises, and sometimes secret codes to discover.</p>
              <p>Complete lessons to unlock secrets and track your progress.</p>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => handleCompleteLesson(selectedLesson)}
                className="btn-primary"
                style={{ padding: '14px 20px', fontSize: '15px' }}
              >
                Mark Complete
              </button>
              <button
                onClick={() => setSelectedLesson(null)}
                className="btn-secondary"
                style={{ padding: '14px 20px', fontSize: '15px', flex: 1 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
