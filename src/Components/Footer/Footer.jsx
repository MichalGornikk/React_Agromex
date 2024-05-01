import "./Footer.css";

const Footer = () => {
  const logo = "images/logo.png";

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
              <p>Adres firmy: Łuków, Strzelnicza, 01-011</p>
              <p>Telefon: +48 123 456 789</p>
              <p>Telefon: +48 987 654 321</p>
            </div>
            <div className="footer-company-info">
              <p>REGON: 1400000001</p>
              <p>KRS: 0000001</p>
              <p>NIP: PL123456789</p>
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
                <a href="/o-firmie">O Firmie</a>
              </li>
              <li>
                <a href="/transport-i-spedycja">Transport i Spedycja</a>
              </li>
              <li>
                <a href="/produkcja">Produkcja</a>
              </li>

              <li>
                <a href="/kariera">Kariera</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
