import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";


export default function GraphTwelve({ data, slug }) {
  const [isData, setIsData] = useState(false);
  const [dt, setDt] = useState(null);
  const [graphDataSetTemp, setGraphDataSetTemp] = useState();
  const [graphDataSetFeels, setGraphDataSetFeels] = useState();
  const [graphDataSetHumidity, setGraphDataSetHumidity] = useState();
  const [graphDataSetWindSpeed, setGraphDataSetWindSpeed] = useState();
  const [graphDataSetCloudCover, setGraphDataSetCloudCover] = useState();
  const [graphLabels, setGraphLabels] = useState();

  useEffect(() => {
    if (data.hourly && data.hourly.length > 0) {
      setIsData(true);
      setDt(moment.unix(data.hourly[0].dt).format("dddd"));
      setGraphDataSetTemp([
        //TODO: create loop for data array.map truncate the function.
        data.hourly[0].temp,
        data.hourly[1].temp,
        data.hourly[2].temp,
        data.hourly[3].temp,
        data.hourly[4].temp,
        data.hourly[5].temp,
        data.hourly[6].temp,
        data.hourly[7].temp,
        data.hourly[8].temp,
				data.hourly[9].temp,
				data.hourly[10].temp,
				data.hourly[11].temp,
				data.hourly[12].temp,
      ]);
      setGraphLabels([
        moment.unix(data.hourly[0].dt).format("dd h a"),
        moment.unix(data.hourly[1].dt).format("dd h a"),
        moment.unix(data.hourly[2].dt).format("dd h a"),
        moment.unix(data.hourly[3].dt).format("dd h a"),
        moment.unix(data.hourly[4].dt).format("dd h a"),
        moment.unix(data.hourly[5].dt).format("dd h a"),
        moment.unix(data.hourly[6].dt).format("dd h a"),
        moment.unix(data.hourly[7].dt).format("dd h a"),
        moment.unix(data.hourly[8].dt).format("dd h a"),
				moment.unix(data.hourly[9].dt).format("dd h a"),
				moment.unix(data.hourly[10].dt).format("dd h a"),
				moment.unix(data.hourly[11].dt).format("dd h a"),
				moment.unix(data.hourly[12].dt).format("dd h a"),
      ]);
      setGraphDataSetFeels([
        data.hourly[0].feels_like,
        data.hourly[1].feels_like,
        data.hourly[2].feels_like,
        data.hourly[3].feels_like,
        data.hourly[4].feels_like,
        data.hourly[5].feels_like,
        data.hourly[6].feels_like,
        data.hourly[7].feels_like,
        data.hourly[8].feels_like,
				data.hourly[9].feels_like,
				data.hourly[10].feels_like,
				data.hourly[11].feels_like,
				data.hourly[12].feels_like,
      ]);
      setGraphDataSetHumidity([
        data.hourly[0].humidity,
        data.hourly[1].humidity,
        data.hourly[2].humidity,
        data.hourly[3].humidity,
        data.hourly[4].humidity,
        data.hourly[5].humidity,
        data.hourly[6].humidity,
        data.hourly[7].humidity,
        data.hourly[8].humidity,
				data.hourly[9].humidity,
				data.hourly[10].humidity,
				data.hourly[11].humidity,
				data.hourly[12].humidity,
      ]);
      setGraphDataSetWindSpeed([
        data.hourly[0].wind_speed,
        data.hourly[1].wind_speed,
        data.hourly[2].wind_speed,
        data.hourly[3].wind_speed,
        data.hourly[4].wind_speed,
        data.hourly[5].wind_speed,
        data.hourly[6].wind_speed,
        data.hourly[7].wind_speed,
        data.hourly[8].wind_speed,
				data.hourly[9].wind_speed,
				data.hourly[10].wind_speed,
				data.hourly[11].wind_speed,
				data.hourly[12].wind_speed,
      ]);
      setGraphDataSetCloudCover([
        data.hourly[0].clouds,
        data.hourly[1].clouds,
        data.hourly[2].clouds,
        data.hourly[3].clouds,
        data.hourly[4].clouds,
        data.hourly[5].clouds,
        data.hourly[6].clouds,
        data.hourly[7].clouds,
        data.hourly[8].clouds,
				data.hourly[9].clouds,
				data.hourly[10].clouds,
				data.hourly[11].clouds,
				data.hourly[12].clouds,
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
        data: graphDataSetTemp,
        borderColor: "#CBF3F0",
        datalabels: {
          anchor: "end",
          borderRadius: 4,
          padding: 4,
          align: "end",
          font: {
            weight: "bold",
          },
          labels: {
            value: {
              color: "transparent",
            },
          },
        },
      },
      {
        label: "Feels Like",
        fill: "origin",
        data: graphDataSetFeels,
        borderColor: "#2EC4B6",
        datalabels: {
          labels: {
            value: {
              color: "transparent",
            },
          },
        },
      },
      {
        label: "Humidity",
        fill: "origin",
        data: graphDataSetHumidity,
        borderColor: "#9999cc",
        datalabels: {
          labels: {
            value: {
              color: "transparent",
            },
          },
        },
      },
      {
        label: "Wind Speed",
        fill: "origin",
        data: graphDataSetWindSpeed,
        borderColor: "#ff9966",
        datalabels: {
          labels: {
            value: {
              color: "transparent",
            },
          },
        },
      },
      {
        label: "Cloud Cover",
        fill: "origin",
        data: graphDataSetCloudCover,
        borderColor: "#ffff66",
        datalabels: {
          labels: {
            value: {
              color: "transparent",
            },
          },
        },
      },
    ],
  };

  if (isData === true) {
    return (
      <div className={styles.graphContainer}>
        <p className={styles.graphLabel}>12 Hour Weather</p>
        <div className={styles.graph}>
          <Line
            className={styles.graphLine}
            data={graphData}
            width={400}
            height={400}
            plugins={[ChartDataLabels]}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}