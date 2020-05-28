import React, { Component } from "react";
import "../styles/text.css"


class SkillsSectionText extends Component {
  render() {
    return (
      <h2 id="skillsText" > 
        <a href={this.props.text_link} style={{textDecoration: 'none', color: "#3d005b"}}> {this.props.text} </a>
      </h2>
    );
  }
}

export default SkillsSectionText;