import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { getServerSidePropW } from "../pages/api/WeatherAPI";
import { getServerSidePropF } from "../pages/api/ForecastAPI";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import Graph from "./Graph";
import { getServerSidePropG } from "../pages/api/govAPI";
import { getServerSidePropGptB } from "../pages/api/govAPI";

export default function Search() {
  // get data from API
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [govData, setGovData] = useState(null);
  // const [gridX, setGridX] = useState(null);
  // const [gridY, setGridY] = useState(null);
  // const [govForecastData, setGovForecastData] = useState(null);

	// error handling for no city found
  let noCity;

  if (weatherData) {
    if (weatherData.message === "city not found") {
      noCity = true;
    } else {
      noCity = false;
    }
  }

  console.log("is there no valid city?", noCity);

  // sets the API data state on function call
  async function getWeather() {
    await getServerSidePropW(city).then((res) => {
      if (!city) {
        setWeatherData(null);
        setLatitude(null);
        setLongitude(null);
      } else if (city && noCity !== true) {
        setWeatherData(res.data);
        setLatitude(res.data.coord.lat);
        setLongitude(res.data.coord.lon);
      }
    });
  }

  // get the API data from the weather.gov "points" endpoint using the latitude and longitude data from the open weather api
  // async function getGovApi() {
  // 	await getServerSidePropG(latitude, longitude).then((res) => {
  // 		if (!latitude && !longitude) {
  // 			setGovData(null);
  // 		} else {
  // 			setGovData(res.data);
  // 			setGridX(res.data.properties.gridX);
  // 			setGridY(res.data.properties.gridY);
  // 			getGovForecast();
  // 		}
  // 	});
  // };

  // uses the gridX and gridY data from the weather.gov "points" endpoint to get the weather.gov "forecast" endpoint data
  // function getGovForecast() {
  // 	getServerSidePropGptB(gridX, gridY).then((res) => {
  // 		if (!gridX && !gridY) {
  // 			setGovForecastData(null);
  // 		} else {
  // 			setGovForecastData(res.data);
  // 		}
  // 	});
  // }

  // uses longitude and latitude data from the open weather api to get the forecast data from the forecast API
  function getForecast() {
    getServerSidePropF(latitude, longitude).then((res) => {
      if (!city) {
        setForecastData(null);
      } else {
        setForecastData(res.data);
      }
    });
  }

  // allows use of enter key for submitting their query, calls getWeather()
  const onSearchSubmit = async (e) => {
    e.preventDefault();
    await getWeather();
  };

  // call the getForecast() functions after the weatherData state is set
  useEffect(() => {
    if (weatherData) {
      getForecast();
      // getGovApi();
    }
  }, [weatherData]);

  // console.log("weatherData: ", weatherData);
  // console.log(weatherData ? weatherData.message : "no weatherData");

  // passes data onto a child component
  function getWeatherData() {
    return weatherData;
  }

  function getForecastData() {
    return forecastData;
  }

  // function getGovForecastData() {
  // 	return govForecastData;
  // }

  // console.log("gov weather data: ", govForecastData);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.titleDiv}>
        <h2>WeatherGet</h2>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={onSearchSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter a City"
            className={styles.input}
            onChange={(e) => setCity(e.target.value)}
          />
          <br></br>
          <button type="submit" className={styles.submitBtn}>
            Search
          </button>
        </form>
      </div>
      {noCity === true ? (
        <div>Please enter a valid city!</div>
      ) : (
        <div>
          <WeatherCard props={getWeatherData()} />
          {/* <ForecastCard props={getForecastData()} /> */}
          <Graph props={getForecastData()} />
        </div>
      )}
    </div>
  );
}
