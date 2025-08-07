import { Link } from "react-router-dom";
import "./DropdownMenu.css";

export default function DropdownMenu({ title, titleLink, items }) {
  return (
    <div className="dropdown">
      <Link to={titleLink} className="dropdown-toggle">
        {title} <i className="arrow up"></i>
      </Link>
      <div className="dropdown-menu">
        {items.map(({ label, path }) => (
          <Link key={path} to={path} className="dropdown-item">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
