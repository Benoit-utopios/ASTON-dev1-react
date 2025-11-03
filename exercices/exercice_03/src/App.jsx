import { useState } from "react";
import "./App.css";
import FizzBuzz from "./components/FizzBuzz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FizzBuzz />
    </>
  );
}

export default App;
