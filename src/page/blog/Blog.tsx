import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// --- Mock Navigation (To allow running in single file without Router setup) ---
const useNavigate = () => {
  return (path) => console.log("Navigating to:", path);
};

// --- Mock Data ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "Business Etiquettes in Japan",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1545987796-200677ea10eb?auto=format&fit=crop&q=80&w=800",
    author: "Meera",
    date: "28 Jan 2025",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const SUCCESS_STORIES = [
  {
    id: 1,
    name: "Shreyas M",
    role: "Software Engineer",
    company: "Rakuten Group",
    detail: "JLPT N2 Graduate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Moving to Japan was a life-changing experience. The work culture at Rakuten is dynamic, and achieving my JLPT N2 certification was the key to my seamless integration into the engineering team.",
  },
  {
    id: 2,
    name: "Meera H S",
    role: "Software Engineer",
    company: "Rakuten Group",
    detail: "JLPT N3 Graduate",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description:
      "The journey from learning basic hiragana to writing production code in Tokyo has been incredible. The support system and structured language curriculum made all the difference.",
  },
  {
    id: 3,
    name: "Sharan K",
    role: "Software Engineer",
    company: "Rakuten Group",
    detail: "JLPT N3 Graduate - June 2022",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    description:
      "Adapting to the Japanese work environment was challenging but rewarding. My N3 proficiency helped me communicate effectively and build strong relationships with my international team.",
  },
  {
    id: 4,
    name: "Anjali P",
    role: "Product Manager",
    company: "Sony Corp",
    detail: "JLPT N1 Graduate",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    description:
      "Managing cross-functional teams requires deep cultural and linguistic understanding. Reaching N1 level empowered me to confidently lead major product initiatives in Tokyo.",
  },
  {
    id: 5,
    name: "Rohan D",
    role: "Data Scientist",
    company: "Line Corp",
    detail: "JLPT N2 Graduate",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    description:
      "Japan's tech sector is booming with opportunities. The combination of my technical skills and Japanese language ability opened doors I never thought possible.",
  },
];

// --- Sub-Components ---

/**
 * Featured Blog Carousel
 */
const FeaturedBlogCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const navigate = useNavigate();

  // Responsive logic for carousel items
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsToShow);
  const goToSlide = (i) => setCurrentIndex(Math.min(Math.max(0, i), maxIndex));

  return (
    <div className="bg-[#F5EFE7] w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-[2px] bg-gray-500"></span>
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider">
            Featured Blogs
          </h2>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden w-full pb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {items.map((blog) => (
              <div
                key={blog.id}
                className="flex-none px-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight max-w-[85%]">
                        {blog.title}
                      </h3>
                      <div className="text-gray-400 hover:text-[#3f5238] transition-colors cursor-pointer">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <img
                        src={blog.authorImg}
                        alt={blog.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-800">
                          {blog.author}
                        </span>
                        <span className="text-xs text-gray-500">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-[#c41e3a]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Grid Layout (Success Stories - Bottom Section)
 */
const StudentSuccessGrid = ({ items }) => {
  return (
    <div
      id="success-stories-section"
      className="w-full bg-gradient-to-l from-[#FEE5C1] to-[#FDF8F2] py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-2 justify-center lg:justify-start">
          <span className="w-10 h-[2px] bg-gray-500"></span>
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider">
            Our Success Stories
          </h2>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center lg:text-left">
          From India To Japan: Student Success Stories
        </h3>

        {/* Grid Container for Cards (3 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col items-start p-8 text-left border-b-[6px] border-[#3f5238] shadow-lg relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Subtle Background Deco */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-0 opacity-50 transition-colors group-hover:bg-green-100"></div>

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-6 z-10 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="z-10 w-full flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <div className="text-sm font-semibold text-gray-600">
                  {item.role}
                </div>
                <div className="text-sm text-gray-500 mb-4">{item.company}</div>
                <div className="text-sm text-gray-800 font-medium mb-4 bg-gray-50 py-2 px-3 rounded-md border border-gray-100 inline-block self-start">
                  {item.detail}
                </div>

                {/* Description Text directly in the card */}
                <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function App() {
  const scrollToSuccessStories = () => {
    const section = document.getElementById("success-stories-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] font-sans text-gray-800 flex flex-col">
      {/* Google Font Import (Noto Sans) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Noto Sans', sans-serif; }
        
        /* Custom Scrollbar for Sidebar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `,
        }}
      />

      <div className="flex-grow">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Changed width proportions to w-[65%] and w-[35%] and set equal heights */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full items-stretch lg:h-[580px]">
            {/* Banner Left */}
            <div
              className="w-full lg:w-[65%] relative rounded-[2rem] p-8 lg:p-14 flex flex-col justify-center items-start shadow-md overflow-hidden bg-cover bg-center min-h-[450px] lg:h-full"
              style={{
                // Replaced fallback with a URL that mimics the cherry blossom background if yours is unavailable
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=2070')",
              }}
            >
              {/* Refined gradient overlay to let the background pop while keeping text readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-0"></div>

              <div className="relative z-10 text-white max-w-lg">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-4 drop-shadow-md tracking-tight">
                  From India to Japan
                  <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 mt-3 block drop-shadow-sm tracking-normal">
                    Stories, Culture & Careers
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-100/90 mb-8 leading-relaxed drop-shadow-sm max-w-sm">
                  Discover inspiring journeys, Japanese cultural insights,
                  career guidance, and language-learning resources — all in one
                  place.
                </p>
                <button className="bg-[#c41e3a] text-white px-8 py-3.5 rounded-xl font-bold text-base sm:text-lg shadow-[0_8px_20px_rgba(196,30,58,0.3)] hover:bg-[#a01830] transition-all hover:-translate-y-0.5 transform tracking-wide">
                  Join Us
                </button>
              </div>
            </div>

            {/* Success Sidebar Right */}
            <div className="w-full lg:w-[35%] bg-white border border-gray-100 rounded-[2rem] p-6 lg:p-8 flex flex-col shadow-md min-h-[450px] lg:h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-5 pb-4 border-b border-gray-100 tracking-tight">
                Success Stories
              </h3>

              {/* Scrollable list takes up the remaining height perfectly */}
              <div className="flex flex-col gap-4 flex-grow overflow-y-auto custom-scrollbar pr-3">
                {SUCCESS_STORIES.map((story) => (
                  <div
                    key={story.id}
                    className="flex items-center gap-4 bg-[#fbfaf8] p-4 rounded-2xl border-l-[4px] border-[#3f5238] hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">
                        {story.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#3f5238] mt-1">
                        {story.role}{" "}
                        <span className="text-gray-400 mx-1">•</span>{" "}
                        <span className="font-normal text-gray-600">
                          {story.company}
                        </span>
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1.5 bg-white border border-gray-200 px-2 py-0.5 rounded-md inline-block self-start shadow-sm">
                        {story.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToSuccessStories}
                className="w-full mt-6 bg-[#3f5238] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#2c3927] transition-all shadow-[0_8px_15px_rgba(63,82,56,0.2)] hover:-translate-y-0.5"
              >
                View All Stories
              </button>
            </div>
          </div>
        </div>

        {/* FEATURED BLOGS SECTION */}
        <FeaturedBlogCarousel items={BLOG_POSTS} />

        {/* STUDENT SUCCESS STORIES - NOW A GRID */}
        <StudentSuccessGrid items={SUCCESS_STORIES} />
      </div>
    </div>
  );
}
