import "./Orders.css"; // Importujemy plik CSS

const Box = () => {
  return (
    <div className="order-box">
      {/* Pierwszy box */}
      <div className="box">
        <h1>Mariusz Szcześniak</h1>
        <p>Założyciel Firmy</p>

        <img
          className="order-image"
          src="https://via.placeholder.com/300/300"
          alt="Order Image 1"
        />
        <button>Numer Telefonu</button>
      </div>

      {/* Drugi box */}
      <div className="box">
        <h1>Ireneusz Szcześniak </h1>
        <p>Założyciel Firmy</p>
        <img
          className="order-image"
          src="https://via.placeholder.com/300/300"
          alt="Order Image 2"
        />
        <button>Numer Telefonu</button>
      </div>

      {/* Trzeci box */}
      <div className="box">
        <h1>Sekretariat</h1>
        <p>Sekretariat</p>

        <img
          className="order-image"
          src="https://via.placeholder.com/300/300"
          alt="Order Image 3"
        />
        <button>Numer Telefonu</button>
      </div>
    </div>
  );
};

export default Box;
