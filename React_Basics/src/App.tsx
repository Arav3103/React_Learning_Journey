import "./App.css";
import UseStringInUS from "./components/UseState/UseStringInUseState";
import UseNumberInUseState from "./components/UseState/UseNumberInUseState";
import UseBoolInUseState from "./components/UseState/UseBoolInUseState";
import UseArrayInUseState from "./components/UseState/UseArrayInUseState";
import UseObjectInUseState from "./components/UseState/UseObjectInUseState";
import NoDependencyArr from "./components/UseEffect/NoDependencyArr";
import EmptyDependencyArr from "./components/UseEffect/EmptyDependencyArr";
import DependencyArray from "./components/UseEffect/DependencyArray";
import CleanUp from "./components/UseEffect/CleanUp";
import { useEffect, useState } from "react";
import FetchAPI from "./components/UseEffect/FetchAPI";
import LocalStorage from "./components/UseEffect/LocalStorage";
import EventListener from "./components/UseEffect/EventListener";

function App() {
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setFlag(false), 2000);
  }, []);
  return (
    <>
      <UseStringInUS />
      <UseNumberInUseState />
      <UseBoolInUseState />
      <UseArrayInUseState />
      <UseObjectInUseState />
      <FetchAPI />
      <LocalStorage />
      <EventListener />
      <NoDependencyArr />
      <EmptyDependencyArr />
      <DependencyArray />
      {flag && <CleanUp />}
    </>
  );
}

export default App;
