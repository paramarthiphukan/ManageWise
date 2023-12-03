import React from 'react'
import logo from "../../assets/logo.webp"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={logo} alt="" className="logo" />
      </div>

      <div className="options">
        <div className="option">Features</div>
        <div className="option">FAQ</div>
        <div className="option">Pricing</div>
        <div className="option">Testimonials</div>
        <div className="option buy">Buy Template</div>
      </div>
    </div>
  );
}

export default Navbar;