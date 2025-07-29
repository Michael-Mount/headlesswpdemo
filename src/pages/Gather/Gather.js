import "./Gather.css";

import HeroImage from "../../components/features/HeroImage/HeroImage";
import DoubleBorderText from "../../components/textBlocks/DoubleBorderText/DoubleBorderText";
import TallImageBtnOverlay from "../../components/features/TallImageBtnOverlay/TallImageBtnOverlay";
import GreyButton from "../../components/buttons/GreyButton/GreyButton";

const heroImage =
  "https://image-tc.galaxy.tf/wipng-68eun8mrv2wo8t3aibcri8wxy/file.png?source=true";

const doubleIntro = [
  {
    title: "Your Moment, Your People, Our Space",
    subheader: "GATHER WITH INTENTION. CELEBRATE IN STYLE",
    right:
      "At the heart of Queens, we warmly welcome you to gatherings where connection is naturally woven into every detail. Our flexible event spaces—from a dynamic chic ballroom, rooftop terraces, and an elegant library offer an inspiring setting for both",
    left: "celebration and collaboration. With a seamless flow between inviting indoor spaces and open-air charm, complemented by modern amenities and gracious service, each event becomes a lasting memory, crafted with care and experienced with meaning.",
  },
];

const tallImages = [
  {
    image:
      "https://image-tc.galaxy.tf/wipng-2awaobiu8jdkubrdcxyyvxowq/file.png?source=true",
    header: "Weddings",
    btn: "Connect with us",
    link: "/",
  },
  {
    image:
      "https://image-tc.galaxy.tf/wipng-8521eqmkt1bysjiinckeugez2/file.png?source=true",
    header: "Meetings",
    btn: "Submit Your Request",
    link: "/",
  },
  {
    image:
      "https://image-tc.galaxy.tf/wipng-3d0qqarv32mbwy7shysfgiqfd/file.png?source=true",
    header: "Social Events",
    btn: "Plan your events",
    link: "/",
  },
];

export default function Gather() {
  return (
    <>
      <HeroImage image={heroImage} title="" />
      <DoubleBorderText content={doubleIntro} />
      <TallImageBtnOverlay content={tallImages} />
      <div className="textBreak">
        <h3>Versatile Event Features</h3>
        <p>
          Designed with flexibility and flawless service in mind, our spaces
          adapt effortlessly to your vision—whether intimate or grand. From a
          configurable ballroom to courtyard access that extends your event into
          the open air, every detail is supported by modern amenities, advanced
          technology, and a service team dedicated to anticipating your every
          need. <a href="/">Submit your Request For Proposal</a>
          and let's get planning.
        </p>
        <GreyButton title="See event spaces" link="/" />
      </div>
    </>
  );
}
