import React from "react";
import styles from "../styles/Home.module.scss";
import moment from "moment";

export default function WeatherCard({ props }) {

  // set props to variables
  const clouds = props ? props.weather[0].description : null;
  const wind = props ? props.wind.speed : null;
  const windDeg = props ? props.wind.deg : null;
  const windDirection = props ? props.wind.deg : null;
  const temp = props ? props.main.temp : null;
  const feelsLike = props ? props.main.feels_like : null;
  const sunrise = props ? props.sys.sunrise : null;
  const tempLow = props ? props.main.temp_min : null;
  const tempHigh = props ? props.main.temp_max : null;
  const sunset = props ? props.sys.sunset : null;
  const humidity = props ? props.main.humidity : null;
  const pressure = props ? props.main.pressure : null;
  const country = props ? props.sys.country : null;
  const city = props ? props.name : null;
	const state = props ? props.sys.country : null;
  const timezone = props ? props.timezone : null;
	const icon = props ? props.weather[0].icon : null;
	const day = props ? moment.unix(props.dt).format("dddd MMM Do") : null;

	// degrees symbol
	const deg = String.fromCharCode(176);

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
    <div className={styles.weatherContainer}>
      {props === null ? (
        <div>
					<p className={styles.missingCity}>Please enter a valid city!</p>
					</div>
      ) : (
				<div className={styles.weatherDiv}>
					<p className={styles.weatherP}>
						{setGreeting(timeHour)}! Today is <span className={styles.day}>{day}</span> in {city}, {country}. The <span className={setClassNameTemp(temp)}>temperature</span> is <span className={setClassNameTemp(temp)}>{temp}{deg}F</span>, but it feels like <span className={setClassNameTemp(temp)}>{feelsLike}{deg}</span> with {clouds === 'clear sky' ? <span>clear skies</span> : clouds === 'few clouds' ? <span>a few clouds</span> : <span>{clouds}</span>}. <span className={setClassNameHumidity(humidity)}>Humidity</span> is hovering around <span className={setClassNameHumidity(humidity)}>{humidity}%</span> with <span className={setClassNameWind(wind)}>winds</span> blowing {setWindDirection(windDeg)} at <span className={setClassNameWind(wind)}>{wind} mph</span>.
					</p>
				</div>
      )}
    </div>
  );
}
