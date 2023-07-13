import React from "react";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";

import ImageSlider from "./Image Slider/ImageSlider";

const images = [hero1, hero2, hero3];
function Hero() {
  return (
    <div>
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
