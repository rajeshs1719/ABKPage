import React, { useState } from 'react';
import './landingPage.css';

const LandingPage: React.FC = () => {
  // Step 0: Half Globe
  // Step 1: Full Globe (Center)
  // Step 2: Show Bento Grid
  // Step 3: Show Content inside Grid
  // Step 4: Navigate (Scroll Down)
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    }
    
    // Execute Navigation immediately on Step 4 click
    if (step === 3) {
      handleNavigate();
    }
  };

  const handleNavigate = () => {
    // Scroll to the next section (Books)
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Helper classes
  const getGlobeClass = () => {
    if (step === 0) return 'half';
    return 'full';
  };

  const getGridClass = () => {
    let classes = 'bento-grid';
    if (step >= 2) classes += ' visible';
    if (step >= 3) classes += ' show-content';
    return classes;
  };

  return (
    <div className="landing-container" onClick={handleClick}>
      
      {/* 1. GLOBE */}
      <div className={`globe-wrapper ${getGlobeClass()}`}>
        <div className="globe-lines"></div>
      </div>

      {/* 2. BENTO GRID */}
      <div className={getGridClass()}>
        
        {/* --- TOP ROW --- */}
        
        {/* Top Left (Cutout Bottom-Right) */}
        <div className="grid-item item-tl">
          <div className="grid-content">
            <h3>Our Vision</h3>
            <p>Empowering students to master Japanese through immersive learning experiences.</p>
          </div>
        </div>

        {/* Top Middle (Cutout Bottom) */}
        <div className="grid-item item-tm">
          <div className="grid-content">
            <h3>JLPT Prep</h3>
            <p>Structured courses from N5 to N2 designed for exam success.</p>
          </div>
        </div>

        {/* Top Right (Cutout Bottom-Left) */}
        <div className="grid-item item-tr">
          <div className="grid-content">
            <h3>Community</h3>
            <p>Join a vibrant community of learners and native speakers.</p>
          </div>
        </div>

        {/* --- BOTTOM ROW --- */}

        {/* Bottom Left (Cutout Top-Right) */}
        <div className="grid-item item-bl">
          <div className="grid-content">
            <h3>Expert Tutors</h3>
            <p>Learn from certified instructors with years of teaching experience.</p>
          </div>
        </div>

        {/* Bottom Middle (Cutout Top) */}
        <div className="grid-item item-bm">
          <div className="grid-content">
            <div className="stats-container">
              <div className="stat-pill">
                <span>50+</span>
                <small>Instructors</small>
              </div>
              <div className="stat-pill">
                <span>1k+</span>
                <small>Students</small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right (Cutout Top-Left) */}
        <div className="grid-item item-br">
          <div className="grid-content">
            <h3>Mock Exams</h3>
            <p>Real-time simulation of test environments to boost confidence.</p>
          </div>
        </div>

      </div>

      {/* INSTRUCTION TEXT */}
      <div className="instruction-text">
        {step === 0 && "Click to Explore"}
        {step === 1 && "Click to Reveal"}
        {step === 2 && "Click to Read"}
        {step === 3 && "Click to Start Journey"}
      </div>

    </div>
  );
};

export default LandingPage;