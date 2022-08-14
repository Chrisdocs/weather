import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";
import Search from "../components/search";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.headerTitle}>Weather App</title>
        <meta name="Weather App" content="Simple web app for getting the weather from a specified city" />
				<meta name="viewport" content="width=1000 initial-scale=1.0 maximum-scale=1" />
      </Head>

      <main className={styles.main}>
				<Search />
      </main>
    </div>
  );
}
