import React, { useEffect } from "react";
import { useState, useRef } from "react";
import styles from "../styles/Home.module.scss";
import GraphTwelve from "./Graphs/Twelve";
import GraphTwentyFour from "./Graphs/TwentyFour";
import GraphThirtySix from "./Graphs/Thirtysix";
import GraphFortyEight from "./Graphs/Fortyeight";

export default function GraphSwitchHandler({ data }) {
  const [graph, setGraph] = useState("twentyfour");
	const myRef = useRef(null);

	const scrollToElement = () => myRef.current.scrollIntoView();

  const handleGraphChange = (e) => {
    e.preventDefault();
    setGraph(e.target.value);
  };

	useEffect(() => {
		scrollToElement();
	}, []);

  return (
    <div className={styles.graphContainer}>
      <div className={styles.graphSwitchBtn}>
        <button
          className={styles.switchBtn}
          value="twelve"
          onClick={handleGraphChange}
        >
          Twelve Hr
        </button>
        <button
          className={styles.switchBtn}
          value="twentyfour"
          onClick={handleGraphChange}
        >
          Twenty-four Hr
        </button>
        <button
          className={styles.switchBtn}
          value="thirtysix"
          onClick={handleGraphChange}
        >
          Thirty-six Hr
        </button>
        <button
          className={styles.switchBtn}
          value="fortyeight"
          onClick={handleGraphChange}
        >
          Forty-eight Hr
        </button>
      </div>
      <div className={styles.graphCompContainer} ref={myRef}>
        {graph === "twelve" ? <GraphTwelve data={data} /> : null}
        {graph === "twentyfour" ? <GraphTwentyFour data={data} /> : null}
        {graph === "thirtysix" ? <GraphThirtySix data={data} /> : null}
        {graph === "fortyeight" ? <GraphFortyEight data={data} /> : null}
      </div>
    </div>
  );
}
