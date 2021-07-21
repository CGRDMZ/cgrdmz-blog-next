import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from "react";
import * as gtag from "../utils/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CGRDMZ - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="kzk9fbsVpS2ZlmkHZXG6bKshCiULwxdkoz0dVLggv9Y"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to my personal blog website. I write about tech, software and stuff. "
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
