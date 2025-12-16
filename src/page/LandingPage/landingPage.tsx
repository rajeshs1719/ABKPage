import React, { useEffect } from "react";

// --- IMAGE IMPORTS ---
import pagoda from "../../assets/Home/1.svg"; 
import bgHills from "../../assets/Home/2.svg";
import midHills from "../../assets/Home/3.svg";
import fgTrees from "../../assets/Home/4.svg";
import lanternRound from "../../assets/Home/5.svg";
import lanternCylinder from "../../assets/Home/6.svg";

const PETAL_COUNT = 100;

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Select the container by id or class
    const container = document.querySelector(".landing-page-container");
    if (!container) return;

    const petals: HTMLDivElement[] = [];

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal"; // defined in the <style> tag below

      const size = Math.random() * 6 + 10;
      const drift = Math.random() * 200 - 100;
      const rotate = Math.random() * 360;
      const duration = Math.random() * 6 + 8;
      const delay = Math.random() * 5;

      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${Math.random() * 100}%`;

      // CSS variables for randomness
      petal.style.setProperty("--drift", `${drift}px`);
      petal.style.setProperty("--rotate", `${rotate}deg`);

      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `${delay}s`;

      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  return (
    // Main Container
    <div className="landing-page-container relative w-full min-h-screen overflow-hidden font-sans bg-gradient-to-b from-[#f0fdf4] via-[#fff7ed] to-[#fecaca]">
      
      {/* INLINE STYLES FOR ANIMATIONS & PETALS 
        Tailwind arbitrary values are great, but for complex keyframes 
        and dynamic JS created elements (petals), standard CSS in a style block is cleaner.
      */}
      <style>{`
        /* --- Animations --- */
        @keyframes slideUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes dropIn {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes sway {
          0% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-6px) rotate(6deg); }
          100% { transform: translateY(0) rotate(-6deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        /* --- Petal Styles (Replaces cherryblosson.css) --- */
        .petal {
          position: absolute;
          background: #ffc0cb; /* Pink color */
          border-radius: 100% 0 100% 0;
          opacity: 0.8;
          z-index: 50;
          pointer-events: none;
          top: -10%;
          animation: animatePetal linear infinite;
        }

        @keyframes animatePetal {
          0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            top: 110%;
            transform: translateX(var(--drift)) rotate(var(--rotate));
            opacity: 0;
          }
        }
      `}</style>

      {/* --- Content Section --- */}
      <section className="relative z-30 w-full">
        {/* Grid Container 
            Fixed: Changed breakpoint from md to lg for the column split.
            This ensures tablets (md) stay in single-column mode for better readability.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] max-w-[1200px] mx-auto px-5 py-6 sm:px-6 sm:py-10 lg:px-4 lg:py-8 gap-8 lg:gap-0">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left z-30 w-full lg:max-w-[600px] mt-4 sm:mt-8 lg:mt-16">
            {/* Added transform-none and not-italic to ensure text is straight */}
            <h1 className="text-[32px] sm:text-[40px] font-bold text-gray-800 leading-[1.2] mb-4 sm:mb-6 transform-none not-italic w-[850px]">
              Start your Japanese learning journey here!
            </h1>

            <p className="text-[18px] sm:text-[22px] md:text-[25px] text-gray-600 mb-6 sm:mb-8 leading-[1.6] transform-none not-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sed massa blandit, faucibus quam sed, feugiat massa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 text-base border border-gray-300 text-[#6D6D6D] bg-transparent hover:border-gray-400 hover:bg-black/5 w-full sm:w-auto min-w-[140px] transform-none border-2 border-solid border-[rgb(58, 77, 47)]">
                Book Demo
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 text-base bg-[#3A4D2F] border border-[#3f4e43] text-white shadow-md hover:bg-[#2f3b32] hover:-translate-y-0.5 w-full sm:w-auto min-w-[140px] transform-none">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Visuals / Layers Section --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
        
        {/* Layer 1: Bg Hills (Orange) */}
        <img
          src={bgHills}
          alt="Background Hills"
          className="absolute left-0 w-full h-auto object-cover opacity-0 translate-y-full z-[2] 
                     bottom-[-5%] sm:bottom-[-10%] lg:bottom-[-15%]
                     animate-[slideUp_1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.2s_forwards]"
        />

        {/* Layer 2: Mid Hills (Red) */}
        <img
          src={midHills}
          alt="Middle Red Hills"
          className="absolute left-0 w-full h-auto object-cover opacity-0 translate-y-full z-[3]
                     bottom-[-5%] sm:bottom-[-8%] lg:bottom-[-10%]
                     animate-[slideUp_1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_forwards]"
        />

        {/* Layer 3: Pagoda */}
        <img
          src={pagoda}
          alt="Pagoda and Houses"
          className="absolute object-cover opacity-0 translate-y-full z-[4]
                     right-[-30px] sm:right-[-20px] md:right-0 left-auto w-auto
                     max-h-[45vh] sm:max-h-[70vh] md:max-h-[85vh] lg:max-h-[100vh]
                     bottom-[6%]
                     animate-[slideUp_1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.8s_forwards]"
        />

        {/* Layer 4: Foreground Trees */}
        <img
          src={fgTrees}
          alt="Foreground Trees"
          className="absolute left-0 w-full h-auto object-cover z-[20]
                     bottom-[-5%] sm:bottom-[-8%] lg:bottom-[-10%]
                     animate-[dropIn_1s_ease-out_1.5s_forwards,float_5s_ease-in-out_infinite]"
        />

        {/* Layer 5: Lanterns (Hidden on small mobile < 480px) */}
        <img
          src={lanternRound}
          alt="Lantern"
          className="absolute z-[6] opacity-0 origin-top-center hidden sm:block
                     top-[25%] left-[42%] w-[80px] lg:top-[30%] lg:left-[45%] lg:w-[100px] h-auto
                     animate-[dropIn_1s_ease-out_1.5s_forwards,sway_4s_ease-in-out_infinite]"
        />
        <img
          src={lanternCylinder}
          alt="Lantern"
          className="absolute z-[6] opacity-0 origin-top-center hidden sm:block
                     top-[18%] left-[52%] w-[80px] lg:top-[22%] lg:left-[55%] lg:w-[100px] h-auto
                     animate-[dropIn_1s_ease-out_1.7s_forwards,sway_4.5s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
};

export default LandingPage;