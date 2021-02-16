import React from "react";
import "./Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import WeatherContent from "../../components/WeatherContent/WeatherContent";

const Favorite = () => {
  

  return (
    <>
      <div className="favorites-container">
        <Navbar className="favorites-nav" />
        <div className="container-data">
          <WeatherContent />
        </div>
      </div>
    </>
  );
};

export default Favorite;
