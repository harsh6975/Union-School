import React from "react";
import Footer from "./Footer";
import styles from "../styles/about.module.css";
import abo from "../images/abo.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import Banner from "./Banner";
import Navbar from "./Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Banner image={abo} />
     
          <div className={styles.aboutus}>
            <div className={styles.textcontainer}>
              <h2>ABOUT UNION</h2>
              <p>
                The School follows a curriculum, which is in accordance with the
                specifications of the National Council of Educational Research &
                Training (NCERT) and followed by the State Board. It aims at the
                We are placed to introduce Union School Newtowattainment of the
                highest order of academic excellence.
              </p>
              <ul>
                <li>
                  The purpose of lorem ipsum is to create a natural looking
                  block of
                </li>
                <li>
                  The purpose of lorem ipsum is to create a natural looking
                  block
                </li>
                <li>
                  The purpose of lorem ipsum is to create a natural looking
                  block
                </li>
                <li>
                  The purpose of lorem ipsum is to create a natural looking
                  block
                </li>
              </ul>
            </div>
            <div className={styles.imagecontainer}>
              <div className={styles.i1}>
                <img src={s1} alt="pic" />
              </div>

              <div className={styles.box}>
                <img src={s2} alt="icon" />
                <h4>
                  This is the way education should be . A lot of places talk
                  about it
                </h4>
              </div>
            </div>
          </div>
     
      <Footer />
    </>
  );
}

export default About;
