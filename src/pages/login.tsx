import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button, Div } from "../ossomComps";
import { useLoginMutation, useGetUsersQuery } from "../ReduxApi/api";

const Login: any = () => {
  const { handleSubmit, register } = useForm();

  const [login, loginResponse] = useLoginMutation();
  const { data } = useGetUsersQuery(null);

  const onSubmit = (items: any) => {
    console.log(items, "submit");
    login(items);
  };

  useEffect(() => {
    if (loginResponse.data) {
      console.log(loginResponse.data, "loginResponse");
    }
  }, [loginResponse.data]);

  const getDataHandler = () => {
    console.log(data, "data");
  };

  return (
    <div>
      <Head>
        <title>OSSOM</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <h1 className="text-center font-regular">login</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username")} placeholder="username" />
        <input type="text" {...register("password")} placeholder="pasw" />
        <input type="submit" />
      </form>

      <button onClick={getDataHandler}>get Data</button>
    </div>
  );
};

export default Login;
