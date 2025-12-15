import { useEffect, useState } from "react";
import "./gallery.css";

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
    <div className="gallery-page-container">
      {/* SECTION 1: Adaptive Hero */}
      <section className="hero-section">
        <div className="Gallery-text">
          <h1>
            Our Learning
            <br />
            Legacy in Pictures
          </h1>
          <p>
            A visual journey through decades of excellence in Japanese
            education.
          </p>
        </div>

        {/* Decorative Polaroids 
          Classes p-1 to p-5 handle positioning.
          On mobile, p-1 to p-3 form a stack, p-4/p-5 are hidden.
        */}
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

      {/* SECTION 2: Gallery Grid */}
      <section className="gallery-section">
        <h1 className="Gallery-Title">Here is a Photo bump of all Activiates, Events, Celebration..</h1>
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
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
                {loadingMore ? "Developing Memories..." : "Load More Memories"}
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
