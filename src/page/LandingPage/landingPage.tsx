import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- IMAGE IMPORTS ---
// import bg from "../../assets/Home/LpBg.svg";
import img1 from "../../assets/Home/LpCloud.svg";
import img2 from "../../assets/Home/2.svg";
import img3 from "../../assets/Home/3.svg";
import img4 from "../../assets/Home/1.svg";
import img5 from "../../assets/Home/4.svg";
import img6 from "../../assets/Home/img-6.svg";
import lantern1 from "../../assets/Home/5.svg";
import lantern2 from "../../assets/Home/6.svg";

const PETAL_COUNT = 70; // Adjusted for performance

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();

  // 1. PETAL GENERATOR LOGIC
  useEffect(() => {
    const container = heroRef.current;
    if (!container) return;

    const petals = [];

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";

      const size = Math.random() * 8 + 10;
      const drift = Math.random() * 400 - 200; // Wider horizontal drift
      const rotate = Math.random() * 720; // Multiple rotations
      const duration = Math.random() * 5 + 7; // Speed of fall
      const delay = Math.random() * 10;

      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.setProperty("--drift", `${drift}px`);
      petal.style.setProperty("--rotate", `${rotate}deg`);
      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `-${delay}s`; // Negative delay starts them mid-air

      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  // 2. GSAP ENTRANCE & PARALLAX LOGIC
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Setup Initial States
      gsap.set(".layer", { yPercent: 100, opacity: 0 });
      gsap.set(".lantern", { y: 150, opacity: 0 });
      gsap.set(".hero-content > *", { y: 60, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.2 });

      // Slide up layers individually
      tl.to(".layer", {
        yPercent: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.25,
      })
        .to(
          ".lantern",
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.4)",
            stagger: 0.2,
          },
          "-=0.8"
        )
        .to(
          ".hero-content > *",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=0.5"
        );

      // Scroll Trigger Parallax
      gsap.utils.toArray(".layer").forEach((layer, i) => {
        gsap.to(layer, {
          y: (i + 1) * 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Ambient Lantern Float
      gsap.to(".lantern", {
        y: "-=15",
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3. MOUSE MOVE LOGIC
  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      gsap.to(".layer", {
        x: (i) => x * (15 + i * 10),
        y: (i) => y * (15 + i * 10),
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const layerBaseClass =
    "layer absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden select-none bg-gradient-to-b from-[#F5EFE7] to-[#E64646] z-0"
    >
      {/* PETAL STYLES */}
      <style>{`
        .petal {
          position: absolute;
          background: #ffc0cb;
          border-radius: 100% 0 100% 0;
          opacity: 0.7;
          z-index: 50;
          pointer-events: none;
          top: -10%;
          filter: blur(0.5px);
          animation: animatePetal linear infinite;
        }

        @keyframes animatePetal {
          0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% {
            top: 110%;
            transform: translateX(var(--drift)) rotate(var(--rotate));
            opacity: 0;
          }
        }
      `}</style>

      {/* Background Layers */}
      {/* <img src={bg} className={`${layerBaseClass} z-[0]`} alt="" /> */}
      <img src={img1} className={`${layerBaseClass} z-[1]`} alt="" />
      <img src={img2} className={`${layerBaseClass} z-[2]`} alt="" />
      <img src={img3} className={`${layerBaseClass} z-[3]`} alt="" />
      <img src={img4} className={`${layerBaseClass} z-[4]`} alt="" />
      <img src={img5} className={`${layerBaseClass} z-[5]`} alt="" />
      <img src={img6} className={`${layerBaseClass} z-[6]`} alt="" />

      {/* Lanterns */}
      <img
        src={lantern1}
        className="lantern absolute z-[10] w-[50px] md:w-[64px] h-auto top-[30%] left-[20%]"
        alt=""
      />
      <img
        src={lantern2}
        className="lantern absolute z-[10] w-[60px] md:w-[80px] h-auto top-[30%] left-[30%]"
        alt=""
      />

      {/* Content */}
      <div className="hero-content absolute inset-0 flex flex-col items-start text-left px-6 z-20 mx-10">
        <h1 className="text-[64px] md:text-[64px] leading-tight mb-4 drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] font-bold mt-20 text-black">
          Start your Japanese learning journey here!
        </h1>
        <p className="text-[24px] md:text-[24px] max-w-[700px] text-left mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          massa blandit, faucibus quam sed, feugiat massa.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-[#3A4D2F] text-white rounded-xl shadow-lg hover:bg-[#2f3b32] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
