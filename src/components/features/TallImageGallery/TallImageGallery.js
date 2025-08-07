import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./TallImageGallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function TallImageGallery({ images }) {
  const tallImageRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(tallImageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tallImageRef.current,
          start: "top 50%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="tallImageContainer" ref={tallImageRef}>
      {images.map((src, index) => (
        <div className="tallImageWrapper" key={index}>
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
