import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

import HeroImage from "../../components/features/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/textBlocks/CenteredTextBlock/CenteredTextBlock";
import ThreeImageGallery from "../../components/features/ThreeImageGallery/ThreeImageGallery";
import Sushi from "../../images/susui.mp4";
import ScrollVideo from "../../components/features/ScrollVideo/ScrollVideo";
import ShowcaseCarousel from "../../components/features/ShowcaseCarousel/ShowcaseCarousel";
import TestimonialCarousel from "../../components/features/TestimonialsCarousel/TestimonialCarousel";
import SplitFeature from "../../components/features/SplitFeature/SplitFeature";
import InfiniteImageStrip from "../../components/features/InfiniteImageStrip/InfiniteImageStrip";

import "./DemoPage.css";

const heroImage =
  "https://images.unsplash.com/photo-1637440114401-3f312ca0161f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const introText =
  "As the former home of one of Denver’s most prominent families, Hotel Mountaintop incorporates the original architecture of the Hartness home into its design. The gracious and inviting retreat features 69 suites in the main hotel and four distinctive spa suites, each finely appointed in a fresh, contemporary motif. Additionally, Hotel Mountaintop offers a variety of event spaces to suit your needs.";
const threeGallery = {
  image1:
    "https://image-tc.galaxy.tf/wipng-2xddgiqkx5jxbwu7fwqbjrwn8/file.png?source=true",
  image2:
    "https://image-tc.galaxy.tf/wipng-djs715wbf83fx4qsdp1vym4k7/file.png?source=true",
  video: Sushi,
};

const weddingSplit = {
  img: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Weddings",
  para: "Hotel Mountaintop offers a variety of indoor and outdoor venues that can be customized for small-to-medium-sized weddings, meetings, and special events, as well as a grand ballroom that can host up to 300 people.",
  links: [{ label: "EXPLORE FURTHER", href: "#" }],
};

const spaSplit = {
  img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Spa M",
  para: "Rounding out the guest experience is a luxurious spa with six treatment rooms. Its comprehensive menu of treatments creates a unique and replenishing spa getaway unlike anything in the Greenville area. ",
  links: [{ label: "EXPLORE FURTHER", href: "#" }],
};

const DemoPage = () => {
  const root = useRef(null);
  const headerRef = useRef(null);
  const textBreak = useRef(null);

  const ismobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      const startValue = ismobile ? "top 50%" : "top 80%";
      const endValue = ismobile ? "120% top" : "bottom 20%";

      const headerSplit = new SplitText(headerRef.current, {
        type: "chars, words",
      });
      const split = new SplitText(textBreak.current, { type: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textBreak.current,
          start: startValue,
          end: endValue,
        },
      });

      tl.from(".rail", { opacity: 0, y: 200, duration: 1.25 }, 0);

      tl.from(headerSplit.chars, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      });

      tl.from(split.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.04,
      });
      return () => split.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <HeroImage image={heroImage} title="" />
      <CenteredTextBlock content={introText} />
      <ThreeImageGallery gallery={threeGallery} />
      <section className="text-break">
        <aside className="rail">
          <span className="rail-head"></span>
          <span className="rail-text">ROOMS & SUITES</span>
        </aside>
        <div className="text-break-copy">
          <h2 className="text-break-title" ref={headerRef}>
            THE MOUNTAINTOP
          </h2>
          <p ref={textBreak}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            mollis odio. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin quis mollis odio. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
        </div>
      </section>

      <div className="px-4 py-12">
        <ShowcaseCarousel
          height={560}
          autoPlayMs={0} // set e.g. 5500 to enable autoplay
        />
      </div>
      <ScrollVideo />
      <TestimonialCarousel />
      <SplitFeature />
      <SplitFeature content={weddingSplit} />
      <SplitFeature content={spaSplit} />
      <InfiniteImageStrip />
    </div>
  );
};

export default DemoPage;
