import React, { useState } from "react";

// ==========================================
// INSTRUCTIONS FOR LOCAL USE:
// 1. Uncomment your local AppBG import and remove the placeholder.
// 2. Remove the <style> block inside the component and import your CSS.
// ==========================================

import "./appreciation.css";
import AppBG from "../../../assets/AppreciationBg.png"
// const AppBG = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop"; // Placeholder for preview

const testimonials = [
  {
    id: 1,
    text: "The designs are absolutely stunning and the user experience is flawless. I highly recommend their services.",
    author: "Shreyas R",
    company: "Rakuten Group",
    profile_pic: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "Professional, timely, and incredibly talented. They transformed our vision into reality with such ease.",
    author: "Sarah Jenkins",
    company: "Design Co.",
    profile_pic: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    text: "An amazing journey working with this team. The attention to detail is what sets them apart from the rest.",
    author: "Mike Thompson",
    company: "Tech Solutions",
    profile_pic: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 4,
    text: "Exceeded our expectations in every way. The final product was polished, performant, and beautiful.",
    author: "Emily White",
    company: "Creative Studio",
    profile_pic: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 5,
    isViewMore: true // Special flag for the final card
  }
];

const App = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Open Envelope
  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
    }
  };

  // 2. Click Card to cycle
  const handleCardClick = (e, index) => {
    e.stopPropagation();

    // Only active card is clickable
    if (index !== currentIndex) return;

    if (currentIndex < testimonials.length - 1) {
      // Move to next card
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of stack
      console.log("End of testimonials");
    }
  };

  // 3. Determine class based on position relative to 'currentIndex'
  const getCardClass = (index) => {
    if (!isEnvelopeOpen) return "hidden";

    if (index === currentIndex) return "active"; // Center (Top of Arc)
    if (index === currentIndex - 1) return "prev"; // Left Side (Visible)
    if (index === currentIndex + 1) return "next"; // Right Side (Visible)
    if (index < currentIndex - 1) return "discarded"; // Far Left (Hidden)
    if (index > currentIndex + 1) return "waiting"; // Far Right (Hidden)

    return "";
  };

  return (
    <>

      <div
        className="appreciation-container"
        style={{
          backgroundImage: `url(${AppBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="App-header-section">
          <h1>Testimonials</h1>
          <p>
            Testimonials of our students and partners describing their experience.
          </p>
        </div>

        <div className="interaction-area">
          <div
            className={`envelope-wrapper ${isEnvelopeOpen ? "active open" : ""}`}
            onClick={handleEnvelopeClick}
          >
            {/* Back of envelope */}
            <div className="envelope-back"></div>

            {/* Cards Container */}
            <div className="card-stack">
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className={`testimonial-card ${getCardClass(index)}`}
                  onClick={(e) => handleCardClick(e, index)}
                >
                  {/* If it's the View More card, render the link layout instead of standard layout */}
                  {t.isViewMore ? (
                    <div className="view-more-container">
                      <h3>Want to hear more from our Students?</h3>
                      <a 
                        href="/testimonials" 
                        className="view-more-btn"
                        onClick={(e) => e.stopPropagation()} // Prevent card click logic if they click the link directly
                      >
                        View More
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="card-author">
                        <div className='profile-pic'>
                          <img src={t.profile_pic} alt="profile_pic" />
                        </div>
                        <div>
                          <h4>{t.author}</h4>
                          <span>{t.company}</span>
                        </div>
                      </div>
                      <div className="card-stars">★★★★★</div>
                      <div className="card-text">"{t.text}"</div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Front Pocket */}
            <div className="envelope-pocket"></div>

            {/* Flap */}
            <div className="envelope-flap"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;