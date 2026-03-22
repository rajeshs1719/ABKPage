import React, { useState } from "react";
import {
  ChevronDown,
  Download,
  CheckCircle,
  Award,
  BookOpen,
  Clock,
  Users,
} from "lucide-react";

// --- MOCK DATA FOR JLPT LEVELS ---
const jlptLevels = [
{
    id: "n5",
    level: "N5", 
    tag: "BEGINNER",
    title: "Foundation",
    desc: "Start your Japanese journey with this integrated course for the JLPT & NAT N5 exam. It is structured to prepare students for certification by the Japan Foundation, which is a worldwide standard.",
    duration: "120 HOURS", 
    mode: "Offline & Online", 
    curriculum: [
      "Mastery of Hiragana, Katakana, and 110 Kanji",
      "25 lessons covering essential Grammar and Vocabulary",
      "Conversation practice through native Japanese audio and video",
      "Listening comprehension, reading, and 3 simulation mock tests",
    ],
    // Updated image: Desk with notebooks and study materials
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "n4",
    level: "N4", 
    tag: "ELEMENTARY",
    title: "Expansion",
    desc: "Build on your basics with intensive coaching and exhaustive revision for the N4 JLPT / NAT 4Q exams. Learn to comprehend more complex daily conversations and express your thoughts more clearly.",
    duration: "120 HOURS", 
    mode: "Offline & Online", 
    curriculum: [
      "200 new Kanji for N4, in addition to the 110 from the N5 level",
      "Expanded Grammar, Listening, and Reading comprehension",
      "Conversation practice through native Japanese enacted videos",
      "Pre-exam revision exercises and 3 sets of simulation mock tests",
    ],
    // Updated image: A bonsai tree representing growth and care
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "n3",
    level: "N3", 
    tag: "INTERMEDIATE",
    title: "Bridge",
    desc: "Transition from beginner to advanced. This integrated course covers intensive coaching for the JLPT & NAT 3Q exams with exhaustive revision to help you understand natural-speed conversations.",
    duration: "140 HOURS", 
    mode: "Offline & Online", 
    curriculum: [
      "300 new Kanji for N3, building upon N5 and N4 knowledge",
      "Advanced level grammar alongside listening and reading comprehension",
      "Advanced conversation practice through native Japanese enacted videos",
      "Comprehensive revision exercises and 3 sets of simulation mock tests",
    ],
    // Unsplash: A traditional Japanese bridge representing the transition to advanced
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "n2",
    level: "N2", 
    tag: "UPPER INTERMEDIATE",
    title: "Summit Climb",
    desc: "Achieve fluency. This integrated course provides intensive coaching for the N2 JLPT / NAT 2Q exams, covering advanced grammar and extensive materials to communicate fluently.",
    duration: "190 HOURS - 8 months", 
    mode: "Offline & Online", 
    curriculum: [
      "500 new Kanji for N2, in addition to N5, N4, and N3 levels ",
      "Mastery of advanced level grammar for N2 and N3 ",
      "High-level listening, reading comprehension, and conversational videos",
      "Pre-exam revision exercises and 3 simulation mock test sets",
    ],
    // Unsplash: Mount Fuji representing the summit of the learning journey
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&q=80&w=800",
  },
];

export default function JLPTPage() {
  const [expandedCurriculum, setExpandedCurriculum] = useState<string | null>(
    null,
  );

  const toggleCurriculum = (id: string) => {
    setExpandedCurriculum(expandedCurriculum === id ? null : id);
  };

  return (
    <div className="font-sans bg-[#FDFDF9] selection:bg-green-900 selection:text-white min-h-screen pb-20">
      {/* Global Styles specific to this page */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,600&family=Poppins:wght@300;400;500;600&display=swap');

        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }

        /* Custom Scrollbar for dropdowns if needed */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-20 pb-32 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <span className="text-[#A7202B] text-xs font-bold tracking-widest uppercase block">
              THE GOLD STANDARD
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#1a1a1a] leading-tight">
              JLPT & NAT <br />
              <span className="italic text-[#A7202B]">Courses</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Embark on a structured path to fluency. From absolute beginner to
              native-level mastery, our comprehensive programs guarantee
              success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#0A1A10] hover:bg-green-900 transition-colors rounded-lg font-semibold text-white shadow-lg">
                Explore Courses ↓
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors rounded-lg font-semibold text-[#1a1a1a] flex items-center justify-center gap-2">
                <Download size={18} /> Download Brochure
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000"
                alt="Japanese Garden"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            {/* <div
              className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <Award className="text-[#A7202B] w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1a1a1a]">100%</p>
                <p className="text-xs text-gray-500 font-medium">
                  Placement Support
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="relative w-full py-20 px-6 lg:px-20 bg-[#FDFDF9]">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Center Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gray-200 -translate-x-1/2"></div>

          {jlptLevels.map((level, idx) => {
            const isEven = idx % 2 !== 0; // Alternating layout
            const isOpen = expandedCurriculum === level.id;

            return (
              <div
                key={level.id}
                className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-32 mb-40 last:mb-0 ${isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Timeline Center Marker */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-gray-200 rounded-full items-center justify-center z-10 shadow-sm transition-transform hover:scale-110">
                  <div className="w-10 h-10 rounded-full border border-[#A7202B] flex items-center justify-center text-[#A7202B] font-bold text-sm bg-red-50/50">
                    {level.level}
                  </div>
                </div>

                {/* Text Content Half */}
                <div className="flex-1 w-full text-center lg:text-left z-10">
                  <span className="text-[#A7202B] text-xs font-bold tracking-widest uppercase mb-2 block">
                    {level.tag}
                  </span>

                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#1a1a1a] mb-4">
                    {level.level}: {titleSplit(level.title)[0]}
                    <span className="italic font-light">
                      {titleSplit(level.title)[1]}
                    </span>
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                    {level.desc}
                  </p>

                  {/* Info Chips */}
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                    <div className="bg-[#F5F5F0] px-5 py-3 rounded-xl border border-gray-100 flex-1 max-w-[180px]">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                        Duration
                      </p>
                      <p className="font-semibold text-[#1a1a1a] flex items-center gap-2">
                        <Clock size={16} className="text-[#A7202B]" />{" "}
                        {level.duration}
                      </p>
                    </div>
                    <div className="bg-[#F5F5F0] px-5 py-3 rounded-xl border border-gray-100 flex-1 max-w-[180px]">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                        Mode
                      </p>
                      <p className="font-semibold text-[#1a1a1a] flex items-center gap-2">
                        <Users size={16} className="text-[#A7202B]" />{" "}
                        {level.mode}
                      </p>
                    </div>
                  </div>

                  {/* Curriculum Accordion */}
                  <div className="border border-gray-200 rounded-xl bg-white mb-8 overflow-hidden max-w-lg mx-auto lg:mx-0 shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => toggleCurriculum(level.id)}
                      className="w-full flex justify-between items-center p-5 text-left font-semibold text-[#1a1a1a]"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen size={18} className="text-[#6A7162]" /> View
                        Curriculum
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <ul className="px-5 pb-5 space-y-3 border-t border-gray-100 pt-4">
                        {level.curriculum.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <CheckCircle
                              size={16}
                              className="text-green-600 mt-0.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center lg:justify-start gap-6">
                    <button className="bg-[#A7202B] hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md">
                      Enroll Now
                    </button>
                    <button className="text-[#A7202B] font-semibold flex items-center gap-2 hover:text-red-800 transition-colors">
                      Course Details <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>

                {/* Image Half */}
                <div className="flex-1 w-full flex justify-center items-center relative z-0">
                  {/* Decorative offset circle */}
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#EBEBE6] translate-x-4 translate-y-4"></div>

                  {/* Main Image */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl group">
                    <img
                      src={level.img}
                      alt={level.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- WHY STUDY SECTION (FOOTER BANNER) --- */}
      <section className="bg-[#0A1A10] py-24 px-6 lg:px-20 mt-20 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Why Study with ABK AOTS?
            </h2>
            <p className="text-green-100/70 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their
              language goals with our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#122b18] p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
              <Award className="w-8 h-8 text-[#F4D35E] mb-6" />
              <h3 className="text-xl font-bold mb-3">Certified Instructors</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Learn from native speakers and certified professionals with
                years of experience in JLPT preparation.
              </p>
            </div>

            <div className="bg-[#122b18] p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-[#F4D35E] mb-6" />
              <h3 className="text-xl font-bold mb-3">Comprehensive Material</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Access our exclusive library of mock tests, vocabulary sheets,
                and interactive grammar guides.
              </p>
            </div>

            <div className="bg-[#122b18] p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
              <CheckCircle className="w-8 h-8 text-[#F4D35E] mb-6" />
              <h3 className="text-xl font-bold mb-3">100% Placement Support</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We don't just teach you the language; we help you secure your
                dream job in Japan post-certification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper to slightly format the titles nicely
function titleSplit(title: string) {
  // e.g. "Foundation" -> ["Found", "ation"] (just purely for stylistic highlight effect, or we can just leave it)
  // Let's just return the whole word as index 0 for simplicity if no split is needed.
  return [title, ""];
}
