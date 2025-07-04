import "./IntroTextBlock.css";

export default function IntroTextBlock({ content }) {
  return (
    <>
      <div className="introContainer">
        {content.map(({ title, subheader, upper, lower }, i) => (
          <div key={i} className="introBlock">
            <div className="header">
              <h2>{title}</h2>
              <p className="subheader">{subheader}</p>
            </div>
            <div className="paragraph">
              <p>{upper}</p>
              <p>{lower}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
