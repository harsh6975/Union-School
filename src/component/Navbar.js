import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <header>
        <h1>UNION SCHOOL NEWTOWN</h1>
        <ul className="link-container">
          <li>FB</li>
          <li>TW</li>
          <li>Insta</li>
          <li>Search</li>
        </ul>
      </header>
      <div id="nav">
        <a href="/">HOME</a>
        <a href="/about-us">ABOUT</a>
        <a href="/academic">ACADEMIC</a>
        <a href="/facilities">FACILITIES</a>
        <a href="/admission">ADMISSION</a>
        <a href="/gallery">GALLERY</a>
        <a href="/contact-us">CONTACT</a>
        <a href="/career">CAREER</a>
      </div>
    </div>
  );
}

export default Navbar;
