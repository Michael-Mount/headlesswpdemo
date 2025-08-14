import HeroImage from "../../components/features/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/textBlocks/CenteredTextBlock/CenteredTextBlock";
import ThreeImageGallery from "../../components/features/ThreeImageGallery/ThreeImageGallery";
import Sushi from "../../images/susui.mp4";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-5nlw8y2a0ddnvm9m8334u6ani/homepage2.png";

const introText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis mollis odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Cras tristique dolor in arcu luctus dignissim. Nam ligula odio, auctor non aliquet vel, egestas vitae urna. Aenean in elit dui. Quisque euismod faucibus egestas.";

const threeGallery = {
  image1:
    "https://image-tc.galaxy.tf/wipng-2xddgiqkx5jxbwu7fwqbjrwn8/file.png?source=true",
  image2:
    "https://image-tc.galaxy.tf/wipng-djs715wbf83fx4qsdp1vym4k7/file.png?source=true",
  video: Sushi,
};

const DemoPage = () => {
  return (
    <div>
      <HeroImage image={heroImage} title="" />
      <CenteredTextBlock content={introText} />
      <ThreeImageGallery gallery={threeGallery} />
      <div>
        <h2>hello</h2>
      </div>
    </div>
  );
};

export default DemoPage;
