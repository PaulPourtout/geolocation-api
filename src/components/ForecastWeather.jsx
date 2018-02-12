import React from "react";
import { SingleDayWeather } from "./SingleDayWeather";
import { dateUtils } from "../utilsP/dateUtils";

export const ForecastWeather = props => {
  const filtered = [];
  props.weather.list.filter((item, index) => {
    const currItemDt = item.dt_txt.split(" ")[1];
    if (currItemDt === "12:00:00") {
      filtered.push(item);
    }
  });

  console.log("filtered", filtered);

  return (
    <div className="forecast">
      {filtered.map((item, index) => {
        const date = dateUtils.getDayOfWeek(item.dt);
        console.log("date", date);
        return (
          <SingleDayWeather
            key={index}
            day={date}
            icon={item.weather[0].icon}
            temp={item.main.temp}
            description={item.weather[0].description}
          />
        );
      })}
    </div>
  );
};
