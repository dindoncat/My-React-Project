import React, { useContext, useEffect, useState } from "react";
import {searchValue} from "../pages/ContactUs"
const Weather = () => {
  const city = useContext(searchValue);
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState(0.0);

  const apiKey = "d01ebb075cec83c54b3efee558e90539";
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${apiKey}&units=metric`;

  const fetchingData = () => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        // Handle and display weather data
        console.log(data);
        setDescription(data.weather[0].description);
        setTemp(data.main.temp);
      })

      .catch((error) => {
        // Handle API request errors
        console.error("Error fetching weather data:", error);
      });
  };

  useEffect(() => fetchingData(), [city.city]);

  return (
    <div className="text-center my-3">
            <p className="text-3xl">
        <span className="nav_text">Area:{city.city}</span>
      </p>
      <p className="text-3xl">
        <span className="nav_text">Temp:{temp}°C</span>
      </p>
      <p className="text-3xl">
        <span className="nav_text">Description:{description}</span>
      </p>
    </div>
  );
};

export default Weather;
