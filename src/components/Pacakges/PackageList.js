import { useEffect, useState } from "react";
import "./PackageList.css";

import PackageCard from "./PackageCard";

export default function PackageList() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(
      "https://headlessdemo3.wpenginepowered.com/wp-json/wp/v2/package?acf_format=standard&per_page=100&_=$%7BDate.now()%7D"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Packages:", data);
        setPackages(data);
      });
  }, []);

  return (
    <div className="packages-list">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}
