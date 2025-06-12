import "./App.css";
import UseStringInUS from "./components/UseState/UseStringInUseState";
import UseNumberInUseState from "./components/UseState/UseNumberInUseState";
import UseBoolInUseState from "./components/UseState/UseBoolInUseState";
import UseArrayInUseState from "./components/UseState/UseArrayInUseState";
import UseObjectInUseState from "./components/UseState/UseObjectInUseState";
import NoDependencyArr from "./components/UseEffect/NoDependencyArr";
import EmptyDependencyArr from "./components/UseEffect/EmptyDependencyArr";

function App() {
  return (
    <>
      <UseStringInUS />
      <UseNumberInUseState />
      <UseBoolInUseState />
      <UseArrayInUseState />
      <UseObjectInUseState />
      <NoDependencyArr />
      <EmptyDependencyArr />
    </>
  );
}

export default App;
