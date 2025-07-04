import { Link } from "react-router-dom";
import "./Navbar.css";

const logo =
  "https://image-tc.galaxy.tf/wipng-60ozpe8mpwggi1hgo0qdy12in/therhyland-logo-wordmark-rgb-white.png?width=500";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="The Rhylandhotel logo, with white text saying 'The Rhyland'"
          />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/events">Stay</Link>
        </li>
        <li>
          <Link to="/rbar">R Bar</Link>
        </li>
        <li>
          <Link to="/honey-ginger">Honey & Ginger</Link>
        </li>
        <li>
          <Link to="/gather">Gather</Link>
        </li>
        <li>
          <Link to="/the-scene">Scene</Link>
        </li>
        <li>
          <button>Hambur</button>
        </li>
        <li>
          <button className="book-btn">Book Now</button>
        </li>
      </ul>
    </nav>
  );
}
