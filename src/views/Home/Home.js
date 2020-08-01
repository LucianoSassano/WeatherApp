import React, { useState } from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";

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

  const handleEnterKey = (e) => {
    if (e.key == "Enter" || e.charCode == 13) {
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
    }
  };

  const handleFavorite = () => {
    let userWeather = {
      country: weather.sys.country,
      city: weather.name,
      averageTemp: weather.main.temp,
      description: weather.weather[0].main,
    };

    let userFavs = [];

    if (localStorage.length > 0) {
      const LocalStorageFavs = JSON.parse(localStorage.getItem("favorites"));
      if (Array.isArray(LocalStorageFavs)) {
        userFavs = LocalStorageFavs;
        userFavs.push(userWeather);
        localStorage.setItem("favorites", JSON.stringify(userFavs));
      }
    }

    if (localStorage.length < 1) {
      userFavs.push(userWeather);
      localStorage.setItem("favorites", JSON.stringify(userFavs));
    }
  };

  return (
    <>
      <div className="home-container">
        <Navbar
          onChange={handleSearch}
          handleSearchSubmit={handleSubmit}
          handleEnter={handleEnterKey}
        />
        {typeof weather.main != "undefined" ? (
          <div className="container-data">
            <h1>
              {weather.name},{weather.sys.country}
            </h1>
            <h2>{Math.round(weather.main.temp)} °C</h2>
            <h3>{weather.weather[0].main}</h3>
            <form className>
              <button type="button" className="btn btn-primary">
                Share
              </button>
              <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A3000%2F&layout=button_count&size=small&width=0&height=0&appId"
                width="0"
                height="0"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
              <button
                onClick={handleFavorite}
                type="button"
                className="btn btn-primary"
              >
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
