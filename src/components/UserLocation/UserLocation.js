import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

const UserLocation = () => {
  const [viewport, setViewport] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
  });

  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <>
      <ReactMapGL
        mapboxApiAccessToken='pk.eyJ1IjoibHNhc3Nhbm8iLCJhIjoiY2ttczZzdHA4MGV5cTJucG40aXEyeG03cyJ9.YWfqAxBzWfThZxH3AlQKpg'
        {...viewport}
        width="36vw"
        height="40vh"
        onViewportChange={setViewport}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
      </ReactMapGL>
    </>
  );
};

export default UserLocation;
