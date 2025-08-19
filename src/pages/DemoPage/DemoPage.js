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

import "./DemoPage.css";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-5nlw8y2a0ddnvm9m8334u6ani/homepage2.png";

const introText =
  "As the former home of one of Denver’s most prominent families, Hotel Mountaintop incorporates the original architecture of the Hartness home into its design. The gracious and inviting retreat features 69 suites in the main hotel and four distinctive spa suites, each finely appointed in a fresh, contemporary motif. Additionally, Hotel Mountaintop offers a variety of event spaces to suit your needs.";
const threeGallery = {
  image1:
    "https://image-tc.galaxy.tf/wipng-2xddgiqkx5jxbwu7fwqbjrwn8/file.png?source=true",
  image2:
    "https://image-tc.galaxy.tf/wipng-djs715wbf83fx4qsdp1vym4k7/file.png?source=true",
  video: Sushi,
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
      <ScrollVideo />
      <CenteredTextBlock content={introText} />
    </div>
  );
};

export default DemoPage;
