import React from "react";
import heroImage from "../../assets/GirlReadingBook.png";
import jlptBook from "../../assets/N5Book.png";
import courseContentImg from "../../assets/KanjiLetter.png";

import "./course.css";

export default function Course() {
  return (
    <div className="course-page">
      <style>{``}</style>

      {/* --- HERO SECTION --- */}
      <section className="course-hero">
        <div className="course-hero-content">
          <div className="hero-image-container">
            <img
              src={heroImage}
              alt="Student learning Japanese"
              className="hero-img"
            />
          </div>

          <div className="hero-text-content">
            <h1 className="course-title">
              JLPT N5 : <br />
              <span className="highlight">Basic Japanese Course</span>
            </h1>
            <p className="course-subtitle">
              Master the foundations of Japanese language and culture with our
              beginner-friendly JLPT N5 course
            </p>
            <button className="btn-enrol">Enrol Now</button>
          </div>
        </div>
      </section>

      {/* --- WHAT IS JLPT N5 SECTION --- */}
      <section className="about-jlpt">
        <div className="about-container">
          <div className="about-text">
            <h2>What Is JLPT N5?</h2>
            <p>
              The JLPT N5 (Japanese-Language Proficiency Test Level N5) is the
              entry-level certification for learners beginning their Japanese
              journey. It focuses on building a strong foundation in essential
              grammar, vocabulary, and sentence structures used in everyday
              situations.
            </p>
            <p className="about-note">
              You will be able to understand the script written in Hiragana,
              Katakana & Kanji.
            </p>
          </div>
          <div className="about-image">
            {/* Replaced CSS book with Image Tag */}
            <img src={jlptBook} alt="JLPT N5 Book Cover" className="book-img" />
          </div>
        </div>
      </section>

      {/* --- COURSE INFORMATION SECTION --- */}
      <section className="course-info">
        <h2 className="section-title">Course Information</h2>

        <div className="info-cards-grid">
          {/* Card 1 */}
          <div className="info-card">
            <div className="icon-box"></div>
            <h3>Duration</h3>
            <p>60 Hours</p>
            <div className="card-bar"></div>
          </div>

          {/* Card 2 */}
          <div className="info-card">
            <div className="icon-box"></div>
            <h3>Mode</h3>
            <p>Offline/Online</p>
            <div className="card-bar"></div>
          </div>

          {/* Card 3 */}
          <div className="info-card">
            <div className="icon-box"></div>
            <h3>Eligibility</h3>
            <p>No Prior Knowledge Required</p>
            <div className="card-bar"></div>
          </div>

          {/* Card 4 */}
          <div className="info-card">
            <div className="icon-box"></div>
            <h3>Materials</h3>
            <p>Books Provided</p>
            <div className="card-bar"></div>
          </div>
        </div>

        <div className="info-actions">
          <button className="btn-enrol large">Enrol Now</button>
          <button className="btn-demo">Book Demo</button>
        </div>
      </section>

      {/* --- COURSE CONTENT SECTION --- */}
      <section className="course-content">
        <h2 className="section-title">Course Content</h2>

        <div className="content-container">
          <div className="content-image-wrapper">
            {/* Replaced CSS script decoration with Image Tag */}
            <img
              src={courseContentImg}
              alt="Japanese Script Book"
              className="content-materials-img"
            />
          </div>

          <div className="content-list">
            <div className="list-item">
              <div className="bullet-square"></div>
              <p>79 – Grammatical Sentence Patterns.</p>
            </div>
            <div className="list-item">
              <div className="bullet-square"></div>
              <p>Vocabulary & Kanji drills.</p>
            </div>
            <div className="list-item">
              <div className="bullet-square"></div>
              <p>Listening & Conversation practice.</p>
            </div>
            <div className="list-item">
              <div className="bullet-square"></div>
              <p>Mock Tests & Revision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
