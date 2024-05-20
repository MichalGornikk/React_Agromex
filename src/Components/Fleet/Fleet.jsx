import "./Fleet.css";

const Fleet = () => {
  return (
    <div className="fleet-container">
      <h1>
        Nasza <span className="blue">Flota</span>
      </h1>
      <p className="fleet-description"></p>
      <div className="fleet-images">
        <img src="images/mercedes.jpg" alt="Fleet 2" />

        <img src="images/man.jpg" alt="Fleet 2" />
        <img src="images/scania.jpeg" alt="Fleet 2" />
      </div>
    </div>
  );
};

export default Fleet;
