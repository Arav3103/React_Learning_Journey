import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Dummy = () => {
  const { isLogged } = useContext(ThemeContext);
  console.log("👀 Dummy Rendered");
  return <p>I don't care about context</p>;
};

export default Dummy;
