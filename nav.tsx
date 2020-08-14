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
        <span class="material-icons">{this.props.icon}</span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}
