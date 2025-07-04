import { Link } from "react-router-dom";
import "./HambrgerMenu.css";

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

export default function HambrgerMenu({ itmes }) {
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
  return (
    <>
      <div className="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="off-screen-menu">
        {itmes.map(({ label, path }) => (
          <Link key={path} to={path} className="ham-itme">
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
