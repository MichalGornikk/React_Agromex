import "./PagesContact.css";

const PagesContact = () => {
  return (
    <div className="contact-box">
      <div className="contact-text">
        <h1>Informacje</h1>
        <h3>Godziny otwarcia</h3>
        <p>Poniedziałek - piątekt</p>
        <p>6:00 - 18:00</p>
        <h3>Adres firmy</h3>
        <p>Strzelnicza 3, 21-400 Łuków</p>
        <h3>Dane Firmy</h3>
        <p>NIP: PL123456789 </p>
        <p>REGON: 1400000001</p>
        <h3>Dane kontaktowe</h3>
        <p>
          Telefon: <a href="tel:+48123456789"> +48 123 456 789</a>
        </p>
        <p>
          Email:
          <a href="mailto:adres-email@example.com"> Agromex@biuro.pl</a>
        </p>
      </div>
      <div className="map-box">
        <iframe
          width="50%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Strzelnicza%203,%2021-400%20%C5%81uk%C3%B3w,%20Poland+(Agromex)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </div>
  );
};

export default PagesContact;
