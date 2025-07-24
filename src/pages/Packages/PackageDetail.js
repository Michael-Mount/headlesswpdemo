import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PackageDetail.css";

import GreyButton from "../../components/buttons/GreyButton";

export default function PackageDetail() {
  const { slug } = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    fetch(
      `https://headlessdemo3.wpenginepowered.com/wp-json/wp/v2/package?slug=${slug}&acf_format=standard&per_page=100&_=$%7BDate.now()%7D`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setPkg(data[0]);
      });
  }, [slug]);

  return (
    <>
      <div className="package-container">
        {!pkg ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{pkg.title.rendered}</h1>
            <div className="package-detail">
              <div className="package-text">
                <div
                  dangerouslySetInnerHTML={{ __html: pkg.acf?.package_details }}
                />
                <GreyButton title="Book Now" link={pkg.package_link} />
              </div>
              <img src={pkg.acf?.package_image} alt={pkg.title.rendered} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
