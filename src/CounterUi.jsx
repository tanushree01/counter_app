import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementValue, incrementValue } from "./redux/countSlice";

function CounterUi() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log("count----", count);

  return (
    <div>
      <div className="card">
        <h4> Counter : {count} </h4>
        <button onClick={() => dispatch(incrementValue())}>+</button>
        <button onClick={() => dispatch(decrementValue())}>-</button>
      </div>
    </div>
  );
}

export default CounterUi;
