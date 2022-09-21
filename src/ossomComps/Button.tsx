import { concatProps } from "../utils";
import { css } from "@emotion/react";

const Original = ({ children, className, v }: any) => {
  return (
    <button
      className={`py-1 px-3 border rounded-md mx-2 font-bold  border-gray-400 ${
        className ?? ""
      }`}
      css={css`
        ${v.style}
      `}
    >
      {children}
    </button>
  );
};

const Thick = concatProps(Original, {
  className:
    "py-2 px-6 border-2 rounded-md mx-2 font-bold hover:shadow-md border border-gray-400 active:shadow-inset",
});

const Text = concatProps(Original, {
  className:
    "py-2 px-6 border-none bg-white rounded-md mx-2 font-bold hover:bg-blue-200 hover:border hover:border-blue-400",
});

function ButtonStyles() {
  this.base = Original;
  this.thick = Thick;
  this.style = "";
}
ButtonStyles.prototype.w = function () {
  this.style += "width: 150px; ";
  return this;
};
ButtonStyles.prototype.h = function () {
  this.style += "height: 170px; ";
  return this;
};

const Button = new ButtonStyles();

export default Button;
