import HeroImage from "../components/HeroImage";
import IntroTextBlock from "../components/IntroTextBlock";

const introBlock = [
  { title: "stay with us" },
  { subheader: "quiet comfort and seamless access" },
  {
    upper:
      "Discover a new perspective on boutique hospitality, where city sophistication meets the vibrant pulse of Flushing. The experience is refined yet approachable, offering a stay defined by thoughtful design and everyday ease.",
  },
  {
    lower:
      "Inside, 200 guest rooms provide a quiet retreat from the citys pace. Warm lighting, natural materials, and clean lines create a calming sense of balance, with every element—from textured wallcoverings to curated artwork—carefully chosen for comfort. Subtle notes of citrus and sage linger in the air, offering a signature scent thats both energizing and serene. Its a stay that feels as elevated as it is restorative.",
  },
];

const heroImage =
  "https://image-tc.galaxy.tf/wijpeg-b6gaf5ztv5a9okah550rlpb5a/37-richouse-king-room.jpg";

export default function Rooms() {
  return (
    <>
      <HeroImage image={heroImage} content="" />
      <IntroTextBlock content={introBlock} />
    </>
  );
}
