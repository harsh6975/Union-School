import React from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import design from "../images/design.png";
import styles from "../styles/contact.module.css";
import contact from "../images/contact.png";
import Banner from "./Banner";

function Contact() {
  return (
    <div>
      <Navbar1 />
      <Banner image={contact} />
      <div className={styles.content6}>
        <section className={styles.middlesection}>
          <div className={styles.box}>
            <h1>CONTACT US</h1>
            <img height="120" width="600" src={design} alt="design" />
            <div className={styles.boxx}>
              <h4>
                Union School Newtown <br />
                Bhagowanpur , Newtown ( Hatishala ) <br />
                Kol-700135 , W.B. <br />
                P: +91 77186 - 11100 | +91 6297281161 <br />
                Mail: info@unionschool.org / unionschoolnt@gmail.com
              </h4>
            </div>

            <div className={styles.boxx1}>
              <h4>CAMPUS MAP</h4>
              <img src="images/MAPLOGO.png" alt="" />
            </div>
            <img className={styles.I} src="images/map.png" alt="" />
          </div>
          <div className={styles.boxcontainer}>
            <div className={styles.box1}>
              <h1>CONTACT FORM</h1>
            </div>
            <form action="">
              <div className={styles.formcontainer}>
                <div className={styles.formcontrol}>
                  <label for="first-name">First Name</label>
                  <input
                    id="first-name"
                    name="first-name"
                    placeholder="First Name"
                    type="text"
                  />
                </div>

                <div className={styles.formcontrol}>
                  <label for="last-name">Last Name</label>
                  <input
                    id="last-name"
                    name="last-name"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>

                <div className={styles.formcontrol}>
                  <label for="email">Email Addrss*</label>
                  <input type="email" id="email" name="email" />
                </div>

                <div className={styles.formcontrol}>
                  <label for="phone-no">Phone Number*</label>
                  <input type="number" id="phone-no" name="phone-no" />
                </div>

                <div className={styles.control}>
                  <label for="comment">Questions / Comments</label>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className={styles.button_container}>
                <button type="submit">Apply Now</button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
