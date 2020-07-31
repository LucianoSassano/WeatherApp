import React, { useState, useEffect } from "react";
import "./Favorite.css";

const Favorite = () => {
  const [favs, setFavs] = useState("");

  return (
    <>
      <div className="Favorites-container">
        <h1>FAVS VIEW</h1>
      </div>
    </>
  );
};

export default Favorite;
