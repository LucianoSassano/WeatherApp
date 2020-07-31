import React from "react";
import "../Weather/Weather.css";

const Weather = (props) => {
  return (
    <>
      <div className="weather-container">
        {typeof props != "undefined" ? (
          <div className="container-data">
            <h1>
              {props.city},{props.country}
            </h1>
            <h3>{props.temp} °C</h3>
            <h2>{props.description}</h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Weather;
