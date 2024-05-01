import "./Title.css";

const title = () => {
  return (
    <div className="background-map">
      <div className="title-map">
        <h1>Nasze trasy</h1>
      </div>
      <div className="world-map">
        <img src="images/world.svg" alt="map" />
        <div className="pin polska">
          <span>Polska</span>
        </div>
        <div className="pin czechy">
          <span>Czechy</span>
        </div>
        <div className="pin slowacja">
          <span>Słowacja</span>
        </div>
        <div className="pin ruminia">
          <span>Ruminia</span>
        </div>
        <div className="pin wegry">
          <span>Węgry</span>
        </div>
        <div className="pin bulgaria">
          <span>Bułgaria</span>
        </div>
        <div className="pin grecja">
          <span>Grecja</span>
        </div>
        <div className="pin turcja">
          <span>Turcja</span>
        </div>
      </div>
    </div>
  );
};

export default title;
// Kraje - flagi Polska, Czechy, Słowacja, Ruminia, Węgry, Bułgaria,
// Grecja, Turcja
