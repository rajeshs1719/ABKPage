import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// --- YOUR ORIGINAL IMPORTS (Uncomment these in your project) ---
import abbg from "../../assets/aboutUs/aubg.png";
import AboutUsWho from "../../assets/aboutUs/abwwa.png";
import AboutClass from "../../assets/aboutUs/abclass.png";

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

const AboutUs = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
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
        {/* Heading */}
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Left Image */}
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

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Mission */}
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

            {/* Vision */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-300 text-gray-800 rounded-2xl p-8 flex-1 shadow-md"
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
      <section className="bg-gray-200 py-16">
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
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-8 px-6 py-8 md:border-r border-black/10" // Lightened border slightly
            >
              <span className="text-[48px] font-bold whitespace-nowrap text-[#6f8f3c]">
                <Counter value={40} suffix="k+" />
              </span>
              <div className="text-[32px] font-semibold leading-tight text-left">
                <div>Learners Worldwide</div>
              </div>
            </motion.div>

            {/* Item 2 */}
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

            {/* Item 3 */}
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

      {/* OUR TEACHERS */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] font-semibold mb-8">Our Teachers</h2>
          {/* Added a placeholder grid for teachers to complete the visual */}
          {/* <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-4 shadow-sm"
              >
                <img src={`${TeacherPlaceholder}?random=${item}`} alt="Teacher" className="w-full h-48 object-cover rounded-lg mb-4"/>
                <div className="font-semibold">Sensei Name</div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
