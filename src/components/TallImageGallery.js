import "./TallImageGallery.css";

export default function TallImageGallery({ images }) {
  return (
    <div className="tallImageContainer">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index + 1}`} />
      ))}
    </div>
  );
}
