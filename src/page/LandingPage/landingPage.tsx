import React from 'react';
import './landingPage.css';

// Import the image from your assets folder. 
// Note: We use the exact filename "Desktop - 31.png" as shown in your directory list.
import HeroBg from '../../assets/HeroBg.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-container">
      {/* Hero Section */}
      {/* FIX: Apply the background image using the style prop.
         This connects the imported 'HeroBg' variable to the CSS background-image property.
      */}
      <section 
        className="landing-hero" 
        style={{ backgroundImage: `url('${HeroBg}')` }}
      >
        <div className="landing-hero-overlay"></div>
        
        <div className="landing-hero-content">
          <h1 className="landing-title">
            Start your Japanese <br />
            learning journey here
          </h1>
          
          <p className="landing-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer sed massa blandit, faucibus quam sed, feugiat massa.
          </p>
          
          <div className="landing-cta-group">
            <button className="Get-Started">Get Started</button>
            <button className="Book-Demo-btn">Book Demo</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;