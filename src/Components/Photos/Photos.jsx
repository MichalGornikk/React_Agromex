import { useState, useEffect } from "react";
import "./Photos.css";

const Photos = () => {
  const imageSrc1 = "images/BMW.jpeg";
  const imageSrc2 = "images/about.jpg";
  const imageSrc3 = "images/about.jpg";
  const imageSrc4 = "images/about.jpg";
  const imageSrc5 = "images/about.jpg";
  const imageSrc6 = "images/about.jpg";
  const imageSrc7 = "images/about.jpg";

  const slideImages = [
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    imageSrc5,
    imageSrc6,
    imageSrc7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slideImages.length, currentIndex]); // Dodaj currentIndex do zależności

  // Ustaw tytuł strony na podstawie bieżącego slajdu
  useEffect(() => {
    document.title = `Slide ${currentIndex + 1}`;
  }, [currentIndex]);

  return (
    <div className="slider-box">
      <div className="slider">
        <div className="slide-track">
          {/* Mapowanie tablicy slideImages */}
          {slideImages.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt="" className="slider-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
