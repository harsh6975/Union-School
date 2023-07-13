import React from "react";
import styles from "../styles/footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from "@mui/icons-material/School";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <footer>
      <div className={styles.footerupper}>
        <div className={styles.footerlinkcontainer}>
          <div className={styles.footerlink}>
            <h2>CONNECT WITH US</h2>
            <ul>
              <li>
                <SchoolIcon /> &nbsp; Bhagowanpur , Newtown ( Hatishala )
                Kol-700135 , W.B.
              </li>
              <li>
                <LocalPhoneIcon />
                &nbsp; +91 77186- 11100
              </li>
              <li>
                <PhoneInTalkIcon />
                &nbsp; +91 6289942448
              </li>
              <li>
                <EmailIcon />
                &nbsp;info@unionschool.org / unionschoolnt@gmail.com
              </li>
            </ul>
          </div>
          <div className={styles.footerlink}>
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
              <li>JOB APPLICATION FORM</li>
              <li>OUR PROSPECTUS</li>
              <li>GALLERY</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className={styles.footericoncontainer}>
          <h3>Get connected with us on social networks!</h3>
          <div>
            <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
          </div>
        </div>
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
