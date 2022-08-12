import React from "react";
import styles from "../styles/Home.module.scss";

export default function DataCard({ data, slug }) {
  const currentWeatherArray = [data.current];
	console.log(currentWeatherArray);
  return (
    <div>
      {data ? (
        currentWeatherArray.map((item) => (
          <div key={item}>
            <div className={styles.dataContainer}>
              <p className={styles.dataTitle}>Title</p>
              <p className={styles.dataP}>data</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No Data</p>
        </div>
      )}
    </div>
  );
}
