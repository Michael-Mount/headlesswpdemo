import HeroImage from "../components/HeroImage";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-5nlw8y2a0ddnvm9m8334u6ani/homepage2.png";

export default function Home() {
  return (
    <>
      <HeroImage image={heroImage} title="Coming Soon" />
    </>
  );
}
