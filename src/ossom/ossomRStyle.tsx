const p5 = { padding: "20px" };
const p2 = { padding: "8px" };
const rounded = { md: { borderRadius: "5px" } };
const _ = { p5, p2, rounded };

const O = (...styles: any) => {
  let mix = {};
  // console.log(...styles);
  styles.forEach((obj: any) => {
    mix = { ...mix, ...obj };
  });
  return { ...mix };
};

export { O, _, p5, p2, rounded };
