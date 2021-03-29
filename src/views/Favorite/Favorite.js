import React, { useEffect, useState } from "react";
import "../Favorite/Favorite.css";
import Navbar from "../../components/Navbar/Navbar";
import WeatherContent from "../../components/WeatherContent/WeatherContent";

const Favorite = () => {
  const [favView, setFavView] = useState(false);

  useEffect(() => {
    setFavView(true);
  }, []);


  return (
    <>
      <div id="favorites-container">
        <Navbar
          favoritesView={favView}
          className="favorites-nav"
        />
        <div>
          <WeatherContent className="favorites-data" />
        </div>
      </div>
    </>
  );
};

export default Favorite;
