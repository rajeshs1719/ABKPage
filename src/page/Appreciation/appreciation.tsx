import React, { useState } from 'react';

// ==========================================
// INSTRUCTIONS FOR LOCAL USE:
// 1. Uncomment the import below.
// 2. Remove the <style> block inside the component.
// ==========================================

import './appreciation.css';

const testimonials = [
  {
    id: 1,
    text: "The designs are absolutely stunning and the user experience is flawless. I highly recommend their services.",
    author: "Shreyas R",
    company: "Rakuten Group"
  },
  {
    id: 2,
    text: "Professional, timely, and incredibly talented. They transformed our vision into reality with such ease.",
    author: "Sarah Jenkins",
    company: "Design Co."
  },
  {
    id: 3,
    text: "An amazing journey working with this team. The attention to detail is what sets them apart from the rest.",
    author: "Mike Thompson",
    company: "Tech Solutions"
  },
  {
    id: 4,
    text: "Exceeded our expectations in every way. The final product was polished, performant, and beautiful.",
    author: "Emily White",
    company: "Creative Studio"
  }
];

const Appreciation: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Open Envelope
  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
    }
  };

  // 2. Click Card to cycle
  const handleCardClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();

    // Only active card is clickable
    if (index !== currentIndex) return;

    if (currentIndex < testimonials.length - 1) {
      // Move to next card
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of stack -> For demo purposes we can log or reset
      console.log("End of testimonials");
    }
  };

  // 3. Determine class based on position relative to 'currentIndex'
  const getCardClass = (index: number) => {
    if (!isEnvelopeOpen) return 'hidden';

    if (index === currentIndex) return 'active';        // Center (Top of Arc)
    if (index === currentIndex - 1) return 'prev';      // Left Side (Visible)
    if (index === currentIndex + 1) return 'next';      // Right Side (Visible)
    if (index < currentIndex - 1) return 'discarded';   // Far Left (Hidden)
    if (index > currentIndex + 1) return 'waiting';     // Far Right (Hidden)
    
    return '';
  };

  return (
    <div className="appreciation-container">
      {/* TEMPORARY CSS FOR PREVIEW - Remove this block locally */}


      <div className="header-section">
        <h1>Words of Appreciation</h1>
        <p>Testimonials of our students and partners describing their experience.</p>
      </div>

      <div className="interaction-area">
        <div 
          className={`envelope-wrapper ${isEnvelopeOpen ? 'active open' : ''}`}
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
                <div className="card-stars">★★★★★</div>
                <div className="card-text">"{t.text}"</div>
                <div className="card-author">
                  <h4>{t.author}</h4>
                  <span>{t.company}</span>
                </div>
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
  );
};

export default Appreciation;