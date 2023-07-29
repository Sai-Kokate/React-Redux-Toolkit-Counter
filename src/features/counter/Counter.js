import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [incrementValue, setIncrementValue] = useState("");

  const addValue = Number(incrementValue) || 0;

  const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementValue}
        onChange={(e) => {
          setIncrementValue(e.target.value);
        }}
      />
      <div>
        <button onClick={() => dispatch(incrementByValue(addValue))}>
          Increment by {addValue}
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
