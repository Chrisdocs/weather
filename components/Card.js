import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Card({ props }) {

  // set props to variables
  const clouds = props ? props.weather[0].description : null;
  const wind = props ? props.wind.speed : null;
  const windSpeed = props ? props.wind.deg : null;
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
  const timezone = props ? props.timezone : null;

  return (
    <div>
      {props === null ? (
        <div>please enter a valid city</div>
      ) : (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2></h2>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardLeft}>
              <p>image</p>
              <div className={styles.description}>
                <p>{clouds}</p>
              </div>
              <div className={styles.city}>
                <p>{city}</p>
              </div>
            </div>
            <div className={styles.cardRight}>
              <div className={styles.temp}>
                <p>Currently: {temp}</p>
              </div>
              <div className={styles.lowHigh}>
                <p>
                  Low: {tempLow} / High: {tempHigh}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
