import React from "react";
import line from "../images/line.png";
import "../styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-upper">
        <div className="footer-link-container">
          <div className="footer-link">
            <h2>CONNECT WITH US</h2>
            <ul>
              <li>Bhagowanpur , Newtown ( Hatishala ) Kol-700135 , W.B.</li>
              <li>+91 77186- 11100</li>
              <li>+91 6289942448</li>
              <li>info@unionschool.org / unionschoolnt@gmail.com</li>
            </ul>
          </div>
          <div className="footr-link">
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
          <div className="footer-link">
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
        <div className="footer-icon-container">
          <h3>Get connected with us on social networks!</h3>
          <div className="facebook_icon">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="facebook_icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="facebook_icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="facebook_icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <img width="1500" height="0.6" src={line} alt="line" />
      </div>
      <div className="footer-lower">
        <p>
          © COPYRIGHT UNION SCHOOL NEWTOWN 2017. DESIGN & DEVELOPMENT BY UNION
          SCHOOL
        </p>
      </div>
    </footer>
  );
}

export default Footer;
