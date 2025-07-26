import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Dummy from "./components/Dummy";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Card />
        {/* <Counter /> */}
        {/* <Dummy /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
