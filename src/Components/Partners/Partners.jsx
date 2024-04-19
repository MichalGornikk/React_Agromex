import "./Partners.css"; // Import your CSS file

const Partners = () => {
  const images = [
    { image: "images/nestle.png", alt: "Logo TEST 1" },
    { image: "images/nestle.png", alt: "Logo TEST 2" },
    { image: "images/nestle.png", alt: "Logo TEST 3" },
    // ... Add more image objects if needed
  ];

  return (
    <div className="box-scroll">
      {" "}
      {/* Container for the images */}
      <ul className="image-list">
        {" "}
        {/* Use an unordered list for better accessibility */}
        {images.map((image) => (
          <li key={image.image} className="image-item">
            {" "}
            {/* Image item with styling */}
            <img src={image.image} alt={image.alt} width="130" height="130" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
