import React, { useState } from "react";

// You can remove this import since we are using Tailwind now
// import "./books.css";

import GreenBook from "../../assets/GreenBookCover.png";
import RedBook from "../../assets/RedBookCover.png";
import CourBg from "../../assets/EventBg.png";

// Sample Books Data
const booksData = [
  {
    id: 1,
    title: "JLPT & NAT",
    subtitle: "Levels Offered:",
    shortDesc: "N5, N4, N3, N2 and N1",
    color: "#1a1a1a", // Black
    summary: "A complete guide to mastering Japanese proficiency tests.",
    content:
      "Our curriculum covers all aspects of the JLPT and NAT exams. From grammar drills to listening practice, we ensure you are fully prepared.",
  },
  {
    id: 2,
    title: "Exam Confidence",
    subtitle: "Focused Revision For",
    shortDesc: "N5, N4, N3, N2 and N1",
    color: "#3f5e40", // Green
    summary: "Overcome anxiety and perform your best on exam day.",
    content:
      "Learn specific strategies to manage time, identify keywords, and handle difficult questions with calm and confidence.",
  },
  {
    id: 3,
    title: "Beginner Guide",
    subtitle: "Start Learning For",
    shortDesc: " N5, N4, N3, N2 and N1",
    color: "#8b4513", // Brown
    summary: "The first steps into the Japanese language.",
    content:
      "Master the basics of Hiragana and Katakana. Build a strong foundation with essential vocabulary for daily interactions.",
  },
  {
    id: 4,
    title: "Kanji Mastery",
    subtitle: "Unlock Symbols",
    shortDesc: "N5, N4, N3, N2 and N1",
    color: "#800000", // Maroon
    summary: "Decode the complex world of Kanji characters.",
    content:
      "We use mnemonics and radical decomposition to help you memorize and understand thousands of Kanji characters effectively.",
  },
  {
    id: 5,
    title: "Speaking Club",
    subtitle: "Fluency Practice",
    shortDesc: "N5, N4, N3, N2 and N1",
    color: "#1e3a8a", // Blue
    summary: "Real-world conversation practice.",
    content:
      "Join our community to practice speaking with natives. Improve your accent, intonation, and spontaneous response skills.",
  },
];

const Books: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Combined Interaction Handler
  const handleInteraction = (index: number) => {
    // Only interact with the active book
    if (index !== currentIndex) return;

    if (!isOpen) {
      // 1. OPEN the book if closed
      setIsOpen(true);
    } else {
      // 2. CLOSE the book if open, then move to NEXT
      setIsOpen(false);

      // Wait for close animation (matches duration)
      setTimeout(() => {
        if (currentIndex < booksData.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          // If it was the last book, scroll down
          handleScrollDown();
        }
      }, 600);
    }
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  // --- Dynamic Class Generation for Tailwind ---
  const getPositionStyles = (index: number) => {
    // 1. ACTIVE
    if (index === currentIndex) {
      if (isOpen) {
        // Active & Open: Shifted right slightly
        return "z-20 cursor-pointer [transform:translateX(20px)_translateZ(20px)] sm:[transform:translateX(150px)_translateZ(50px)]";
      }
      // Active & Closed
      return "z-20 [transform:translateX(0)_translateZ(0)_rotateY(0deg)]";
    }

    // 2. PREV (Left)
    if (index === currentIndex - 1) {
      return "z-10 opacity-70 pointer-events-none brightness-[0.85] [transform:translateX(-150px)_translateZ(-100px)_rotateY(20deg)] sm:[transform:translateX(-380px)_translateZ(-150px)_rotateY(25deg)]";
    }

    // 3. NEXT (Right)
    if (index === currentIndex + 1) {
      return "z-10 opacity-70 pointer-events-none brightness-[0.85] [transform:translateX(150px)_translateZ(-100px)_rotateY(-20deg)] sm:[transform:translateX(380px)_translateZ(-150px)_rotateY(-25deg)]";
    }

    // 4. HIDDEN LEFT
    if (index < currentIndex - 1) {
      return "opacity-0 [transform:translateX(-700px)_translateZ(-300px)]";
    }

    // 5. HIDDEN RIGHT
    return "opacity-0 [transform:translateX(700px)_translateZ(-300px)]";
  };

  return (
    // Main Container
    <div
      className="relative w-full flex flex-col items-center justify-center font-sans overflow-hidden p-8 bg-gradient-to-b from-white to-[#FBD5EB] [perspective:2000px]"
      style={{
        backgroundImage: `url(${CourBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Helper styles for specific pseudo-elements (Book Stack Effect) */}
      <style>{`
        /* Paper Stack Effect (Thickness on right) */
        .right-page-stack::after {
          content: '';
          position: absolute;
          top: 2px;
          right: 0;
          width: 38px;
          height: 98%;
          background: linear-gradient(90deg, #f5f5f5, #e0e0e0);
          transform: rotateY(90deg) translateX(19px);
          transform-origin: right;
        }
        
        /* Spine Effect (On the Cover) */
        .book-spine::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 100%;
          background-color: inherit;
          filter: brightness(0.7);
          transform: rotateY(90deg) translateX(-20px) translateZ(-20px);
          transform-origin: left;
        }
      `}</style>

      {/* Header */}
      <div className="absolute top-[4%] text-center z-20">
        <h1 className="text-[40px] text-[#1a1a1a] mb-2 font-bold">
          Our Courses
        </h1>
        <p className="text-gray-500">Click to open. Click again to continue.</p>
      </div>

      {/* Book Stage */}
      <div className="relative w-full h-[500px] flex justify-center items-center pt-[10%] [transform-style:preserve-3d]">
        {booksData.map((book, index) => {
          const bgImage = index % 2 === 0 ? RedBook : GreenBook;
          const isBookOpen = index === currentIndex && isOpen;

          return (
            <div
              key={book.id}
              onClick={() => handleInteraction(index)}
              className={`absolute w-[260px] h-[380px] sm:w-[300px] sm:h-[440px] cursor-pointer origin-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] ${getPositionStyles(
                index
              )}`}
            >
              {/* --- ROTATING GROUP: Contains Front Cover & Left Page --- */}
              <div
                className={`absolute top-0 left-0 w-full h-full [transform-style:preserve-3d] origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-10 ${
                  isBookOpen ? "[transform:rotateY(-180deg)]" : ""
                }`}
              >
                {/* --- FRONT COVER (Visible when closed) --- */}
                <div
                  className="book-spine absolute top-0 left-0 w-[90%] h-[80%] rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[2] flex flex-col justify-center items-center p-8 text-center text-white transition-transform duration-[800ms]"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-[12%] left-0 right-0 text-center px-2.5 text-[#3e2723]">
                    <h2 className="text-[35px] mx-[25px] my-[50px] font-extrabold text-left text-white leading-tight">
                      {book.title}
                    </h2>
                    <div className="w-[200px] ml-[35px] mb-[-3px] px-[5px]">
                      <span className="block text-left text-[18px] text-[black]">
                        {book.subtitle}
                      </span>
                      <p className="block text-left text-[18px] text-[black]">
                        {book.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* --- LEFT PAGE (Visible when open - Back of Cover) --- */}
                <div className="absolute top-0 left-0 w-[90%] h-[80%] rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[1] bg-white [transform:rotateY(180deg)] flex flex-col justify-center items-center p-8 border-r border-gray-300 transition-transform duration-[800ms]">
                  <div className="text-xl font-bold mb-4 text-[#333] text-center border-b-2 border-[#f0f0f0] pb-2 w-full">
                    {book.title}
                  </div>
                  <div className="flex flex-grow items-center text-center text-[0.95rem] leading-[1.6] text-[#555] overflow-y-auto ">
                    <p className="italic text-[1.1rem]">"{book.summary}"</p>
                  </div>
                  <div className="mt-auto text-[0.8rem] text-[#aaa] text-center w-full">
                    Page 1
                  </div>
                </div>
              </div>

              {/* --- RIGHT PAGE (Stationary - Visible when open) --- */}
              <div className="right-page-stack absolute top-0 left-0 w-[90%] h-[80%] rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[5] bg-white flex flex-col p-8 border-l border-[#eee] transition-transform duration-[800ms]">
                <div className="text-xl font-bold mb-4 text-[#333] text-center border-b-2 border-[#f0f0f0] pb-2 w-full">
                  Details
                </div>
                <div className="flex-grow text-[0.95rem] leading-[1.6] text-[#555] overflow-y-auto">
                  <p>{book.content}</p>
                </div>
                <div className="mt-auto text-[0.8rem] text-[#aaa] text-center w-full">
                  Page 2
                </div>
              </div>

              {/* --- BACK COVER (Static Background) --- */}
              <div
                className="absolute top-0 left-0 w-[90%] h-[80%] rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[1] transition-transform duration-[800ms] [transform:translateZ(-2px)]"
                style={{ backgroundColor: book.color }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
