import React, { useState } from "react";
import "../FavoriteWeather/FavoriteWeather.css";

const FavoriteWeather = (props) => {
  const [location, setLocation] = useState(props);
 

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
    setLocation(jsonFavs);
  };

  return (
    <>
      <div data-testid="favoriteWeather" className="weather-container">
        {location.city ? (
          <div className="favorites-data" aria-label="weather-result">
            <h1
              aria-label="city name and country of city"
              value={(location.city, location.country)}
            >
              {location.city},{location.country}
            </h1>
            <h3
              aria-label="location temperature in celcius degrees"
              value={location.temp}
            >
              {location.temp + "°C"}
            </h3>
            <h2
              aria-label="location weather description"
              value={location.description}
            >
              {location.description}
            </h2>
            <h4>{location.detail}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${location.icon}@2x.png`}
            ></img>
            <br></br>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              aria-label="delete forecaste from favorites"
            >
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FavoriteWeather;
