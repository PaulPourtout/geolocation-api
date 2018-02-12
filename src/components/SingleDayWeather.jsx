import React from "react";

export const SingleDayWeather = ({ day, icon, temp, description }) => {
  return (
    <div className="single-forecast">
      <p className="forecast-day">{day}</p>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt={description}
      />
      <p>{temp}°C</p>
    </div>
  );
};
