import "./BasicTextOverImage.css";

export default function BasicTextOverImage({ content }) {
  return (
    <>
      <div className="basic-image-wrapper">
        {content.map(({ image, alt, title, text, btn, link }, i) => (
          <div key={i} className="basic-image-container">
            <img src={image} alt={alt} />
            <div className="center-text">
              <p className="title">{title}</p>
              <p className="text">{text}</p>
              <a className="basic-image-btn" href={link}>
                {btn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
