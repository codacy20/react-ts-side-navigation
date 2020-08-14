import React, { Component } from "react";
import "./nav.scss";

interface data {
  id: number;
  name: string;
  icon: string;
}

export class Nav extends Component<data, {}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="item">
        <span className="material-icons material-icons-outlined">{this.props.icon}</span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
