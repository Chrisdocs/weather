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

	// sets the API data state on function call
  function getWeather() {
    getServerSideProp(city).then((res) => {
      if (!city) {
        setData(null);
      } else {
        setData(res.data);
      }
    });
  }

	// allows use of enter key for submitting their query, calls getWeather()
	const onSearchSubmit = (e) => {
		e.preventDefault();
		getWeather();
	}

  // passes data onto a child component
  function getData() {
    return data;
  }

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
