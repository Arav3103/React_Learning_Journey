import { useEffect, type FC } from "react";

const FetchAPI: FC = () => {
  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data); //Gets printed twice due to React.StrictMode
    };
    fecthData();
  }, []);
  return (
    <>
      <div>FetchAPI</div>
    </>
  );
};

export default FetchAPI;
