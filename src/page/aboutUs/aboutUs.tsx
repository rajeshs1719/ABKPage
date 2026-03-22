import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// --- YOUR ORIGINAL IMPORTS (Replace with your actual paths if needed) ---
import abbg from "../../assets/aboutUs/aubg.png";
import AboutUsWho from "../../assets/aboutUs/abwwa.png";
import AboutClass from "../../assets/aboutUs/abclass.png";
import uma from "../../assets/faculty/umaFrame.png";
import ravi from "../../assets/faculty/RaviFrame.png";
import shivani from "../../assets/faculty/Shivani.png";

// --- JSON DATA FOR DIRECTORS & TEACHERS ---
const directorsData = [
  {
    id: 1,
    chapter: "BANGALORE CHAPTER",
    name: "Ms. Uma Ramasubramanian",
    role: "Director & Senior Faculty",
    quote:
      "Language is the bridge between civilizations. Our mission is to make that bridge a work of art through disciplined study.",
    image:
      uma,
    videoThumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: 2,
    chapter: "COIMBATORE CHAPTER",
    name: "Mr. Ravi K",
    role: "Director & Senior Faculty",
    quote:
      "We don't just teach Japanese; we instill the cultural nuance of Omotenashi and Kaizen in every student's journey.",
    image:
      ravi,
    videoThumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/",
  },
];

const teachersData = [
  {
    id: 1,
    name: "Ms. Divya",
    specialty: "JLPT N3 Specialist",
    tags: ["GRAMMAR", "KANJI"],
    experience: "8+ years of expertise",
    image:
      shivani,
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: 2,
    name: "Ms. Lekha",
    specialty: "Speaking & Phonics",
    tags: ["SPEAKING", "DIALECT"],
    experience: "5+ years of expertise",
    image:
      shivani,
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "Ms. Savitha",
    specialty: "Exam Prep Lead",
    tags: ["JLPT N1/N2", "EXAM PREP"],
    experience: "12+ years of expertise",
    image:
      shivani,
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: 4,
    name: "Ms. Shivani Baranwal",
    specialty: "Cultural Liaison",
    tags: ["TEA CEREMONY", "ARTS"],
    experience: "6+ years of expertise",
    image:
      shivani,
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: 5,
    name: "Ms. Sharanya.S",
    specialty: "Beginner Fundamentals",
    tags: ["HIRAGANA", "KATAKANA"],
    experience: "4+ years of expertise",
    image:
      shivani,
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    id: 6,
    name: "Ms. Dimple Dalvi",
    specialty: "Business Japanese",
    tags: ["CORPORATE", "ETIQUETTE"],
    experience: "10+ years of expertise",
    image:
      shivani,
    linkedinUrl: "https://www.linkedin.com/",
  },
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- NUMBER COUNTER COMPONENT ---
const Counter = ({ value, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (decimals > 0) {
        setDisplayValue(latest.toFixed(decimals) + suffix);
      } else {
        setDisplayValue(Math.floor(latest) + suffix);
      }
    });
  }, [springValue, suffix, decimals]);

  return <span ref={ref}>{displayValue}</span>;
};

// --- ICONS ---
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#fdfaf5" />
    <path d="M15 12L10 15V9L15 12Z" fill="#c62828" />
  </svg>
);

const AboutUs = () => {
  return (
    <div className="w-full bg-white overflow-hidden text-gray-800">
      {/* HERO IMAGE */}
      <motion.section
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={abbg}
          alt="ABK Group"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-[50vh] object-cover"
        />
      </motion.section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-[48px] font-semibold mb-4">Who we are?</h2>
          <p className="text-gray-600 max-w-3xl text-[24px] mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
            massa blandit, faucibus quam sed, feugiat massa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={AboutUsWho}
              alt="About ABK"
              className="w-full h-[50vh] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-[#6f8f3c] text-white rounded-2xl p-8 flex-1 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-base leading-relaxed">
                To promote Japanese language and culture through structured,
                accessible, and high-quality education while empowering learners
                with real-world skills.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-200 text-gray-800 rounded-2xl p-8 flex-1 shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-base leading-relaxed">
                To become a globally recognized institution fostering cultural
                exchange, professional growth, and lifelong learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT DO WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[48px] font-semibold mb-10 text-left"
        >
          What Do We Do?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "We provide structured Japanese language education designed for students, working professionals, and aspirants planning to study or work in Japan.",
              "Our programs focus on practical communication, JLPT preparation, and cultural understanding through interactive classroom sessions.",
              "Alongside language training, we guide learners with career pathways, cultural orientation, and real-world exposure to Japanese work ethics.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-lg text-gray-700 text-[22px] leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={AboutClass}
              alt="Classroom"
              className="rounded-xl object-cover w-full h-[30vh] shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[45px] font-semibold mb-10"
          >
            Our Impact Numbers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-8 px-6 py-8 md:border-r border-black/10"
            >
              <span className="text-[48px] font-bold whitespace-nowrap text-[#6f8f3c]">
                <Counter value={40} suffix="k+" />
              </span>
              <div className="text-[32px] font-semibold leading-tight text-left">
                <div>Learners Worldwide</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-8 px-6 py-8 md:border-r border-black/10"
            >
              <span className="text-[48px] font-bold whitespace-nowrap text-[#6f8f3c]">
                <Counter value={100} suffix="k+" />
              </span>
              <div className="text-[32px] font-semibold leading-tight text-left">
                <div>Aspirants Trained</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-8 px-6 py-8"
            >
              <span className="text-[48px] font-bold whitespace-nowrap text-[#6f8f3c]">
                <Counter value={4.8} suffix="/5" decimals={1} />
              </span>
              <div className="text-[32px] font-semibold leading-tight text-left">
                <div>Overall Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW DIRECTORS SECTION */}

      <section className="py-16 text-center bg-[#fdfaf5]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] font-semibold mb-8">Our Teachers</h2>
          <section className="bg-[#fdfaf5] py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative">
              {/* Vertical Divider (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300">
                {/* Center dot on line */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8e733f]"></div>

                <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8e733f]"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-16 md:gap-0">
                {directorsData.map((director, index) => (
                  <motion.div
                    key={director.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex-1 flex flex-col items-center text-center px-4"
                  >
                    {/* Director Avatar */}
                    <div className="relative mb-8">
                      {/* Outer Gold ring */}
                      <div className="w-64 h-64 rounded-full p-2 relative z-10">
                        <img
                          src={director.image}
                          alt={director.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative faint background accents */}
                      {/* <div className="absolute inset-0 bg-red-100 rotate-12 rounded-full blur-xl opacity-30 -z-10 scale-110"></div> */}

                      {/* Faux decorative floating items from design */}
                      {/* <div className="absolute -top-4 -right-4 text-red-700 bg-white rounded-full p-1 shadow-md z-20">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >

                        </svg>
                      </div> */}
                    </div>

                    {/* Text Content */}
                    <h4 className="text-[#c62828] text-sm tracking-[0.2em] font-bold uppercase mb-2">
                      {director.chapter}
                    </h4>
                    <h3 className="text-4xl font-serif font-bold text-[#1a3628] mb-2">
                      {director.name}
                    </h3>
                    <p className="text-[#8e733f] font-medium mb-6">
                      {director.role}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-sm mb-10 italic">
                      "{director.quote}"
                    </p>

                    {/* Video/Image Box Placeholder */}
                    {/* <div className="w-full max-w-sm h-56 rounded-xl overflow-hidden relative shadow-lg group cursor-pointer mb-8">
                      <img
                        src={director.videoThumbnail}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="transform group-hover:scale-110 transition-transform">
                          <PlayIcon />
                        </div>
                      </div>
                    </div> */}

                    {/* Profile Link */}
                    <a
                      href={director.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 text-[#1a3628] font-bold text-sm tracking-widest hover:text-[#c62828] transition-colors"
                    >
                      <LinkedInIcon />
                      VIEW PROFILE
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* NEW SENSEI SECTION */}
          <section className="bg-[#fdfaf5] py-2">
            <div className="max-w-6xl mx-auto px-6">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-[48px] font-serif font-bold text-[#1a3628]">
                  Meet Our Trainers
                </h2>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="w-12 h-[1px] bg-[#c62828]"></span>
                  <div className="w-2 h-2 rotate-45 bg-[#8e733f]"></div>
                  <span className="w-12 h-[1px] bg-[#c62828]"></span>
                </div>
              </motion.div>

              {/* Sensei Grid (3 cols x 2 rows = 6 teachers) */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
              >
                {teachersData.map((teacher) => (
                  <motion.div
                    key={teacher.id}
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Sensei Avatar */}
                    <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-b from-gray-200 to-gray-50 shadow-inner mb-6 relative overflow-hidden">
                      <div className="w-full h-full rounded-full bg-[#cbd5e1] overflow-hidden">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover "
                        />
                      </div>
                    </div>

                    {/* Name & Specialty */}
                    <h3 className="text-2xl font-serif font-bold text-[#1a3628] mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-[#c62828] font-medium mb-4">
                      {teacher.specialty}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {teacher.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-bold text-gray-500 tracking-wider border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Experience */}
                    <p className="text-gray-500 text-sm mb-6">
                      {teacher.experience}
                    </p>

                    {/* LinkedIn Profile Link */}
                    <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-center">
                      <a
                        href={teacher.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[#0077b5] text-sm font-semibold hover:text-blue-800 transition-colors"
                      >
                        <LinkedInIcon />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
