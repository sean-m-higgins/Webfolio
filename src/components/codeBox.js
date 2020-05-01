import React, { Component } from "react";
import { Link } from 'gatsby'
import '../styles/menu.css'


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
            <li className="nav-link"><Link className="nav-link" to="/">HOME</Link></li>
            <li className="nav-link"><Link className="nav-link" to="/about">ABOUT ME</Link></li>
            <li className="nav-link"><Link className="nav-link" to="/portfolio">PORTFOLIO</Link></li>
            <li className="nav-link"><Link className="nav-link" to="/skills">SKILLS</Link></li>
            <Link to="/links"></Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;