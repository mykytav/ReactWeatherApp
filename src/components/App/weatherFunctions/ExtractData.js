export const extractDataForNavbar = forecastData => {
  return {
    city: `${forecastData.city.name}, ${forecastData.city.country}`
  };
};

export const extractDataForTodayWeather = forecastData => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const todayForecast = forecastData.list[0];

  const time = new Date(todayForecast.dt * 1000);
  const day = getDay(time);
  const date = `${
    monthNames[time.getMonth()]
  } ${time.getDate()}, ${time.getFullYear()}`;

  const weatherId = todayForecast.weather[0].id;
  const description = todayForecast.weather[0].description;

  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;
  let mainTemperature = isDayTime
    ? todayForecast.temp.day
    : todayForecast.temp.night;
  mainTemperature = Math.round(mainTemperature);
  const minTemperature = Math.round(todayForecast.temp.min);
  const maxTemperature = Math.round(todayForecast.temp.max);

  const pressure = todayForecast.pressure;
  const humidity = todayForecast.humidity;
  const windSpeed = todayForecast.speed;

  return {
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
  };
};

export const extractDataForListAndGraphComponent = forecastData => {
  const listComponentData = [];
  const graphComponentData = [];

  forecastData.list.forEach(forecast => {
    let item = {};
    item.day = getDay(forecast.dt * 1000);
    item.weatherId = forecast.weather[0].id;
    item.description = forecast.weather[0].description;
    item.mainTemperature = Math.round(forecast.temp.day);

    listComponentData.push(item);
    graphComponentData.push(forecast.temp.day);
  });

  // Remove first element as that represents today's weather
  // ListComponent displays next 6 days data
  listComponentData.shift();

  return {
    listComponentData,
    graphComponentData
  };
};

// Takes date object or unix timestamp in ms and returns day string
export const getDay = time => {
  const daysNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday ',
    'Friday',
    'Saturday'
  ];
  return daysNames[new Date(time).getDay()];
};
