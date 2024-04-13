import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";
import Orders from "./Components/Orderes/Orders";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar className="navbar_up" />
      <Hero />
      <Programs />
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
