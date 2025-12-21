import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import "./Blog.css";
import { useNavigate } from "react-router-dom";

// --- Types ---

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  authorImg: string;
}

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  company: string;
  detail: string;
  image: string;
}

// --- Mock Data (Based on Reference) ---

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Business Etiquettes in Japan",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image:
      "https://i.pinimg.com/736x/02/cf/84/02cf84c076f8accc1d29c9d74c29a7f0.jpg", // Japan red sun style
    author: "Meera",
    date: "20 Jan 2025",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    title: "Mastering Keigo Honorifics",
    excerpt:
      "Understanding the subtle nuances of polite language is key to business success in Tokyo.",
    image:
      "https://i.pinimg.com/736x/02/cf/84/02cf84c076f8accc1d29c9d74c29a7f0.jpg",
    author: "Meera",
    date: "22 Jan 2025",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    title: "Living in Kyoto vs Tokyo",
    excerpt:
      "A comparative guide for students deciding where to begin their Japanese journey.",
    image:
      "https://i.pinimg.com/736x/02/cf/84/02cf84c076f8accc1d29c9d74c29a7f0.jpg",
    author: "Meera",
    date: "25 Jan 2025",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    title: "The Art of Tea Ceremony",
    excerpt:
      "Exploring the meditative practice that defines traditional Japanese culture.",
    image:
      "https://i.pinimg.com/736x/02/cf/84/02cf84c076f8accc1d29c9d74c29a7f0.jpg",
    author: "Meera",
    date: "28 Jan 2025",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    name: "Shreyas M",
    role: "Software Engineer",
    company: "Rakuten Group",
    detail: "JLPT N2 Graduate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Meera H S",
    role: "Software Engineer",
    company: "Rakuten Group",
    detail: "JLPT N3 Graduate",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Sharan K",
    role: "Software Engineer",
    company: "Rakuten Group",
    detail: "JLPT N3 Graduate - June 2022",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 4,
    name: "Anjali P",
    role: "Product Manager",
    company: "Sony Corp",
    detail: "JLPT N1 Graduate",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 5,
    name: "Rohan D",
    role: "Data Scientist",
    company: "Line Corp",
    detail: "JLPT N2 Graduate",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

// --- Sub-Components ---

/**
 * Featured Blog Carousel
 */
const FeaturedBlogCarousel: React.FC<{ items: BlogPost[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const maxIndex = Math.max(0, items.length - itemsToShow);

  const goToSlide = (i: number) =>
    setCurrentIndex(Math.min(Math.max(0, i), maxIndex));

  const goToDetails = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="fb-container">
      <div className="section-header">
        <span className="dash-line"></span>
        <h2 className="section-title-text">Featured Blogs</h2>
      </div>

      <div className="fb-track-window">
        <div
          className="fb-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {items.map((blog) => (
            <div key={blog.id} className="fb-card-wrapper">
              <div className="fb-card">
                <div className="fb-image-box">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="fb-content">
                  <div className="fb-title-row">
                    <h3 className="fb-card-title">{blog.title}</h3>
                    <div className="arrow-icon">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                  <p className="fb-excerpt">{blog.excerpt}</p>
                  <div className="fb-footer">
                    <img
                      src={blog.authorImg}
                      alt={blog.author}
                      className="author-img"
                    />
                    <div className="author-info">
                      <span className="author-name">{blog.author}</span>
                      <span className="post-date">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Active Enlarged Carousel (Success Stories - Bottom Section)
 */
const StudentSuccessCarousel: React.FC<{ items: SuccessStory[] }> = ({
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Sharan K (index 2)
  const navigate = useNavigate();
  const handleNext = () => setActiveIndex((p) => (p + 1) % items.length);
  const handlePrev = () =>
    setActiveIndex((p) => (p - 1 + items.length) % items.length);
  const goToDetails = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="ss-full-section">
      <div className="ss-container">
        <div className="section-header">
          <span className="dash-line"></span>
          <h2 className="section-title-text">Our Success Stories</h2>
        </div>
        <h3 className="ss-subtitle">
          From India To Japan : Student Success Stories
        </h3>

        <div className="ss-stage">
          {items.map((item, index) => {
            let status = "";
            if (index === activeIndex) status = "active";
            else if (index === (activeIndex - 1 + items.length) % items.length)
              status = "prev";
            else if (index === (activeIndex + 1) % items.length)
              status = "next";
            else status = "hidden";

            return (
              <div key={item.id} className={`ss-card ${status}`}>
                <div className="ss-card-inner">
                  <div className="ss-profile-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="ss-content">
                    <h3 className="ss-name">{item.name}</h3>
                    <div className="ss-role">{item.role}</div>
                    <div className="ss-company">{item.company}</div>
                    <div className="ss-detail">{item.detail}</div>
                    <button
                      className="ss-btn"
                      onClick={() => goToDetails(item.id)}
                    >
                      Read My Story
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <button onClick={handlePrev} className="ss-nav-btn left">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="ss-nav-btn right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function BlogAndStoriesPage() {
  return (
    <>
      <style>{` `}</style>

      <div className="wrapper">
        <div className="container">
          {/* HERO ROW: Banner Left + Success Sidebar Right */}
          <div className="hero-row">
            <div className="hero-banner">
              <h1 className="hero-title">
                From India to Japan
                <br />
                <span style={{ fontSize: "0.6em", fontWeight: 400 }}>
                  Stories, Culture & Careers
                </span>
              </h1>
              <p className="hero-subtitle">
                Discover inspiring journeys, Japanese cultural insights, career
                guidance, and language-learning resources — all in one place.
              </p>
              <button className="join-btn">Join Us</button>
            </div>

            <div className="hero-sidebar">
              <h3 className="sidebar-title">Success Stories</h3>
              <div className="sidebar-list">
                {/* Show first 4 only */}
                {SUCCESS_STORIES.slice(0, 4).map((story) => (
                  <div key={story.id} className="sidebar-item">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="sb-avatar"
                    />
                    <div className="sb-info">
                      <h4>{story.name}</h4>
                      <p>
                        {story.role} - {story.company}
                      </p>
                      <p style={{ fontSize: "0.7em", color: "#888" }}>
                        {story.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">View All</button>
            </div>
          </div>

          {/* FEATURED BLOGS SECTION */}
          <FeaturedBlogCarousel items={BLOG_POSTS} />
        </div>

        {/* STUDENT SUCCESS STORIES (Green Background) */}
        <StudentSuccessCarousel items={SUCCESS_STORIES} />
      </div>
    </>
  );
}
