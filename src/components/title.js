import React, { Component } from "react";
import Subtitle from './subtitle'
import "../styles/text.css"


class Title extends Component {
  render() {
    return (
      <div className="titleBox" >
        <h1>{this.props.titleText}</h1>
        <Subtitle subtitleText={this.props.subtitleText} />
      </div>
    );
  }
}

export default Title;