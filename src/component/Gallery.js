import React from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import gallery from "../images/gallary.png";
import design from "../images/design.png";
import g1 from "../images/g1.png";
import g2 from "../images/g2.png";
import g3 from "../images/g3.png";
import i1 from "../images/i1.png";
import i2 from "../images/i2.png";
import i3 from "../images/i3.png";
import l3 from "../images/l3.png";
import "../styles/gallery.css";

function Gallery() {
  return (
    <div>
      <Navbar1 />
      <div className="admoic">
        <img src={gallery} alt="gallery"></img>
      </div>
      <div className="content4">
        <section className="middle-section">
          <div className="box">
            <h1>GALLARY</h1>
            <img height="120" width="600" src={design} alt="design" />
            <div className="boxx">
              <h4>School Tour</h4>
            </div>
            <div className="boxx">
              <h4>Arts &culture</h4>
            </div>
            <div className="boxx">
              <h4>Sports</h4>
            </div>
            <div className="boxx">
              <h4>Events</h4>
            </div>
            <div className="boxx">
              <h4>Academic Year 2023</h4>
            </div>
          </div>
          <img className="x" src="images/x.png" alt="" />
          <div className="pic">
            <div className="icon">
              <div className="a">
                <img src={i1} alt="" />
                <h3>IMAGES</h3>
              </div>
              <div className="b">
                <img src={i2} alt="" />
                <h3>VIDEOS</h3>
              </div>
              <div className="c">
                <img src={i3} alt="" />
                <h3>PRAYER SONGS</h3>
              </div>
            </div>
            <img className="l" src={l3} alt="" />
            <div className="pic1">
              <img className="1" src={g1} alt="" />
              <img className="2" src={g2} alt="" />
              <img className="3" src={g3} alt="" />
            </div>
            <div className="pic2">
              <img className="4" src={g1} alt="" />
              <img className="5" src={g2} alt="" />
              <img className="6" src={g3} alt="" />
            </div>
            <div className="pic3">
              <img className="7" src={g1} alt="" />
              <img className="8" src={g2} alt="" />
              <img className="9" src={g3} alt="" />
            </div>
            <div className="pic4">
              <img className="10" src={g1} alt="" />
              <img className="11" src={g2} alt="" />
              <img className="12" src={g3} alt="" />
            </div>
          </div>
        </section>
      </div>
      <Footer />{" "}
    </div>
  );
}

export default Gallery;
