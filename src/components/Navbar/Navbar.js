import React from "react";
import "./navbar.css";

const Navbar = () => (
  <>
    <div className="topbar">
      <div className="top-container">
        <div className="top-left">
          <h1>Emergency Bed . INfo</h1>
        </div>
        <div className="top-right">
          <i className="icofont-phone"></i>
          Call us 1800-313-444-222
        </div>
      </div>
    </div>
    <header className="navbar">
      <div className="navbar__title navbar__item">
        Emergency Bed Management System
      </div>
      <div className="navbar_title">
        <ul>
        <li className="navbar__item">About Us</li>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">E-Services</li>
        </ul>
      </div>
    </header>
  </>
);

export default Navbar;
