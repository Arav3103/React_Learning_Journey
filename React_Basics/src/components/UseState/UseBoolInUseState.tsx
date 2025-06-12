import { useState, type FC } from "react";

const UseBoolInUseState: FC = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);

  const handleClick = (): void => {
    setisVisible((prevValue) => !prevValue);
  };
  return (
    <>
      <div>UseBoolInUseState</div>
      <button onClick={handleClick}>Toggle Message</button>
      <p>{isVisible ? "Hello Katak! Keep going...." : "You are the best"}</p>
    </>
  );
};

export default UseBoolInUseState;
