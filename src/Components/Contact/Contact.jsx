import { Link } from "react-router-dom";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="box-contact">
      <div className="text-container">
        <h1>Zacznijmy wspólprace!</h1>
      </div>
      <div className="button-container">
        <Link to="/contact">
          <button className="contact-button">DAJ NAM ZNAĆ</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
