import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function Graph({ props }) {
  const [arr, setArr] = useState([]);
  const [isData, setIsData] = useState(false);
  const [dt, setDt] = useState(null);
	const [graphDataSet, setGraphDataSet] = useState();
	const [graphLabels, setGraphLabels] = useState();

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
      console.log("arr is set");
      setIsData(true);
      setDt(moment.unix(arr[0].dt).format("dddd"));
			setGraphDataSet([
				arr[0].main.temp,
				arr[1].main.temp,
				arr[2].main.temp,
				arr[3].main.temp,
				arr[4].main.temp,
				arr[5].main.temp,
				arr[6].main.temp,
				arr[7].main.temp,
				arr[8].main.temp,]);
				setGraphLabels([
					moment.unix(arr[0].dt).format("h:mm a"),
					moment.unix(arr[1].dt).format("h:mm a"),
					moment.unix(arr[2].dt).format("h:mm a"),
					moment.unix(arr[3].dt).format("h:mm a"),
					moment.unix(arr[4].dt).format("h:mm a"),
					moment.unix(arr[5].dt).format("h:mm a"),
					moment.unix(arr[6].dt).format("h:mm a"),
					moment.unix(arr[7].dt).format("h:mm a"),
					moment.unix(arr[8].dt).format("h:mm a"),
				]);
    } else if (arr && arr.length === 0) {
      console.log("no data");
      setIsData(false);
    }
  }, [arr]);

  const graphData = {
    labels: graphLabels,
    datasets: [
      {
        label: "Temperature",
        fill: false,
        data: graphDataSet,
      },
    ],
  };

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			line: {
				tension: 0,
				borderWidth: 2,
				borderColor: "rgba(55,25,45,0.5)",
				fill: "start",
				backgroundColor: "rgba(23,255,35,0.5)",
			},
			point: {
				radius: 0,
				hitRadius: 0,
			},
		},
		scales: {
			// xAxes: {
			// 	display: false,
			// },
			// yAxes: {
			// 	display: false,
			// },
		},
	}

	console.log(graphDataSet);

  if (isData === true) {
    return (
      <div className={styles.graphContainer}>
				<label className={styles.graphLabel}>24 Hour Temperature</label>
        <Line data={graphData} width={400} height={400} options={options} plugins={[ChartDataLabels]}/>
      </div>
    );
  } else {
    return <div></div>;
  }
}


