import React, { useState, useEffect } from "react";
import "./Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import WeatherContent from "../../components/WeatherContent/WeatherContent";

const Favorite = () => {
  const [favs, setFavs] = useState([]);

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
