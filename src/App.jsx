import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Careerr from "./Pages/Career";
import Produce from "./Pages/Produce";
import Company from "./Pages/Company";
import Transport from "./Pages/Transport";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/React_Agromex/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/produce" element={<Produce />} />
            <Route path="/career" element={<Careerr />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
