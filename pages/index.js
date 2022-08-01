import Head from "next/head";
import Image from "next/image";
import bannerLogo from "../public/banner-logo.png";
import bannerBg from "../public/bannerBg.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wildfire</title>
        <meta
          name="description"
          content="Wildfire Schoold of Governance Magic"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.header}>
          <h4>W_F</h4>
        </div> */}
        <div
          className={styles.blockHero}
          style={{
            backgroundImage: `url(${bannerBg.src})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            style={{
              margin: 0,
              paddingTop: "15%",
              fontSize: "4em",
            }}
          >
            Wild_Fire
          </h1>
          <p className={styles.description} style={{ margin: 0 }}>
            <code className={styles.code}>School of Governance Magic</code>
          </p>
          <div
            className={styles.gridRow}
            style={{ margin: 0, paddingBottom: "50px" }}
          >
            <h4>DeFi</h4>
            <h4>Public_Goods</h4>
            <h4>Infra</h4>
            <h4>Creator</h4>
          </div>
        </div>
        <div className={styles.block}>
          <h2>Mission</h2>
          <p>Lorem ipsum.</p>
        </div>
        <div className={styles.block}>
          <h2>Partners</h2>
          <p>Logos.</p>
        </div>
        <div className={styles.block}>
          <h2>Get involved</h2>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Hire Wildfire &rarr;</h2>
              <p>Get wildfire governance magicians support on your project.</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Contribute &rarr;</h2>
              <p>Get started contributing to the school of governance magic.</p>
            </a>
          </div>
        </div>

        {/* 
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> 
        */}
      </main>

      <footer className={styles.footer}>
        Links
        <ul>
          <li>
            <a
              href="https://twitter.com/Wildfire_DAO"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/mrPC3DmtMC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forum
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
