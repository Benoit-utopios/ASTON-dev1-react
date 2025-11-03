import { useState } from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParentComponent />
    </>
  );
}

export default App;
