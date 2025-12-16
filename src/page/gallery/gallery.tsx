import { useEffect, useState } from "react";

// --- CONSTANTS ---
const COLORS = {
  pinRed: "#e74c3c",
  pinBlue: "#3498db",
  pinPurple: "#9b59b6",
  pinDark: "#333333",
};

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  pinColor: string;
}

// Mock API
const fetchMockApiData = async (page: number = 1): Promise<GalleryItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (page === 1) {
    return [
      {
        id: 1,
        url: "https://picsum.photos/id/1059/400/400",
        caption: "JAPANESE FESTIVAL",
        pinColor: COLORS.pinRed,
      },
      {
        id: 2,
        url: "https://picsum.photos/id/1062/400/400",
        caption: "STUDENT EXCHANGE",
        pinColor: COLORS.pinBlue,
      },
      {
        id: 3,
        url: "https://picsum.photos/id/1074/400/400",
        caption: "TEA CEREMONY",
        pinColor: COLORS.pinPurple,
      },
      {
        id: 4,
        url: "https://picsum.photos/id/103/400/400",
        caption: "OUTDOOR SESSION",
        pinColor: COLORS.pinDark,
      },
      {
        id: 5,
        url: "https://picsum.photos/id/124/400/400",
        caption: "GRADUATION DAY",
        pinColor: COLORS.pinRed,
      },
      {
        id: 6,
        url: "https://picsum.photos/id/158/400/400",
        caption: "DANCE PERFORMANCE",
        pinColor: COLORS.pinBlue,
      },
    ];
  }

  const startId = (page - 1) * 6 + 1;
  const captions = [
    "ART CLASS",
    "SUMMER CAMP",
    "SCIENCE FAIR",
    "SPORTS DAY",
    "MUSIC RECITAL",
    "FIELD TRIP",
  ];
  const pinColors = [
    COLORS.pinRed,
    COLORS.pinBlue,
    COLORS.pinPurple,
    COLORS.pinDark,
  ];

  return Array.from({ length: 6 }).map((_, index) => {
    const uniqueId = startId + index;
    const randomImgId = 200 + uniqueId + index * 5;
    return {
      id: uniqueId,
      url: `https://picsum.photos/id/${randomImgId}/400/400`,
      caption: captions[uniqueId % captions.length],
      pinColor: pinColors[uniqueId % pinColors.length],
    };
  });
};

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMockApiData(1);
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch gallery", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const newItems = await fetchMockApiData(nextPage);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to load more items", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="font-[Poppins,sans-serif] overflow-x-hidden w-full bg-[#fdfcf8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;500;600&family=Courier+Prime&display=swap');
        
        .polaroid-hover:hover {
          transform: scale(1.1) rotate(0deg) !important;
          z-index: 70;
        }
        
        .gallery-item-hover:hover {
          transform: translateY(-5px) rotate(0deg) !important;
        }
      `}</style>

      {/* SECTION 1: Adaptive Hero */}
      <section
        className="relative min-h-[100vh] md:min-h-[85vh] lg:min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-5 py-16 md:py-20 overflow-hidden bg-[#fdfcf8]"
        style={{
          backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="text-center max-w-[850px] z-[80] relative p-5 md:p-[20px_72px] rounded-[28px]">
          <h1 className="font-[Playfair_Display,serif] text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#1a1a1a] mb-4 leading-tight tracking-tight">
            Our Learning
            <br />
            Legacy in Pictures
          </h1>
          <p className="text-[#666] leading-relaxed text-lg md:text-xl font-light m-0">
            A visual journey through decades of excellence in Japanese
            education.
          </p>
        </div>

        {/* Decorative Polaroids */}
        {/* Top Left - Desktop / Mobile Top Left */}
        <div className="polaroid-hover absolute w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 md:pb-11 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-10 cursor-pointer top-[5%] sm:top-[6%] md:top-[8%] left-[2%] sm:left-[3%] md:left-[5%] lg:left-[10%] -rotate-[8deg] sm:-rotate-[10deg] md:-rotate-[12deg]">
          <div
            className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[1px_2px_4px_rgba(0,0,0,0.3)] z-[5]"
            style={{ backgroundColor: COLORS.pinPurple }}
          />
          <img
            src="https://picsum.photos/id/1015/300/300"
            alt="Legacy"
            className="w-full h-[130px] sm:h-[150px] md:h-[180px] lg:h-[190px] object-cover bg-gray-200 sepia-[0.15] hover:sepia-0 transition-[filter] duration-300"
          />
          <div className="text-center absolute bottom-2 sm:bottom-2.5 md:bottom-[15px] left-0 right-0 font-[Courier_Prime,monospace] text-[10px] sm:text-xs text-[#333] font-semibold tracking-wide">
            CULTURAL FEST
          </div>
        </div>

        {/* Top Right */}
        <div className="polaroid-hover absolute w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 md:pb-11 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-10 cursor-pointer top-[5%] sm:top-[6%] md:top-[8%] right-[2%] sm:right-[3%] md:right-[5%] lg:right-[10%] rotate-[8deg] sm:rotate-[9deg] md:rotate-[10deg]">
          <div
            className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[1px_2px_4px_rgba(0,0,0,0.3)] z-[5]"
            style={{ backgroundColor: COLORS.pinBlue }}
          />
          <img
            src="https://picsum.photos/id/1011/300/300"
            alt="Legacy"
            className="w-full h-[130px] sm:h-[150px] md:h-[180px] lg:h-[190px] object-cover bg-gray-200 sepia-[0.15] hover:sepia-0 transition-[filter] duration-300"
          />
          <div className="text-center absolute bottom-2 sm:bottom-2.5 md:bottom-[15px] left-0 right-0 font-[Courier_Prime,monospace] text-[10px] sm:text-xs text-[#333] font-semibold tracking-wide">
            BATCH 1998
          </div>
        </div>

        {/* Bottom Left */}
        <div className="polaroid-hover absolute w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 md:pb-11 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-10 cursor-pointer bottom-[5%] sm:bottom-[7%] md:bottom-[10%] left-[5%] sm:left-[6%] md:left-[8%] lg:left-[15%] rotate-[6deg] md:rotate-[6deg]">
          <div
            className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[1px_2px_4px_rgba(0,0,0,0.3)] z-[5]"
            style={{ backgroundColor: COLORS.pinDark }}
          />
          <img
            src="https://picsum.photos/id/1025/300/300"
            alt="Legacy"
            className="w-full h-[130px] sm:h-[150px] md:h-[180px] lg:h-[190px] object-cover bg-gray-200 sepia-[0.15] hover:sepia-0 transition-[filter] duration-300"
          />
          <div className="text-center absolute bottom-2 sm:bottom-2.5 md:bottom-[15px] left-0 right-0 font-[Courier_Prime,monospace] text-[10px] sm:text-xs text-[#333] font-semibold tracking-wide">
            VISITORS
          </div>
        </div>

        {/* Bottom Right */}
        <div className="polaroid-hover absolute w-[130px] sm:w-[150px] md:w-[180px] lg:w-[200px] bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 md:pb-11 shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-10 cursor-pointer bottom-[5%] sm:bottom-[7%] md:bottom-[10%] right-[5%] sm:right-[6%] md:right-[8%] lg:right-[15%] -rotate-[6deg] md:-rotate-[8deg]">
          <div
            className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[1px_2px_4px_rgba(0,0,0,0.3)] z-[5]"
            style={{ backgroundColor: COLORS.pinPurple }}
          />
          <img
            src="https://picsum.photos/id/106/300/300"
            alt="Legacy"
            className="w-full h-[130px] sm:h-[150px] md:h-[180px] lg:h-[190px] object-cover bg-gray-200 sepia-[0.15] hover:sepia-0 transition-[filter] duration-300"
          />
          <div className="text-center absolute bottom-2 sm:bottom-2.5 md:bottom-[15px] left-0 right-0 font-[Courier_Prime,monospace] text-[10px] sm:text-xs text-[#333] font-semibold tracking-wide">
            MEMORIES
          </div>
        </div>
      </section>

      {/* SECTION 2: Gallery Grid */}
      <section className="px-5 sm:px-8 md:px-[8%] py-8 md:py-[30px] min-h-screen bg-[#f8f9fa]">
        <h1 className="my-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333]">
          Here is a Photo bump of all Activities, Events, Celebration..
        </h1>
        {loading ? (
          <div className="text-center py-10 text-[#666]">
            <p>Loading gallery items...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[50px] mb-[60px]">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-item-hover bg-white p-2.5 pb-[60px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] relative transition-all duration-300 rounded-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:z-[2] ${
                    index % 2 === 0 ? "md:rotate-1" : "md:-rotate-1"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                    style={{ backgroundColor: item.pinColor }}
                  />
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-[250px] sm:h-[260px] md:h-[280px] object-cover block"
                  />
                  <div className="text-center absolute bottom-5 w-full left-0 font-[Poppins,sans-serif] font-medium text-sm text-[#333] uppercase tracking-widest">
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                className="bg-[#2c3e50] text-white px-8 sm:px-12 py-3 sm:py-4 border-none text-sm font-semibold tracking-[2px] uppercase cursor-pointer transition-all duration-300 rounded-full shadow-[0_5px_15px_rgba(44,62,80,0.2)] hover:bg-[#e74c3c] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(231,76,60,0.3)] disabled:bg-[#ccc] disabled:cursor-not-allowed disabled:transform-none"
                onClick={handleLoadMore}
                disabled={loadingMore}
              >
                {loadingMore ? "Developing Memories..." : "Load More Memories"}
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
