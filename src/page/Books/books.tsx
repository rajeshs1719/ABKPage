import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { API } from "../../services/api";
import type { BookData } from "../../services/api";


// Locally defined interface to replace external import

import RedBook from "../../assets/RedBookCover.png";
import GreenBook from "../../assets/GreenBookCover.png";
import CourBg from "../../assets/EventBg.png";
// Placeholder images to replace local asset resolution errors

// Default Fallback Data (Original)
const defaultBooksData: BookData[] = [
  {
    id: 1,
    title: "JLPT & NAT",
    subtitle: "Levels Offered:",
    shortDesc: "N5, N4, N3, N2 and N1",
    summary: "A complete guide to mastering Japanese proficiency tests.",
    content:
      "Our curriculum covers all aspects of the JLPT and NAT exams. From grammar drills to listening practice, we ensure you are fully prepared.",
  },
  {
    id: 2,
    title: "Exam Confidence",
    subtitle: "Focused Revision For",
    shortDesc: "N5, N4, N3, N2 and N1",
    summary: "Overcome anxiety and perform your best on exam day.",
    content:
      "Learn specific strategies to manage time, identify keywords, and handle difficult questions with calm and confidence.",
  },
  {
    id: 3,
    title: "Beginner Guide",
    subtitle: "Start Learning For",
    shortDesc: " N5, N4, N3, N2 and N1",
    summary: "The first steps into the Japanese language.",
    content:
      "Master the basics of Hiragana and Katakana. Build a strong foundation with essential vocabulary for daily interactions.",
  },
  {
    id: 4,
    title: "Kanji Mastery",
    subtitle: "Unlock Symbols",
    shortDesc: "N5, N4, N3, N2 and N1",
    summary: "Decode the complex world of Kanji characters.",
    content:
      "We use mnemonics and radical decomposition to help you memorize and understand thousands of Kanji characters effectively.",
  },
  {
    id: 5,
    title: "Speaking Club",
    subtitle: "Fluency Practice",
    shortDesc: "N5, N4, N3, N2 and N1",
    summary: "Real-world conversation practice.",
    content:
      "Join our community to practice speaking with natives. Improve your accent, intonation, and spontaneous response skills.",
  },
];

const Books = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [booksData, setBooksData] = useState<BookData[]>(defaultBooksData);

  // Fetch API Data
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await API.books.getAll();

      if (response.data && response.data.length > 0) {
        setBooksData(response.data);
      } else if (response.error) {
        console.warn("Books API failed, using fallback:", response.error);
      }
    };

    fetchBooks();
  }, []);

  // Manual Navigation Handler
  const goToBook = (index: number) => {
    if (index === currentIndex) return;

    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        setCurrentIndex(index);
      }, 400);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < booksData.length - 1) {
      goToBook(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      goToBook(currentIndex - 1);
    }
  };

  const handleInteraction = (index: number) => {
    if (index !== currentIndex) {
      goToBook(index);
      return;
    }

    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        if (currentIndex < booksData.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      }, 600);
    }
  };

  const getPositionStyles = (index: number) => {
    if (index === currentIndex) {
      if (isOpen) {
        return "z-20 cursor-pointer [transform:translateX(20px)_translateZ(20px)] sm:[transform:translateX(150px)_translateZ(50px)]";
      }
      return "z-20 [transform:translateX(0)_translateZ(0)_rotateY(0deg)]";
    }

    if (index === currentIndex - 1) {
      return "z-10 opacity-70 cursor-pointer brightness-[0.85] [transform:translateX(-150px)_translateZ(-100px)_rotateY(20deg)] sm:[transform:translateX(-380px)_translateZ(-150px)_rotateY(25deg)]";
    }

    if (index === currentIndex + 1) {
      return "z-10 opacity-70 cursor-pointer brightness-[0.85] [transform:translateX(150px)_translateZ(-100px)_rotateY(-20deg)] sm:[transform:translateX(380px)_translateZ(-150px)_rotateY(-25deg)]";
    }

    if (index < currentIndex - 1) {
      return "opacity-0 pointer-events-none [transform:translateX(-700px)_translateZ(-300px)]";
    }

    return "opacity-0 pointer-events-none [transform:translateX(700px)_translateZ(-300px)]";
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden p-8 bg-gradient-to-b from-white to-[#FBD5EB] [perspective:2000px]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${CourBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
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

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="absolute top-[4%] text-center z-20">
        <h1 className="text-[32px] sm:text-[40px] text-[#1a1a1a] mb-2 font-bold leading-tight">
          Our Courses
        </h1>
        <p className="text-gray-500 text-sm sm:text-base px-4">
          Click book to open/close. Use arrows or dots to skip.
        </p>
      </div>

      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-4 sm:left-10 z-[50] p-3 rounded-full bg-white/80 shadow-lg transition-all ${
          currentIndex === 0
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-white hover:scale-110 active:scale-95"
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === booksData.length - 1}
        className={`absolute right-4 sm:right-10 z-[50] p-3 rounded-full bg-white/80 shadow-lg transition-all ${
          currentIndex === booksData.length - 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-white hover:scale-110 active:scale-95"
        }`}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="relative w-full h-[500px] flex justify-center items-center pt-[10%] [transform-style:preserve-3d]">
        {booksData.map((book, index) => {
          const bgImage = index % 2 === 0 ? RedBook : GreenBook;
          const isBookOpen = index === currentIndex && isOpen;

          return (
            <div
              key={book.id}
              onClick={() => handleInteraction(index)}
              className={`absolute w-[240px] h-[350px] sm:w-[300px] sm:h-[440px] origin-center transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] ${getPositionStyles(
                index
              )}`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full [transform-style:preserve-3d] origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-10 ${
                  isBookOpen ? "[transform:rotateY(-180deg)]" : ""
                }`}
              >
                {/* FRONT COVER */}
                <div
                  className="book-spine absolute top-0 left-0 w-full h-full rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[2] flex flex-col justify-center items-center p-6 text-center text-white transition-transform duration-[800ms]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-col h-full w-full items-start justify-end pb-8">
                    <h2 className="text-[24px] sm:text-[32px] font-extrabold text-left text-white leading-tight mb-24 ml-2 drop-shadow-md">
                      {book.title}
                    </h2>
                    <div className="text-left">
                      <span className="block text-[20px] sm:text-[20px] text-white/90 font-medium ml-5 ">
                        {book.subtitle}
                      </span>
                      <p className="block text-[20px] sm:text-[20px] text-white font-bold ml-5 ">
                        {book.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* LEFT PAGE (Back of Cover) */}
                <div className="absolute top-0 left-0 w-full h-full rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[1] bg-white [transform:rotateY(180deg)] flex flex-col justify-center items-center p-6 sm:p-10 border-r border-gray-300 transition-transform duration-[800ms]">
                  <div className="text-lg sm:text-xl font-bold mb-4 text-[#333] text-center border-b-2 border-[#f0f0f0] pb-2 w-full">
                    {book.title}
                  </div>
                  <div className="flex flex-grow items-center text-center text-[0.85rem] sm:text-[1rem] leading-[1.6] text-[#555] overflow-y-auto no-scrollbar">
                    <p className="italic">"{book.summary}"</p>
                  </div>
                  <div className="mt-auto text-[0.7rem] text-[#aaa] text-center w-full">
                    Page 1
                  </div>
                </div>
              </div>

              {/* RIGHT PAGE (Stationary) */}
              <div className="right-page-stack absolute top-0 left-0 w-full h-full rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[5] bg-white flex flex-col p-6 sm:p-10 border-l border-[#eee] transition-transform duration-[800ms]">
                <div className="text-lg sm:text-xl font-bold mb-4 text-[#333] text-center border-b-2 border-[#f0f0f0] pb-2 w-full">
                  Details
                </div>
                <div className="flex-grow text-[0.85rem] sm:text-[1rem] leading-[1.6] text-[#555] overflow-y-auto no-scrollbar">
                  <p>{book.content}</p>
                </div>
                <div className="mt-auto text-[0.7rem] text-[#aaa] text-center w-full">
                  Page 2
                </div>
              </div>

              {/* BACK COVER */}
              <div className="absolute top-0 left-0 w-full h-full rounded-[4px_8px_8px_4px] [backface-visibility:hidden] shadow-[5px_5px_20px_rgba(0,0,0,0.25)] z-[1] transition-transform duration-[800ms] [transform:translateZ(-2px)] bg-gray-200"></div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-[8%] flex items-center gap-3 z-30">
        {booksData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBook(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-3 bg-red-500"
                : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to book ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
