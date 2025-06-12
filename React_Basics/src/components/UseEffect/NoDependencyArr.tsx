import { useEffect, type FC } from "react";
import { useState } from "react";

const NoDependencyArr: FC = () => {
  const [, setisVisible] = useState<boolean>(false);

  const handleClick = (): void => {
    setisVisible((prevValue) => !prevValue);
  };
  useEffect(() => {
    // console.log("I am executed again as there is no dependency array");
  });

  return (
    <>
      <div>NoDependencyArr</div>
      <button onClick={handleClick}>Run again</button>
    </>
  );
};

export default NoDependencyArr;
