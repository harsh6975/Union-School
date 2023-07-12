import React from "react";
import schoollogo from "../images/skool-logo.png";
import styles from "../styles/navbar1.module.css";
import MiniNavbar from "./MiniNavbar";

function Navbar1() {
  return (
    <div className={styles.navcontainer}>
      <MiniNavbar />
      <div className={styles.navbar1}>
        <a href="/about-us">ABOUT</a>
        <a href="/academic">ACADEMIC</a>
        <a href="/facilities">FACILITIES</a>
        <a href="/">
          <img
            className={styles.logo}
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
