import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          corrupti a deleniti aliquam voluptates voluptas, consequuntur
          perferendis repudiandae minima ratione in ea totam fugiat, quia labore
          amet, unde facere nostrum?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          corrupti a deleniti aliquam voluptates voluptas, consequuntur
          perferendis repudiandae minima ratione in ea totam fugiat, quia labore
          amet, unde facere nostrum?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
