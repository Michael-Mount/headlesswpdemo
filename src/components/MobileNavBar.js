import { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNavBar.css";

const logo =
  "https://image-tc.galaxy.tf/wipng-60ozpe8mpwggi1hgo0qdy12in/therhyland-logo-wordmark-rgb-white.png?width=500";

export default function MobileNavBar({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const navItems = [
    { label: "Stay", submenu: "stay" },
    { label: "R Bar", path: "/rbar" },
    { label: "Honey & Ginger", path: "/honey-ginger" },
    { label: "Gather", path: "/gather" },
    { label: "Scene", submenu: "scene" },
    { label: "Contact", path: "/contact" },
    { label: "Our Story", path: "/our-story" },
    { label: "Employment", path: "/employment" },
  ];

  const submenus = {
    stay: [
      { label: "Rooms & Suites", path: "/rooms-suites" },
      { label: "Amenities", path: "/amenities" },
      { label: "Packages & Offers", path: "/packages-specials" },
    ],
    scene: [{ label: "Rhyland Recommends", path: "/rhyland-recomandations" }],
  };

  return (
    <>
      <header className={`mobile-header ${className}`}>
        <Link to="/">
          <img src={logo} alt="The Rhyland Logo" className="mobile-logo" />
        </Link>
        <button className="mobileHamBtn" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </header>

      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          {submenu ? (
            <button className="back-btn" onClick={() => setSubmenu(null)}>
              ← Back
            </button>
          ) : (
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
          )}
        </div>

        <ul className="menu-list">
          {submenu ? (
            <>
              <li className="submenu-title">{submenu.toUpperCase()}</li>
              {submenus[submenu].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            navItems.map((item) =>
              item.submenu ? (
                <li key={item.label}>
                  <button
                    onClick={() => setSubmenu(item.submenu)}
                    className="submenu-link"
                  >
                    {item.label} →
                  </button>
                </li>
              ) : (
                <li key={item.label}>
                  <Link to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              )
            )
          )}
        </ul>

        <button className="mobileBookBtn">Book Now</button>
      </div>
    </>
  );
}
