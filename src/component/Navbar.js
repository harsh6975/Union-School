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
        <a href="#asad">HOME</a>
        <a href="/about-us">ABOUT</a>
        <a href="/academic">ACADEMIC</a>
        <a href="/facilities">FACILITIES</a>
        <a href="/admission">ADMISSION</a>
        <a href="#asdf">GALLERY</a>
        <a href="#asdf">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
