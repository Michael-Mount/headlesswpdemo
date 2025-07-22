import "./BasicGhostButton.css";

export default function BasicGhostButton({ title, link }) {
  return (
    <>
      <div className="ghost-btn">
        <a href={link}>{title}</a>
      </div>
    </>
  );
}
