import React, { useState } from "react";
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
        "Celebrate Japan’s pop culture through cosplay, art showcases, and anime screenings that bring your favorite characters to life!",
      date: "24th July, 2025",
      place: "Bangalore",
      images: [Img1, Img2, Img3],
    },
    {
      id: 2,
      title: "Tea Ceremony (Chanoyu)",
      description:
        "Experience the grace and mindfulness of Japan’s traditional tea ritual, symbolizing harmony and respect.",
      date: "24th July, 2025",
      place: "Bangalore",
      images: [Img2, Img1],
    },
    {
      id: 3,
      title: "Origami & Calligraphy Workshops",
      description:
        "Unfold creativity with paper art and brush strokes — a hands-on session blending focus, patience, and beauty.",
      date: "24th July, 2025",
      place: "Bangalore",
      images: [Img3, Img1],
    },
  ]);

  return (
    <main className="events-page">
      {/* HERO BANNER */}
      <section
        className="events-hero"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="events-hero-content">
          <h1>
            Experience Japan <br /> In India
          </h1>
          <p>
            Celebrate language, culture and creativity through our vibrant
            events and traditions.
          </p>
          <button className="community-btn">Join Our Community</button>
        </div>
      </section>

      {/* LOWER SECTION WITH BACKGROUND IMAGE */}
      <section
        className="events-bottom-bg"
        style={{ backgroundImage: `url(${BottomBg})` }}
      >
        <div className="events-list">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="event-card"
              style={{ backgroundImage: `url(${CardBg})` }}
            >
              <div className="event-left">
                <h2 className="event-title">{ev.title}</h2>
                <p className="event-desc">{ev.description}</p>

                <p className="event-info">
                  <strong>Date :</strong> {ev.date}
                </p>
                <p className="event-info">
                  <strong>Place :</strong> {ev.place}
                </p>

                <button className="event-btn">Registration Closed</button>
              </div>

              {/* BETTER SCROLL AREA */}
              <div className="event-right">
                <div className="scroll-box">
                  {ev.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="scroll-img" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
