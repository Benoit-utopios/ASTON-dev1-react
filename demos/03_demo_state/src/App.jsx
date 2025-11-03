import { useState } from "react";
import "./App.css";
import StateFullComponent from "./components/StateFullComponent";
import StateLessComponent from "./components/StateLessComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StateLessComponent />
      <StateFullComponent />
    </>
  );
}

export default App;
