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
            results.map((weather, key) => (
              <Weather
                key={key}
                country={results.country}
                city={results.city}
                temp={results.temp}
                description={results.description}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default WeatherContent;
