import React, { useState } from "react";
import "./Blog.css";
import BlogDetails from "../blogDetails/blogdetails";
import ProfilePic from "../../assets/idea.png"; // Fallback/Placeholder
import HeroBg from '../../assets/BlogLeft.png';
import CardBg from '../../assets/BlogCardmini.png'; // Imported Card Background

// --- Types ---
interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  company: string;
  graduation: string;
  period: string;
  image: string;
}

// --- Dummy Data ---
const FEATURED_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "Business Etiquettes in Japan",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Meera",
    date: "20 Jan 2025",
    image:
      "https://media.bizj.us/view/img/7077382/thinkstockphotos-480693371.jpg",
  },
  {
    id: 2,
    title: "Living in Tokyo: A Beginner's Guide",
    description:
      "Tips for finding accommodation, navigating the subway, and making friends during your first month.",
    author: "Shreyas",
    date: "22 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cracking the JLPT N2",
    description:
      "A comprehensive study guide and resource list to help you pass the N2 exam.",
    author: "Sharan",
    date: "25 Jan 2025",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    name: "Shreyas M",
    role: "Software Engineer",
    company: "Rakuten Group",
    graduation: "JLPT N3 Graduate",
    period: "June 2022 - March 2023",
    image: "https://placehold.co/150x150/e0e0e0/333?text=SM",
  },
  {
    id: 2,
    name: "Meera H S",
    role: "Software Engineer",
    company: "Rakuten Group",
    graduation: "JLPT N3 Graduate",
    period: "June 2022 - March 2023",
    image: "https://placehold.co/150x150/e0e0e0/333?text=MH",
  },
  {
    id: 3,
    name: "Sharan K",
    role: "Software Engineer",
    company: "Rakuten Group",
    graduation: "JLPT N3 Graduate",
    period: "June 2022 - March 2023",
    image: "https://placehold.co/150x150/e0e0e0/333?text=SK",
  },
  {
    id: 4,
    name: "Shreyas M",
    role: "Software Engineer",
    company: "Rakuten Group",
    graduation: "JLPT N3 Graduate",
    period: "June 2022 - March 2023",
    image: "https://placehold.co/150x150/e0e0e0/333?text=SM",
  },
  {
    id: 5,
    name: "Meera H S",
    role: "Software Engineer",
    company: "Rakuten Group",
    graduation: "JLPT N3 Graduate",
    period: "June 2022 - March 2023",
    image: "https://placehold.co/150x150/e0e0e0/333?text=MH",
  },
  {
    id: 6,
    name: "Sharan K",
    role: "Software Engineer",
    company: "Rakuten Group",
    graduation: "JLPT N3 Graduate",
    period: "June 2022 - March 2023",
    image: "https://placehold.co/150x150/e0e0e0/333?text=SK",
  },
];

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [blogVisibleCount, setBlogVisibleCount] = useState(3);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const handleReadStory = (story: SuccessStory) => {
    setSelectedStory(story);
  };

  const handleBack = () => {
    setSelectedStory(null);
  };

  const scrollToStories = () => {
    const section = document.getElementById("success-stories-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (selectedStory) {
    return <BlogDetails onBack={handleBack} storyData={selectedStory} />;
  }

  return (
    <div className="blog-page">
      {/* --- Top Hero Section --- */}
      <section className="blog-top-section">
        <div className="container-custom top-grid">
          {/* Left Hero Banner */}
          <div
            className="hero-banner"
            style={{ backgroundImage: `url(${HeroBg})` }}
          >
            <div className="hero-overlay-content">
              <h1>
                From India to Japan <br />
                <span className="hero-sub">Stories, Culture & Careers</span>
              </h1>
              <p>
                Discover inspiring journeys, Japanese cultural insights, career
                guidance, and language-learning resources — all in one place.
              </p>
              <button className="btn-primary-hero">Join Us</button>
            </div>
          </div>

          {/* Right Sidebar: Vertical Success Cards */}
          <div className="success-sidebar">
            <h3>Success Stories</h3>
            <div className="sidebar-list">
              {/* Taking the first 2 stories from the main list */}
              {SUCCESS_STORIES.slice(0, 2).map((story) => (
                <div 
                  key={story.id} 
                  className="sidebar-story-card"
                  style={{ backgroundImage: `url(${CardBg})` }}
                >
                  {/* Avatar Wrapper positioned by CSS to match background */}
                  <div className="sidebar-card-top">
                    <div className="sidebar-img-wrapper">
                      <img src={story.image} alt={story.name} />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="sidebar-text">
                      <h4>{story.name}</h4>
                      <p>
                        {story.role} <br /> {story.company}
                      </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Updated Button with onClick event */}
            <button className="btn-block-red" onClick={scrollToStories}>
              View All
            </button>
          </div>
        </div>
      </section>

      {/* --- Featured Blogs Section --- */}
      <section className="featured-section">
        <h2 className="section-title">Featured Blogs</h2>
        <div className="blogs-grid">
          {FEATURED_BLOGS.slice(0, blogVisibleCount).map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-header">
                  <h3>{blog.title}</h3>
                  <span className="arrow-icon">↗</span>
                </div>
                <p>{blog.description}</p>
                <div className="blog-meta">
                  <img
                    src="https://placehold.co/40x40"
                    alt={blog.author}
                    className="author-img"
                  />
                  <div className="meta-text">
                    <span className="author-name">{blog.author}</span>
                    <span className="blog-date">{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          {blogVisibleCount < FEATURED_BLOGS.length ? (
            <button
              className="btn-primary"
              onClick={() => setBlogVisibleCount((prev) => prev + 3)}
            >
              View More
            </button>
          ) : FEATURED_BLOGS.length > 3 ? (
            <button
              className="btn-primary"
              onClick={() => setBlogVisibleCount(3)}
            >
              View Less
            </button>
          ) : null}
        </div>
      </section>

      {/* --- Success Stories Section --- */}
      <section className="stories-section" id="success-stories-section">
        <h2 className="section-title">
          From India To Japan : Student Success Stories
        </h2>
        <div className="stories-grid">
          {SUCCESS_STORIES.slice(0, visibleCount).map((story) => (
            <div
              key={story.id}
              className="story-card"
              style={{ backgroundImage: `url(${CardBg})` }}
            >
              {/* Profile Pic Positioned by CSS */}
              <div className="story-card-top">
                <div className="main-story-avatar">
                   <img src={story.image} alt={story.name} />
                </div>
              </div>

              <div className="story-card-content">
                <h3>{story.name}</h3>
                <p className="role">
                  {story.role}
                  <br />
                  {story.company}
                </p>
                
                <div className="story-info-block">
                    <p className="grad-badge">{story.graduation}</p>
                    <p className="period">{story.period}</p>
                </div>

                <button
                  className="btn-secondary"
                  onClick={() => handleReadStory(story)}
                >
                  Read My Story
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="center-btn">
          {visibleCount < SUCCESS_STORIES.length ? (
            <button
              className="btn-primary"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              View More
            </button>
          ) : SUCCESS_STORIES.length > 6 ? (
            <button className="btn-primary" onClick={() => setVisibleCount(6)}>
              View Less
            </button>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Blog;