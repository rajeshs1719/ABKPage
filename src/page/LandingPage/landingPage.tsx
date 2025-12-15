import React from "react";

import { useEffect } from "react";

import "./landingPage.css";
import "./cherryblosson.css";

// --- IMAGE IMPORTS ---
// IMPORTANT: Please rename your uploaded files to match these names
// and move them to your 'src/assets' folder.
//
// image_177320.png -> OrangeHills.png
// image_177303.png -> RedHills.png
// image_1772fc.png -> ForegroundTrees.png
// image_17737a.jpg -> Pagoda.png (Try to use a transparent PNG if possible)
// image_1772e1.png -> LanternRound.png
// image_1772dc.png -> LanternCylinder.png

import pagoda from "../../assets/Home/1.svg"; // or .jpg
import bgHills from "../../assets/Home/2.svg";
import midHills from "../../assets/Home/3.svg";
import fgTrees from "../../assets/Home/4.svg";
import lanternRound from "../../assets/Home/5.svg";
import lanternCylinder from "../../assets/Home/6.svg";

const PETAL_COUNT = 100;

const LandingPage: React.FC = () => {
 useEffect(() => {
  const container = document.querySelector(".landing-page-container");
  if (!container) return;

  const petals: HTMLDivElement[] = [];

  for (let i = 0; i < PETAL_COUNT; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    const size = Math.random() * 6 + 10;
    const drift = Math.random() * 200 - 100; // 🔥 random left/right
    const rotate = Math.random() * 360;
    const duration = Math.random() * 6 + 8;
    const delay = Math.random() * 5;

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * 100}%`;

    // 🔥 CSS variables for randomness
    petal.style.setProperty("--drift", `${drift}px`);
    petal.style.setProperty("--rotate", `${rotate}deg`);

    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;

    container.appendChild(petal);
    petals.push(petal);
  }

  return () => {
    petals.forEach(p => p.remove());
  };
}, []);

  return (
    <div className="landing-page-container">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="LP-hero-title">
              Start your Japanese learning journey here!
            </h1>

            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sed massa blandit, faucibus quam sed, feugiat massa.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-demo">Book Demo</button>
              <button className="btn btn-start">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Right/Bottom Visuals Section (Layers) */}
      <div className="hero-visuals">
        {/* Layer 1: Furthest Background (Orange Dunes/Hills) */}
        <img
          src={bgHills}
          alt="Background Hills"
          className="layer layer-bg-hills"
        />

        {/* Layer 2: Middle Ground (Red Hills) */}
        <img
          src={midHills}
          alt="Middle Red Hills"
          className="layer layer-mid-hills"
        />

        {/* Layer 3: Main Subject (Pagoda & Houses) */}
        <img
          src={pagoda}
          alt="Pagoda and Houses"
          className="layer layer-pagoda"
        />

        {/* Layer 4: Foreground (Dark Red Trees) */}
        <img
          src={fgTrees}
          alt="Foreground Trees"
          className="layer layer-fg-trees"
        />

        {/* Layer 5: Floating Elements (Lanterns) */}
        <img src={lanternRound} alt="Lantern" className="lantern lantern-1" />
        <img
          src={lanternCylinder}
          alt="Lantern"
          className="lantern lantern-2"
        />
      </div>
    </div>
  );
};

export default LandingPage;
