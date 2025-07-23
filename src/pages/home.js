//Page Style Guide
import "./Home.css";
//component imports
import HeroImage from "../components/features/HeroImage";
import DoubleBorderText from "../components/textBlocks/DoubleBorderText";
import TallImageGallery from "../components/features/TallImageGallery";
import BasicGhostButton from "../components/buttons/BasicGhostButton";
import DoubleLineBreak from "../components/decorative/DoubleLineBreak";
import BasicTextOverImage from "../components/features/BasicTextOverImage";
import TwoColumnFeature from "../components/features/TwoColumnFeature";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-5nlw8y2a0ddnvm9m8334u6ani/homepage2.png";

const doubleIntro = [
  {
    title: "Queen's New Standard",
    subheader: "In Boutique hospitality",
    left: "There’s something more here. Refined, unexpected, and alive with the kind of energy you only find when you know where to look. The Rhyland is redefining the Flushing skyline, offering serene moments tucked within the vibrant rhythm of the city, reserved for those who seek the extraordinary.",
    right:
      "Step inside and discover 200 thoughtfully designed guest rooms, a tranquil garden courtyard, and a rooftop restaurant that frames the city from an entirely new perspective. This is boutique hospitality, reimagined for Queens, and shared with those ready to experience it.",
  },
];

const tallImages = [
  "https://image-tc.galaxy.tf/wipng-7kbpxgtw5ltkr8i4f8v62pd2n/untitled-design-18.png",
  "https://image-tc.galaxy.tf/wipng-367bql3yymdyd4qs6bc4qjehi/fandb.png",
  "https://image-tc.galaxy.tf/wipng-6cf4cnq0l5zq9mzjyz3aomds2/home.png",
];

const basicImageOne = [
  {
    image:
      "https://image-tc.galaxy.tf/wijpeg-3k1mjculwjosukmuz4xsjaigq/file.jpg?source=true",
    alt: "Double Queen Bedroom with modern fixtings",
    title: "Stay with us",
    text: "Get Acquainted with a most refined boutique hotel experience at The Rhyland",
    btn: "Rooms & Suites",
    link: "/rooms-suites",
  },
];

const twoColumnContent = [
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
  },
];

export default function Home() {
  return (
    <>
      <HeroImage image={heroImage} title="Coming Soon" />
      <DoubleBorderText content={doubleIntro} />
      <TallImageGallery images={tallImages} />
      <div className="textBreak">
        <h3> Rhyland Lifestyle</h3>
        <p>
          Sophisticated spaces thoughtfully designed for connection,
          celebration, and calm—from elegant event spaces to inspired culinary
          experiences. Whether closing deals, celebrating milestones, or
          savoring a quiet moment, every setting at The Rhyland invites harmony.
        </p>
        <BasicGhostButton title="Discover Amenities" link="/amenities" />
      </div>
      <DoubleLineBreak />
      <BasicTextOverImage content={basicImageOne} />
      <DoubleLineBreak />
      <TwoColumnFeature content={twoColumnContent} />
    </>
  );
}
