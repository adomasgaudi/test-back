import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../components/Container";
import Counter from "../components/Counter";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const name = useRef<HTMLInputElement>(null);
  const navigate = useRouter();
  const go = () => {
    if (name.current)
      navigate.push(`/hi/${encodeURIComponent(name.current!.value)}`);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div>Lorem ilique, voluptatem</div>
    </>
  );
};

export default Home;
