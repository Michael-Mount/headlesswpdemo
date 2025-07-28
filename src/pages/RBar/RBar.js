import HeroImage from "../../components/features/HeroImage";
import DoubleBorderText from "../../components/textBlocks/DoubleBorderText";
import TallImageGallery from "../../components/features/TallImageGallery";
import DoubleLineBreak from "../../components/decorative/DoubleLineBreak";
import TextAndImageBlock from "../../components/features/TextAndImageBlock";

const heroImage =
  "https://image-tc.galaxy.tf/wijpeg-7k03mq840pwecbv1zpuk2ext7/file.jpg?source=true";

const doubleIntro = [
  {
    title: "The R Bar",
    subheader: "CRAFTING UNFORGETABLE MOMENTS IN THE HEART OF QUEENS",
    left: "Just beyond The Rhyland’s lobby, The R Bar beckons with its sleek inviting space adjacent to a lush beautifully landscaped garden. Step inside and feel the warmth of natural light flooding through floor-to-ceiling windows, mingling with the soft murmur of conversations, and the delicate chime of glasses. Here, expertly crafted cocktails become moments to",
    right:
      "savor—whether perched inside or carried outside under the night sky, where fragrant blooms and gentle evening breezes set the perfect backdrop. Shaped by the culture of Queens and stirred by its creative pulse, The R Bar is where elevated evenings unfold, night after night.",
  },
];

const tallImages = [
  "https://image-tc.galaxy.tf/wipng-5pqwscrntvt3zs2pb6bqxqupx/file.png?source=true",
  "https://image-tc.galaxy.tf/wipng-xc0ykpcp2iot8phm4179q952/file.png?source=true",
  "https://image-tc.galaxy.tf/wijpeg-e7b5stzor4plx3fkcrebiu0d7/file.jpg?source=true",
];

const basicImageText = [
  {
    image: heroImage,
    alt: "Rendering of the soon to be R bar",
    title: "The rhlyand bar hours",
    text: "Coming Soon.",
  },
];

export default function RBar() {
  return (
    <>
      <HeroImage image={heroImage} title="" />
      <DoubleBorderText content={doubleIntro} />
      <TallImageGallery images={tallImages} />
      <DoubleLineBreak />
      <TextAndImageBlock content={basicImageText} />
    </>
  );
}
