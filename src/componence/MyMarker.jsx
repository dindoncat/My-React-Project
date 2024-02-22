import React, { useContext } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import {searchValue}from "../pages/ContactUs"
import { Link } from "react-router-dom";
import {Icon} from 'leaflet'
const MyMarker = () => {
  const opjIcon = {iconUrl: "./pointOn.png",iconSize: [40,40]}
  const myIcon = new Icon(opjIcon);
  const fromSearch = useContext(searchValue)
  const map = useMap();
  map.flyTo(fromSearch.position);

  return (
    <Marker position={fromSearch.position} icon={myIcon}>
      <Popup>
        <Link target="_blank" href="#">
          {fromSearch.label}
        </Link>
      </Popup>
    </Marker>
  );
};

export default MyMarker;
