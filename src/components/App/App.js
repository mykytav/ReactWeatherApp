import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Navbar from '../Navbar/Navbar';
import InstructionLayout from '../InstructionLayout/InstructionLayout';
import MainAppLayout from '../MainAppLayout/MainAppLayout';

import {
  extractDataForNavbar,
  extractDataForTodayWeather,
  extractDataForListAndGraphComponent
} from './weatherFunctions/ExtractData';

class App extends Component {
  state = {
    unit: 'C',
    queryString: '',
    latLng: [],
    navbarData: {},
    todayComponentData: {},
    listComponentData: [],
    graphComponentData: []
  };

  onUnitChange = unit => {
    this.setState({ unit }, this.notifyStateChange);
  };

  onSearchSubmit = query => {
    this.setState(
      {
        queryString: query,
        latLng: []
      },
      this.notifyStateChange
    );
  };

  componentDidMount() {
    const geolocation = navigator.geolocation;
    if (geolocation) {
      const accessAllowed = position => {
        this.setState(
          {
            latLng: [position.coords.latitude, position.coords.longitude]
          },
          this.notifyStateChange
        );
      };

      const accessDenied = () => {
        console.log('Permission denied');
      };

      geolocation.getCurrentPosition(accessAllowed, accessDenied);
    } else {
      console.log("Your browser doesn't support geolocation");
    }
  }

  notifyStateChange = () => {
    const hasLatLng = this.state.latLng.length > 0;
    const hasCityOrZipcode = this.state.queryString !== '';

    if (hasLatLng || hasCityOrZipcode) {
      this.fetchWeatherForecast(hasLatLng)
        .then(forecastData => {
          console.log('Forecast Data:', forecastData);
          const navbarData = extractDataForNavbar(forecastData);
          const todayComponentData = extractDataForTodayWeather(forecastData);
          const {
            listComponentData,
            graphComponentData
          } = extractDataForListAndGraphComponent(forecastData);

          this.setState({
            navbarData,
            todayComponentData,
            listComponentData,
            graphComponentData
          });
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  };

  fetchWeatherForecast = hasLatLng => {
    const API_KEY = '789c7a808690dc32dbf1324ad4b2e1e3';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
    const queryParams = hasLatLng
      ? `lat=${this.state.latLng[0]}&lon=${this.state.latLng[1]}`
      : `q=${this.state.queryString}`;
    const unitType = this.state.unit === 'C' ? 'metric' : 'imperial';

    const url = `${BASE_URL}?${queryParams}&units=${unitType}&cnt=7&appid=${API_KEY}`;

    return axios
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar
            searchSubmit={this.onSearchSubmit}
            changeUnit={this.onUnitChange}
            unit={this.state.unit}
            data={this.state.navbarData}
          />
        </div>
        {this.state.latLng.length > 0 || this.state.queryString !== '' ? (
          <MainAppLayout data={this.state} />
        ) : (
          <InstructionLayout />
        )}
      </div>
    );
  }
}

export default App;
