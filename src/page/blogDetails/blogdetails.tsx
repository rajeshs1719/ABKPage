import React from "react";
import "./blogdetails.css";

// Importing assets based on your file structure
import BlogStoryBg from "../../assets/BlogStoryBg.jpeg";
import BlogStoryRocket from "../../assets/BlogStoryRocket.png";
import BlogStoryCard from "../../assets/BlogStoryCard.png";
import BlogStoryBook from "../../assets/BlogStoryBook.png";
import RoadMap from "../../assets/RoadMap.png";
import SeeingPaper from "../../assets/BlogStorySeeingPaper.png";
import Studing from "../../assets/Studing.png";
import Careers from "../../assets/Careers.png";
import Message from "../../assets/Message.png";
import Gallery1 from '../../assets/Gallery1.png'

import { useParams } from "react-router-dom";


// Using a placeholder or the sample pic if you have it.
// Assuming CuSamplePic.png is the user profile based on your list.
import ProfilePic from "../../assets/CuSamplePic.png";

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="blog-details-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-bg-wrapper">
          <img src={BlogStoryBg} alt="Background" className="blog-hero-bg" />
        </div>

        <div className="blog-hero-content">
          <h1 className="hero-title">FROM INDIA TO JAPAN</h1>
          <p className="hero-subtitle">From Nihongo to New Horizons</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="blog-content-wrapper">
        <div className="blog-content-inner">
          {/* Left Side: Profile Card */}
          <div className="profile-card-container">
            {/* The background frame image */}
            <img src={BlogStoryCard} alt="" className="profile-card-bg" />

            <div className="profile-card-content">
              <div className="profile-image-wrapper">
                {/* Fallback to a generic URL if the local asset isn't actually there in your build yet */}
                <img
                  src={ProfilePic}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150";
                  }}
                  alt="Shreyas M"
                  className="profile-img"
                />
              </div>

              <div className="profile-info">
                <h2 className="profile-name">Shreyas M</h2>
                <p className="profile-role">Software Engineer</p>
                <p className="profile-company">Rakuten Group</p>

                <div className="profile-badge">
                  <span className="badge-icon">🎓</span>
                  <span className="badge-text">JLPT N3 Graduate</span>
                </div>

                <p className="profile-date">June 2022 - March 2023</p>
              </div>
            </div>
          </div>

          {/* Right Side: Story Text */}
          <div className="story-text-container">
            <img src={BlogStoryRocket} alt="Rocket" className="story-rocket" />
            <h2 className="story-heading">My Introduction</h2>

            <div className="story-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>

              <p>
                Remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages,
              </p>
            </div>

            {/* Decorative Books Image */}
            <div className="story-footer-decoration">
              <img
                src={BlogStoryBook}
                alt="Books"
                className="decoration-books"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. How My Japanese Journey Began */}
      <div className="journey-section-card">
        <div className="journey-content">
          <h2 className="section-title">How My Japanese Journey Began</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type and scrambled it to make a type.
          </p>
        </div>
        <div className="journey-image-wrapper">
          <img src={RoadMap} alt="Roadmap" className="journey-map-img" />
        </div>
      </div>

      {/* 3. Features Container (Learning, Challenges, Career) */}
      <div className="features-container">
        {/* Learning at ABK */}
        <div className="feature-row">
          <div className="feature-image-col">
            <img
              src={SeeingPaper}
              alt="Learning at ABK"
              className="feature-img"
            />
          </div>
          <div className="feature-text-col">
            <h3 className="feature-title">Learning at ABK - AOTS DOSOKAI</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <p>
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only.
            </p>
          </div>
        </div>

        {/* Challenges (Reverse Layout) */}
        <div className="feature-row reverse">
          <div className="feature-image-col">
            <img src={Studing} alt="Challenges" className="feature-img" />
          </div>
          <div className="feature-text-col">
            <h3 className="feature-title">Challenges I faced</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
          </div>
        </div>

        {/* Career */}
        <div className="feature-row">
          <div className="feature-image-col">
            <img src={Careers} alt="Career" className="feature-img" />
          </div>
          <div className="feature-text-col">
            <h3 className="feature-title">How Japanese Helped My Career</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <p>
              the leap into electronic typesetting, Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>

      <div className="journey-section-card">
        <div className="journey-content">
          <h2 className="section-title">
            My Message to future Japanese learners
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="journey-image-wrapper">
          <img src={Message} alt="Roadmap" className="journey-map-img" />
        </div>
      </div>

      {/* 5. Moments in Japan Section */}
      <div className="moments-section">
        <h2 className="moments-title">Moments in Japan</h2>
        <div className="moments-gallery">
          <div className="moment-card">
            <img
              src={Gallery1}
              alt="Moment in Japan 1"
              className="moment-img"
            />
          </div>
          <div className="moment-card">
            <img
              src={Gallery1}
              alt="Moment in Japan 2"
              className="moment-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;