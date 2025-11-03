import { useState } from "react";

const FizzBuzz = () => {
  const [counter, SetCounter] = useState(0);

  const fizzBuzzFormatted = () => {
    if (counter % 5 == 0 && counter % 3 == 0 && counter != 0) {
      return "FizzBuzz";
    } else if (counter % 5 == 0 && counter != 0) {
      return "Buzz";
    } else if (counter % 3 == 0 && counter != 0) {
      return "Fizz";
    } else {
      return counter;
    }
  };

  return (
    <>
      <p>{fizzBuzzFormatted()}</p>
      <button onClick={() => SetCounter(counter + 1)} disabled={counter >= 30}>
        +
      </button>
      <button onClick={() => SetCounter(counter - 1)} disabled={counter <= 0}>
        -
      </button>
    </>
  );
};

export default FizzBuzz;
