import React, { Component } from "react";
import Paragraph from "./paragraph"
import "../styles/text.css"


class SmallSection extends Component {
  render() {
    return (
      <div className="sectionBox" >
      	<h2 id="sectionTitle">{this.props.sectionTitle}</h2>
        <h4 id="sectionSubtitle">{this.props.subtitle}</h4>
      	<hr/>
        <Paragraph paraText={this.props.paraText} />
      </div>
    );
  }
}

export default SmallSection;