import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getServerSideProp } from "../pages/api/ForecastAPI";


export default function Graph({ data, slug }) {
  const [isData, setIsData] = useState(false);
  const [dt, setDt] = useState(null);
	const [graphDataSet, setGraphDataSet] = useState();
	const [graphLabels, setGraphLabels] = useState();

	useEffect(() => {
    if (data.hourly && data.hourly.length > 0) {
      setIsData(true);
      setDt(moment.unix(data.hourly[0].dt).format("dddd"));
			setGraphDataSet([
				//TODO: create loop for data array.map truncate the function.
				data.hourly[0].temp,
				data.hourly[1].temp,
				data.hourly[2].temp,
				data.hourly[3].temp,
				data.hourly[4].temp,
				data.hourly[5].temp,
				data.hourly[6].temp,
				data.hourly[7].temp,
				data.hourly[8].temp,]);
				setGraphLabels([
					moment.unix(data.hourly[0].dt).format("h a"),
					moment.unix(data.hourly[1].dt).format("h a"),
					moment.unix(data.hourly[2].dt).format("h a"),
					moment.unix(data.hourly[3].dt).format("h a"),
					moment.unix(data.hourly[4].dt).format("h a"),
					moment.unix(data.hourly[5].dt).format("h a"),
					moment.unix(data.hourly[6].dt).format("h a"),
					moment.unix(data.hourly[7].dt).format("h a"),
					moment.unix(data.hourly[8].dt).format("h a"),
				]);
    } else if (data.hourly && data.hourly.length === 0) {
      setIsData(false);
    }
	}, [data.hourly]);

	
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


	// TODO: export options from own file
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


