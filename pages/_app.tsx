import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CGRDMZ - Blog</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
