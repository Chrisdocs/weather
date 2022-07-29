// this component will use the 16 day forecast data to display a card for each day of the week if I ever subscribe to that access. $40/m


// import React from "react";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "../styles/Home.module.scss";
// import moment from 'moment';
// import Graph from "./Graph";

// export default function ForecastCard({ props }) {
//   const [arr, setArr] = useState([]);
// 	const [isData, setIsData] = useState(false);
// 	const [dt, setDt] = useState(null);

//   useEffect(() => {
//     if (props) {
//       const propsArray = props.list;
//       setArr(propsArray);
//     }
//   });

//   // console.log(arr);

//   // call function after the arr state is set
//   useEffect(() => {
//     if (arr && arr.length > 0) {
//       console.log('arr is set');
// 			setIsData(true);
// 			setDt(moment.unix(arr[0].dt).format('dddd'))
//     } else if (arr && arr.length === 0) {
//       console.log("no data");
// 			setIsData(false);
//     }
//   }, [arr]);

// 	// console.log(dt);

// 	if (isData === true) {
// 		return (
//       <div className={styles.forecastContainer}>
//           <p className={styles.dt}>{`${dt}`}</p>
//         <div className={styles.day}>
//           <p className={styles.zero}>12am: {`${arr[0].main.temp}`}</p>
//           <p className={styles.three}>3am: {`${arr[1].main.temp}`}</p>
//           <p className={styles.six}>6am: {`${arr[2].main.temp}`}</p>
//           <p className={styles.nine}>9am: {`${arr[3].main.temp}`}</p>
//           <p className={styles.twelve}>12pm: {`${arr[4].main.temp}`}</p>
//           <p className={styles.fifteen}>3pm: {`${arr[5].main.temp}`}</p>
//           <p className={styles.eighteen}>6pm: {`${arr[6].main.temp}`}</p>
//           <p className={styles.twentyone}>9pm: {`${arr[7].main.temp}`}</p>
//         </div>
//         <div className={styles.day}></div>
//         <div className={styles.day}></div>
//         <div className={styles.day}></div>
//         <div className={styles.day}></div>
//       </div>
//     );
// 	} else {
// 		return (
// 			<div></div>
// 		)
// 	}
// }


