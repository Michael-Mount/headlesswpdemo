import "./DoubleBorderText.css";

export default function DoubleBorderTextBlock({ content }) {
  return (
    <>
      <div className="double-border-box">
        <img
          className="top-left-img"
          src="https://image-tc.galaxy.tf/wipng-2jdc38650oaexvy68y2xm8iqy/file.png?source=true"
          alt="Decorative Rhyland Logo"
        />
        <div className="inner-content-box">
          {content.map(({ title, subheader, left, right }, i) => (
            <div className="double-border-intro" key={i}>
              <h2>{title}</h2>
              <p className="double-subheader">{subheader}</p>
              <div className="page-description">
                <p>{left}</p>
                <p>{right}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="corner-square corner-top-left"></div>
      <div className="corner-square corner-top-right"></div>
      <div className="corner-square corner-bottom-left"></div>
      <div className="corner-square corner-bottom-right"></div>
    </>
  );
}
