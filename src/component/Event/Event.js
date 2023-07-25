import React from "react";
import Line from "../Line";
import styles from "./event.module.css";

function Event() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h3>School</h3>
        <h1>Events</h1>
        <div>
          {" "}
          <Line />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <div className={styles.event1}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              Rabindra Jayanti
              <br />
              26/1/2023
            </div>
          </div>
          <div className={styles.event2}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              Republic Day
              <br />
              26/1/2023
            </div>
          </div>
          <div className={styles.event3}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              Fondation Day
              <br />
              26/1/2023
            </div>
          </div>
        </div>
        <div className={styles.event4}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            Christmas
            <br />
            25/12/2022
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
