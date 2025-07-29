import "./TextAndImageBlock.css";

export default function TextAndImageBlock({ content }) {
  return (
    <>
      <div className="Text-And-Image-Block">
        {content.map(({ image, alt, title, text }, i) => (
          <div key={i} className="Text-And-Image-Container">
            <div className="Image-Container">
              <img src={image} alt={alt} />
            </div>
            <div className="Text-Container">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
