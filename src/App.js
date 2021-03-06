import React, { Component } from "react";
// css
import "./App.css";
// components
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather/ForecastWeather";
import Map from "./components/Map/Map";
import bg from "./static/bg.jpg";

// CONST
const KEY = "1b115102576423b5d8af1d59cc3285d9";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    /* San Fransisco coords :
        Latitude: 37.774929
        Longitude: -122.419416
        */
  }

  getWeather = (latitude, longitude) => {
    /** Fetch weather from API */
    /**API url: https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&units=metric&APPID=${KEY} */
  };

  getLocationAndWeather = () => {
    /** Geolocation code goes here ! */
  };

  render() {
    const { data } = this.state;
    // inline style object because need dynamic properties' value based on state
    let appStyle = {
      backgroundImage: `url('${bg}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    if (data && data.list[0]) {
      const currentWeather = data.list[0];
      appStyle = {
        backgroundImage: `url('https://source.unsplash.com/featured/?weather,${
          currentWeather.weather[0].description
        }')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      };
    }

    return (
      <div className="App" style={appStyle}>
        {data &&
          data.list &&
          data.list[0] && (
            <React.Fragment>
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
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default App;
