import React from "react";
import styles from "../styles/banner.module.css";

function Banner({ image }) {
  return (
    <div className={styles.banner}>
      <img src={image} alt="banner"></img>
    </div>
  );
}

export default Banner;
