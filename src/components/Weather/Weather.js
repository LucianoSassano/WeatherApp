import React from "react";
import "../Weather/Weather.css";

const Weather = (props) => {
  const handleDelete = () => {
    const localStorageFavs = JSON.parse(localStorage.getItem("favorites"));
    let jsonFavs = [];
    if (Array.isArray(localStorageFavs)) jsonFavs = localStorageFavs;
    jsonFavs = jsonFavs.filter(
      (weather) =>
        weather.city !== props.city && weather.country !== props.country
    );
    console.log(jsonFavs);
    localStorage.setItem("favorites", JSON.stringify(jsonFavs));
  };

  return (
    <>
      <div className="weather-container">
        {typeof props != "undefined" ? (
          <div className="container-data" aria-label="weather-result">
            <h1
              aria-label="city name and country of city"
              value={(props.city, props.country)}
            >
              {props.city},{props.country}
            </h1>
            <h3
              aria-label="location temperature in celcius degrees"
              value={props.temp}
            >
              {props.temp} °C
            </h3>
            <h2
              aria-label="location weather description"
              value={props.description}
            >
              {props.description}
            </h2>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              aria-label="delete forecaste from favorites"
            >
              Delete from favs
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Weather;
