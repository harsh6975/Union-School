import React from "react";
import schoollogo from "../images/skool-logo.png";
import "../styles/navbar1.css";
import MiniNavbar from "./MiniNavbar";

function Navbar1() {
  return (
    <div className="navcontainer">
      <MiniNavbar />
      <div className="navbar1">
        <a href="/about-us">ABOUT</a>
        <a href="/academic">ACADEMIC</a>
        <a href="/facilities">FACILITIES</a>
        <a href="/">
          <img
            className="logo"
            height="140"
            width="150"
            src={schoollogo}
            alt="logo"
          />
        </a>
        <a href="/admission">ADMISSION</a>
        <a href="/gallery">GALLERY</a>
        <a href="/contact-us">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar1;
