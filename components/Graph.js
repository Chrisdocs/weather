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
    } else if (arr && arr.length === 0) {
      console.log("no data");
      setIsData(false);
    }
  }, [arr]);

  console.log("date time: ", dt);
	console.log("graph data: ", graphDataSet);

  const graphData = {
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
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
        <Line data={graphData} width={400} height={400} options={options} plugins={[ChartDataLabels]}/>
      </div>
    );
  } else {
    return <div></div>;
  }
}


