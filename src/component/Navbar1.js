import React from "react";
import schoollogo from "../images/skool-logo.png";

function Navbar1() {
  return (
    <div class="container">
      <header>
        <h1>UNION SCHOOL NEWTOWN</h1>
        <ul class="ank-container">
          <a href="sd">FB</a>
          <a href="sd">TW</a>
          <a href="sd">Insta</a>
          <a href="sd">Search</a>
        </ul>
      </header>
      <nav>
        <ul class="l1">
          <a href="sd">ABOUT</a>
          <a href="sd">ACADEMIC</a>
          <a href="sd">FACILITIES</a>
        </ul>
        <img
          class="logo"
          height="140"
          width="150"
          src={schoollogo}
          alt="logo"
        />
        <ul class="l2">
          <a href="/admission">ADMISSION</a>
          <a href="sd">GALLERY</a>
          <a href="sd">CONTACT</a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar1;
