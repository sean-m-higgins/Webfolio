import React, { Component } from "react";
import "../styles/text.css"

class Subtitle extends Component {
  render() {
    return (
      <div className="subtitleBox" >
        {this.props.subtitleText}
      </div>
    );
  }
}

export default Subtitle;