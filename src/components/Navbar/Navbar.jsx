import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../Assets/Images/Summit.svg";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? "auto" : "hidden"; // Prevent body scrolling when the menu is open
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Items */}
        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="/">Product</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/insights">Insights</a>
          </li>
          <li className="navbar-item">
            <a href="/points">Points</a>
          </li>
          <li className="navbar-item">
            <a href="/changelog">Changelog</a>
          </li>
          <li className="navbar-item mobile-wallet-btn">
            <button className="navbar-wallet-btn">Connect Wallet</button>
          </li>
        </ul>

        {/* Desktop Connect Wallet Button */}
        <button className="navbar-wallet-btn desktop-wallet-btn">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
