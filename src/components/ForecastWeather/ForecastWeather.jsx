import React from "react";
import SingleDayWeather from "../SingleDayWeather/SingleDayWeather";
import "./ForecastWeather.css";
// utils
import { dateUtils } from "../../utils/dateUtils";

export const ForecastWeather = ({ data, weatherHour }) => {
  const filtered = [];
  data.list.filter((item, index) => {
    const currItemDt = item.dt_txt.split(" ")[1];
    if (currItemDt === weatherHour) {
      filtered.push(item);
    }
  });

  return (
    <div className="forecast">
      {filtered.map((item, index) => {
        const date = dateUtils.getDayOfWeek(item.dt, true);

        return (
          <SingleDayWeather
            key={index}
            day={date}
            icon={item.weather[0].icon}
            temp={Math.floor(item.main.temp)}
            description={item.weather[0].description}
          />
        );
      })}
    </div>
  );
};
