import React, { Component } from "react";
import Paragraph from "./paragraph"
import ClassNames from "./moreButton"
import "../styles/text.css"


class Section extends Component {
  render() {
    return (
      <div className="sectionBox" >
      	<h2 id="sectionTitle">{this.props.sectionTitle}</h2>
      	<h4 id="sectionSubtitle">{this.props.subtitle}</h4>
      	<hr/>
        <Paragraph paraText={this.props.paraText} />
        <div id="buttonBox">
        	<a href={this.props.more_here_link} style={{textDecoration: 'none'}} target="_blank" rel="noreferrer"> 
        		<ClassNames /> 
        	</a> 
        </div>
      </div>
    );
  }
}

export default Section;