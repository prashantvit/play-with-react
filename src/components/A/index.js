import React from "react";

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
      b: [1, 2, 3, 4, 5]
    };
  }
  render() {
    const { a, b } = this.state;
    return (
      <div className="A">
        <h1>A conponent{a + 1}</h1>
        {b.map(item => {
          return <li>{item}</li>;
        })}
        <button
          onClick={() => {
            this.setState({ a: 5 });
          }}
        >
          {" "}
          Click me!
        </button>
      </div>
    );
  }
}

export default A;
