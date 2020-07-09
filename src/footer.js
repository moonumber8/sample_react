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
        <footer className="py-4 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2020
            </p>
          </div>
          {/* /.container */}
        </footer>
      </div>
    );
  }
}
