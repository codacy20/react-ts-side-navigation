import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { SidePanel } from "./side-panel";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="container">
        <SidePanel />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
