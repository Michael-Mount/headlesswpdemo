import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ThreeImageGallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeImageGallery({ gallery }) {
  const root = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
    }
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      });

      tl.fromTo(
        ".ThreeImageGallery-Wrapper img, .ThreeImageGallery-Wrapper video",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          stagger: { each: 0.5, from: "start", ease: "power2.inOut" },
        }
      );
    },
    { scope: root }
  );

  return (
    <>
      <div ref={root}>
        <div className="ThreeImageGallery-Wrapper">
          <div className="image-column-1">
            <img
              src={gallery.image1}
              alt="Decorative Gallery 1"
              className="top"
            />
            <video
              ref={videoRef}
              className="bottom-half"
              src={gallery.video} // or "/susui.mp4" if in public
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            ></video>
          </div>
          <div className="image-column-2">
            <img src={gallery.image2} alt="Decorative Gallery 2" />
          </div>
        </div>
      </div>
    </>
  );
}
