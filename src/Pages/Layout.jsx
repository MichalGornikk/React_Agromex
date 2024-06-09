import Navbar from "/src/Components/Navbar/Navbar";

import Footer from "/src/Components/Footer/Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar className="navbar_up" />
      <Outlet />
      <div className="footer_box">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
