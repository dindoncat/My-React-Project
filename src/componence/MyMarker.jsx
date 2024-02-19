import React, { useContext } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import {searchValue}from "../pages/ContactUs"
const MyMarker = () => {
  const props = useContext(searchValue)
  const map = useMap();
  map.flyTo(props.position);

  return (
    <Marker position={props.position}>
      <Popup>
        <a target="_blank" href="#">
          {props.label}
        </a>
      </Popup>
    </Marker>
  );
};

export default MyMarker;
