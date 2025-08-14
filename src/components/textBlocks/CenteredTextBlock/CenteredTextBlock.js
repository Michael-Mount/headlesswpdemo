import "./CenteredTextBlock.css";

export default function CenteredTextBlock({ content }) {
  return (
    <div className="CenteredTextBlock-Wrapper">
      <p>{content}</p>
    </div>
  );
}
