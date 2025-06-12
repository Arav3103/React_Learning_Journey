import { useEffect, type FC } from "react";
import { useState } from "react";

const EmptyDependencyArr: FC = () => {
  const [, setisVisible] = useState<boolean>(false);

  const handleClick = (): void => {
    setisVisible((prevValue) => !prevValue);
  };
  useEffect(() => {
    // console.log("I get executed only once");
  }, []);

  return (
    <>
      <div>EmptyDependencyArr</div>
      <button onClick={handleClick}>Run again</button>
    </>
  );
};

export default EmptyDependencyArr;
