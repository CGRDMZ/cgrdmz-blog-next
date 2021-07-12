import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CGRDMZ - Blog</title>
        <meta name="description" content="blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="kzk9fbsVpS2ZlmkHZXG6bKshCiULwxdkoz0dVLggv9Y" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
export default MyApp;
