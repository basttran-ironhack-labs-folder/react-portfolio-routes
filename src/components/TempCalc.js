import React, { Component } from "react";

import "./TempCalc.css";
import TempInput from "./TempInput";
import BoilingVerdict from "./BoilingVerdict";

class TempCalc extends Component {
  render() {
    return (
      <section className="TempCalc">
        <h2>Temperature Calculator</h2>
        {/* Farenheit */}
        <TempInput />
        {/* Celcius */}
        <TempInput />

        <BoilingVerdict />
      </section>
    );
  }
}

export default TempCalc;
