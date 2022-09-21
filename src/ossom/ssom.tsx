import styled from "@emotion/styled";

const addcss = (atrname: string, csstext: string) => {
  const styleSheet = document.styleSheets[1];
  styleSheet.insertRule(`${atrname} {${csstext};} `, 0);
};

export { addcss };

addcss("body", "background-color: #f0f0f0;");
