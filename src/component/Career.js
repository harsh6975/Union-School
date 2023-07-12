import React from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import styles from "../styles/career.module.css";
import design from "../images/design.png";

function Career() {
  return (
    <div>
      <Navbar1 />
      <div className={styles.align1}>
        <h1>So, You want to be part of us ?</h1>
        <p>
          we’re always for creative, talented self-starters to join the growmodo
          family. <br />
          check out our open roles below and fill out an application
        </p>
        <button className={styles.btn}>JOIN US</button>
      </div>
      <div className={styles.middlesection}>
        <div className={styles.box}>
          <h1>CAREER</h1>
          <img height="120" width="600" src={design} alt="design" />
          <div className={styles.boxx}>
            <h4>JOBS</h4>
          </div>
          <div className={styles.boxx}>
            <h4>APPLY ONLINE</h4>
          </div>
        </div>
        <div className={styles.openbox}>
          <div className={styles.toggle}>
            <div className={styles.a}>
              <h3>TEACHING STAFF</h3>
            </div>
            <div className={styles.b}>
              <h3>ADMIN STAFF</h3>
            </div>
          </div>
          <img className={styles.l} src="images/l3.png" alt="" />
          <div className={styles.grid}>
            <div className={styles.g}></div>
            <div className={styles.g}></div>
            <div className={styles.g}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
