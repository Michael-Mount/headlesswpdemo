import { Link } from "react-router-dom";
import "./PackageCard.css";

import GreyButton from "../buttons/GreyButton";

export default function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <div className="package-image">
        <img src={pkg.acf?.package_image} alt={pkg.package_name} />
      </div>

      <div className="package-content">
        <h4>{pkg.acf?.package_name}</h4>
        <p>{pkg.acf?.package_preview}</p>
        <Link to={`/packages/${pkg.slug}`}>View Package Details</Link>
      </div>

      <div className="package-book">
        <GreyButton link={pkg.acf?.package_link} title="Book Now" />
      </div>
    </div>
  );
}
