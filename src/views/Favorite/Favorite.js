import React, { useState, useEffect } from "react";
import "./Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import WeatherContent from "../../components/WeatherContent/WeatherContent";

const Favorite = () => {
  const [favs, setFavs] = useState([]);
  const [cond, setCond] = useState("");

  useEffect(() => {
    if (localStorage.length > 0) {
      let userFavs = [];
      let displayedWeather = [];
      let localStorageFavs = JSON.parse(localStorage.getItem("favorites"));
      if (Array.isArray(localStorageFavs)) {
        userFavs = localStorageFavs;
        userFavs = userFavs.reverse();
        setFavs(userFavs);
      }
    }
  }, [cond]);

  return (
    <>
      <div className="favorites-container">
        <Navbar />
        <div className="container-data">
          <WeatherContent results={favs} />
        </div>
      </div>
    </>
  );
};

export default Favorite;
