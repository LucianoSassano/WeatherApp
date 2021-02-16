import React, { useEffect, useState } from "react";
import "../WeatherContent/WeatherContent.css";
import Weather from "../Weather/Weather";

const WeatherContent = (props) => {

  const [favs, setFavs] = useState([]);

  console.log(favs);

  useEffect(() => {
    if (localStorage.length > 0) {
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
      <div className="container" aria-label="forecast list ">
        <div>
          {favs &&
            favs.map((favs, key) => (
              <Weather
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
