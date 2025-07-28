import "./HoneyGinger.css";

import HeroImage from "../../components/features/HeroImage";
import DoubleBorderText from "../../components/textBlocks/DoubleBorderText";
import TallImageGallery from "../../components/features/TallImageGallery";
import BasicGhostButton from "../../components/buttons/BasicGhostButton";
import DoubleLineBreak from "../../components/decorative/DoubleLineBreak";
import TextAndImageBlock from "../../components/features/TextAndImageBlock";
import DecoratedTextBanner from "../../components/decorative/DecoratedTextBanner";

const heroImage =
  "https://image-tc.galaxy.tf/wijpeg-3fndtzm3a1krr5d3lccyoldm5/file.jpg?source=true&download=true";

const doubleIntro = [
  {
    title: "Honey & Ginger",
    subheader: "ABOVE IT ALL, BEYOND THE EXPECTED",
    left: "Perched above the city’s rhythm, Honey & Ginger offers a rooftop experience where flavor, atmosphere, and energy meet in perfect balance. The menu draws inspiration from New York’s seasonal landscape—ingredient-driven, boldly American, and elevated through thoughtful technique and creative nuance. Every plate reflects a sense of place, crafted to delight and designed to be shared.",
    right:
      "Brunch unfolds beneath wide-open skies, with sunlight, laughter, and cocktails in equal measure. As the day fades, golden hour brings a shift in tempo—conversations deepen, the skyline glows, and the rooftop hums with quiet excitement. Evenings stretch into something fluid and magnetic, where music, movement, and connection take center stage. Honey & Ginger isn’t just a place to dine—it’s a scene, a setting, a state of mind.",
  },
];

const tallImages = [
  "https://image-tc.galaxy.tf/wipng-5rizo0sqv1rdkjaa86yajc6mj/file.png?source=true",
  "https://image-tc.galaxy.tf/wipng-djs715wbf83fx4qsdp1vym4k7/file.png?source=true",
  "https://image-tc.galaxy.tf/wipng-8x6fp9pl6r14z0cz1537nlc3w/file.png?source=true",
];

const basicImageText = [
  {
    image:
      "https://image-tc.galaxy.tf/wijpeg-5jt2jpge3ov90l55heg6nqzuv/file.jpg?source=true&download=true",
    alt: "Rendering of the soon to be R bar",
    title: "hours",
    text: "Coming Soon.",
  },
];

export default function HoneyGinger() {
  return (
    <>
      <HeroImage image={heroImage} title="" />
      <DoubleBorderText content={doubleIntro} />
      <TallImageGallery images={tallImages} />
      <div className="textBreak">
        <h3>A signature dining experience</h3>
        <p>
          Honey & Ginger’s sophisticated design creates an inviting ambiance. At
          this rooftop setting, where every element—from expertly crafted
          cocktails to the elevated dishes are all curated with intention.
          Whether an impromptu gathering or a night planned to impress, this is
          a destination for refined dining, framed by sweeping views and a
          distinguished modern perspective.
        </p>
        <BasicGhostButton title="Reserve A Table" link="/" />
      </div>
      <DoubleLineBreak />
      <TextAndImageBlock content={basicImageText} />
      <DecoratedTextBanner
        text="Our innovative menu celebrates the flavors of 
New York, featuring seasonal, locally sourced 
ingredients crafted into bold dishes."
      />
    </>
  );
}
