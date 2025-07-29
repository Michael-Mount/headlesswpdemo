import "./GreyButton.css";

export default function GreyButton({ title, link }) {
  return (
    <>
      <div className="grey-btn">
        <a href={link}>{title}</a>
      </div>
    </>
  );
}
