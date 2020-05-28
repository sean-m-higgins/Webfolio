import React, { Component } from "react";
// import { Link } from "gatsby"
import "../styles/text.css"


class SkillsSection extends Component {
  render() {
    return (
      <div className="skillsSectionBox" >
      	<div id="leftBox" >
          {this.props.left_box}
        </div>

        <div id="rightBox" className="rightBox">
          {this.props.right_box}
        </div>
      </div>
    );
  }
}

export default SkillsSection;