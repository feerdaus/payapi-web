import Head from "next/head";
import Hero from "../src/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Payapi</title>
        <meta
          name="description"
          content="Start building with our APIs for absolutely free."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
