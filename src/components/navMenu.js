import React, { Component } from "react";
import { Link } from 'gatsby'
import '../styles/nav.css'


class NavigationMenu extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <button className="closeNav" onMouseDown={this.props.handleMouseDown}>-</button>
        <div className="box">
          <ul>
            <li><Link className="nav-link" to="/">HOME</Link></li>
            <li><Link className="nav-link" to="/about">ABOUT ME</Link></li>
            <li><Link className="nav-link" to="/portfolio">PORTFOLIO</Link></li>
            <li><Link className="nav-link" to="/skills">SKILLS</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;