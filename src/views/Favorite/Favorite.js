import React from "react";
import "../Favorite/Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import WeatherContent from "../../components/WeatherContent/WeatherContent";

const Favorite = () => {
  return (
    <>
      <div id="favorites-container">
        <Navbar className="favorites-nav" />
        <div>
          <WeatherContent className="favorites-data" />
        </div>
      </div>
    </>
  );
};

export default Favorite;
