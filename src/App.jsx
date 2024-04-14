import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";
import Orders from "./Components/Orderes/Orders";
import Photos from "./Components/Photos/Photos";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar className="navbar_up" />
      <Hero />
      <Photos />
      <div className="container">
        <About />
      </div>
      <Orders />
      <Partners />
      <Contact />
      <div className="footer_box">
        <Footer />
      </div>
    </div>
  );
};

export default App;
