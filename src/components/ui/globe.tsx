import Globe from "react-globe.gl";
import { useRef, useEffect } from "react";

type GlobeSProps = {
  className?: string;
};

export function GlobeS({ className }: GlobeSProps) {
  const globeRef = useRef<any>();

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 1.2;
  }, []);

  return (
    <div className={className} style={{ width: 400, height: 400 }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
}
