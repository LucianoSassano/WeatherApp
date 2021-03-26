import React, { useState} from "react";
import "../Home/Home.css";
import HomeWeather from "../../components/HomeWeather/HomeWeather.js";
import Navbar from "../../components/Navbar/Navbar";
import { getLocationWeather } from "../../services/WheaterApi";
import Tab from "../../components/Tab/Tab.js"

const Home = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [secondSerch, setSecondSerch] = useState("");
  const [secondWeather, setSecondWeather] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const handleSearchSingle = (e) => {
    const currentVal = e.target.value;
    setSearch(currentVal);
  };

  const handleSearchDual = (e) => {
    const currentVal = e.target.value;
    setSecondSerch(currentVal);
  };

  const handleSubmit = (e) => {
    setSecondWeather([]);
    e.preventDefault();
    getLocationWeather(search).then((results) => {
      setWeather(results);
    });
  };

  const handleDualSubmit = (e) => {
    e.preventDefault();
    getLocationWeather(search).then((results) => {
      setWeather(results);
    });

    getLocationWeather(secondSerch).then((results) => {
      setSecondWeather(results);
    });
  };

  const handleEnterKey = (e) => {
    setSecondWeather([]);
    if (e.key === "Enter" || e.charCode === 13) {
      e.preventDefault();
      getLocationWeather(search).then((results) => {
        setWeather(results);
      });
    }
  };

  const handleDualEnterKey = (e) => {
    if (e.key === "Enter" || e.charCode === 13) {
      e.preventDefault();
      getLocationWeather(search).then((results) => {
        setWeather(results);
      });

      getLocationWeather(secondSerch).then((results) => {
        setSecondWeather(results);
      });

    }

  };

  const handleFavorite = (weather) => {
    let userWeather = {
      country: weather.sys.country,
      city: weather.name,
      averageTemp: weather.main.temp,
      description: weather.weather[0].main,
      detail:weather.weather[0].description,
      icon:weather.weather[0].icon
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
      
       

        {typeof weather.main != undefined ? (
          <HomeWeather
            handleFav={handleFavorite}
            setFav={setFavorite}
            forecast={weather}
          ></HomeWeather>
        ) : (
          ""
        )}
        {typeof secondWeather.main != undefined ? (
          <HomeWeather
            handleFav={handleFavorite}
            setFav={setFavorite}
            forecast={secondWeather}
          ></HomeWeather>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
