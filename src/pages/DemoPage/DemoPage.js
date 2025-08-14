import HeroImage from "../../components/features/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/textBlocks/CenteredTextBlock/CenteredTextBlock";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-5nlw8y2a0ddnvm9m8334u6ani/homepage2.png";

const introText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis mollis odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Cras tristique dolor in arcu luctus dignissim. Nam ligula odio, auctor non aliquet vel, egestas vitae urna. Aenean in elit dui. Quisque euismod faucibus egestas.";

const DemoPage = () => {
  return (
    <div>
      <HeroImage image={heroImage} title="" />
      <CenteredTextBlock content={introText} />
    </div>
  );
};

export default DemoPage;
