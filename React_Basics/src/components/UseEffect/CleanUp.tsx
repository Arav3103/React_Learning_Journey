import { useEffect, type FC } from "react";

const CleanUp: FC = () => {
  useEffect(() => {
    const interval: number = setInterval(() => {
      // console.log("Printing every one second", new Date().getSeconds());
    }, 1000);
    // console.log("I run only once");
    return () => {
      // console.log("Unmounted"); //This gets printed in console while execution and it happens because of React.StrictMode wrapping our App component in main.tsx
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>CleanUp</div>
    </>
  );
};

export default CleanUp;
