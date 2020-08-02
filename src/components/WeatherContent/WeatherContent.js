import React from "react";
import "../WeatherContent/WeatherContent.css";
import Weather from "../Weather/Weather";

const WeatherContent = (props) => {
  const { results } = props;

  return (
    <>
      <div className="container">
        <div>
          {results &&
            results.map((weather, key) =>
              key < 3 ? (
                <Weather
                  key={key}
                  country={weather.country}
                  city={weather.city}
                  temp={Math.round(weather.averageTemp)}
                  description={weather.description}
                />
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </>
  );
};

export default WeatherContent;
