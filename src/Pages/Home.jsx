import Hero from "/src/Components/Hero/Hero";
import About from "/src/Components/About/About";
import Partners from "/src/Components/Partners/Partners";
import Contact from "/src/Components/Contact/Contact";
import Orders from "/src/Components/Orderes/Orders";
import Photos from "/src/Components/Photos/Photos";
import Fleet from "../Components/Fleet/Fleet";

const Home = () => {
  return (
    <div>
      <Hero />
      <Photos />
      <div className="container">
        <About />
      </div>
      <Orders />
      <Fleet />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
