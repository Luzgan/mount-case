import React from "react";

export default class Example2 extends React.Component {
  componentDidMount() {
    console.log("Did mount", this);
  }

  render() {
    console.log("rerender", this);
    return <div>Hello2</div>;
  }
}
