import "./Footer.css";

const Footer = () => {
  let fb_icon = "images/facebook-icon.svg";
  let ws_icon = "images/whatsup-icon.svg";
  let mail_icon = "images/mail-icon.svg";

  return (
    <div className="footer-box">
      <div className="footer-section footer-padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4>For Bussnes</h4>
            <a href="#">
              <p>AKTUALNOŚĆI</p>
            </a>
            <a href="#">
              <p>TRANSPORT I SPEDYCJA</p>
            </a>
            <a href="#">
              <p>ZLECENIA DLA FIRM</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>Resources</h4>
            <a href="#">
              <p>ZLECENIA DLA FIRM</p>
            </a>
            <a href="#">
              <p>ZLECENIA DLA FIRM</p>
            </a>
            <a href="#">
              <p>ZLECENIA DLA FIRM</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>PARTNERZY</h4>
            <a href="#">
              <p>PARTNERZY</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>Kontakt</h4>
            <a href="#">
              <p>Telefon</p>
            </a>
            <h5>500 500 500</h5>
            <a href="#">
              <p>Telefon</p>
            </a>
            <h5>500 500 500</h5>
          </div>

          <div className="footer-links-div">
            <div className="socialmedia">
              <p>
                <img src={fb_icon} alt="icon_fb" />
              </p>
              <p>
                <img src={ws_icon} alt="icon_Whatsup" />
              </p>
              <p>
                <img src={mail_icon} alt="mail" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
