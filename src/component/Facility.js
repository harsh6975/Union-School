import React from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import styles from "../styles/facility.module.css";
import design from "../images/design.png";
import f1 from "../images/f1.png";
import f2 from "../images/f3.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";
import f6 from "../images/f6.png";
import f7 from "../images/f7.png";
import f8 from "../images/f8.png";
import f9 from "../images/f9.png";
import faci from "../images/faci.png";
import Banner from "./Banner";

function Facility() {
  return (
    <>
      <Navbar1 />
      <Banner image={faci} />
      <div className={styles.content2}>
        <section className={styles.middlesection}>
          <div className={styles.box}>
            <h1>FACILITIES</h1>
            <img height="120" width="600" src={design} alt="design" />
            <div className={styles.boxx}>
              <h4>Campus & Infrastructure</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Library Resources</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Arts & creativity</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Laboratory</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Computer Lab & Digital className</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Hostel</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Transport</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Games</h4>
            </div>
            <div className={styles.boxx}>
              <h4>Joga & Meditation</h4>
            </div>
          </div>
          <div className={styles.text}>
            <p>
              Union School has numerous facilities which can be let out to
              external users and the community. In almost all cases, the
              facilities are part of the new buildings and grounds which were
              completed in 2017 – 2018. <br />
              <br />
              <b>Astroturf (All Weather Sports Pitch)</b>
              <br />
              The Astroturf, which was installed in 2018, is surrounded by solid
              fencing. It measures 908 m2 in total. <br />
              <br />
              <b>Multi-Use Games Area (M.U.G.A)</b>
              <br />
              The M.U.G.A., which was installed in 2018, is surrounded by solid
              fencing. It measures 1268m2 in total. It is marked out for a range
              of sports.
              <br />
              <br />
              <b>Sports Hall</b>
              <br />
              The Sports Hall, which was installed in 2017, can be sectioned off
              to create smaller areas. It measures 594m2 in total. It is marked
              out for a range of sports. <br />
              <br />
            </p>

            <section className={styles.middlsection}>
              <div className={styles.textcontainer}>
                <p>
                  <b>Activity Studio</b>
                  <br />
                  The Activity Studio is a smaller indoor sports area. It has a
                  sprung floor. It measures 150m2 in total.
                </p>
              </div>

              <div className={styles.imagecontainer}>
                <div className={styles.i1}>
                  <img src={f1} alt="pic" />
                </div>
              </div>
            </section>
            <p>
              <b>Main Hall</b>
              <br />
              The Main Hall, which was built in 2017, measures 254m2 in total.
              It has modern audio- visual technology including high quality
              projection, large screen and high quality sound. Bleacher seating
              capacity of up to approx. 280. Other seating may be available for
              larger audiences. <br />
              <br />
              <b>classNamerooms</b>
              <br />
              Various classNamerooms of various sizes are available. All have
              audio visual technology. Most have 4K touchscreen monitors.
            </p>
          </div>
        </section>
        <div className={styles.flexpic}>
          <img src={f2} alt="" />
          <img src={f3} alt="" />
          <img src={f4} alt="" />
          <img src={f5} alt="" />
        </div>
        <section className={styles.middsection}>
          <div className={styles.textcontainer}>
            <p>
              <b>COMPUTER LAB CUM DIGITAL LARNING</b>
              <br />
              <br />
              USN has setup the State-of-the-Art Computer Lab. and pa, special
              attention to computer training and all the students from className
              I onwards are taught computer skills in a practical and appealing
              way. Internet training forms a core component of learning IT
              skills. Additionally, the students are given the opportunity to
              master a variety of operating systems and application software
              which are widely used in the IT world today. A dedicated Computer
              lab is avilable to all tudents. <br />
              <br />
              <br />
              <br />
              <b>HOSTEL & BOARDING SYSTEM</b> <br />
              <br />
              USN is a next Residential-cum-Day School where Boarding homes
              plays a key role in the overall development of children staying
              away from their homes. In all respects, it is a second home away
              from home, enabling the boarders to use it as a springboard to
              success and a stepping stone to enter the world with confidence,
              dignity, sportsman spirit and wisdom.
              <br />
              <br />
              <br />
              <br />
              <b>Multi-Use Games Area (M.U.G.A)</b>
              <br />
              <br />
              The M.U.G.A., which was installed in 2018, is surrounded by solid
              fencing. It measures 1268m2 in total. It is marked out for a range
              of sports.
              <br />
              <br />
              <br />
              <br />
              <b>JOGA EDUCATION</b>
              <br />
              <br />
              Our mission is to empower students and teachers with yoga-inspired
              exercises to promote lifetime wellness. Our vision is to make yoga
              available in all schools so that students and teachers develop
              body-mind awareness and the ability to nurture theirown.
              <br />
              <br />
              <br />
              <br />
              <b>UNDERTAKING FOR SCHOOL TRANSPORT</b>
              <br />
              <br />
              I/We understand that the use of school transport is obligatory.
              Monthly bus fee payable for the scheduled route/routes will be
              notified by the school authorities from time to time. The bus fee
              is payable for all the 12 months of a year. Pupil will be dropped
              only at the predetermined alighting point. A guardian cannot
              personally collect a pupil availing of school transport except in
              an emergency. In such a case, a request should be made in writing
              to the Principal to permit the guardian concerned to personally
              collect his/her ward from the School by 9.00 a.m. on the concerned
              day. However, no pupil will be handed over to an escort unless the
              relevant ID card is produced.
            </p>
          </div>

          <div className={styles.imagcontainer}>
            <div className={styles.i1}>
              <img src={f6} alt="pic" />
            </div>
            <div className={styles.i1}>
              <img src={f7} alt="pic" />
            </div>
            <div className={styles.i3}>
              <img src={f8} alt="pic" />
            </div>
            <div className={styles.i4}>
              <img src={f9} alt="pic" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Facility;
