import { useState, type FC } from "react";

const UseNumberInUseState: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(function (prevCount) {
      const updateCountValue: number = prevCount + 1;
      return updateCountValue;
    });
  };
  return (
    <>
      <div>UseNumberInUseState</div>
      <button onClick={handleClick}>Increment</button>
      <p>{count}</p>
    </>
  );
};

export default UseNumberInUseState;
