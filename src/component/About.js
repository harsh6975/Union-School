import React from "react";
import styles from "../styles/about.module.css";
import about from "../images/about.jpeg";
import Line from "./Line";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.leftContainer}>
        <img src={about} alt="about"></img>
      </div>
      <div className={styles.rightContainer}>
        <h3>About</h3>
        <h1>School</h1>
        <Line />
        <p>
          Union School, New Town (USN) is the place where young minds blossom,
          and dreams take flight. Our mission is to provide a holistic education
          that empowers students to excel academically, emotionally, and
          socially. With experienced and caring faculty, state-of-the-art
          facilities, and an innovative curriculum, we strive to foster a love
          for learning and encourage creativity and critical thinking.
          <br />
          <br />
          At USN, we believe that education extends beyond the classroom, and we
          offer a diverse range of extracurricular activities to help students
          explore their passions and interests. We value parental involvement
          and aim to create a safe, inclusive environment where everyone feels
          welcomed and valued.
          <br />
          <br />
          Join our community, and together, let's build a bright future for your
          child. Enroll at USN and watch them soar to new heights of success and
          achievement.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default About;
