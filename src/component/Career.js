import React from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import "../styles/career.css";
import design from "../images/design.png";

function Career() {
  return (
    <div>
      <Navbar1 />
      <div className="align1">
        <h1>So, You want to be part of us ?</h1>
        <p>
          we’re always for creative, talented self-starters to join the growmodo
          family. <br />
          check out our open roles below and fill out an application
        </p>
        <button className="btn">JOIN US</button>
      </div>
      <div className="content5">
        <section className="middle-section">
          <div className="box">
            <h1>CAREER</h1>
            <img height="120" width="600" src={design} alt="design" />
            <div className="boxx">
              <h4>JOBS</h4>
            </div>
            <div className="boxx">
              <h4>APPLY ONLINE</h4>
            </div>
          </div>
          <div className="openbox">
            <div className="toggle">
              <div className="a">
                <h3>TEACHING STAFF</h3>
              </div>
              <div className="b">
                <h3>ADMIN STAFF</h3>
              </div>
            </div>
            <img className="l" src="images/l3.png" alt="" />
            <div className="grid">
              <div className="g"></div>
              <div className="g"></div>
              <div className="g"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
