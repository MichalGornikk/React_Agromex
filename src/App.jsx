import Layout from "./Pages/Layout";
import Home from "./Pages/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Careerr from "./Pages/Career";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/career" element={<Careerr />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
