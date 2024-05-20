import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let logo = "images/logo.png";
  let menu_icon = "images/menu_icon.png";

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div></div>
      <img src={logo} alt="" className="logo" />
      <div></div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className="nav-button">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-button">
          <Link to="/company">O FIRMIE</Link>
        </li>
        <li className="nav-button custom-button">
          <Link to="/transport">TRANSPORT I SPEDYCJA ↓</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/transport">Transport Krajowy</Link>
            </li>
            <hr />

            <li>
              <Link to="/transport">Transport</Link>
            </li>
            <hr />

            <li>
              <Link to="/transport">Obsługa Celna</Link>
            </li>
          </ul>
        </li>
        <li className="nav-button custom-button">
          <Link to="/produce">PRODUKCJA ↓</Link>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Maszyny rolnicze</a>
            </li>
            <hr />
            <li>
              <a href="#">Konstrukcje stalowe</a>
            </li>
            <hr />

            <li>
              <a href="#">Inne </a>
            </li>
          </ul>
        </li>

        <li className="nav-button">
          <Link to="/career">KARIERA</Link>
        </li>
        <li className="nav-button">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="nav-button">
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
