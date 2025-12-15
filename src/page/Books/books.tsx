import React, { useState } from "react";
import "./books.css";

import GreenBook from "../../assets/GreenBookCover.png";
import RedBook from "../../assets/RedBookCover.png";

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

      // Wait for close animation (matches CSS duration)
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

  const getPositionClass = (index: number) => {
    if (index === currentIndex) return isOpen ? "active open" : "active";
    if (index === currentIndex - 1) return "prev";
    if (index === currentIndex + 1) return "next";
    if (index < currentIndex - 1) return "hidden-left";
    return "hidden-right";
  };

  return (
    <div className="books-container">
      <div className="books-header">
        <h1>Our Courses</h1>
        <p>Click to open. Click again to continue.</p>
      </div>

      <div className="book-stage">
        {booksData.map((book, index) => {
          const bgImage = index % 2 === 0 ? RedBook : GreenBook;
          return (
            <div
              key={book.id}
              className={`book-wrapper ${getPositionClass(index)}`}
              onClick={() => handleInteraction(index)}
            >
              {/* ROTATING GROUP: Contains Front Cover & Left Page */}
              <div className="cover-group">
                {/* FRONT COVER (Visible when closed) */}
                <div
                  key={book.id}
                  className="book-cover"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <div className="decoration-circle">
                    <span>本</span>
                  </div> */}
                  <div className="cover-label">
                    <h2>{book.title}</h2>
                    <div className="bookDes">
                      <span>{book.subtitle}</span>
                      <p>{book.shortDesc}</p>
                    </div>
                  </div>
                </div>

                {/* LEFT PAGE (Visible when open - Back of Cover) */}
                <div className="left-page">
                  <div className="page-header">{book.title}</div>
                  <div
                    className="page-content"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
                      "{book.summary}"
                    </p>
                  </div>
                  <div className="page-number">Page 1</div>
                </div>
              </div>

              {/* RIGHT PAGE (Stationary - Visible when open) */}
              <div className="right-page">
                <div className="page-header">Details</div>
                <div className="page-content">
                  <p>{book.content}</p>
                </div>

                {/* Button Removed - Entire book is clickable now */}

                <div className="page-number">Page 2</div>
              </div>

              {/* BACK COVER (Static Background) */}
              <div
                className="book-back"
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
