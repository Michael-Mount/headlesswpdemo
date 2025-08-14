import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ThreeImageGallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeImageGallery({ gallery }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          end: "bottom 20%",
          markers: true,
        },
      });

      tl.fromTo(
        ".ThreeImageGallery-Wrapper img",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.2 }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div className="ThreeImageGallery-Wrapper">
        <div className="image-column-1">
          <img
            src={gallery.image1}
            alt="Decorative Gallery 1"
            className="top"
          />
          <img
            src={gallery.video}
            alt="Decorative Gallery 1b"
            className="bottom-half"
          />
        </div>
        <div className="image-column-2">
          <img src={gallery.image2} alt="Decorative Gallery 2" />
        </div>
      </div>
    </div>
  );
}
