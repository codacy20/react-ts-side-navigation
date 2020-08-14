import React, { Component } from "react";
import { Nav } from "./nav";
import "./side-panel.scss";

let data = [
  { id: 0, name: "Inbox", icon: "inbox" },
  { id: 1, name: "Activity", icon: "gesture" },
  { id: 1, name: "Calls", icon: "phone" },
  { id: 1, name: "Support", icon: "anchor" },
  { id: 1, name: "More", icon: "keyboard_arrow_down" }
];

export class SidePanel extends Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="side-panel">
        <div className="start">
          <span class="material-icons">add</span>
          <span>Start new</span>
        </div>
        <div className="item-container">
          {data.map(item => (
            <Nav id={item.id} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div className="profile">
          <img src="https://source.unsplash.com/QXevDflbl8A/60x60" />
          <span>Alissa Warner</span>
        </div>
      </div>
    );
  }
}
