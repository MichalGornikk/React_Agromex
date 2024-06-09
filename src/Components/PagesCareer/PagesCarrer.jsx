import "./PagesCarrer.css";

const PagesCareer = () => {
  return (
    <div className="career-container">
      <h1 className="career-title">
        <span className="career-highlight-blue">Dołącz</span> do naszego
        zespołu!
      </h1>
      <div className="career-content">
        <div className="career-left-section">
          <p>
            Agromex to dynamicznie rozwijająca się firma transportowa, która
            poszukuje ambitnych i zaangażowanych pracowników, gotowych do
            współpracy w dążeniu do realizacji naszych celów.
          </p>
        </div>
        <div className="career-right-section">
          <p className="career-highlight">
            <span className="career-checkmark"></span> Uczciwe i jasne zasady
          </p>
          <p className="career-highlight">
            <span className="career-checkmark"></span> Stabilne zatrudnienie
          </p>
          <p className="career-highlight">
            <span className="career-checkmark"></span> Możliwość dalszego
            rozwoju zawodowego w strukturach firmy
          </p>
        </div>
      </div>
      <div className="career-job-details">
        <div className="career-job-card">
          <h3>Kierowca</h3>
          <p>
            Aktualnie poszukujemy pracowników na stanowisko: Kierowca C+E, w
            transporcie międzynarodowym
          </p>
          <p>Lokalizacja: Łuków, Polska</p>
          <p>Kontakt: +48 500 400 466 </p>
          <button className="career-apply-button">Aplikuj</button>
        </div>
        <div className="career-images">
          <img src="images/magazyn.jpg" alt="Truck 1" />
        </div>
      </div>
    </div>
  );
};

export default PagesCareer;
