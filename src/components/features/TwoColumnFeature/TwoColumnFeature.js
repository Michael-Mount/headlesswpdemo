import "./TwoColumnFeature.css";

import BasicGhostButton from "../../buttons/BasicGhostButton/BasicGhostButton";

export default function TwoColumnFeature({ content }) {
  return (
    <>
      <div className="Two-Column-Wrapper">
        {content.map(
          (
            { image1, alt1, image2, alt2, header, text, btn, link, direction },
            i
          ) => (
            <div
              key={i}
              className="Two-Column-Container"
              style={{ flexDirection: direction }}
            >
              <div className="Column-One">
                <img src={image1} alt={alt1} />
              </div>
              <div className="Column-Two">
                <img src={image2} alt={alt2} />
              </div>
              <div className="Content-Column">
                <p className="Column-Title">{header}</p>
                <p className="Column-Text">{text}</p>
                <BasicGhostButton title={btn} link={link} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
