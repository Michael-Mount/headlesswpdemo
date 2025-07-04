import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import HambrgerMenu from "./HamburgerMenu";
import "./Navbar.css";

const logo =
  "https://image-tc.galaxy.tf/wipng-60ozpe8mpwggi1hgo0qdy12in/therhyland-logo-wordmark-rgb-white.png?width=500";

export default function Navbar() {
  const roomsLinks = [
    { label: "Rooms & Suites", path: "/rooms-suites" },
    { label: "Amenities", path: "/amenites" },
    { label: "Packages & Specials", path: "/packages-specials" },
  ];

  const sceneLinks = [
    { label: "Rhyland Recommends", path: "/rhyland-recomandations" },
  ];

  const hamLinks = [
    { label: "Contact & FAQ", path: "/contact" },
    { label: "Our Story", path: "/our-story" },
    { label: "Employment", path: "/employment" },
  ];

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
          <DropdownMenu title="stay" items={roomsLinks} />
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
          <DropdownMenu title="scene" items={sceneLinks} />
        </li>
        <li>
          <HambrgerMenu items={hamLinks} />
        </li>
        <li>
          <button className="book-btn">Book Now</button>
        </li>
      </ul>
    </nav>
  );
}
