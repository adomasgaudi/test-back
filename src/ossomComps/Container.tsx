import { concatProps } from "../utils";

const ContainerBase = ({ children, classIn, ...props }: any) => {
  return (
    <div className="flex justify-center" {...props}>
      <div className="w-full container px-3">
        <div className={`${classIn || ""}`}>{children}</div>
      </div>
    </div>
  );
};

const ContainerTall = concatProps(ContainerBase, {});

const Container = {
  base: ContainerBase,
  tall: ContainerTall,
};
export { Container };

// import styled from "@emotion/styled";

// export default function Container({ children, v }: any) {
//   const MainOut = styled.div`
//     ${({ classOut }: any) => {
//       return `
//         background: ${classOut};

//       `;
//     }}
//   `;

//   v({ p2: "padding: 2rem;" });

//   return <MainOut>{children}</MainOut>;
// }

// export const Containers = {c: Container};
