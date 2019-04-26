import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";
import Test2 from "./Test2";

import "./styles.css";

class App extends React.Component {
  state = {
    counter: 0
  };

  onClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  renderSomething = () => {
    return <Test2 />;
  };

  render() {
    console.log(`===== test count ${this.state.counter} =====`);
    return (
      <div className="App" onClick={this.onClick}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Test renderSomething={this.renderSomething} test3={<Test2 />} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
