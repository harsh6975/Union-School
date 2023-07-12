import React from "react";
import styles from "../styles/school.module.css";
import i4 from "../images/i4.png";
import i5 from "../images/i5.png";
import i6 from "../images/i6.png";
import i7 from "../images/i7.png";
import begins from "../images/begins.png";

function School() {
  return (
    <div>
      <div className={styles.ourschool}>
        <h2>OUR SCHOOL</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className={styles.icon}>
          <div className={styles.i4}>
            <img height="90" width="95" src={i4} alt="" />
            <h4>ACTIVE LEARNING</h4>
          </div>
          <div className={styles.i4}>
            <img height="90" width="100" src={i5} alt="" />
            <h4>STUDENT PLAY LAND</h4>
          </div>
          <div className={styles.i4}>
            <img height="90" width="95" src={i6} alt="" />
            <h4>SCHOOL BUS</h4>
          </div>
          <div className={styles.i4}>
            <img height="95" width="100" src={i7} alt="" />
            <h4>CUTE ENVIRONMENT</h4>
          </div>
        </div>
      </div>
      <div className={styles.better}>
        <h4>Union School</h4>
        <p className={styles.tx}>Better Learning Begins Here</p>
        <div className={styles.motiv}>
          <div className={styles.pic}>
            <img src={begins} alt="" />
          </div>
          <div className={styles.color}>
            <div className={styles.b}>
              <h5>Our History</h5>
              <p>Better Learning Begins Here</p>
            </div>
            <div className={styles.p}>
              <h5>Photo Gallery</h5>
              <p>Better Learning Begins Here</p>
            </div>
            <div className={styles.g}>
              <h5>Our Mission</h5>
              <p>Better Learning Begins Here</p>
            </div>
            <div className={styles.r}>
              <h5>Special Pleasure</h5>
              <p>Better Learning Begins Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default School;
