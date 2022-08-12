import React from "react";
import styles from "../styles/Home.module.scss";
import DataCard from "./DataCard";
import Graph from "./Graph";

export default function WeatherCard({ data }) {

  return (
    <div className={styles.weatherContainer}>
      {data === null ? (
        <div>
					<p className={styles.missingCity}>Please enter a valid city!</p>
					</div>
      ) : (
				<div className={styles.weatherDiv}>
					<DataCard data={data} />
					<Graph data={data}/>
				</div>
      )}
    </div>
  );
}
