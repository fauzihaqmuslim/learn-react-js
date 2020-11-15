import React, { useState } from "react";
import "../component/Style.css";

function Counter() {
  const [number, setNumber] = useState(0);

  function btnTambah() {
    setNumber(number + 1);
  }
  function btnKurs() {
    if (number == 0) {
    } else {
      setNumber(number - 1);
    }
  }

  return (
    <div className="card">
      <h1>Function Component</h1>
      <h2>{number}</h2>
      <button onClick={btnTambah}>+</button>
      <button onClick={btnKurs}>-</button>
    </div>
  );
}
export default Counter;
