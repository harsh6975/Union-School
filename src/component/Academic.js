import React from "react";
import Footer from "./Footer";
import design from "../images/design.png";
import aca from "../images/aca.png";
import Banner from "./Banner";
import styles from "../styles/academic.module.css";
import Navbar from "./Navbar/Navbar";

function Academic() {
  return (
    <div>
      <Navbar />
      <Banner image={aca} />
      <div className={styles.academic}>
        <div className={styles.box}>
          <h1>ACADEMIC</h1>
          <img height="120" width="600" src={design} alt="design" />
          <div className={styles.boxx}>
            <h4>Pre to Upper Primary</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Secondary Sector</h4>
          </div>
          <div className={styles.boxx}>
            <h4>ADMISSION Process</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Principal & Faculty</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Examination</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Affilation</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Fees Structures</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Uniform</h4>
          </div>
          <div className={styles.boxx}>
            <h4>Results</h4>
          </div>
          <div className={styles.boxx}>
            <h4>School Timing & Academic Calender</h4>
          </div>
        </div>
        <div className={styles.text}>
          <h3>
            At Union Newtown School we believe that the Academic should enable
            all young people to be:
          </h3>
          <div className={styles.info}>
            <ul>
              <li>Educated for wisdom, knowledge and skills</li>
              <li>Educated for hope and aspiration</li>
              <li>Educated for community and living well together</li>
              <li>Educated for dignity and respect</li>
            </ul>
          </div>
          <p>
            We are glad to inform you that we have started accepting
            applications for the next academic year. Admission is open to all
            respective of caste or creed. Admissions are available for classes
            from LKG to IV and for the session 2019-20. The interested
            candidates must go through the enrollment procedure. Parents are
            asked to fill in questionnaires and go through an interactive
            session with both student & parents.
          </p>
          <ul>
            <li>
              Signature of the parents/guardian is compulsory on all the forms
            </li>
            <li>Incomplete forms will not be accepted.</li>
            <li>
              Overwriting of any information in the application forms is not
              permitted. In case of any overwriting, kindly fill a fresh form.
            </li>
            <li>
              On perusal of the duly filled application forms we shall schedule
              an interactive session with the parents and the child at the
              school campus.
            </li>
          </ul>

          <p>
            For any further admissions queries, please contact us at <br />
            Email :
            <a href="#a">unionschoolnt@gmail.com / info@unionschool.org</a>
            <br />
            Contact : <b>+916297281161</b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Academic;
