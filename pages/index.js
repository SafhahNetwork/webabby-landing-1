import Head from "next/head";
import Banner from "../components/Banner";
import Examples from "../components/Examples";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Steps from "../components/Steps";
import Welcome from "../components/Welcome";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Webabby: The place to go for graphic design</title>
        <meta
          name="description"
          content=" The place to go for graphic design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Banner />
        <Welcome />
        <Steps />
        <Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"></Script>
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="621612d7d3a72bd339c14d4f"
          data-style-height="90px"
          data-style-width="100%"
          data-theme="light"
          data-min-review-count="0"
        >
          <a
            href="https://www.trustpilot.com/review/webabby.com"
            target="_blank"
            rel="noreferrer"
          >
            Trustpilot
          </a>
        </div>
        <div className="fluid g-2">
          <Packages />
          <Examples />
        </div>
      </main>
    </div>
  );
}
