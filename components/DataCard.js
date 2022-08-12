import React from "react";
import styles from "../styles/Home.module.scss";
import moment from "moment";

export default function DataCard({ data }) {

	console.log("data: ", data)

  const clouds = data ? data.current.clouds : null;
  const wind = data ? data.current.wind_speed : null;
  const windDeg = data ? data.current.wind_deg : null;
  const temp = data ? data.current.temp : null;
  const feelsLike = data ? data.current.feels_like : null;
  const humidity = data ? data.current.humidity : null;
  const timezone = data ? data.current.timezone : null;
  const day = data ? moment.unix(data.current.dt).format("dddd MMM Do") : null;

  // degrees symbol
  const deg = String.fromCharCode(176);

  //TODO: move class functions to own export file

  // function which sets a new className based on the temperature
  function setClassNameTemp(temp) {
    if (temp < 50) {
      return styles.cold;
    }
    if (temp >= 51 && temp < 70) {
      return styles.mild;
    }
    if (temp >= 71 && temp < 90) {
      return styles.warm;
    }
    if (temp >= 91) {
      return styles.hot;
    }
  }

  // function which sets a new className based on the humidity
  function setClassNameHumidity(humidity) {
    if (humidity < 50) {
      return styles.dry;
    }
    if (humidity >= 51 && humidity < 70) {
      return styles.normal;
    }
    if (humidity >= 71 && humidity < 90) {
      return styles.wet;
    }
  }

  // sets a new className based on the wind speed
  function setClassNameWind(wind) {
    if (wind < 5) {
      return styles.calm;
    }
    if (wind >= 5 && wind < 10) {
      return styles.light;
    }
    if (wind >= 11 && wind < 15) {
      return styles.moderate;
    }
    if (wind >= 16 && wind < 20) {
      return styles.strong;
    }
    if (wind >= 21 && wind < 30) {
      return styles.stronger;
    }
    if (wind >= 31 && wind < 40) {
      return styles.violent;
    }
    if (wind >= 41) {
      return styles.dangerous;
    }
  }

  //convert the wind direction to a compass direction
  function setWindDirection(windDirection) {
    if (windDirection >= 0 && windDirection < 45) {
      return "North";
    }
    if (windDirection >= 45 && windDirection < 90) {
      return "North East";
    }
    if (windDirection >= 90 && windDirection < 135) {
      return "East";
    }
    if (windDirection >= 135 && windDirection < 180) {
      return "South East";
    }
    if (windDirection >= 180 && windDirection < 225) {
      return "South";
    }
    if (windDirection >= 225 && windDirection < 270) {
      return "South West";
    }
    if (windDirection >= 270 && windDirection < 315) {
      return "West";
    }
    if (windDirection >= 315 && windDirection < 360) {
      return "North West";
    }
  }

  // greeting by time of day
  const timeHour = moment().format("HH");

  function setGreeting(time) {
    if (time >= 0 && time < 12) {
      return "Good Morning";
    }
    if (time >= 12 && time < 18) {
      return "Good Afternoon";
    }
    if (time >= 18 && time < 24) {
      return "Good Evening";
    }
  }

  return (
    <div className={styles.dataCardWrapper}>
      <p className={styles.weatherP}>
        {setGreeting(timeHour)}! Today is{" "}
        <span className={styles.day}>{day}</span>
      </p>
      {data ? (
        <div className={styles.dataCardContainer}>
          <div className={styles.dataContainer}>
            <p className={styles.dataTitle}>Temperature</p>
            <p className={setClassNameTemp(temp)}>{temp}°</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.dataTitle}>Feels Like</p>
            <p className={setClassNameTemp(feelsLike)}>{feelsLike}°</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.dataTitle}>Humidity</p>
            <p className={setClassNameHumidity(humidity)}>{humidity}%</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.dataTitle}>Cloud Cover</p>
            <p>{clouds}%</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.dataTitle}>Wind</p>
            <p className={setClassNameWind(wind)}>{wind} mph</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.dataTitle}>Wind Direction</p>
            <p className={styles.dataP}>{setWindDirection(windDeg)}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>No Data</p>
        </div>
      )}
    </div>
  );
}
