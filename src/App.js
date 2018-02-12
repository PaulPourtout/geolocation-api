import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=fr&APPID=1b115102576423b5d8af1d59cc3285d9`
        )
          .then(res => res.json())
          .then(data => console.log("meteo", data))
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
      </div>
    );
  }
}

export default App;
