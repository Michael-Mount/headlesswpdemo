import "./DecoratedTextBanner.css";

export default function DecoratedTextBanner({ text }) {
  return (
    <>
      <div className="text-banner-container">
        <div className="square-marker" />
        <div className="content">{text}</div>
        <div className="square-marker" />
      </div>
    </>
  );
}
