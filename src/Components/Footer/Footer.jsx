import "./Footer.css";

const Footer = () => {
  const logo = "images/logo.png";
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo-info">
            <div className="footer-logo">
              <img src={logo} alt="Logo firmy" />
            </div>
            <div className="footer-company-info">
              <p>Mariusz Szczęsniak i Ireneusz Szcześniak</p>
              <p>Adres firmy: Strzelnicza 3, 21-400 Łuków</p>
              <p>
                Telefon: <a href="tel:+48123456789">+48 123 456 789</a>
              </p>
              <p>
                Telefon: <a href="tel:+48123456789">+48 987 654 321</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-navigation">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/company">O Firmie</a>
              </li>
              <li>
                <a href="/transport">Transport i Spedycja</a>
              </li>
              <li>
                <a href="/produce">Produkcja</a>
              </li>
              <li>
                <a href="/career">Kariera</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <img src="images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" aria-label="X">
            <img src="images/X-icon.png" alt="X" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <img src="images/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {year} Agromex. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
