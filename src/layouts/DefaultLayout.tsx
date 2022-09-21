import { css } from "@emotion/react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { _ } from "../ossom/ossomCSS";
import { Container } from "../ossomComps/Container";

React.useLayoutEffect = React.useEffect;

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Container.base classIn="bg-gray-100 p-4">{children}</Container.base>
      <Footer></Footer>
    </>
  );
};

export default DefaultLayout;
