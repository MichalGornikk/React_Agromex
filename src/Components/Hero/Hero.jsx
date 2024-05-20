import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <video autoPlay muted loop id="background-video">
        <source src="images/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="hero-text">
        <div className="text-box">
          <h1 className="title">AGROMEX</h1>
          <h3 className="subtitle">Mariusz Szcześniak i Ireneusz Szcześniak</h3>
          <p className="description">
            Transport międzynarodowy, Spedycja i sprzęty rolnicze od XXX roku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
