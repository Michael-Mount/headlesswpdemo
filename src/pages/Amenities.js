import "./Amenities.css";

import HeroImage from "../components/features/HeroImage";
import IntroTextBlock from "../components/textBlocks/IntroTextBlock";
import TallImageGallery from "../components/features/TallImageGallery";
import DoubleLineBreak from "../components/decorative/DoubleLineBreak";
import TwoColumnFeature from "../components/features/TwoColumnFeature";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-2xddgiqkx5jxbwu7fwqbjrwn8/file.png?source=true";

const introBlock = [
  { title: "THE ART OF THOUGHTFUL HOSPITALITY" },
  { subheader: "Where Comfort and Experience Await" },
  {
    upper:
      "Discover a place where culture, comfort, and cuisine are seamlessly woven together. The Rhyland is a refined retreat in the heart of Queens offering a serene garden courtyard, sophisticated rooftop dining in a design-forward setting. Every detail is curated to enhance the guest experience—from elegant event spaces to inspired culinary offerings and exceptional intuitive service. Surrounded by expansive views and the dynamic spirit of New York, The Rhyland is where discerning travelers find the art of thoughtful hospitality and unwind effortlessly.",
  },
];

const tallImages = [
  "https://image-tc.galaxy.tf/wipng-b3q2m3ng4oq8yhpsq2e4u5g3/file.png?source=true",
  "https://image-tc.galaxy.tf/wipng-dp3ivylf5wkb4n77ghl9xvlg/file.png?source=true",
  "https://image-tc.galaxy.tf/wipng-5731lr12j1jqznbbddzsmooeg/file.png?source=true",
];

const twoColumnContentOne = [
  {
    image1:
      "https://image-tc.galaxy.tf/wipng-1gb8z7eezjuzc1iwgq3lznnxe/file.png?source=true",
    alt1: "Close Up of a woman holding a whisky cocktail",
    image2:
      "https://image-tc.galaxy.tf/wipng-8v3g54hu04kaat3xk6oirykso/file.png?source=true",
    alt2: "Two freashly plated steaks in artichocke sauce",
    header: "Rooftop Dining",
    text: "At Honey & Ginger, rooftop dining captures the pulse of the city with elevated American fare rooted in local flavors, signature cocktails, and sweeping skyline views. By day, the rooftop comes alive with vibrant weekend brunches; by night, it transforms—live music, spirited conversation, and an open-air atmosphere made for lingering long after last call.",
    btn: "Discover Honey & Ginger",
    link: "/honey-ginger",
    direction: "row",
  },
];

const twoColumnContentTwo = [
  {
    image1:
      "https://image-tc.galaxy.tf/wipng-7yabchdin1xrjrjzaxm7evovv/file.png?source=true",
    alt1: "A Tower of champange glasses overflowing from the top",
    image2:
      "https://image-tc.galaxy.tf/wipng-5t1ngmqv45g4bi4zbqa4m9dd0/file.png?source=true",
    alt2: "Private Dining Area ",
    header: "Upscale Event Spaces",
    text: "From boardroom briefings to wedding toasts, The Rhyland was designed for moments that move—effortlessly flowing from indoors to out.",
    btn: "Discover Event Spaces",
    link: "/gather",
    direction: "row-reverse",
  },
];

export default function Amenities() {
  return (
    <>
      <HeroImage image={heroImage} content="" />
      <IntroTextBlock content={introBlock} />
      <TallImageGallery images={tallImages} />
      <div className="textBreak">
        <h3> A boutique hotel experience</h3>
        <p>
          Thoughtfully curated amenities include upscale meeting spaces and
          health-conscious dining options. With convenient valet service and a
          setting that feels refreshingly open, The Rhyland is an elevated stay
          unlike any other.
        </p>
      </div>
      <DoubleLineBreak />
      <TwoColumnFeature content={twoColumnContentOne} />
      <TwoColumnFeature content={twoColumnContentTwo} />
    </>
  );
}
