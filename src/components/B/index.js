import React from "react";

class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = { b: 0 };
  }
  componentDidMount() {
    console.log(this.props, "mounted");
  }
  /*shouldComponentUpdate() {
    return false;
  }*/
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      b: props.a
    };
  }
  render() {
    console.log("render");
    const { increment } = this.props;
    console.log(this.state);
    return (
      <div className="B">
        value of b state is{this.state.b}
        B Component
        <button onClick={increment}>change a from b component!</button>
      </div>
    );
  }
}

export default B;
