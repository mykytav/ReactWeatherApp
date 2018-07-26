import React from 'react';

const DateComponent = props => (
  <div className="date-container">
    <div>{props.day}</div>
    <div>{props.date}</div>
  </div>
);

export default DateComponent;
