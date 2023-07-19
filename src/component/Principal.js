import React from "react";
import styles from "../styles/principal.module.css";
import Line from "./Line";
import principal from "../images/principal.jpeg";
function Principal() {
  return (
    <div className={styles.principal}>
      <div className={styles.leftbox}>
        <h2>Our Principal Message</h2>
        <Line />
        <p>
          A beginning with a vision and right planning with timely execution
          develops the resources and skills of anyone into excellence and
          greatness. It is the ‘spirit ‘of facing the hurdles in life infuses to
          go ahead to the horizon of success.
          <br /><br />
          It is perfectly legitimate for caring parents to desire that their
          children get the best education and training while being rooted to
          their heritage and culture. Every teacher of our School has been
          groomed to be passionate about his/her responsibilities. A team of
          highly qualified teachers train the children to develop innovative
          ideas and independent problem solving skills. Our teachers are updated
          through regular workshop/orientation programmes for latest pedagogical
          advances
        </p>
      </div>
      <div className={styles.rightbox}>
        <img src={principal} alt="principal"></img>
      </div>
    </div>
  );
}

export default Principal;
