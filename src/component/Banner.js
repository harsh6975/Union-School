import React from "react";

function Banner({ image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "60vh",
        maxHeight: "auto",
      }}
    ></div>
  );
}

export default Banner;
