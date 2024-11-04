import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="thunderstorm-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19º | </span>
            <span className="WeatherForecast-temperature-min">17º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
