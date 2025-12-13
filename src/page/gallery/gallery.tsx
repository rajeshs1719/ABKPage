import { useEffect, useState } from "react";
import { LucideMapPin } from "lucide-react";

import "./gallery.css"

// --- CONSTANTS & MOCK DATA ---
const COLORS = {
  pinRed: "#e74c3c",
  pinBlue: "#3498db",
  pinPurple: "#9b59b6",
  pinDark: "#333333",
  bgGreen: "#cddbc8",
  textDark: "#1a1a1a",
  textLight: "#555555",
};

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  pinColor: string;
}

// Updated to accept a page number for pagination simulation
const fetchMockApiData = async (page: number = 1): Promise<GalleryItem[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Page 1: Return the original curated list
  if (page === 1) {
    return [
      {
        id: 1,
        url: "https://picsum.photos/id/1059/400/400",
        caption: "JAPANESE FESTIVAL 2023",
        pinColor: COLORS.pinRed,
      },
      {
        id: 2,
        url: "https://picsum.photos/id/1062/400/400",
        caption: "STUDENT EXCHANGE",
        pinColor: COLORS.pinRed,
      },
      {
        id: 3,
        url: "https://picsum.photos/id/1074/400/400",
        caption: "TEA CEREMONY",
        pinColor: COLORS.pinRed,
      },
      {
        id: 4,
        url: "https://picsum.photos/id/103/400/400",
        caption: "OUTDOOR SESSION",
        pinColor: COLORS.pinRed,
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
        pinColor: COLORS.pinRed,
      },
    ];
  }

  // Subsequent Pages: Generate random data
  // We offset the ID to avoid key collisions with previous pages
  const startId = (page - 1) * 6 + 1;
  const captions = [
    "ART CLASS",
    "SUMMER CAMP",
    "SCIENCE FAIR",
    "SPORTS DAY",
    "MUSIC RECITAL",
    "FIELD TRIP",
    "COMMUNITY SERVICE",
    "ROBOTICS CLUB"
  ];
  const pinColors = [COLORS.pinRed, COLORS.pinBlue, COLORS.pinPurple, COLORS.pinDark];

  return Array.from({ length: 6 }).map((_, index) => {
    const uniqueId = startId + index;
    // Use a deterministic way to pick images/colors based on ID so it feels stable
    const randomImgId = 200 + uniqueId + (index * 5); 
    
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
  
  // New state for pagination
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  // Initial Load
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

  // Handler for Load More button
  const handleLoadMore = async () => {
    setLoadingMore(true);
    try {
      const nextPage = page + 1;
      const newItems = await fetchMockApiData(nextPage);
      
      // Append new items to existing list
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to load more items", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="gallery-page-container">
      {/* INLINE STYLES FOR DEMO ONLY 
         (In a real app, keep these in your CSS file as provided below)
      */}
      

      {/* SECTION 1: Static Hero */}
      <section className="hero-section">
        <div className="Gallery-text">
          <h1>
            Our Learning
            <br />
            Legacy in Pictures
          </h1>
          <p>
            A visual journey through decades
            <br />
            of excellence in Japanese education.
          </p>
        </div>

        {/* Static Polaroids - Repositioned classes */}
        <div className="polaroid p-1">
          <div
            className="pin-head"
            style={{ backgroundColor: COLORS.pinPurple }}
          ></div>
          <img src="https://picsum.photos/id/1015/300/300" alt="Legacy" />
          <div className="caption">CULTURAL FEST</div>
        </div>

        <div className="polaroid p-2">
          <div
            className="pin-head"
            style={{ backgroundColor: COLORS.pinBlue }}
          ></div>
          <img src="https://picsum.photos/id/1011/300/300" alt="Legacy" />
          <div className="caption">BATCH 1998</div>
        </div>

        <div className="polaroid p-3">
          <div
            className="pin-head"
            style={{ backgroundColor: COLORS.pinDark }}
          ></div>
          <img src="https://picsum.photos/id/1025/300/300" alt="Legacy" />
          <div className="caption">VISITORS</div>
        </div>

        <div className="polaroid p-4">
          <div
            className="pin-head"
            style={{ backgroundColor: COLORS.pinPurple }}
          ></div>
          <img src="https://picsum.photos/id/106/300/300" alt="Legacy" />
          <div className="caption">MEMORIES</div>
        </div>

        <div className="polaroid p-5">
          <div
            className="pin-head"
            style={{ backgroundColor: COLORS.pinRed }}
          ></div>
          <img src="https://picsum.photos/id/1035/300/300" alt="Legacy" />
          <div className="caption">WORKSHOP</div>
        </div>
      </section>

      {/* SECTION 2: Dynamic Gallery */}
      <section className="gallery-section">
        {loading ? (
          <div
            style={{
              textAlign: "center",
              width: "100%",
              padding: "40px",
              color: "#666",
            }}
          >
            <p>Loading gallery items...</p>
          </div>
        ) : (
          <>
            <div className="gallery-grid">
              {items.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div
                    className="gallery-pin"
                    style={{ backgroundColor: item.pinColor }}
                  />
                  <img src={item.url} alt={item.caption} />
                  <div className="gallery-caption">{item.caption}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <button 
                className="btn-load-more" 
                onClick={handleLoadMore}
                disabled={loadingMore}
              >
                {loadingMore ? 'Loading...' : 'Load More Memories'}
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}