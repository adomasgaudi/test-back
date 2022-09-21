const p5 = "padding: 20px;";
const p2 = "padding: 8px;";
const p = (num: number) => `padding: ${num}px;`;
const rounded = { md: "border-radius: 5px; " };

export const O = (...styles: any) => {
  let mix = "";
  // console.log([...styles]);
  styles.forEach((obj: any) => {
    mix += `${" "}${obj}`;
  });
  // console.log(mix, "mixxx");
  return mix;
};
export const _ = { p5, p2, rounded, p };
