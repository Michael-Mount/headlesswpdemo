import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const demoImages = [
  "https://plus.unsplash.com/premium_photo-1667056112467-a31e0619248d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558976825-6b1b03a03719?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
];

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export default function InfiniteImageStrip({
  images = demoImages,
  height = 420, // strip height in px
  gap = 20,
  speed = 100, // pixels per second (continuous)
  direction = "left",
  pauseOnHover = true,
  className = "",
}) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const tlRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Build a long list of slides so the loop never shows a gap
  const slides = useMemo(() => {
    // at least 2× the images so we can wrap comfortably
    const minCopies = 3;
    return Array.from({ length: minCopies })
      .flatMap(() => images)
      .map((src, i) => ({ id: `${i}-${src}`, src }));
  }, [images]);

  // Make a timeline that loops forever
  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;

      // ensure we have enough content width (dup more if needed on first pass)
      const ensureFill = () => {
        const vw = wrap.clientWidth;
        let trackWidth = track.scrollWidth;
        let copies = 0;
        while (trackWidth < vw * 2.2 && copies < 6) {
          // clone children into the track to extend
          [...track.children].forEach((child) => {
            track.appendChild(child.cloneNode(true));
          });
          copies++;
          trackWidth = track.scrollWidth;
        }
      };

      ensureFill();

      // measure final loop width
      const loopWidth = track.scrollWidth / 2; // half because we duplicated
      const directionSign = direction === "right" ? 1 : -1;

      // kill previous timeline
      tlRef.current && tlRef.current.kill();

      // animate X continuously; wrap X with modifiers to create the loop
      const duration = Math.max(1, loopWidth / clamp(speed, 20, 400));
      const tl = gsap.to(track, {
        x: directionSign < 0 ? -loopWidth : 0,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const raw = parseFloat(x);
            // wrap between [-loopWidth, 0]
            const wrapped =
              (((raw + loopWidth) % loopWidth) + loopWidth) % loopWidth;
            return directionSign < 0 ? -wrapped : wrapped;
          }),
        },
      });

      // pause on hover
      if (pauseOnHover) {
        wrap.addEventListener("mouseenter", () => tl.pause());
        wrap.addEventListener("mouseleave", () => tl.play());
      }

      tlRef.current = tl;
      setReady(true);

      // rebuild on resize for responsiveness
      const onResize = () => {
        tl.kill();
        gsap.set(track, { clearProps: "all" });
        // force reflow then rebuild
        requestAnimationFrame(() => {
          ensureFill();
          const newLoopWidth = track.scrollWidth / 2;
          const newDuration = Math.max(1, newLoopWidth / clamp(speed, 20, 400));
          tlRef.current = gsap.to(track, {
            x: directionSign < 0 ? -newLoopWidth : 0,
            duration: newDuration,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => {
                const raw = parseFloat(x);
                const wrapped =
                  (((raw + newLoopWidth) % newLoopWidth) + newLoopWidth) %
                  newLoopWidth;
                return directionSign < 0 ? -wrapped : wrapped;
              }),
            },
          });
        });
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        pauseOnHover &&
          wrap.removeEventListener &&
          wrap.removeEventListener("mouseenter", () => tl.pause());
        tl.kill();
      };
    },
    { dependencies: [images, speed, direction, gap] }
  );

  return (
    <div
      ref={wrapRef}
      className={`relative w-full overflow-hidden m-7 ${className}`}
      style={{ height }}
      aria-label="Image showcase"
    >
      <div
        ref={trackRef}
        className="absolute left-0 top-0 flex"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {slides.map((s, i) => (
          <div
            key={s.id + "-" + i}
            className="shrink-0"
            style={{
              height: "100%",

              width: `${Math.round(height * 1.75)}px`,
            }}
          >
            <img
              src={s.src}
              alt=""
              className="h-full w-full object-cover select-none pointer-events-none"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* Optional soft edges (like gutters) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
