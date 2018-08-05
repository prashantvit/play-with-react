import React from "react";
import B from "../B";
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
      b: [1, 2, 3, 4, 5],
      c: 0
    };
    this.incrementA = this.incrementA.bind(this);
    this.incrementC = this.incrementC.bind(this);
  }
  incrementA() {
    this.setState({ a: this.state.a + 1 });
  }
  incrementC() {
    this.setState({ c: this.state.c + 1 });
  }
  render() {
    const { a, b } = this.state;
    return (
      <div className="A">
        <B a={a} increment={this.incrementA} />
        <button onClick={this.incrementA}>change a from a component!</button>
        <button onClick={this.incrementC}>change c from a component!</button>
        <h1> value of c is {this.state.c} </h1>
        <h1>A conponent{a + 1}</h1>
        {b.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
    );
  }
}

export default A;
