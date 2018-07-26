import React from 'react';

const TempComponent = props => (
  <div className="temp-container">
    <div className="temp-text">
      <span>{props.mainTemperature}</span>
      <i className="wi wi-degrees" />
    </div>
    <div className="high-low-container">
      <div className="high-low-item">
        <span>
          <i className="wi wi-direction-up" />
        </span>
        <span>Max</span>
        <span>
          <span>{props.maxTemperature}&#x00B0;</span>
        </span>
      </div>
      <div className="high-low-item">
        <span>
          <i className="wi wi-direction-down" />
        </span>
        <span>Min</span>
        <span>
          <span>{props.minTemperature}&#x00B0;</span>
        </span>
      </div>
    </div>
  </div>
);

export default TempComponent;
