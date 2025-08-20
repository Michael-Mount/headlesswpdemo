import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SplitFeature({
  content = {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop",
    title: "DINE",
    para: "Mountain Gril at The Mountaintop showcases a unique indoor/outdoor dining experience in a tranquil setting framed by a beautifully manicured lawn and scenic pond. The heart of the restaurant will be an exposition kitchen preparing locally and regionally inspired dishes.",
    links: [
      { label: "EXPLORE MOUNTAIN GRILL", href: "#" },
      { label: "EXPLORE GRILL BAR", href: "#" },
    ],
  },
  reverse = false, // set true to flip image/text
  className = "",
}) {
  const rootSplit = useRef(null);

  // Subtle reveal on scroll
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".sf-reveal", {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: rootSplit.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }, rootSplit);
      return () => ctx.revert();
    },
    { scope: rootSplit }
  );

  return (
    <section
      ref={rootSplit}
      className={`splitFeature relative mx-auto w-full m-10 ${className}`}
      aria-label={content.title || "Feature"}
    >
      <div
        className={`sf-reveal grid grid-cols-1 my-10 lg:grid-cols-12 items-stretch max-h-[600px]`}
      >
        {/* Image */}
        <div
          className={`${
            reverse ? "lg:col-start-6 lg:col-span-7" : "lg:col-span-8"
          } h-[380px] md:h-[480px] lg:h-[600px]`}
        >
          <img
            className="h-full w-full object-cover"
            src={content.img}
            alt={content.alt || content.title || "Feature image"}
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div
          className={`${
            reverse
              ? "lg:col-start-1 lg:col-span-5"
              : "lg:col-start-9 lg:col-span-4"
          } bg-white`}
        >
          <div className="h-full flex items-center">
            <div className="sf-reveal px-6 sm:px-10 lg:px-14 py-10 lg:py-0 max-w-[36rem]">
              <h2 className="sf-reveal uppercase tracking-wide text-[26px] sm:text-[28px] font-semibold text-[#b1916f]">
                {content.title}
              </h2>

              <p className="sf-reveal mt-4 text-[15.5px] leading-7 text-neutral-700">
                {content.para}
              </p>

              {/* Links */}
              <ul className="mt-6 space-y-3">
                {(content.links || []).map((l, idx) => (
                  <li key={idx} className="sf-reveal">
                    <a
                      href={l.href || "#"}
                      className="inline-flex items-center gap-2 text-[15px] text-neutral-900 hover:underline underline-offset-4"
                      onClick={(e) => {
                        if (!l.href || l.href === "#") e.preventDefault();
                      }}
                    >
                      <span className="text-[#b1916f] text-xl leading-none">
                        +
                      </span>
                      <span className="leading-tight">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
