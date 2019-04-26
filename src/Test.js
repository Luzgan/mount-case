import React from "react";
import Test2 from "./Test2";

export default class Example extends React.Component {
  componentDidMount() {
    console.log("Did mount", this);
  }
  renderAdditionalComponent() {
    return <Test2 />;
  }

  renderAdditionalComponent2 = () => {
    return props => <Test2 key="test" {...props} />;
  };

  renderAdditionalComponent3 = () => {
    return Test2;
  };

  renderAdditionalComponent3 = () => {
    return Test2;
  };

  render() {
    const Example3 = this.renderAdditionalComponent2();
    const Example4 = this.renderAdditionalComponent3();
    console.log("rerender", this);
    return (
      <div>
        Hello
        {this.renderAdditionalComponent()}
        {this.props.renderSomething()}
        {Example3()}
        <Example3 />
        <Example4 />
        {this.props.test3}
      </div>
    );
  }
}
