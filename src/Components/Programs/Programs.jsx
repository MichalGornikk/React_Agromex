// import { useRef } from "react";
import "./Programs.css";

const Programs = () => {
  let about_img = "images/about.jpg";
  // const sliderTrackRef = useRef(null);
  // useEffect(() => {
  //   // Code to be executed after component mounts
  //   let offset = 0;

  //   setInterval(() => {
  //     offset += 1;
  //     sliderTrackRef.style = "transform: translateX(" + offset + "px)";
  //     //console.log("margin-left: " + offset + "px");
  //     //console.log(sliderTrackRef);
  //   }, 10);

  //   console.log("Component mounted!");
  // }, []); ref={sliderTrackRef}
  return (
    <div className="slider-box">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
          <div className="slide">
            <img src={about_img} alt="" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
