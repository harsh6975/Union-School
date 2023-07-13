import React from "react";
import styles from "../styles/hero.module.css";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";

import ImageSlider from "./Image Slider/ImageSlider";

const images = [hero1, hero2, hero3];
function Hero() {
  return (
    <div className={styles.container}>
      <ImageSlider
        images={images}
        autoPlay={true}
        maxImg={1}
        imageName={"hero"}
      />
    </div>
  );
}

export default Hero;
