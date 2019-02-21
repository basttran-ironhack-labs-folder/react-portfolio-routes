import React, { Component } from "react";

import "./TempInput.css";

class TempInput extends Component {
  render() {
    return (
      <section className="TempInput">
        <h3>Temperature in SCALE</h3>
        <label>
          Current Temperature:
          <input onChange="" value="" type="number" name="" placeholder="400" />
        </label>
      </section>
    );
  }
}

export default TempInput;
