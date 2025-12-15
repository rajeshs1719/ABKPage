import React, { useState, useEffect, useRef } from "react";
import "./Event.css";

/* Replace these with your real images */
import HeroBg from "../../assets/EventHero.png"; // full hero background
import BottomBg from "../../assets/EventBg.png"; // lower half background
import CardBg from "../../assets/EventCard.png";

import Img1 from "../../assets/EventImg1.png";
import Img2 from "../../assets/EventImg2.png";
import Img3 from "../../assets/EventImg1.png";

interface EventType {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  images: string[];
}

export default function Events() {
  const [events] = useState<EventType[]>([
    {
      id: 1,
      title: "Anime & Manga Fest",
      description:
        "Celebrate Japan’s pop culture through cosplay, art showcases, and anime screenings that bring your favorite characters to life! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      date: "24th July, 2025",
      place: "Bangalore",
      images: [Img1, Img2, Img3],
    },
    {
      id: 2,
      title: "Tea Ceremony (Chanoyu)",
      description:
        "Experience the grace and mindfulness of Japan’s traditional tea ritual, symbolizing harmony and respect. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      date: "24th July, 2025",
      place: "Bangalore",
      images: [Img2, Img1],
    },
    {
      id: 3,
      title: "Origami & Calligraphy Workshops",
      description:
        "Unfold creativity with paper art and brush strokes — a hands-on session blending focus, patience, and beauty. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      date: "24th July, 2025",
      place: "Bangalore",
      images: [Img3, Img1],
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isLocked = useRef(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isLocked.current || isAnimating.current) return;

      e.preventDefault();
      isAnimating.current = true;

      if (e.deltaY > 0 && activeIndex < events.length - 1) {
        setDirection("down");
        setPrevIndex(activeIndex);
        setActiveIndex((i) => i + 1);
      }

      if (e.deltaY < 0 && activeIndex > 0) {
        setDirection("up");
        setPrevIndex(activeIndex);
        setActiveIndex((i) => i - 1);
      }

      if (e.deltaY < 0 && activeIndex === 0) {
        isLocked.current = false;
        document.body.style.overflow = "";
      }

      setTimeout(() => {
        isAnimating.current = false;
      }, 600);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeIndex, events.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isLocked.current = entry.isIntersecting;
        document.body.style.overflow = entry.isIntersecting ? "hidden" : "";
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="events-page">
      {/* HERO BANNER */}
      <section
        className="events-hero"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="events-hero-content">
          <h1>Experience Japan In India</h1>
          <p>
            Celebrate language, culture and creativity through our vibrant
            events and traditions.
          </p>
          <button className="community-btn">Join Our Community</button>
        </div>
      </section>

      {/* CARD REPLACEMENT ZONE */}
      <section
        ref={sectionRef}
        className="events-replace-zone"
        style={{ backgroundImage: `url(${BottomBg})` }}
      >
        {/* OLD CARD */}
        {prevIndex !== null && (
          <div className="event-card static">
            <div className="event-left">
              <h2 className="event-title">{events[prevIndex].title}</h2>
              <p className="event-desc">{events[prevIndex].description}</p>
            </div>
          </div>
        )}

        {/* NEW CARD */}
        <div
          key={activeIndex}
          className={`event-card ${
            direction === "down" ? "slide-up" : "slide-down"
          }`}
          style={{ backgroundImage: `url(${CardBg})` }}
          onAnimationEnd={() => setPrevIndex(null)}
        >
          <div className="event-left">
            <h2 className="event-title">{events[activeIndex].title}</h2>
            <p className="event-desc">{events[activeIndex].description}</p>
            <p className="event-info">
              <strong>Date :</strong> {events[activeIndex].date}
            </p>
            <p className="event-info">
              <strong>Place :</strong> {events[activeIndex].place}
            </p>
            <button className="event-btn">Registration Closed</button>
          </div>

          <div className="event-right">
            <div className="scroll-box">
              {events[activeIndex].images.map((img, i) => (
                <img key={i} src={img} className="scroll-img" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
