import React from "react";
import "../styles/admission.css";
import design from "../images/design.png";
import admpic from "../images/admpic.png";

import Navbar1 from "./Navbar1";
import Footer from "./Footer";

function Admission() {
  return (
    <>
      <Navbar1 />
      <div className="content">
        <div className="admpic">
          <img src={admpic} alt="admpic" height={500}></img>
        </div>
        <section className="middle-section">
          <div className="box">
            <h1>ADMISSION</h1>
            <img height="120" width="600" src={design} alt="design" />
            <div className="boxx">
              <h4>TRANSFER YEAR 6 TO YEAR 7</h4>
            </div>
            <div className="boxx">
              <h4>ECONDARY TRANSFER-HOW TO APPLY</h4>
            </div>
            <div className="boxx">
              <h4>IN YEAR ADMISSION</h4>
            </div>
            <div className="boxx">
              <h4>SIXTH FORM</h4>
            </div>
          </div>
          <div className="text">
            <p>
              We are glad to inform you that we have started accepting
              applications for the next academic year. Admission is open to all
              respective of caste or creed. Admissions are available for
              classNamees from LKG to IV and for the session 2019-20. The
              interested candidates must go through the enrollment procedure.
              Parents are asked to fill in questionnaires and go through an
              interactive session with both student & parents.
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
                On perusal of the duly filled application forms we shall
                schedule an interactive session with the parents and the child
                at the school campus.
              </li>
            </ul>
            <p className="space">
              <b>Requirements:</b> A copy of the Birth Certificate from the
              Registrar of Births will be required at the time of admission to
              LKG/UKG and className 4. Pupils coming from other schools will
              have to produce a Transfer Certificate issued by the school last
              attended. Admission will be confirmed after the interactive
              session (not required for LKG/UKG & Grade IV)
            </p>
            <h2>Documents needed at the time of admission</h2>
            <ul>
              <li>Transfer Certificate from the previous school (original)</li>
              <li>
                Progress Report/School Record from the previous school
                (original)
              </li>
              <li>Copy of the Birth Certificate</li>
              <li>Conduct Certificate</li>
              <li>Migration Certificate</li>
              <li>Original Mark list</li>
              <li>Parents Identity</li>
              <li>Four recent passport size photographs.</li>
            </ul>
            <h2>Please contact our Admission Help Desk ( 77186 11100 )</h2>
            <p>
              For any further admissions queries, please contact us at <br />
              Email :unionschoolnt@gmail.com / info@unionschool.org <br />
              Contact : +916297281161
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Admission;
