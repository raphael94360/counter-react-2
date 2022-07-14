import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          {" "}
          -{" "}
        </button>
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          {" "}
          +{" "}
        </button>
        <div>
          <button
            onClick={() => {
              setCounter(0);
            }}
          >
            {" "}
            RESET{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
