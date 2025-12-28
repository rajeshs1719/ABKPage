import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default function WhatsAppCommunityCard() {
  return (
    <>
      <style>{`
        .community-card {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 24px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 64px 24px;
          margin: 40px auto;
        }

        .community-card-inner {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .community-card-content {
          z-index: 10;
          max-width: 576px;
          text-align: left;
        }

        .community-card-title {
          font-size: 1.875rem;
          font-weight: 400;
          color: #111827;
          line-height: 1.3;
        }

        .community-card-highlight {
          color: #3b82f6;
        }

        .community-card-description {
          color: #6b7280;
        }

        .community-card-button {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 9999px;
          background: #ffffffff;
          padding: 8px 20px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1F2937;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .community-card-button:hover {
          background: #000000;
        }

        .community-card-button svg {
          width: 16px;
          height: 16px;
        }

        .community-card-globe-container {
          position: relative;
          height: 180px;
          width: 100%;
          max-width: 576px;
        }
        .community-card-globe {
          position: absolute;
          bottom: -80px;
          right: -160px;
          transform: scale(1.5);
          inset: 0;
          margin: auto;
          aspect-ratio: 1/1;
          width: 100%;
          max-width: 600px;
        }

        .community-card-globe canvas {
          position: absolute;
          width: 75%;
          height: 75%;
          bottom: 10px;
          right: -40px;
          opacity: 0;
          transition: opacity 0.5s;
          contain: layout paint size;
        }

        @media (min-width: 768px) {
          .community-card {
            padding: 96px 64px;
          }

          .community-card-inner {
            flex-direction: row;
          }
        }

        @media (prefers-color-scheme: dark) {
          .community-card {
            background: #1f2937;
            border-color: #374151;
          }

          .community-card-title {
            color: #ffffff;
          }

          .community-card-description {
            color: #9ca3af;
          }
        }
      `}</style>

      <section className="community-card">
        <div className="community-card-inner">
          <div className="community-card-content">
            <h1 className="community-card-title">
              Join Our{" "}
              <span className="community-card-highlight">Global Community</span>{" "}
              <span className="community-card-description">
                Connect with developers worldwide. Share knowledge, get support,
                and build amazing things together on WhatsApp.
              </span>
            </h1>
            <button className="community-card-button">
              Join WhatsApp Community
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="community-card-globe-container">
            <Globe className="community-card-globe" />
          </div>
        </div>
      </section>
    </>
  );
}
