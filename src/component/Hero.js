import React from "react";
import "../styles/hero.css";
import heroicon from "../images/heroicon.png";

function Hero() {
  return (
    <div className="align">
      <img className="h" src={heroicon} alt="" />
    </div>
  );
}

export default Hero;
