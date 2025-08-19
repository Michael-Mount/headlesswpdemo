import "./ScrollVideo.css";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

import unisphere from "../../../images/output_allI.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const scrollVideoRef = useRef(null);
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const video = scrollVideoRef.current;
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!video || !section || !overlay) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      // show the text immediately for accessibility
      gsap.set(overlay, { autoAlpha: 1, y: 0 });
      return;
    }

    const init = () => {
      const duration = video.duration || 0;
      if (!duration) return;

      // --- tuning knobs ---
      const PX_PER_SEC = isMobile ? 250 : 500;
      const SCRUB_SMOOTH = 0.5;
      const QUICKTO_DUR = 0.16;
      const OVERLAY_START = 0.85;

      const totalScroll = Math.max(1200, Math.floor(duration * PX_PER_SEC));
      video.currentTime = 0;

      // smooth setter for currentTime
      const setTime = gsap.quickTo(video, "currentTime", {
        duration: QUICKTO_DUR,
        ease: "none",
      });

      // tiny timeline just for the text fade-up
      const overlayTl = gsap.timeline({ paused: true });
      overlayTl.fromTo(
        overlay,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      // single ScrollTrigger drives both the video seek + overlay reveal
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=" + totalScroll,
        pin: true,
        scrub: SCRUB_SMOOTH,
        anticipatePin: 1,
        onUpdate(self) {
          const p = self.progress;

          setTime(p * duration);

          const t = gsap.utils.clamp(
            0,
            1,
            (p - OVERLAY_START) / (1 - OVERLAY_START)
          );
          overlayTl.progress(t);
        },
        onLeave: () => overlayTl.progress(1),
        onLeaveBack: () => overlayTl.progress(0),
      });

      // cleanup
      return () => {
        st.kill();
        gsap.killTweensOf(video);
        overlayTl.kill();
      };
    };

    if (video.readyState >= 1) init();
    else video.addEventListener("loadedmetadata", init, { once: true });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(video);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      <video
        ref={scrollVideoRef}
        className="h-full w-full object-cover"
        src={unisphere}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      />

      {/* Overlay text */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center p-8"
        style={{ opacity: 0, willChange: "transform, opacity" }}
      >
        <h2 className="text-white text-3xl md:text-9xl font-semibold drop-shadow-xl text-center max-w-8xl uppercase">
          In the Heart of Denver
        </h2>
      </div>
    </section>
  );
}
