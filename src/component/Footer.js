import React from "react";
import line from "../images/line.png";
import styles from "../styles/footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <footer>
      <div className={styles.footerupper}>
        <div className={styles.footerlinkcontainer}>
          <div className={styles.footerlink}>
            <h2>CONNECT WITH US</h2>
            <ul>
              <li>Bhagowanpur , Newtown ( Hatishala ) Kol-700135 , W.B.</li>
              <li>+91 77186- 11100</li>
              <li>+91 6289942448</li>
              <li>info@unionschool.org / unionschoolnt@gmail.com</li>
            </ul>
          </div>
          <div className={styles.footrlink}>
            <h2>FEATURES</h2>
            <ul>
              <li>Experienced Faculty</li>
              <li>Innovative Teaching Methods</li>
              <li>Creative Writing</li>
              <li>Toy Rooms For The Tiny Tots</li>
              <li>Digital classNamees (Smart classNamees)</li>
              <li>Remedial classNamees</li>
              <li>Comfortable Carpoll System</li>
              <li>Yoga & Aerobics</li>
              <li>Green & Ecofriendly Campus</li>
            </ul>
          </div>
          <div className={styles.footerlink}>
            <h2>QUICK LINKS</h2>
            <ul>
              <li>OUR ADMISSION FORM</li>
              <li>FAQs</li>
              <li>OUR PROSPECTUS</li>
              <li>JOB APPLICATION FORM</li>
              <li>GALLERY</li>
            </ul>
          </div>
        </div>
        <div className={styles.footericoncontainer}>
          <h3>Get connected with us on social networks!</h3>
          <div className={styles.facebook_icon}>
            <FacebookIcon />{" "}
          </div>
          <div className={styles.facebook_icon}>
            <InstagramIcon />{" "}
          </div>
          <div className={styles.facebook_icon}>
            <TwitterIcon />
          </div>
        </div>
        <img width="1500" height="0.6" src={line} alt="line" />
      </div>
      <div className={styles.footerlower}>
        <p>
          © COPYRIGHT UNION SCHOOL NEWTOWN 2017. DESIGN & DEVELOPMENT BY UNION
          SCHOOL
        </p>
      </div>
    </footer>
  );
}

export default Footer;
