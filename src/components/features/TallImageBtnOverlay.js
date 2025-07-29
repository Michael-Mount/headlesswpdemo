import "./TallImageBtnOverlay.css";

import GreyButton from "../buttons/GreyButton";

export default function TallImageGallery({ content }) {
  return (
    <div className="tallImageContainer">
      {content.map(({ image, header, btn, link }, i) => (
        <div className="tallImageWrapper" key={i}>
          <img src={image} alt={`Gallery ${i + 1}`} />
          <div className="overlay"></div>
          <div className="center-text">
            <p className="title">{header}</p>
            <GreyButton title={btn} link={link} />
          </div>
        </div>
      ))}
    </div>
  );
}
