import React, { Component } from 'react';

import './TempUnit.css';

class TempUnit extends Component {
  changeUnit = e => {
    this.props.onUnitChange(e.target.textContent);
  };

  render() {
    return (
      <div className="unit-container">
        <span
          className={`unit-value ${
            this.props.unit === 'C' ? 'active-unit' : ''
          }`}
          onClick={this.changeUnit}
        >
          C
        </span>
        <span
          className={`unit-value ${
            this.props.unit === 'F' ? 'active-unit' : ''
          }`}
          onClick={this.changeUnit}
        >
          F
        </span>
      </div>
    );
  }
}

export default TempUnit;
