import { useEffect, type FC } from "react";

const EventListener: FC = () => {
  useEffect(() => {
    const resizeFn = () => {
      console.log("Window innerWidth", window.innerWidth);
    };
    window.addEventListener("resize", resizeFn);

    return () => {
      window.removeEventListener("resize", resizeFn);
    };
  }, []);

  return (
    <>
      <div>EventListener</div>
    </>
  );
};

export default EventListener;
