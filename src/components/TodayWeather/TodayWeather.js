import React from 'react';

import './TodayWeather.css';
import DateComponent from './DateComponent/DateComponent';
import IconsComponent from './IconsComponent/IconsComponent';
import TempComponent from './TempComponent/TempComponent';
import ExtraInfoComponent from './ExtraInfoComponent/ExtraInfoComponent';

const TodayWeather = props => {
  const {
    day,
    date,
    weatherId,
    description,
    mainTemperature,
    minTemperature,
    maxTemperature,
    pressure,
    humidity,
    windSpeed
  } = props.data;

  const { unit } = props;

  return (
    <div className="today-component-container">
      <DateComponent day={day} date={date} />
      <IconsComponent description={description} weatherId={weatherId} />
      <TempComponent
        mainTemperature={mainTemperature}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
      />
      <ExtraInfoComponent
        pressure={pressure}
        unit={unit}
        humidity={humidity}
        windSpeed={windSpeed}
      />
    </div>
  );
};

export default TodayWeather;
