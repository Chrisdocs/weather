import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function GraphFortyEight({ data}) {
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
				data.hourly[13].temp,
				data.hourly[14].temp,
				data.hourly[15].temp,
				data.hourly[16].temp,
				data.hourly[17].temp,
				data.hourly[18].temp,
				data.hourly[19].temp,
				data.hourly[20].temp,
				data.hourly[21].temp,
				data.hourly[22].temp,
				data.hourly[23].temp,
				data.hourly[24].temp,
				data.hourly[25].temp,
				data.hourly[26].temp,
				data.hourly[27].temp,
				data.hourly[28].temp,
				data.hourly[29].temp,
				data.hourly[30].temp,
				data.hourly[31].temp,
				data.hourly[32].temp,
				data.hourly[33].temp,
				data.hourly[34].temp,
				data.hourly[35].temp,
				data.hourly[36].temp,
				data.hourly[37].temp,
				data.hourly[38].temp,
				data.hourly[39].temp,
				data.hourly[40].temp,
				data.hourly[41].temp,
				data.hourly[42].temp,
				data.hourly[43].temp,
				data.hourly[44].temp,
				data.hourly[45].temp,
				data.hourly[46].temp,
				data.hourly[47].temp,
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
				moment.unix(data.hourly[13].dt).format("dd h a"),
				moment.unix(data.hourly[14].dt).format("dd h a"),
				moment.unix(data.hourly[15].dt).format("dd h a"),
				moment.unix(data.hourly[16].dt).format("dd h a"),
				moment.unix(data.hourly[17].dt).format("dd h a"),
				moment.unix(data.hourly[18].dt).format("dd h a"),
				moment.unix(data.hourly[19].dt).format("dd h a"),
				moment.unix(data.hourly[20].dt).format("dd h a"),
				moment.unix(data.hourly[21].dt).format("dd h a"),
				moment.unix(data.hourly[22].dt).format("dd h a"),
				moment.unix(data.hourly[23].dt).format("dd h a"),
				moment.unix(data.hourly[24].dt).format("dd h a"),
				moment.unix(data.hourly[25].dt).format("dd h a"),
				moment.unix(data.hourly[26].dt).format("dd h a"),
				moment.unix(data.hourly[27].dt).format("dd h a"),
				moment.unix(data.hourly[28].dt).format("dd h a"),
				moment.unix(data.hourly[29].dt).format("dd h a"),
				moment.unix(data.hourly[30].dt).format("dd h a"),
				moment.unix(data.hourly[31].dt).format("dd h a"),
				moment.unix(data.hourly[32].dt).format("dd h a"),
				moment.unix(data.hourly[33].dt).format("dd h a"),
				moment.unix(data.hourly[34].dt).format("dd h a"),
				moment.unix(data.hourly[35].dt).format("dd h a"),
				moment.unix(data.hourly[36].dt).format("dd h a"),
				moment.unix(data.hourly[37].dt).format("dd h a"),
				moment.unix(data.hourly[38].dt).format("dd h a"),
				moment.unix(data.hourly[39].dt).format("dd h a"),
				moment.unix(data.hourly[40].dt).format("dd h a"),
				moment.unix(data.hourly[41].dt).format("dd h a"),
				moment.unix(data.hourly[42].dt).format("dd h a"),
				moment.unix(data.hourly[43].dt).format("dd h a"),
				moment.unix(data.hourly[44].dt).format("dd h a"),
				moment.unix(data.hourly[45].dt).format("dd h a"),
				moment.unix(data.hourly[46].dt).format("dd h a"),
				moment.unix(data.hourly[47].dt).format("dd h a"),
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
				data.hourly[13].feels_like,
				data.hourly[14].feels_like,
				data.hourly[15].feels_like,
				data.hourly[16].feels_like,
				data.hourly[17].feels_like,
				data.hourly[18].feels_like,
				data.hourly[19].feels_like,
				data.hourly[20].feels_like,
				data.hourly[21].feels_like,
				data.hourly[22].feels_like,
				data.hourly[23].feels_like,
				data.hourly[24].feels_like,
				data.hourly[25].feels_like,
				data.hourly[26].feels_like,
				data.hourly[27].feels_like,
				data.hourly[28].feels_like,
				data.hourly[29].feels_like,
				data.hourly[30].feels_like,
				data.hourly[31].feels_like,
				data.hourly[32].feels_like,
				data.hourly[33].feels_like,
				data.hourly[34].feels_like,
				data.hourly[35].feels_like,
				data.hourly[36].feels_like,
				data.hourly[37].feels_like,
				data.hourly[38].feels_like,
				data.hourly[39].feels_like,
				data.hourly[40].feels_like,
				data.hourly[41].feels_like,
				data.hourly[42].feels_like,
				data.hourly[43].feels_like,
				data.hourly[44].feels_like,
				data.hourly[45].feels_like,
				data.hourly[46].feels_like,
				data.hourly[47].feels_like,
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
				data.hourly[13].humidity,
				data.hourly[14].humidity,
				data.hourly[15].humidity,
				data.hourly[16].humidity,
				data.hourly[17].humidity,
				data.hourly[18].humidity,
				data.hourly[19].humidity,
				data.hourly[20].humidity,
				data.hourly[21].humidity,
				data.hourly[22].humidity,
				data.hourly[23].humidity,
				data.hourly[24].humidity,
				data.hourly[25].humidity,
				data.hourly[26].humidity,
				data.hourly[27].humidity,
				data.hourly[28].humidity,
				data.hourly[29].humidity,
				data.hourly[30].humidity,
				data.hourly[31].humidity,
				data.hourly[32].humidity,
				data.hourly[33].humidity,
				data.hourly[34].humidity,
				data.hourly[35].humidity,
				data.hourly[36].humidity,
				data.hourly[37].humidity,
				data.hourly[38].humidity,
				data.hourly[39].humidity,
				data.hourly[40].humidity,
				data.hourly[41].humidity,
				data.hourly[42].humidity,
				data.hourly[43].humidity,
				data.hourly[44].humidity,
				data.hourly[45].humidity,
				data.hourly[46].humidity,
				data.hourly[47].humidity,
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
				data.hourly[13].wind_speed,
				data.hourly[14].wind_speed,
				data.hourly[15].wind_speed,
				data.hourly[16].wind_speed,
				data.hourly[17].wind_speed,
				data.hourly[18].wind_speed,
				data.hourly[19].wind_speed,
				data.hourly[20].wind_speed,
				data.hourly[21].wind_speed,
				data.hourly[22].wind_speed,
				data.hourly[23].wind_speed,
				data.hourly[24].wind_speed,
				data.hourly[25].wind_speed,
				data.hourly[26].wind_speed,
				data.hourly[27].wind_speed,
				data.hourly[28].wind_speed,
				data.hourly[29].wind_speed,
				data.hourly[30].wind_speed,
				data.hourly[31].wind_speed,
				data.hourly[32].wind_speed,
				data.hourly[33].wind_speed,
				data.hourly[34].wind_speed,
				data.hourly[35].wind_speed,
				data.hourly[36].wind_speed,
				data.hourly[37].wind_speed,
				data.hourly[38].wind_speed,
				data.hourly[39].wind_speed,
				data.hourly[40].wind_speed,
				data.hourly[41].wind_speed,
				data.hourly[42].wind_speed,
				data.hourly[43].wind_speed,
				data.hourly[44].wind_speed,
				data.hourly[45].wind_speed,
				data.hourly[46].wind_speed,
				data.hourly[47].wind_speed,
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
				data.hourly[13].clouds,
				data.hourly[14].clouds,
				data.hourly[15].clouds,
				data.hourly[16].clouds,
				data.hourly[17].clouds,
				data.hourly[18].clouds,
				data.hourly[19].clouds,
				data.hourly[20].clouds,
				data.hourly[21].clouds,
				data.hourly[22].clouds,
				data.hourly[23].clouds,
				data.hourly[24].clouds,
				data.hourly[25].clouds,
				data.hourly[26].clouds,
				data.hourly[27].clouds,
				data.hourly[28].clouds,
				data.hourly[29].clouds,
				data.hourly[30].clouds,
				data.hourly[31].clouds,
				data.hourly[32].clouds,
				data.hourly[33].clouds,
				data.hourly[34].clouds,
				data.hourly[35].clouds,
				data.hourly[36].clouds,
				data.hourly[37].clouds,
				data.hourly[38].clouds,
				data.hourly[39].clouds,
				data.hourly[40].clouds,
				data.hourly[41].clouds,
				data.hourly[42].clouds,
				data.hourly[43].clouds,
				data.hourly[44].clouds,
				data.hourly[45].clouds,
				data.hourly[46].clouds,
				data.hourly[47].clouds,
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
        <p className={styles.graphLabel}>48 Hour Weather</p>
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
