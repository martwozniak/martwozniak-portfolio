import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen text-gray-100">
      <Head>
        <title>Marcin Wozniak - Personal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
      <footer>
        <p>Marcin Wozniak</p>
      </footer>
    </div>
  );
}
