import { useEffect, type FC } from "react";
import { useState } from "react";

const DependencyArray: FC = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);

  const handleClick = (): void => {
    setisVisible((prevValue) => !prevValue);
  };
  useEffect(() => {
    // console.log(
    //   "I get printed everytime when the dependency item state changes"
    // );
  }, [isVisible]);

  return (
    <>
      <div>DependencyArray</div>
      <button onClick={handleClick}>Show/Hide</button>
      {isVisible && <p>I am true now</p>}
    </>
  );
};

export default DependencyArray;
