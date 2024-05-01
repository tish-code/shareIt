import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Home | Code Sale</title>
      </Head>
      <h2>Welcome To Code Sale</h2>
    </main>
  );
}
