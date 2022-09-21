const DivBase = ({ children }: any) => {
  return <div>{children}</div>;
};

const DivHalf = ({ right, left }: any) => {
  return (
    <div className="flex">
      <div className="w-[50%]">{right}</div>
      <div className="w-[50%]">{left}</div>
    </div>
  );
};
const Div = {
  base: DivBase,
  half: DivHalf,
};

export default Div;
