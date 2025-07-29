import "./Packages.css";

import HeroImage from "../../components/features/HeroImage/HeroImage";
import IntroTextBlock from "../../components/textBlocks/IntroTextBlock/IntroTextBlock";
import PackageList from "../../components/Pacakges/PackageList";

const heroImage =
  "https://image-tc.galaxy.tf/wijpeg-314o6itkrj9uh9nl8whcnmune/file.jpg?source=true";

const introBlock = [
  { title: "Packages & Offers" },
  { subheader: "Curated Experiences for Your Stay in Queens" },
  {
    upper:
      "Unlock a boutique retreat designed for those with a finger on the city's pulse. We offer elevated dining experiences, romantic getaways, and curated stays that celebrate culture, connection, and comfort. Explore exclusive packages that blend insider access, refined design, and the vibrant spirit of the city",
  },
];

export default function Packages() {
  return (
    <>
      <HeroImage image={heroImage} title="" />
      <IntroTextBlock content={introBlock} />
      <div className="package-section">
        <PackageList />
      </div>
    </>
  );
}
