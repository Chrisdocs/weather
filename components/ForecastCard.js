import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function ForecastCard({ props }) {

  // set props to variables
	console.log(props);


  return (
    <div>
      {props === null ? (
        <div>No Forecast Data Available</div>
      ) : (
        <div className={styles.card}>
					hi
        </div>
      )}
    </div>
  );
}
