import React, { useState, useEffect } from "react";
import Tab from "../../components/Tab/Tab.js"

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
      {weather.main !== undefined ? (
        <div className=" container-data">
          <Tab/>
          <h1>
            {weather.name},{weather.sys.country}
          </h1>
          <h3>{Math.round(weather.main.temp)} °C</h3>
          <h3>{weather.weather[0].main}</h3>
          <h4>{weather.weather[0].description}</h4>
          <img
            src={`${process.env.REACT_APP_OPEN_WEATHER_IMAGE_URL}/img/wn/${weather.weather[0].icon}@2x.png`}
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
          
          <div className="collapse" id="collapseSocial">
            <iframe
              title="facebook share"
              className="facebook-btn"
              src={`${process.env.REACT_APP_FACEBOOK_SHARE_BTN_URL}?href=http%3A%2F%2Fapi.openweathermap.org%2Fdata%2F2.5%2Fweather%3Fq%3D${weather.name}%26units%3Dmetric%26appid%3De0587d27e5b47cb13ba1b093e60738f7&layout=button&size=large&width=103&height=28&appId`}
              width="103"
              height="28"
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
