import React, { Component } from "react";
import "./App.css";
export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0,
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          {/* Links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                หน้าหลัก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
          </ul>
          {/* Navbar text*/}
          <span className="navbar-text">Navbar text</span>
        </nav>
        <div className="container" />
      </div>
    );
  }
}