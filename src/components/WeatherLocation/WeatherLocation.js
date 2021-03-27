import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import GpsMarker from "../../resources/gps.svg";


const WeatherLocation = (props) => {
  const [viewport, setViewport] = useState({
    longitude: props.longitude,
    latitude: props.latitude,
    zoom: 14,
  });

  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <>
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoibHNhc3Nhbm8iLCJhIjoiY2ttczZzdHA4MGV5cTJucG40aXEyeG03cyJ9.YWfqAxBzWfThZxH3AlQKpg"
        {...viewport}
        width="36vw"
        height="40vh"
        onViewportChange={setViewport}
      >
        <Marker
          latitude={props.latitude}
          longitude={props.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img src={GpsMarker}/>
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default WeatherLocation;
