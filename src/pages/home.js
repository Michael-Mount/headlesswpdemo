import HeroImage from "../components/images/HeroImage";
import TallImageGallery from "../components/images/TallImageGallery";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-5nlw8y2a0ddnvm9m8334u6ani/homepage2.png";

const tallImages = [
  "https://image-tc.galaxy.tf/wipng-7kbpxgtw5ltkr8i4f8v62pd2n/untitled-design-18.png",
  "https://image-tc.galaxy.tf/wipng-367bql3yymdyd4qs6bc4qjehi/fandb.png",
  "https://image-tc.galaxy.tf/wipng-6cf4cnq0l5zq9mzjyz3aomds2/home.png",
];

export default function Home() {
  return (
    <>
      <HeroImage image={heroImage} title="Coming Soon" />
      <TallImageGallery images={tallImages} />
    </>
  );
}
