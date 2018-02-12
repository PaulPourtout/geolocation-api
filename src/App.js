import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ForecastWeather } from "./components/ForecastWeather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }
  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&APPID=1b115102576423b5d8af1d59cc3285d9`
        )
          .then(res => res.json())
          .then(weather => this.setState({ weather }))
          .catch(err => console.log("error", err));
      });
    } else {
      alert("no geoloc");
    }
  }
  render() {
    return (
      <div className="App">
        <img
          src={`http://openweathermap.org/img/w/01d.png`}
          width={32}
          height={32}
        />
        {this.state.weather && <ForecastWeather weather={this.state.weather} />}
      </div>
    );
  }
}

export default App;
