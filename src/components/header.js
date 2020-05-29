import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../styles/header.css'
import NavigationButton from './navButton'
import NavigationMenu from './navMenu'

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();
  }

  render() {
  return (
    <div className="row navBar">
      <div className="col-8">
        <NavigationMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        <NavigationButton handleMouseDown={this.handleMouseDown} />
        <div id="theMenu"></div>
      </div>
      <div className="col-8">
        <Link className="logoLink" to="/">
          <h1>SH</h1>
        </Link>
      </div>
    </div>
  );
}
}

export default Header