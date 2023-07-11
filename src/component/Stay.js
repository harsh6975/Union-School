import React from "react";
import "../styles/stay.css";

function Stay() {
  return (
    <div className="stay">
      <h4>Stay Connected</h4>
      <p>
        Subscribe to our mailing list and we ‘ll send you relevant information
        about about <b> Union School Newtown</b>
      </p>
      <form className="f">
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

      <form className="fill" action="">
        <div className="formcontrol">
          <label for="first-name">First Name*</label>
          <input id="first-name" name="first-name" type="text" />
        </div>
        <div className="formcontrol">
          <label for="last-name">Last Name*</label>
          <input id="last-name" name="last-name" type="text" />
        </div>
        <div className="formcontrol">
          <label className="e" for="email">
            Email*
          </label>
          <input type="email" id="email" name="email" />
        </div>
      </form>
      <button className="bt">SUBSCRIBE</button>
    </div>
  );
}

export default Stay;
