import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Div } from "../ossomComps";

const Home: NextPage = () => {
  const name = useRef<HTMLInputElement>(null);

  const navigate = useRouter();
  const go = () => {
    if (name.current)
      navigate.push(`/hi/${encodeURIComponent(name.current!.value)}`);
  };
  return (
    <div>
      <Head>
        <title>OSSOM</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <h1 className="text-center font-regular">OSSOM Template</h1>
      <Div.half
        className="half"
        right={
          <div>
            <h1>right</h1>
            <div className="p-5 flex-[0.8]">
              <Button.base v={Button.w()}>sdf</Button.base>
            </div>
          </div>
        }
        left={<h1>left</h1>}
      />
    </div>
  );
};

export default Home;
