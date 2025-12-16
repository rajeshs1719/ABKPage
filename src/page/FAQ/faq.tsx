import React, { useState } from 'react';

// Import your images
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
    // Main Container
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-8 py-16 min-h-[60vh] bg-white flex-wrap">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes bulbPop {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.05); }
        }
        .animate-bulb-pop {
          animation: bulbPop 0.4s ease-out;
        }
      `}</style>

      {/* LEFT SIDE: Character Image */}
      <div className="flex-none w-[300px] flex justify-center items-center">
        <img 
          // Switch image source based on whether an accordion is open
          src={activeIndex !== null ? IdeaImg : ThinkingImg} 
          alt="Character" 
          // Add 'active' class when open to trigger the CSS animation
          className={`w-full max-w-[300px] h-auto transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
            activeIndex !== null ? 'scale-105 animate-bulb-pop' : ''
          }`}
        />
      </div>

      {/* RIGHT SIDE: FAQ Accordion */}
      <div className="flex-none w-full md:w-[600px] bg-[#5555ff] p-6 sm:p-10 rounded-lg text-white shadow-[0_10px_30px_rgba(85,85,255,0.2)]">
        <h1 className="text-center text-2xl font-bold mb-4">FAQ</h1>
        
        {faqData.map((item, index) => (
          <div className="border-b border-white/30 last:border-b-0" key={index}>
            <div 
              className="flex justify-between items-center py-6 cursor-pointer font-medium text-lg transition-colors duration-200 hover:text-white/90"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={`transition-transform duration-300 ease-out ${activeIndex === index ? 'rotate-180' : ''}`}>
                {/* Simple chevron down icon using SVG */}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            
            <div 
              className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out text-[0.95rem] leading-[1.6] text-white/85 ${
                activeIndex === index ? 'max-h-[200px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;