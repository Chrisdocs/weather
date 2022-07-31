import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getServerSideProp } from "../pages/api/ForecastAPI";


export default function Graph({props}) {
  const [isData, setIsData] = useState(false);
  const [dt, setDt] = useState(null);
	const [graphDataSet, setGraphDataSet] = useState();
	const [graphLabels, setGraphLabels] = useState();
	const [forecastData, setForecastData] = useState(null);
	const [arr, setArr] = useState([]);

	console.log("props is graph", props);
	// console.log("props 0 ", props[0],"props 1 ", props[1],"props 2 ", props[2]);

	useEffect(() => {
		if (props[0] !== null) {
			getServerSideProp(props[1], props[2]).then((res) => {
				console.log(res.data.list)
				setArr(res.data.list);
			})
		} else {
			return;
		}
	}, [props]);

	console.log(arr)

  // call function after the arr state is set
	useEffect(() => {
    if (arr && arr.length > 0) {
      // console.log("arr is set");
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
					moment.unix(arr[0].dt).format("h a"),
					moment.unix(arr[1].dt).format("h a"),
					moment.unix(arr[2].dt).format("h a"),
					moment.unix(arr[3].dt).format("h a"),
					moment.unix(arr[4].dt).format("h a"),
					moment.unix(arr[5].dt).format("h a"),
					moment.unix(arr[6].dt).format("h a"),
					moment.unix(arr[7].dt).format("h a"),
					moment.unix(arr[8].dt).format("h a"),
				]);
    } else if (arr && arr.length === 0) {
      // console.log("no data");
      setIsData(false);
    }
	}, [arr]);

	
  const graphData = {
		labels: graphLabels,
    datasets: [
			{
        label: "Temperature",
        fill: "origin",
        data: graphDataSet,
      },
    ],
  };

	const options = {
		layout: {
			padding: {
					left: 25,
					right: 25,
					top: 25,
					bottom: 25
			}
	},
		plugins: {
			legend: {
				display: false,
			},
			datalabels: {
				anchor: 'end',
				backgroundColor: 'rgba(46, 196, 182, 1)',
				borderRadius: 4,
				padding: 4,
				align: 'end',
				font: {
					weight: "bold",
				},
				labels: {
					value: {
						color: 'white',
					}
				}
				
			}
		},
		elements: {
			line: {
				tension: 0,
				borderWidth: 2,
				borderColor: "rgba(203, 243, 240, 1)",
				fill: "start",
				backgroundColor: "rgba(203, 243, 240, 1)",
			},
			point: {
				radius: 0,
				hitRadius: 0,
			},
		},
		scales: {
			yAxes: {
				display: false,
			},
		},
	}

	// console.log(graphDataSet);

  if (isData === true) {
    return (
      <div className={styles.graphContainer}>
				<p className={styles.graphLabel}>24 Hour Temperature</p>
				<div className={styles.graph}>
					<Line className={styles.graphLine} data={graphData} width={400} height={400} options={options} plugins={[ChartDataLabels]}/>
				</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}


