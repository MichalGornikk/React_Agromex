import Layout from "./Pages/Layout";
import Home from "./Pages/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Careerr from "./Pages/Career";
import Clientzone from "./Pages/Clientzone";
import Produce from "./Pages/Produce";
import Company from "./Pages/Company";
import Transport from "./Pages/Transport";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/clientzone" element={<Clientzone />} />
          <Route path="/career" element={<Careerr />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
