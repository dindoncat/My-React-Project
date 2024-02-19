import React, { useContext } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MyMarker from "./MyMarker";
import { searchValue } from "../pages/ContactUs";
const GoogleMaps = () => {
  const position = useContext(searchValue);

  return (
    <MapContainer
      center={position.position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
      />
      <MyMarker />
    </MapContainer>
  );
};

export default GoogleMaps;