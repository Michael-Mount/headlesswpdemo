import "./TallImageGallery.css";

export default function TallImageGallery({ images }) {
  return (
    <div className="tallImageContainer">
      {images.map((src, index) => (
        <div className="tallImageWrapper" key={index}>
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
