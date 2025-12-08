import { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import './gallery.css';

// --- 1. IMPORT IMAGES HERE ---
// This tells Vite exactly where the files are
import heroBg from '../../assets/Gallery1Bg.png';
import galleryBg from '../../assets/Gallery2Bg.png';

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  pinColor: string;
}

const fetchMockApiData = async (): Promise<GalleryItem[]> => {
  const mockResponse: GalleryItem[] = [
    { id: 1, url: "https://picsum.photos/id/1059/400/400", caption: "JAPANESE FESTIVAL 2023", pinColor: COLORS.pinRed },
    { id: 2, url: "https://picsum.photos/id/1062/400/400", caption: "STUDENT EXCHANGE", pinColor: COLORS.pinRed },
    { id: 3, url: "https://picsum.photos/id/1074/400/400", caption: "TEA CEREMONY", pinColor: COLORS.pinRed },
    { id: 4, url: "https://picsum.photos/id/103/400/400", caption: "OUTDOOR SESSION", pinColor: COLORS.pinRed },
    { id: 5, url: "https://picsum.photos/id/124/400/400", caption: "GRADUATION DAY", pinColor: COLORS.pinRed },
    { id: 6, url: "https://picsum.photos/id/158/400/400", caption: "DANCE PERFORMANCE", pinColor: COLORS.pinRed }
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockResponse), 800);
  });
};

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMockApiData();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch gallery", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <>
      {/* SECTION 1: Static Hero */}
      <section 
        className="hero-section responsive-hero"
        // --- 2. APPLY BACKGROUND VIA INLINE STYLE ---
        style={{
            background: `linear-gradient(rgba(253, 251, 247, 0.9), rgba(253, 251, 247, 0.9)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-text">
            <h1>Our Learning<br/>Legacy in Pictures</h1>
            <p>A visual journey through decades<br/>of excellence in Japanese education.</p>
        </div>

        {/* Static Polaroids */}
        <div className="polaroid p-1">
            <div className="pin" style={{backgroundColor: 'var(--pin-purple)'}}></div>
            <img src="https://picsum.photos/id/1015/200/200" alt="Legacy" />
            <div className="caption">CULTURAL FEST</div>
        </div>

        <div className="polaroid p-2">
            <div className="pin" style={{backgroundColor: 'var(--pin-blue)'}}></div>
            <img src="https://picsum.photos/id/1011/200/200" alt="Legacy" />
            <div className="caption">BATCH 1998</div>
        </div>

        <div className="polaroid p-3">
            <div className="pin" style={{backgroundColor: '#333'}}></div>
            <img src="https://picsum.photos/id/1025/200/200" alt="Legacy" />
            <div className="caption">VISITORS</div>
        </div>

        <div className="polaroid p-4">
            <div className="pin" style={{backgroundColor: 'var(--pin-purple)'}}></div>
            <img src="https://picsum.photos/id/106/200/200" alt="Legacy" />
            <div className="caption">LOREM</div>
        </div>

        <div className="polaroid p-5">
            <div className="pin" style={{backgroundColor: 'var(--pin-red)'}}></div>
            <img src="https://picsum.photos/id/1035/200/200" alt="Legacy" />
            <div className="caption">WORKSHOP</div>
        </div>
      </section>

      {/* SECTION 2: Dynamic Gallery */}
      <section 
        className="gallery-section"
        // --- 3. APPLY BACKGROUND VIA INLINE STYLE ---
        style={{
            background: `linear-gradient(rgba(205, 219, 200, 0.9), rgba(205, 219, 200, 0.9)), url(${galleryBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }}
      >
        {loading ? (
          <p style={{textAlign: 'center', width: '100%', padding: '40px'}}>Loading gallery...</p>
        ) : (
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
        )}

        <div className="load-more-container">
            <button className="btn-load-more">Load More</button>
        </div>
      </section>
    </>
  );
}