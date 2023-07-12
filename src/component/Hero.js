import React from "react";
import styles from "../styles/hero.module.css";
import heroicon from "../images/heroicon.png";

function Hero() {
  return (
    <div className={styles.align}>
      <img className={styles.h} src={heroicon} alt="" />
    </div>
  );
}

export default Hero;
