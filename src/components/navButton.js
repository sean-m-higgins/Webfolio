import React, { Component } from "react";
import '../styles/navButton.css';

class NavigationButton extends Component {
  render() {
    return (
      <button className="openNav" onMouseDown={this.props.handleMouseDown}>=</button>
    );
  }
}

export default NavigationButton;