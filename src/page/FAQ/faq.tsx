import React, { useState } from 'react';
import './faq.css'; // Import the CSS we created

// Import your images - adjust paths if you saved them elsewhere
import ThinkingImg from '../../assets/thinking.png';
import IdeaImg from '../../assets/idea.png';

// FAQ Data structure
const faqData = [
  {
    question: "What is your return policy?",
    answer: "We offer a 15-day return window for a full refund or exchange on unused items. Returns must include original packaging and proof of purchase for processing."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary based on location."
  },
  {
    question: "What if I receive a damaged or defective product?",
    answer: "Please contact our support team within 48 hours of delivery with photos of the damage. We will arrange a replacement immediately."
  },
  {
    question: "Are the product colors on the website accurate?",
    answer: "We do our best to ensure accuracy, but colors may vary slightly depending on your screen settings and lighting conditions."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via the 'Contact Us' page or email us directly at support@example.com."
  }
];

const FAQ: React.FC = () => {
  // State to track which FAQ is open. null means all are closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If clicking the already open item, close it (set to null). Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {/* LEFT SIDE: Character Image */}
      <div className="faq-image-wrapper">
        <img 
          // Switch image source based on whether an accordion is open
          src={activeIndex !== null ? IdeaImg : ThinkingImg} 
          alt="Character" 
          // Add 'active' class when open to trigger the CSS animation
          className={`faq-character ${activeIndex !== null ? 'active' : ''}`}
        />
      </div>

      {/* RIGHT SIDE: FAQ Accordion */}
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={`icon-chevron ${activeIndex === index ? 'rotate' : ''}`}>
                {/* Simple chevron down icon using SVG */}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;