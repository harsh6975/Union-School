import React from "react";
import styles from "../styles/navbar.module.css";
import MiniNavbar from "./MiniNavbar";

function Navbar() {
  return (
    <div>
      <MiniNavbar />
      <div className={styles.nav}>
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
