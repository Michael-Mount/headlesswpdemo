import { Link } from "react-router-dom";
import "./PackageCard.css";

export default function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <div className="package-image">
        <img src={pkg.acf?.package_image} alt={pkg.package_name} />
      </div>

      <div className="package-content">
        <h4>{pkg.package_name}</h4>
        <p>{pkg.acf?.package_preview}</p>
        <Link to={`/packages/${pkg.slug}`}>View Package Details</Link>
      </div>
    </div>
  );
}
