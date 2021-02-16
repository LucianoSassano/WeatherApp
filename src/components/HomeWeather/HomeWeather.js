import React, { useState, useEffect } from "react";

const HomeWeather = (props) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    setWeather(props.forecast);
  }, [props.forecast]);

  const handleFavorite = () => {
    props.handleFav(weather);
  };

  return (
    <>
      {typeof weather.main != "undefined" ? (
        <div className=" container-data">
          <h1>
            {weather.name},{weather.sys.country}
          </h1>
          <h3>{Math.round(weather.main.temp)} °C</h3>
          <h3>{weather.weather[0].main}</h3>
          <h4>{weather.weather[0].description}</h4>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          ></img>
          <form className="button-form">
            <a
              data-testid="shareBtn"
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
              data-testid="favoriteBtn"
              onClick={handleFavorite}
              type="button"
              className="btn btn-primary"
            >
              Fav
            </button>
          </form>
          <a></a>
          <div className="collapse" id="collapseSocial">
            <iframe
              title="facebook share"
              className="facebook-btn"
              src={`https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3D${weather.name}%26units%3Dmetric%26appid%3De0587d27e5b47cb13ba1b093e60738f7&layout=button&size=large&width=103&height=28&appId`}
              width="103"
              height="28"
              c
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
    </>
  );
};

export default HomeWeather;
