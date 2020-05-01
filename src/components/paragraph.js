import React, { Component } from "react";
import "../styles/text.css"


class Paragraph extends Component {
  render() {
    return (
      <div className="paraBox" >
        {this.props.paraText}
      </div>
    );
  }
}

export default Paragraph;