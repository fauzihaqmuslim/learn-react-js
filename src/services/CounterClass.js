import React, { Component } from "react";
import "../component/Style.css";
class MaxMinClass extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  btnTambah() {
    this.setState({ number: this.state.number + 1 });
  }
  btnKurs() {
    if (this.state.number === 0) {
    } else {
      this.setState({ number: this.state.number - 1 });
    }
  }
  render() {
    return (
      <body>
        <div className="card">
          <h1>Class Component</h1>
          <h1>{this.state.number}</h1>
          <button onClick={() => this.btnTambah()}>+</button>
          <button onClick={() => this.btnKurs()}>-</button>
        </div>
      </body>
    );
  }
}
export default MaxMinClass;
