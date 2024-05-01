import "./Orders.css"; // Importujemy plik CSS

const Box = () => {
  return (
    <div className="order-box">
      <div className="box-one">
        <div className="in-box">
          <img src="images/mariusz.jpg" alt="" />
          <h2>Mariusz Szcześniak</h2>
        </div>
      </div>

      <div className="box">
        <div className="in-box">
          <img src="images/ireneusz.jpg" alt="" />
          <h2>Ireneusz Szcześniak</h2>
        </div>
      </div>
    </div>
  );
};

export default Box;
