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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
				<Search />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
