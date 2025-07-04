import { Link } from "react-router-dom";
import "./DropdownMenu.css";

export default function DropdownMenu({ title, items }) {
  return (
    <div className="dropdown">
      <Link to="/" className="dropdown-toggle">
        {title}
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
