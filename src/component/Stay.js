import React from "react";
import styles from "../styles/stay.module.css";

function Stay() {
  return (
    <div className={styles.stay}>
      <h4>Stay Connected</h4>
      <p>
        Subscribe to our mailing list and we ‘ll send you relevant information
        about about <b> Union School Newtown</b>
      </p>
      <form className={styles.f}>
        <legend>
          <i>I,m interested in:</i>
        </legend>
        <div>
          <input
            type="checkbox"
            id="ps"
            name="interest"
            value="Primary School"
          />
          <label for="ps">Primary School</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ss"
            name="interest"
            value="Secondary School"
          />
          <label for="ss">Secondary School</label>
        </div>
      </form>

      <form className={styles.fill} action="">
        <div className={styles.formcontrol}>
          <label for="first-name">First Name*</label>
          <input id="first-name" name="first-name" type="text" />
        </div>
        <div className={styles.formcontrol}>
          <label for="last-name">Last Name*</label>
          <input id="last-name" name="last-name" type="text" />
        </div>
        <div className={styles.formcontrol}>
          <label className={styles.e} for="email">
            Email*
          </label>
          <input type="email" id="email" name="email" />
        </div>
      </form>
      <button className={styles.bt}>SUBSCRIBE</button>
    </div>
  );
}

export default Stay;
