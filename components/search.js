import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { getServerSideProp } from "../pages/api/weatherAPI";
import Card from "./Card";

export default function Search() {
  // get data from API
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    getServerSideProp(city).then((res) => {
      if (!city) {
        setData(null);
      } else {
        setData(res.data);
      }
    });
  }, []);

  function getWeather() {
    getServerSideProp(city).then((res) => {
      if (!city) {
        setData(null);
      } else {
        setData(res.data);
      }
    });
  }

	const onSearchSubmit = (e) => {
		e.preventDefault();
		getWeather();
	}

  // create a function which passes data onto a child component
  function getData() {
    return data;
  }

  // const clouds = props ? props.weather[0].description : null;
  // console.log("clouds: ", clouds);
  // const wind = props ? props.wind.speed : null;
  // console.log("wind: ", wind);
  // const windSpeed = props ? props.wind.deg : null;
  // console.log("wind speed: ", windSpeed);
  // const windDirection = props ? props.wind.deg : null;
  // console.log("wind direction: ", windDirection);
  // const temp = props ? props.main.temp : null;
  // console.log("temp: ", temp);
  // const feelsLike = props ? props.main.feels_like : null;
  // console.log("feels like: ", feelsLike);
  // const sunrise = props ? props.sys.sunrise : null;
  // console.log("sunrise: ", sunrise);
  // const tempLow = props ? props.main.temp_min : null;
  // const tempHigh = props ? props.main.temp_max : null;
  // console.log("low temp: ", tempLow, "high temp: ", tempHigh);
  // const sunset = props ? props.sys.sunset : null;
  // console.log("sunset: ", sunset);
  // const humidity = props ? props.main.humidity : null;
  // console.log("humidity: ", humidity);
  // const pressure = props ? props.main.pressure : null;
  // console.log("pressure: ", pressure);

  // console.log("current city: ", city);

  return (
    <div>
      <div>
        <div>
          <h2>Weather App</h2>
        </div>
      </div>
      <div>
				<form onSubmit={onSearchSubmit}>
						<input
							type="text"
							placeholder="Enter a City"
							onChange={(e) => setCity(e.target.value)}
						/>
						<button type="submit">
							Search
						</button>
				</form>
      </div>
      <Card props={getData()} />
    </div>
  );
}
