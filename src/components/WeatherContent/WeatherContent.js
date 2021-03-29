import React, { useEffect, useState } from "react";
import "../WeatherContent/WeatherContent.css";
import FavoriteWeather from "../FavoriteWeather/FavoriteWeather";

const WeatherContent = (props) => {

  const [favs, setFavs] = useState([]);


  useEffect(() => {
    if (localStorage.getItem('favorites') && localStorage.getItem('favorites') != null) {
      let userFavs = [];
      let localStorageFavs = JSON.parse(localStorage.getItem("favorites"));
      if (Array.isArray(localStorageFavs)) {
        userFavs = localStorageFavs;
        userFavs = userFavs.reverse();
        setFavs(userFavs);

      }
    }
  }, [localStorage.length]);
  


  return (
    <>
      <div aria-label="forecast list ">
        <div>
          {favs &&
            favs.map((favs, key) => (
              <FavoriteWeather
                key={key}
                country={favs.country}
                city={favs.city}
                temp={Math.round(favs.averageTemp)}
                description={favs.description}
                detail={favs.detail}
                icon={favs.icon}
              
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default WeatherContent;
