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
import styles from "../styles/gallery.module.css";
import Banner from "./Banner";

function Gallery() {
  return (
    <div>
      <Navbar1 />
      <Banner image={gallery} />
      <div className={styles.content4}>
        <section className={styles.middlesection}>
          <div className={styles.box}>
            <h1>GALLARY</h1>
            <img height="120" width="600" src={design} alt="design" />
            <div className={styles.boxx}>
              <h4>School Tour</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Arts &culture</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Sports</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Events</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Academic Year 2023</h4>
            </div>
          </div>
          <img className={styles.x} src="images/x.png" alt="" />
          <div className={styles.pic}>
            <div className={styles.icon}>
              <div className={styles.a}>
                <img src={i1} alt="" />
                <h3>IMAGES</h3>
              </div>
              <div className={styles.b}>
                <img src={i2} alt="" />
                <h3>VIDEOS</h3>
              </div>
              <div className={styles.c}>
                <img src={i3} alt="" />
                <h3>PRAYER SONGS</h3>
              </div>
            </div>
            <img className={styles.l} src={l3} alt="" />
            <div className={styles.pic1}>
              <img className={styles.p1} src={g1} alt="" />
              <img className={styles.p2} src={g2} alt="" />
              <img className={styles.p3} src={g3} alt="" />
            </div>
            <div className={styles.pic2}>
              <img className={styles.p4} src={g1} alt="" />
              <img className={styles.p5} src={g2} alt="" />
              <img className={styles.p6} src={g3} alt="" />
            </div>
            <div className={styles.pic3}>
              <img className={styles.p7} src={g1} alt="" />
              <img className={styles.p8} src={g2} alt="" />
              <img className={styles.p9} src={g3} alt="" />
            </div>
            <div className={styles.pic4}>
              <img className={styles.p10} src={g1} alt="" />
              <img className={styles.p11} src={g2} alt="" />
              <img className={styles.p12} src={g3} alt="" />
            </div>
          </div>
        </section>
      </div>
      <Footer />{" "}
    </div>
  );
}

export default Gallery;
