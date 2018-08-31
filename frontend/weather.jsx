import React from 'react';
import {fetchWeather} from './util';

class Weather extends React.Component {
  constructor(){
    super();
    this.state = {
      weather: ""
    };
  }

  componentDidMount(){
    fetchWeather().then((response) => {
      console.log(response);
      const temp = response.main.humidity;
      this.setState({
        weather: temp
      });
    });
  }

  render(){
    return (
      <div>
        <h1> London</h1>
        <span>{this.state.weather} degree</span>
      </div>
    );
  }
}

export default Weather;
