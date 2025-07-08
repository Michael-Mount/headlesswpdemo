import { useEffect, useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import HambrgerMenu from "./HamburgerMenu";
import "./Navbar.css";

const logo =
  "https://image-tc.galaxy.tf/wipng-60ozpe8mpwggi1hgo0qdy12in/therhyland-logo-wordmark-rgb-white.png?width=500";

export default function Navbar() {
  const location = useLocation();
  const isRoomDetailPage = matchPath(
    { path: "/rooms/:slug", end: true },
    location.pathname
  );

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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isRoomDetailPage) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isRoomDetailPage]);

  return (
    <nav className={scrollY > 0 ? "scrolled" : ""}>
      <div className="nav-container">
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
            <DropdownMenu title="stay" titleLink="/" items={roomsLinks} />
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
            <DropdownMenu
              title="scene"
              titleLink="/the-scene"
              items={sceneLinks}
            />
          </li>
          <li>
            <HambrgerMenu items={hamLinks} />
          </li>
          <li>
            <button className="book-btn">Book Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
