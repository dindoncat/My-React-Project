import React, { useContext } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import {searchValue}from "../pages/ContactUs"
import { Link } from "react-router-dom";
const MyMarker = () => {
  const props = useContext(searchValue)
  const map = useMap();
  map.flyTo(props.position);

  return (
    <Marker position={props.position}>
      <Popup>
        <Link target="_blank" href="#">
          {props.label}
        </Link>
      </Popup>
    </Marker>
  );
};

export default MyMarker;
