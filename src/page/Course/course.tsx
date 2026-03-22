import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  Plane,
  Briefcase,
  Clock,
  MonitorSmartphone,
  GraduationCap,
  Headphones,
  Plus,
  Minus,
  Play,
  User,
  Gamepad2,
  Film,
  CheckCircle,
  Award,
  ClipboardCheck,
  MessageCircle,
  Mic,
  Factory,
  Puzzle,
  Palette,
  TrendingUp,
  Globe,
} from "lucide-react";

import MasterImg from '../../assets/mastering.png'

// --- MOCK JSON DATA ---
// You can eventually move this to a separate file (e.g., data/courses.js) and import it
const coursesData = [
  {
    id: "genba-no-nihongo",
    index: 1,
    title: "Genba no Nihongo",
    titleHighlight: "Nihongo",
    description:
      "Workplace Japanese training focused on real job-site communication, industry vocabulary, and practical situations faced by foreign workers in Japan.",
    kanji: "現場",
    floatingCards: [
      {
        jp: "おはようございます",
        romaji: "GOOD MORNING",
        color: "bg-[#1C3022]",
      },
      { jp: "報告します", romaji: "I REPORT", color: "bg-[#1C3022]" },
      {
        jp: "問題があります",
        romaji: "THERE IS A PROBLEM",
        color: "bg-[#A7202B]",
      },
    ],
    aboutTitle: "What is Genba no Nihongo?",
    aboutDesc:
      "Genba no Nihongo is a practical Japanese training program designed for foreign workers to communicate effectively at actual job sites in Japan. It focuses on real workplace conversations, task-based learning, and understanding Japanese work culture.",
    aboutCards: [
      {
        title: "Real Workplace Language",
        desc: "Learn the exact Japanese used in factories, construction sites, IT environments, and technical training workplaces.",
        icon: Briefcase,
      },
      {
        title: "Task-Based Learning",
        desc: "Training is built around real scenarios like reporting issues, following instructions, and communicating with supervisors.",
        icon: ClipboardCheck,
      },
    ],
    specifics: [
      { label: "DURATION", value: "25 Hours", icon: Clock },
      {
        label: "MODE",
        value: "Practical / Scenario-Based",
        icon: MonitorSmartphone,
      },
      {
        label: "ELIGIBILITY",
        value: "JLPT/NAT N5 or N4",
        icon: GraduationCap,
      },
      { label: "FOCUS", value: "Workplace Communication", icon: Headphones },
    ],
    mastery: [
      {
        title: "01. Workplace Conversations",
        content:
          "Understand and practice real conversations used between workers and supervisors, including instructions, reporting, and safety communication.",
      },
      {
        title: "02. Industry Vocabulary",
        content:
          "Learn essential terminology used across sectors like manufacturing, construction, and technical training environments.",
      },
      {
        title: "03. Situational Communication",
        content:
          "Handle real scenarios such as asking questions, reporting problems, understanding signs, and following workplace procedures.",
      },
      {
        title: "04. Work Culture & Behavior",
        content:
          "Develop awareness of Japanese workplace etiquette, hierarchy, discipline, and expected professional behavior.",
      },
    ],
    masteryImage: MasterImg,
    activities: {
      workplace:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: "kaiwa-course",
    index: 2,
    title: "Kaiwa",
    titleHighlight: "Conversation",
    description:
      "Japanese conversation course focused on speaking, listening, and real-life communication. Designed to build fluency, confidence, and natural expression in everyday situations.",
    kanji: "会話",
    floatingCards: [
      { jp: "元気ですか？", romaji: "HOW ARE YOU?", color: "bg-[#1C3022]" },
      {
        jp: "もう一度お願いします",
        romaji: "PLEASE SAY IT AGAIN",
        color: "bg-[#1C3022]",
      },
      {
        jp: "わかりました",
        romaji: "I UNDERSTAND",
        color: "bg-[#A7202B]",
      },
    ],
    aboutTitle: "What is Kaiwa?",
    aboutDesc:
      "Kaiwa (会話) means 'conversation' in Japanese and focuses on the ability to speak and understand the language in real-life situations. Unlike grammar-based study, Kaiwa emphasizes practical communication, fluency, and confidence.",
    aboutCards: [
      {
        title: "Real-Life Communication",
        desc: "Learn to speak Japanese naturally in everyday situations like introductions, shopping, travel, and social interactions.",
        icon: MessageCircle,
      },
      {
        title: "Confidence Building",
        desc: "Regular speaking practice helps overcome hesitation and improves pronunciation, listening, and response speed.",
        icon: Mic,
      },
    ],
    specifics: [
      { label: "DURATION", value: "40–50 Hours (Level Based)", icon: Clock },
      {
        label: "MODE",
        value: "Interactive / Speaking-Focused",
        icon: MonitorSmartphone,
      },
      {
        label: "LEVELS",
        value: "Basic / Intermediate / Advanced",
        icon: GraduationCap,
      },
      { label: "FOCUS", value: "Fluency & Communication", icon: Headphones },
    ],
    mastery: [
      {
        title: "01. Everyday Conversations",
        content:
          "Practice common real-life situations such as greetings, introductions, asking questions, shopping, and traveling.",
      },
      {
        title: "02. Listening & Response",
        content:
          "Improve the ability to understand spoken Japanese and respond naturally in conversations with correct timing and tone.",
      },
      {
        title: "03. Pronunciation & Fluency",
        content:
          "Develop clear pronunciation, natural rhythm, and sentence flow through repeated speaking and guided correction.",
      },
      {
        title: "04. Role-Play & Interaction",
        content:
          "Engage in role-plays and group activities that simulate real-world scenarios to build confidence and spontaneity.",
      },
    ],
    masteryImage: MasterImg,
    activities: {
      conversation:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: "ssw",
    index: 3,
    title: "SSW",
    titleHighlight: "Specified Skilled Worker",
    description:
      "Comprehensive training program designed to prepare candidates for the Specified Skilled Worker (SSW) visa, focusing on Japanese language proficiency, practical communication, and industry-specific skills.",
    kanji: "特定",
    floatingCards: [
      { jp: "働きます", romaji: "I WORK", color: "bg-[#1C3022]" },
      { jp: "大丈夫です", romaji: "IT IS OK", color: "bg-[#1C3022]" },
      {
        jp: "指示を守ります",
        romaji: "I FOLLOW INSTRUCTIONS",
        color: "bg-[#A7202B]",
      },
    ],
    aboutTitle: "What is SSW?",
    aboutDesc:
      "Specified Skilled Worker (SSW) is a Japanese work visa program introduced to address labor shortages by allowing foreign nationals with practical skills and basic Japanese ability to work in specific industries.",
    aboutCards: [
      {
        title: "Work Visa Opportunity",
        desc: "SSW Type 1 allows candidates to work in Japan for up to 5 years with equal pay and legal employment benefits.",
        icon: Plane,
      },
      {
        title: "High-Demand Sectors",
        desc: "Access to multiple industries like manufacturing, construction, food service, and caregiving where Japan faces labor shortages.",
        icon: Factory,
      },
    ],
    specifics: [
      {
        label: "DURATION",
        value: "Depends on Level (Language + Skill Prep)",
        icon: Clock,
      },
      {
        label: "MODE",
        value: "Exam-Oriented Training",
        icon: MonitorSmartphone,
      },
      {
        label: "ELIGIBILITY",
        value: "JLPT N4 / JFT-Basic (A2 Level)",
        icon: GraduationCap,
      },
      { label: "GOAL", value: "SSW Visa + Job Placement", icon: Headphones },
    ],
    mastery: [
      {
        title: "01. Japanese Language Preparation",
        content:
          "Train to achieve JLPT N4 or JFT-Basic level, focusing on practical Japanese used in daily life and workplaces.",
      },
      {
        title: "02. Skills Exam Preparation",
        content:
          "Prepare for industry-specific skill tests required for sectors such as manufacturing, food service, construction, and caregiving.",
      },
      {
        title: "03. Everyday Life in Japan",
        content:
          "Learn communication required for daily living in Japan including housing, transport, workplace interaction, and social behavior.",
      },
      {
        title: "04. Work Readiness & Integration",
        content:
          "Understand Japanese work culture, discipline, and expectations to adapt quickly to real job environments.",
      },
    ],
    masteryImage: MasterImg,
    activities: {
      training:
        "https://images.unsplash.com/photo-1581091012184-5c2c0c5d5f64?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: "summercamp",
    index: 4,
    title: "Kids Summer Camp",
    titleHighlight: "Camp",
    description:
      "A fun, activity-based Japanese learning program designed for children to explore language, culture, and creativity through games, crafts, and interactive sessions.",
    kanji: "子供",
    floatingCards: [
      { jp: "こんにちは", romaji: "HELLO", color: "bg-[#1C3022]" },
      {
        jp: "いっしょにやろう",
        romaji: "LET’S DO IT TOGETHER",
        color: "bg-[#1C3022]",
      },
      {
        jp: "たのしい！",
        romaji: "FUN!",
        color: "bg-[#A7202B]",
      },
    ],
    aboutTitle: "What is Kids Summer Camp?",
    aboutDesc:
      "A short-term immersive Japanese learning program designed for children during vacation. It combines basic language learning with fun cultural activities to create a natural and engaging learning environment.",
    aboutCards: [
      {
        title: "Learning Through Play",
        desc: "Children learn Japanese naturally through games, songs, stories, and hands-on activities instead of traditional classroom methods.",
        icon: Puzzle,
      },
      {
        title: "Cultural Exploration",
        desc: "Exposure to Japanese culture through origami, anime, crafts, and interactive experiences keeps children engaged and curious.",
        icon: Palette,
      },
    ],
    specifics: [
      { label: "DURATION", value: "7 Days (3 Hours/Day)", icon: Clock },
      {
        label: "MODE",
        value: "Activity-Based Learning",
        icon: MonitorSmartphone,
      },
      {
        label: "AGE GROUP",
        value: "Kids (5–13 Years)",
        icon: GraduationCap,
      },
      { label: "FOCUS", value: "Fun + Basic Japanese", icon: Headphones },
    ],
    mastery: [
      {
        title: "01. Basic Japanese Skills",
        content:
          "Learn simple greetings, numbers, days, and basic vocabulary through songs, repetition, and interactive activities.",
      },
      {
        title: "02. Creative Activities",
        content:
          "Engage in hands-on learning with origami, drawing, crafts, and simple Japanese-themed creative projects.",
      },
      {
        title: "03. Interactive Learning",
        content:
          "Participate in games, storytelling, anime sessions, and group activities that encourage natural language usage.",
      },
      {
        title: "04. Confidence & Social Skills",
        content:
          "Build confidence in speaking and interacting with others through fun group participation and guided communication.",
      },
    ],
    masteryImage: MasterImg,

    activities: {
      kids: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: "exam-day-confidence",
    index: 5,
    title: "Exam Day",
    titleHighlight: "Confidence",
    description:
      "Intensive revision and test-readiness program designed to improve performance, accuracy, and confidence before the JLPT examination through mock tests and exam-focused strategies.",
    kanji: "試験",
    floatingCards: [
      { jp: "大丈夫", romaji: "IT’S OK", color: "bg-[#1C3022]" },
      { jp: "落ち着いて", romaji: "STAY CALM", color: "bg-[#1C3022]" },
      {
        jp: "時間に注意",
        romaji: "WATCH THE TIME",
        color: "bg-[#A7202B]",
      },
    ],
    aboutTitle: "What is Exam Day Confidence?",
    aboutDesc:
      "A focused preparation program conducted before the JLPT exam to strengthen accuracy, time management, and mental readiness through revision and full-length mock tests based on actual exam patterns.",
    aboutCards: [
      {
        title: "Real Exam Simulation",
        desc: "Practice with full-length mock tests under timed conditions to experience actual JLPT exam pressure and format.",
        icon: ClipboardCheck,
      },
      {
        title: "Performance Optimization",
        desc: "Identify weak areas, improve speed, and apply exam strategies to maximize scores without learning new content.",
        icon: TrendingUp,
      },
    ],
    specifics: [
      {
        label: "DURATION",
        value: "Short-Term (Pre-Exam Intensive)",
        icon: Clock,
      },
      { label: "MODE", value: "Mock Test + Revision", icon: MonitorSmartphone },
      {
        label: "ELIGIBILITY",
        value: "JLPT N5–N2 Students",
        icon: GraduationCap,
      },
      { label: "FOCUS", value: "Accuracy + Time Management", icon: Headphones },
    ],
    mastery: [
      {
        title: "01. Full-Length Mock Tests",
        content:
          "Attempt multiple mock exams designed to replicate actual JLPT format, helping build stamina and familiarity with question patterns.",
      },
      {
        title: "02. Time Management Strategy",
        content:
          "Learn how to allocate time across sections and avoid getting stuck on difficult questions during the exam.",
      },
      {
        title: "03. Error Analysis & Revision",
        content:
          "Analyze mistakes from mock tests to identify weak areas and reinforce key grammar, vocabulary, and reading skills.",
      },
      {
        title: "04. Exam Strategy & Mindset",
        content:
          "Develop practical strategies like answering patterns, guessing techniques, and maintaining focus under pressure.",
      },
    ],
    masteryImage: MasterImg,
    activities: {
      exam: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: "corporate-training",
    index: 6,
    title: "Corporate",
    titleHighlight: "Training",
    description:
      "Customized Japanese language and communication training designed for companies to improve workplace communication, productivity, and cross-cultural collaboration.",
    kanji: "企業",
    floatingCards: [
      {
        jp: "よろしくお願いいたします",
        romaji: "FORMAL GREETING",
        color: "bg-[#1C3022]",
      },
      {
        jp: "会議を始めます",
        romaji: "START THE MEETING",
        color: "bg-[#1C3022]",
      },
      {
        jp: "報告・連絡・相談",
        romaji: "REPORT • INFORM • CONSULT",
        color: "bg-[#A7202B]",
      },
    ],
    aboutTitle: "What is Corporate Training?",
    aboutDesc:
      "Corporate training is a customized language program designed for organizations to improve employee communication, business etiquette, and workplace efficiency when working with Japanese clients, teams, or operations.",
    aboutCards: [
      {
        title: "Business Communication",
        desc: "Focus on meetings, emails, presentations, and professional Japanese including polite and formal expressions used in corporate environments.",
        icon: Briefcase,
      },
      {
        title: "Cross-Cultural Understanding",
        desc: "Train employees to understand Japanese work culture, hierarchy, and communication style to avoid misunderstandings and improve collaboration.",
        icon: Globe,
      },
    ],
    specifics: [
      {
        label: "DURATION",
        value: "Custom (Based on Company Needs)",
        icon: Clock,
      },
      {
        label: "MODE",
        value: "Online / Onsite / Hybrid",
        icon: MonitorSmartphone,
      },
      {
        label: "ELIGIBILITY",
        value: "Working Professionals / Teams",
        icon: GraduationCap,
      },
      { label: "FOCUS", value: "Business Communication", icon: Headphones },
    ],
    mastery: [
      {
        title: "01. Business Japanese",
        content:
          "Learn formal Japanese (Keigo), email writing, meeting communication, and professional expressions used in corporate settings.",
      },
      {
        title: "02. Workplace Scenarios",
        content:
          "Practice real situations like client interactions, presentations, negotiations, and internal communication.",
      },
      {
        title: "03. Industry-Specific Training",
        content:
          "Customized vocabulary and communication training tailored to specific industries such as IT, manufacturing, or services.",
      },
      {
        title: "04. Cross-Cultural Communication",
        content:
          "Understand Japanese business etiquette, hierarchy, and communication styles to work effectively in multicultural teams.",
      },
    ],
    masteryImage: MasterImg,
    activities: {
      corporate:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
  },
];

// --- MAIN COURSE COMPONENT ---
export default function Course() {
  const { id } = useParams<{ id: string }>();

  // Find the course based on the URL parameter
  const courseData = coursesData.find((c) => c.id === id);

  // If the user navigates to a non-existent course ID, redirect them
  if (!courseData) {
    return <Navigate to="/course/genban-nihongo" replace />;
  }

  return (
    <div className="font-sans selection:bg-green-900 selection:text-white">
      <CustomStyles />
      <HeroSection course={courseData} />
      <AboutSection course={courseData} />
      <CourseSpecifics course={courseData} />
      <MasterySection course={courseData} />

      {/* Show ActivitiesSection ONLY for the Summer Camp course */}
      {courseData.id === "summercamp" && (
        <ActivitiesSection course={courseData} />
      )}

      <CTASection />
      <SuccessStories />
      <WhyChooseSection />
    </div>
  );
}

// --- GLOBAL STYLES & ANIMATIONS FOR THIS PAGE ---
const CustomStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Poppins:wght@300;400;500;600&display=swap');

    .font-serif { font-family: 'Playfair Display', serif; }
    .font-sans { font-family: 'Poppins', sans-serif; }

    /* Orbiting Animation Setup */
    .orbit-system {
      position: relative;
      width: 350px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .orbit-center-glow {
      box-shadow: 0 0 40px 10px rgba(229, 192, 123, 0.15), inset 0 0 20px rgba(229, 192, 123, 0.1);
      animation: pulse-glow 3s infinite alternate;
    }

    @keyframes pulse-glow {
      0% { box-shadow: 0 0 30px 5px rgba(229, 192, 123, 0.15), inset 0 0 20px rgba(229, 192, 123, 0.1); }
      100% { box-shadow: 0 0 50px 15px rgba(229, 192, 123, 0.3), inset 0 0 30px rgba(229, 192, 123, 0.2); }
    }

    .orbit-container {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      animation: spin 20s linear infinite;
    }

    .orbit-card-wrapper {
      position: absolute;
      top: -35px; /* Adjust based on card height */
      left: -90px; /* Adjust based on card width */
      transform-origin: center;
      animation: anti-spin 20s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg) translateX(180px); }
      to { transform: rotate(360deg) translateX(180px); }
    }

    @keyframes anti-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }

    /* Metallic Glossy Gradient for About Section */
    .glossy-gradient {
      background: linear-gradient(135deg, #d4af37 0%, #fff2cd 30%, #d4af37 60%, #e6c25d 100%);
      background-size: 200% 200%;
      animation: shimmer 8s ease infinite;
    }

    @keyframes shimmer {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Red underline decoration */
    .red-underline {
      position: relative;
    }
    .red-underline::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: #A7202B;
    }
  `}</style>
);

// --- SECTIONS ---

const HeroSection = ({ course }: any) => {
  // Odd index = left aligned text, right aligned animation
  const isLeftAligned = course.index % 2 !== 0;

  return (
    <section className="bg-[#0A1A10] text-white min-h-[85vh] flex items-center relative overflow-hidden py-20 px-6 lg:px-20">
      <div className="absolute top-20 right-1/4 w-2 h-2 rounded-full bg-red-500"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 rounded-full border border-yellow-500"></div>

      <div
        className={`max-w-7xl mx-auto w-full flex flex-col ${isLeftAligned ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-between gap-16`}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
            {course.title.replace(course.titleHighlight, "")}
            <span className="text-[#F4D35E] italic block">
              {course.titleHighlight}
            </span>
          </h1>

          <p className="text-green-100/70 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#A7202B] hover:bg-red-700 transition-colors rounded-full font-semibold text-white">
              Start Learning
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-green-700 hover:border-green-500 hover:bg-green-900/30 transition-colors rounded-full font-semibold text-white flex items-center justify-center gap-2">
              View Curriculum <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Animation Content */}
        <div className="flex-1 flex justify-center items-center py-10 lg:py-0 scale-75 md:scale-100 relative">
          {/* Ambient background glow behind the entire orbit system */}
          <div className="absolute inset-0 bg-green-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="orbit-system relative">
            {/* Decorative planetary outer rings */}
            <div className="absolute inset-0 rounded-full border border-[#F4D35E]/10 scale-[1.3] animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute inset-0 rounded-full border border-[#F4D35E]/5 scale-[1.6] animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>

            {/* Enhanced Center Kanji Circle */}
            <div className="orbit-center-glow relative w-48 h-48 rounded-full bg-gradient-to-br from-[#15311d] to-[#0A1A10] flex items-center justify-center z-10 shadow-[0_0_50px_rgba(244,211,94,0.15)] border border-[#F4D35E]/30 before:absolute before:inset-0 before:rounded-full before:bg-[#F4D35E]/5 before:backdrop-blur-md">
              <span className="text-7xl font-serif relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-[#F4D35E] to-[#d4af37] drop-shadow-[0_0_15px_rgba(244,211,94,0.6)]">
                {course.kanji}
              </span>
            </div>

            {/* Enhanced Floating Cards with Glassmorphism and Hover Effects */}
            {course.floatingCards.map((card: any, idx: number) => {
              const delay = `-${idx * (20 / course.floatingCards.length)}s`;
              return (
                <div
                  key={idx}
                  className="orbit-container"
                  style={{ animationDelay: delay }}
                >
                  <div
                    className="orbit-card-wrapper"
                    style={{ animationDelay: delay }}
                  >
                    <div
                      className={`${card.color} relative overflow-hidden group border border-white/20 rounded-2xl px-6 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl w-max transition-transform duration-300 hover:scale-110 cursor-default`}
                    >
                      {/* Subtle glassy reflection overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Decorative left border accent line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/30 rounded-l-2xl"></div>

                      <div className="text-white font-medium text-lg relative z-10 drop-shadow-md pl-1">
                        {card.jp}
                      </div>
                      <div className="text-white/80 text-xs tracking-wider mt-1.5 relative z-10 font-semibold pl-1">
                        {card.romaji}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ course }: any) => {
  return (
    <section className="glossy-gradient py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] red-underline pb-4 inline-block">
            {course.aboutTitle}
          </h2>
          <p className="text-gray-800/80 text-lg leading-relaxed max-w-lg mt-8 font-medium">
            {course.aboutDesc}
          </p>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-6 w-full">
          {course.aboutCards.map((card: any, idx: number) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#FCFCFA] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)] flex-1 border border-white hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="w-8 h-8 text-[#6B5A24] mb-6" />
                <h3 className="text-xl font-bold font-serif text-[#1a1a1a] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CourseSpecifics = ({ course }: any) => {
  return (
    <section className="bg-[#FDFDF9] py-20 px-6 lg:px-20 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1a1a1a]">
            Course Specifics
          </h2>
          <p className="text-gray-500">
            Everything you need to know about your training
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {course.specifics.map((spec: any, idx: number) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F5F0] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Icon className="w-6 h-6 text-[#2F4B36] mb-8" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    {spec.label}
                  </p>
                  <p className="text-lg font-bold font-serif text-[#1a1a1a]">
                    {spec.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MasterySection = ({ course }: any) => {
  const [openIndex, setOpenIndex] = useState(0);
  const isLeftAligned = course.index % 2 !== 0;

  return (
    <section className="bg-[#0A1A10] text-white py-24 px-6 lg:px-20">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${isLeftAligned ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center`}
      >
        <div className="flex-1 w-full">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-12">
            What You'll Master
          </h2>

          <div className="space-y-4">
            {course.mastery.map((item: any, idx: number) => (
              <div key={idx} className="border-b border-green-800/50 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-xl font-serif font-medium transition-colors ${openIndex === idx ? "text-[#F4D35E]" : "text-white group-hover:text-gray-300"}`}
                  >
                    {item.title}
                  </span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-[#F4D35E]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-green-100/70 pb-4 pl-8 border-l-2 border-[#F4D35E] ml-2 mt-2">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-green-900/20 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
          <img
            src={course.masteryImage}
            alt="Students studying"
            className="rounded-[2rem] w-full h-[400px] lg:h-[500px] object-cover relative z-10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

const ActivitiesSection = ({ course }: any) => {
  return (
    <section className="bg-[#FDFDF9] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[#A7202B] font-bold text-xs tracking-widest uppercase mb-2">
              What we do
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a]">
              Festival of Activities
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm md:text-right">
            Every day is a celebration of Japan's rich artistic and linguistic
            heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
          <div className="lg:col-span-1 bg-[#6A7162] rounded-3xl p-8 text-white flex flex-col justify-end relative overflow-hidden min-h-[350px] group">
            <img
              src={course.activities.origami}
              alt="Origami Art"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A5142]/90 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold italic mb-3">
                The Art of Origami
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Master the precision of paper folding, creating everything from
                cranes to complex dragons.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 h-full lg:h-1/2">
              <div className="flex-1 bg-[#FF5A60] rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <User className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-1">Basic Japanese</h3>
                <p className="text-white/80 text-sm">
                  Fun greetings & numbers.
                </p>
              </div>
              <div className="flex-1 bg-[#FDE28A] rounded-3xl p-8 text-[#1a1a1a] flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <Gamepad2 className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-1">Traditional Games</h3>
                <p className="text-[#1a1a1a]/70 text-sm">
                  Kendama and Fukuwarai fun.
                </p>
              </div>
            </div>

            <div className="bg-[#E6F4EA] rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 h-full lg:h-1/2 hover:-translate-y-1 transition-transform">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                <Film className="w-8 h-8 text-[#2F4B36]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  Anime Storytelling
                </h3>
                <p className="text-gray-600 text-sm max-w-md">
                  Create your own characters and voice-over scenes from popular
                  shows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="bg-[#B91C1C] py-12 px-6 lg:px-20 border-b-8 border-[#8B1515]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <h2 className="text-3xl font-serif font-bold text-white">
        Start Your Journey to Japan Today
      </h2>
      <button className="bg-white text-[#B91C1C] px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
        Get Started Now
      </button>
    </div>
  </section>
);

const SuccessStories = () => {
  const stories = [
    {
      name: "Rahul S.",
      role: "NURSING CARE | KYOTO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The SSW prep at Izumi was transformative. Not only did I pass the exams, but the culture training helped me settle in Kyoto smoothly.",
    },
    {
      name: "Anjali K.",
      role: "HOSPITALITY | OSAKA",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "The interactive speaking sessions were my favorite. I felt prepared for my interview and secured a job within a month of completion.",
    },
    {
      name: "Vikram M.",
      role: "CONSTRUCTION | TOKYO",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      quote:
        "100% placement support isn't just a claim. Izumi guided me through the entire visa process and connected me with great employers.",
    },
  ];

  return (
    <section className="bg-[#FDFDF9] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-2">
            Success Stories
          </h2>
          <p className="text-gray-500 italic">
            Join our community of successful SSW professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-[#F5F5F0] rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">{story.name}</h4>
                  <p className="text-[#A7202B] text-xs font-bold tracking-wider">
                    {story.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed font-serif">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const points = [
    {
      title: "Government Recognized",
      desc: "We are an official partner for Japan-India skill development initiatives.",
      icon: Award,
    },
    {
      title: "Native Japanese Faculty",
      desc: "Learn from the best. Our faculty includes native Japanese instructors.",
      icon: User,
    },
    {
      title: "Placement Focus",
      desc: "Active partnerships with Japanese recruitment agencies and employers.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="bg-[#EBEBE6] py-20 px-6 lg:px-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-12">
          Why Choose ABK AOTS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div key={i} className="flex gap-4">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm h-max">
                  <Icon className="w-6 h-6 text-[#B91C1C]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] text-lg mb-2">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
