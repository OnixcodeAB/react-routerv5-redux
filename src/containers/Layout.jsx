import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
Footer;
const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
