import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- YOUR LOCAL IMPORTS (Uncomment these in your local environment) ---
import coimbatoreImg from "../../assets/faculty/Ravi.png";
import bangaloreImg from "../../assets/faculty/uma.png";

// --- PLACEHOLDER IMAGES (For preview environment) ---
const videoThumb1 =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop";
const videoThumb2 =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop";

export const directorsData = {
  bangalore: {
    pageTitle: "DIRECTOR'S MESSAGE",
    name: "Ms. Uma Ramasubramanian",
    role: "Director & Senior Faculty, Bangalore Chapter",
    image: bangaloreImg,
    introParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    ],
    mainParagraphs: [
      "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
      "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.",
      "Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci.",
      "Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy id, massa. Cras vulputate velit nec felis. Suspendisse nisl. Praesent fermentum tempor tellus.",
    ],
    videosTitle: "Featured Insights",
    videos: [
      {
        caption:
          "Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. Vestibulum erat nulla.",
        thumbnail: videoThumb1,
      },
      {
        caption:
          "Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus.",
        thumbnail: videoThumb2,
      },
    ],
    closing:
      "Language is the bridge between civilizations. Our mission is to make that bridge a work of art through disciplined study.",
  },
  coimbatore: {
    pageTitle: "DIRECTOR'S MESSAGE",
    name: "Mr. Ravi K",
    role: "Director & Senior Faculty, Coimbatore Chapter",
    image: coimbatoreImg,
    introParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
      "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.",
    ],
    mainParagraphs: [
      "Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.",
      "Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.",
      "Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.",
      "Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus.",
    ],
    videosTitle: "Featured Insights",
    videos: [
      {
        caption:
          "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate.",
        thumbnail: videoThumb2,
      },
      {
        caption:
          "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
        thumbnail: videoThumb1,
      },
    ],
    closing:
      "We don't just teach Japanese; we instill the cultural nuance of Omotenashi and Kaizen in every student's journey.",
  },
};

const PlayIcon = () => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 24 24"
    fill="none"
    className="transition-transform duration-300 transform group-hover:scale-110 drop-shadow-md"
  >
    <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.9)" />
    <path d="M15.5 12L9.5 15.5V8.5L15.5 12Z" fill="#2F4B36" />
  </svg>
);

const DirectorMessagePage = ({ data = directorsData.bangalore }) => {
  return (
    <div className="w-full bg-white min-h-screen font-sans text-gray-800 pb-24 selection:bg-text-muted selection:text-white">
      {/* 1. TOP BANNER - Key added to refresh text animation */}
      <div className="relative w-full h-[250px] md:h-[300px] bg-text-primary overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={data.name + "-banner"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center px-6"
          >
            <div className="w-12 h-[2px] bg-primary-light mx-auto mb-4 opacity-80"></div>
            <h1 className="text-3xl md:text-5xl font-serif text-white tracking-wide uppercase">
              {data.pageTitle}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 md:-mt-20 relative z-20">
        {/* 2. PROFILE & INTRO SECTION */}
        {/* The 'key' here ensures the entire card re-animates when switching directors */}
        <motion.div
          key={data.name + "-profile"}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-14 flex flex-col lg:flex-row gap-12 lg:gap-16"
        >
          {/* Profile Image Column */}
          <div className="w-full lg:w-[35%] shrink-0">
            <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-neutral-bg rounded-[15px] transform translate-x-4 translate-y-4"></div>
              <motion.img
                key={data.image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={data.image}
                alt={data.name}
                className="relative w-full h-full object-cover rounded-[15px] shadow-lg z-10 grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Intro Text Column */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-[40px] font-bold text-text-primary mb-2 font-serif leading-tight"
            >
              {data.name}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-text-muted mb-8 font-light tracking-wide flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-primary-light"></span>
              {data.role}
            </motion.h3>

            <div className="space-y-6 text-text-muted leading-relaxed text-[16px] md:text-[17px]">
              {data.introParagraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="font-light"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. MAIN PARAGRAPHS */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8 text-text-muted leading-relaxed text-[16px] md:text-[17px] px-4 md:px-0">
          {data.mainParagraphs.map((para, idx) => (
            <motion.p
              key={data.name + "-para-" + idx} // Key includes director name to re-trigger
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="font-light"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* 4. VIDEOS SECTION */}
        <motion.div
          key={data.name + "-videos"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-gray-200"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-text-primary mb-3">
              {data.videosTitle}
            </h3>
            <div className="w-16 h-[2px] bg-primary-light mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {data.videos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full aspect-video rounded-[15px] overflow-hidden bg-gray-100 shadow-md mb-6">
                  <img
                    src={video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                </div>
                <h4 className="text-[17px] text-text-muted font-medium leading-snug px-2">
                  {video.caption}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. CLOSING MESSAGE */}
        <motion.div
          key={data.name + "-closing"}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 mb-10 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white px-8 py-10 rounded-[15px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 relative">
            <span className="absolute text-neutral-bg text-8xl font-serif -top-6 left-6 leading-none select-none">
              "
            </span>
            <p className="text-text-primary text-lg md:text-xl italic font-serif relative z-10 leading-relaxed">
              {data.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectorMessagePage;
