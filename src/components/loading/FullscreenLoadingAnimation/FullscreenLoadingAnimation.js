import { useEffect, useState } from "react";
import "./FullscreenLoadingAnimation.css";

const logo =
  "https://image-tc.galaxy.tf/wisvg-a7qjuvwedebtj3jrcaz9ub3ew/file.svg?source=true";

export default function FullscreenLoader({ onFinish }) {
  const [doneSpinning, setDoneSpinning] = useState(false);
  const [beginFadeOut, setBeginFadeOut] = useState(false);
  const [hasUnmounted, setHasUnmounted] = useState(false); // hard block rerender

  useEffect(() => {
    const spinTimeout = setTimeout(() => {
      setDoneSpinning(true);
    }, 2000);
    return () => clearTimeout(spinTimeout);
  }, []);

  useEffect(() => {
    if (doneSpinning) {
      const animationTimeout = setTimeout(() => {
        setBeginFadeOut(true);
      }, 2000);
      return () => clearTimeout(animationTimeout);
    }
  }, [doneSpinning]);

  const handleTransitionEnd = (e) => {
    if (
      beginFadeOut &&
      e.target.classList.contains("loader-wrapper") &&
      e.propertyName === "opacity"
    ) {
      if (!hasUnmounted) {
        setHasUnmounted(true); // ensures it doesn't flash back in
        onFinish?.();
      }
    }
  };

  if (hasUnmounted) return null;

  return (
    <div
      className={`loader-wrapper ${beginFadeOut ? "fade-out" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`loader-content ${doneSpinning ? "logo-transition" : ""}`}
      >
        <img
          src={logo}
          className={`loaderEmblem ${doneSpinning ? "stop-spin" : "spin"}`}
          alt="Loader Emblem of Rhyland Hotel"
        />
        <h1 className={`welcome-text ${doneSpinning ? "slide-in" : ""}`}>
          Welcome To The Rhyland Hotel
        </h1>
      </div>
    </div>
  );
}
