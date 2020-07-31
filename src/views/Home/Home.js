import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const handleSearch = (e) => {
    const currentVal = e.target.value;
    setSearch(currentVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e0587d27e5b47cb13ba1b093e60738f7`
    )
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setWeather(datos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFavorite = () => {
    if ((weather != null || weather != [] || weather != "") && localStorage.length == 0) {
      localStorage.setItem("favorites", JSON.stringify(weather));
    }
  };

  return (
    <>
      <div className="home-container">
        <Navbar onChange={handleSearch} handleSearchSubmit={handleSubmit} />
        {typeof weather.main != "undefined" ? (
          <div className="container-data">
            <h1>
              {weather.name},{weather.sys.country}
            </h1>
            <h3>{weather.main.temp} °C</h3>
            <h2>{weather.weather[0].main}</h2>
            <form>
              <button type="button" class="btn btn-primary">
                Share
              </button>
              <button onClick={handleFavorite} type="button" class="btn btn-primary">
                Fav
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
