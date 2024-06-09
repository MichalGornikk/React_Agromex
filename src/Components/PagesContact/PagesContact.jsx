import "./PagesContact.css";

const PagesContact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contact-title">Informacje</h1>
          <div className="contact-section">
            <h3>Godziny otwarcia</h3>
            <p>Poniedziałek - Piątek</p>
            <p>6:00 - 18:00</p>
          </div>
          <div className="contact-section">
            <h3>Adres firmy</h3>
            <p>Strzelnicza 3, 21-400 Łuków</p>
          </div>
          <div className="contact-section">
            <h3>Dane Firmy</h3>
            <p>NIP: PL123456789</p>
            <p>REGON: 1400000001</p>
          </div>
          <div className="contact-section">
            <h3>Dane kontaktowe</h3>
            <p>
              Telefon: <a href="tel:+48123456789">+48 123 456 789</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:adres-email@example.com">Agromex@biuro.pl</a>
            </p>
          </div>
        </div>
      </div>
      <div className="map-box">
        <iframe
          title="Map"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Strzelnicza%203,%2021-400%20%C5%81uk%C3%B3w,%20Poland+(Agromex)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default PagesContact;
