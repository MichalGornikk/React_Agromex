import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  let logo = "images/logo.png";
  let menu_icon = "images/menu_icon.png";

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 810 ? setSticky(true) : setSticky(false);
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
          <a href="#">AKTUALNOŚCI</a>
        </li>
        <li className="nav-button">
          <a href="#">O FIRMIE</a>
        </li>
        <li className="nav-button">
          TRANSPORT I SPEDYCJA
          <ul className="dropdown-menu">
            <li>
              <a href="#">Tranposrt Krajowy</a>
            </li>
            <li>
              <a href="#">Transport</a>
            </li>
            <li>
              <a href="#">Obsługa Celna</a>
            </li>
          </ul>
        </li>
        <li className="nav-button">
          PRODUKCJA
          <ul className="dropdown-menu">
            <li>
              <a href="#">Maszyny rolnicze</a>
            </li>
            <li>
              <a href="#">Konstrukcje stalowe</a>
            </li>
            <li>
              <a href="#">Inne </a>
            </li>
          </ul>
        </li>
        <li className="nav-button">STREFA KLIENTA</li>
        <li className="nav-button">
          <a href="#">KARIERA</a>
        </li>
        <li className="nav-button">
          <a href="#">FAQ</a>
        </li>
        <li className="nav-button">
          <a href="#">KONTAKT</a>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
