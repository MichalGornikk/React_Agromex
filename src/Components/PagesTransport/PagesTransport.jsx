import { useState, useEffect } from "react";
import "./PagesTransport.css";

const PagesTransport = () => {
  const [modalsOpen, setModalsOpen] = useState([false, false, false]);

  const openModal = (index) => {
    const newModalsOpen = [...modalsOpen];
    newModalsOpen[index] = true;
    setModalsOpen(newModalsOpen);
  };

  const closeModal = (index) => {
    const newModalsOpen = [...modalsOpen];
    newModalsOpen[index] = false;
    setModalsOpen(newModalsOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setModalsOpen([false, false, false]);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setModalsOpen([false, false, false]);
    }
  };

  const modalContent = [
    { header: "Nagłówek modala 1", content: "Treść modala 1" },
    { header: "Nagłówek modala 2", content: "Treść modala 2" },
    { header: "Nagłówek modala 3", content: "Treść modala 3" },
  ];

  return (
    <div className="container-transport">
      <section className="transport-section">
        <div className="transport-content">
          <h3 className="red-color">TRANSPORT KRAJOWY</h3>
          <p>
            text
            <button onClick={() => openModal(0)}>SPRAWDŹ OFERTĘ</button>
          </p>
        </div>
        <img
          src="images/client.jpg"
          alt="Zdjęcie 1"
          className="transport-image-one"
        />
      </section>

      <section className="transport-section transport-section-reverse">
        <img
          src="images/kierowca.jpg"
          alt="Zdjęcie 2"
          className="transport-image-two"
        />
        <div className="transport-content">
          <h3 className="blue-color">SPEDYCJA</h3>
          <p>
            text
            <button onClick={() => openModal(1)}>SPRAWDŹ OFERTĘ</button>
          </p>
        </div>
      </section>

      <section className="transport-section">
        <div className="transport-content">
          <h3 className="red-color">OBSŁUGA CELNA</h3>
          <p>text</p>
          <button onClick={() => openModal(2)}>SPRAWDŹ OFERTĘ</button>
        </div>
        <img
          src="images/magazyn.jpg"
          alt="Zdjęcie 3"
          className="transport-image-three"
        />
      </section>

      {modalsOpen.map(
        (isOpen, index) =>
          isOpen && (
            <div key={index} className="modal" onClick={handleOutsideClick}>
              <div className="modal-content">
                <span className="close" onClick={() => closeModal(index)}>
                  &times;
                </span>
                <h2>{modalContent[index].header}</h2>
                <p>{modalContent[index].content}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default PagesTransport;
