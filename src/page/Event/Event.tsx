import React, { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// Placeholder images - replace with your actual images
import HeroBg from "../../assets/EventHero.png"
import BottomBg from "../../assets/HeroBg.png"

// const HeroBg = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&auto=format&fit=crop";
// const BottomBg = "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&auto=format&fit=crop";

const Img1 = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&auto=format&fit=crop";
const Img2 = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop";
const Img3 = "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop";

interface EventType {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  images: string[];
  color: string;
}

const events: EventType[] = [
  {
    id: 1,
    title: "Anime & Manga Fest",
    description:
      "Celebrate Japan's pop culture through cosplay, art showcases, and anime screenings that bring your favorite characters to life! Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "24th July, 2025",
    place: "Bangalore",
    images: [Img1, Img2, Img3],
    color: "#FFE5E5",
  },
  {
    id: 2,
    title: "Tea Ceremony (Chanoyu)",
    description:
      "Experience the traditional Japanese tea ceremony with authentic practices, meditation, and cultural immersion. Learn the art of preparation and the philosophy behind this ancient ritual.",
    date: "15th August, 2025",
    place: "Mumbai",
    images: [Img2, Img1, Img3],
    color: "#E5F5E5",
  },
  {
    id: 3,
    title: "Origami & Calligraphy Workshops",
    description:
      "Master the delicate art of paper folding and beautiful Japanese calligraphy. Create stunning origami pieces and learn the meditative practice of shodo calligraphy.",
    date: "10th September, 2025",
    place: "Delhi",
    images: [Img3, Img1, Img2],
    color: "#E5E5FF",
  },
];

interface CardProps {
  i: number;
  event: EventType;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const AutoSlidingImages = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentIndex === idx ? 1 : 0,
            scale: currentIndex === idx ? 1 : 1.1,
          }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={img}
            alt={`Event ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      
      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ i, event, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: event.color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col md:flex-row relative h-[500px] w-[85%] max-w-[1100px] rounded-2xl p-6 md:p-10 origin-top shadow-2xl"
      >
        {/* Left side - Event details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {event.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              {event.description}
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-800">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-800">
              <strong>Place:</strong> {event.place}
            </p>
            <button className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Registration Closed
            </button>
          </div>
        </div>

        {/* Right side - Auto-sliding images */}
        <div className="w-full md:w-[45%] h-[250px] md:h-full mt-6 md:mt-0 md:ml-8">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full"
          >
            <AutoSlidingImages images={event.images} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Events() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main className="min-h-screen bg-[#fdfcf8] font-serif text-[#3b2a1a]">
      {/* HERO BANNER */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center px-5 sm:px-10 md:px-16 lg:px-20 relative"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="max-w-[580px] text-white relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight font-bold">
            Experience Japan In India
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed">
            Celebrate language, culture and creativity through our vibrant
            events and traditions.
          </p>
          <button className="bg-[#27512a] hover:bg-[#1e3f20] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">
            Join Our Community
          </button>
        </div>
      </section>

      {/* STACKING CARDS SECTION */}
      <section
        ref={container}
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${BottomBg})`,
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
        
        <div className="relative py-20">
          <div className="text-center mb-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Scroll down to explore our cultural celebrations
            </p>
          </div>

          {events.map((event, i) => {
            const targetScale = 1 - (events.length - i) * 0.05;
            return (
              <EventCard
                key={event.id}
                i={i}
                event={event}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        {/* Footer spacing */}
        <div className="h-40" />
      </section>
    </main>
  );
}