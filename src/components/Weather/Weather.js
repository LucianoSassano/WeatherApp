import React from "react";
import "../Weather/Weather.css";

const Weather = (props) => {
  const handleDelete = () => {
    const localStorageFavs = JSON.parse(localStorage.getItem("favorites"));
    let jsonFavs = [];
    if (Array.isArray(localStorageFavs)) jsonFavs = localStorageFavs;
    jsonFavs = jsonFavs.filter(
      (weather) =>
        weather.city != props.city && weather.country != props.country
    );
    console.log(jsonFavs);
    localStorage.setItem("favorites", JSON.stringify(jsonFavs));
  };

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
            <button className="btn btn-danger" onClick={handleDelete}>
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
