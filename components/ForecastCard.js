import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function ForecastCard({ props }) {
  const [arr, setArr] = useState([]);
	const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (props) {
      const propsArray = props.list;
      setArr(propsArray);
    }
  });

  console.log(arr);

  // call function after the arr state is set
  useEffect(() => {
    if (arr && arr.length > 0) {
      console.log('arr is set');
			setIsData(true);
    } else if (arr && arr.length === 0) {
      console.log("no data");
			setIsData(false);
    }
  }, [arr]);

	const day = arr[0].dt;
	console.log(day);


	if (isData === true) {
		return (
      <div>
        <div className={styles.day1}>
          <p>Day 1: </p>
          <p className={styles.zero}>12:00am: {`${arr[0].main.temp}`}</p>
          <p className={styles.three}>3:00am: {`${arr[1].main.temp}`}</p>
          <p className={styles.six}>6:00am: {`${arr[2].main.temp}`}</p>
          <p className={styles.nine}>9:00am: {`${arr[3].main.temp}`}</p>
          <p className={styles.twelve}>12:00pm: {`${arr[4].main.temp}`}</p>
          <p className={styles.fifteen}>3:00pm: {`${arr[5].main.temp}`}</p>
          <p className={styles.eighteen}>6:00pm: {`${arr[6].main.temp}`}</p>
          <p className={styles.twentyone}>9:00pm: {`${arr[7].main.temp}`}</p>
        </div>
        <div className={styles.day2}></div>
        <div className={styles.day3}></div>
        <div className={styles.day4}></div>
        <div className={styles.day5}></div>
      </div>
    );
	} else {
		return (
			<div></div>
		)
	}
}
