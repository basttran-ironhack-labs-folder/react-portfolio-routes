import React, { Component } from "react";

import "./BoilingVerdict.css";

class BoilingVerdict extends Component {
  render() {
    return (
      <div className="BoilingVerdict">
        {/* if it's boiling temperature (100 Celscius) */}
        <p>IT'S GETTING HOT IN HURR 🔥</p>

        {/* if it's boiling temperature (100 Celscius) */}
        <p>Brrrrr 🌊</p>
      </div>
    );
  }
}

export default BoilingVerdict;
