import React, { useState } from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { getLocationWeather } from "../../services/WheaterApi";

const Home = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [secondSerch, setSecondSerch] = useState("");
  const [secondWeather, setSecondWeather] = useState([]);

  const handleSearchSingle = (e) => {
    const currentVal = e.target.value;
    setSearch(currentVal);
  };

  const handleSearchDual = (e) => {
    const currentVal = e.target.value;
    setSecondSerch(currentVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getLocationWeather(search)
      .then(results => {
        setWeather(results);
      })
  };

  const handleDualSubmit = (e) => {
    e.preventDefault();
    getLocationWeather(search)
      .then(results => {
        setWeather(results);
      })


    getLocationWeather(secondSerch)
      .then(results => {
        setSecondWeather(results);
      })
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" || e.charCode === 13) {
      e.preventDefault();
      getLocationWeather(search)
        .then(results => {
          setWeather(results);
        })
    }
  };

  const handleDualEnterKey = (e) => {
    if (e.key === "Enter" || e.charCode === 13) {
      e.preventDefault();
      getLocationWeather(search)
      .then(results => {
        setWeather(results);
      })

      getLocationWeather(secondSerch)
    .then(results => {
      setSecondWeather(results);
    })
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

  const handleDualFavorite = () => {
    let userWeather = {
      country: secondWeather.sys.country,
      city: secondWeather.name,
      averageTemp: secondWeather.main.temp,
      description: secondWeather.weather[0].main,
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
          onChangeDual={handleSearchDual}
          onChangeSingle={handleSearchSingle}
          handleSearchSubmit={handleSubmit}
          handleDualSubmit={handleDualSubmit}
          handleEnter={handleEnterKey}
          handleDualEnter={handleDualEnterKey}
        />
        {typeof weather.main != "undefined" ? (
          <div className="container container-data">
            <h1>
              {weather.name},{weather.sys.country}
            </h1>
            <h2>{Math.round(weather.main.temp)} °C</h2>
            <h3>{weather.weather[0].main}</h3>
            <form>
              <a
                className="btn btn-primary"
                data-toggle="collapse"
                href="#collapseSocial"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Share
              </a>
              <button
                onClick={handleFavorite}
                type="button"
                className="btn btn-primary"
              >
                Fav
              </button>
            </form>
            <div className="collapse" id="collapseSocial">
              <iframe
                title="facebook share"
                className="facebook-btn"
                src={`https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3D${weather.name}%26units%3Dmetric%26appid%3De0587d27e5b47cb13ba1b093e60738f7&layout=button&size=large&width=103&height=28&appId`}
                width="103"
                height="28"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        ) : (
            ""
          )}
        {typeof secondWeather.main != "undefined" ? (
          <div className="container container-data">
            <h1>
              {secondWeather.name},{secondWeather.sys.country}
            </h1>
            <h2>{Math.round(secondWeather.main.temp)} °C</h2>
            <h3>{secondWeather.weather[0].main}</h3>
            <form>
              <a
                className="btn btn-primary"
                data-toggle="collapse"
                href="#collapseSocial"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Share
              </a>
              <button
                onClick={handleDualFavorite}
                type="button"
                className="btn btn-primary"
              >
                Fav
              </button>
            </form>
            <div className="collapse" id="collapseSocial">
              <iframe
                title="facebook share"
                className="facebook-btn"
                src={`https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3D${secondWeather.name}%26units%3Dmetric%26appid%3De0587d27e5b47cb13ba1b093e60738f7&layout=button&size=large&width=103&height=28&appId`}
                width="103"
                height="28"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        ) : (
            ""
          )}
      </div>
    </>
  );
};

export default Home;
