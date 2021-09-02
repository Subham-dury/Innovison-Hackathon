import React from "react";
import "./navbar.css";

const Navbar = () => (
  <>
    <div className="topbar">
      <div className="top-container">
        <div className="top-left">
          <i className="icofont-clock-time"></i>
          Monday - Sunday, 24x7
        </div>
        <div className="top-right">
          <i className="icofont-phone"></i>
          Call us 1800-313-444-222
        </div>
      </div>
    </div>
    <header className="navbar">
      <div className="navbar__title navbar__item">
        Integrated Covid Management System
      </div>
      <div className="navbar__item">About Us</div>
      <div className="navbar__item">Home</div>
      <div className="navbar__item">E-Services</div>
    </header>
  </>
);

export default Navbar;
