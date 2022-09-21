import styled from "@emotion/styled";

export default function Container({ children, v }: any) {
  const MainOut = styled.div`
    ${({ classOut }: any) => {
      return `
        background: ${classOut};
        
      `;
    }}
  `;

  v({ p2: "padding: 2rem;" });

  return <MainOut>{children}</MainOut>;
}

export const Containers = {c: Container};
