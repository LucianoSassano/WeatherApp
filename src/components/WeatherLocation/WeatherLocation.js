import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import GpsMarker from "../../resources/gps.svg";
import "../WeatherLocation/WeatherLocation.css";

const WeatherLocation = (props) => {
  const [viewport, setViewport] = useState({
    longitude: props.longitude,
    latitude: props.latitude,
    zoom: 13,
  });

  useEffect(() => {
    setViewport({
      longitude: props.longitude,
      latitude: props.latitude,
      zoom: 13,
    });
  }, [props]);

  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <>
      <div className="weatherLocation-container">
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1IjoibHNhc3Nhbm8iLCJhIjoiY2ttczZzdHA4MGV5cTJucG40aXEyeG03cyJ9.YWfqAxBzWfThZxH3AlQKpg"
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={setViewport}
        >
          <Marker
            latitude={props.latitude}
            longitude={props.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div className="gps-marker">
              <img src={GpsMarker} />
            </div>
          </Marker>
        </ReactMapGL>
      </div>
    </>
  );
};

export default WeatherLocation;
