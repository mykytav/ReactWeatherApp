import React from 'react';

const ExtraInfoComponent = props => {
  const windSpeedUnit = props.unit === 'C' ? 'm/s' : 'miles/hr';
  return (
    <div className="extra-info-container">
      <div className="extra-info-item">
        <span>
          <i className="wi wi-humidity" />
        </span>
        <span>Humidity</span>
        <span>{props.humidity}%</span>
      </div>
      <div className="extra-info-item">
        <span>
          <i className="wi wi-barometer" />
        </span>
        <span>Pressure</span>
        <span>{props.pressure} hPa</span>
      </div>
      <div className="extra-info-item">
        <span>
          <i className="wi wi-strong-wind" />
        </span>
        <span>Wind Speed</span>
        <span>
          {props.windSpeed}
          {windSpeedUnit}
        </span>
      </div>
    </div>
  );
};

export default ExtraInfoComponent;
