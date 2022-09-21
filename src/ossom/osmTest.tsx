import styled from "@emotion/styled";
import { _, O } from "./ossomCSS";

// console.log(_);

export const Button2 = styled("button")`
  ${(props) => {
    return `
      background: ${props.backgroundz};
      color: ${props.colorz};
      border: none;
      ${O(_.p(props.padd), _.rounded.md)}
      `;
  }}
`;
