import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Form from "react-bootstrap/Form";
import reportWebVitals from "./reportWebVitals";
import MaxMinClass from "./services/CounterClass";
import Counter from "./services/Counter";
import ListProduct from "./services/ListProduct";

ReactDOM.render(
  <React.StrictMode>
    <MaxMinClass />
    <Counter />
    <ListProduct />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
