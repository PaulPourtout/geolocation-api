import React, { Component } from "react";
// css
import "./App.css";
// components
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather/ForecastWeather";
import Loader from "./components/Loader/Loader";
import Map from "./components/Map/Map";


// CONST
const KEY = "1b115102576423b5d8af1d59cc3285d9";

class App extends Component {
  state = {
    data: null,
    visibility: "hidden"
  };

  componentDidMount() {
    this.getLocationAndWeather();
    this.renderWeatherComponent();
  }

  getLocationAndWeather = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.getWeather(latitude, longitude);
      });
    } else {
      alert("no geoloc");
    }
  };

  getWeather = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&units=metric&APPID=${KEY}`
    )
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log("error", err));
  };

  // set a timeout to be sure to let the time to fetch the image and throw it in one shot
  renderWeatherComponent = () => {
    // setTimeout(() => {
    this.setState({ visibility: "visible" });
    // }, 8000);
  };

  render() {
    const { data, visibility } = this.state;
    // inline style object because need dynamic properties' value based on state
    let appStyle = {};
    if (data && data.list[0]) {
      const currentWeather = data.list[0];
      appStyle = {
        background: `url('https://source.unsplash.com/featured/?weather,${
          currentWeather.weather[0].description
        }') no-repeat`,
        backgroundSize: "cover",
        visibility: `${visibility}`
      };
    }

    return (
      <React.Fragment>
        {visibility === "hidden" ? <Loader /> : null}
        {data && data.list && data.list[0] ? (
          <div className="App" style={appStyle}>
            <div className="header">
              <div className="location-infos">
                <h3>City: {data.city.name}</h3>
                <p>latitude: {data.city.coord.lat.toFixed(2)}</p>
                <p>Longitude: {data.city.coord.lon.toFixed(2)}</p>
              </div>
              <div className="container-map">
                <Map
                  latitude={data.city.coord.lat}
                  longitude={data.city.coord.lon}                    
                  isMarkerShown 
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `190px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
              <div className="weather-infos">
              <CurrentWeather data={data.list[0]} />
              <ForecastWeather data={data} weatherHour={"09:00:00"} />
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
