import React, { Component } from "react";
import "./App.css";
export default class home extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }
  async componentDidMount() {
    const url = "http://localhost:3080/api/v1/authen/";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((res) => {
        this.setState({ data: res });
        console.warn(res);
      });
    });
  }
  

  render() {
  
    const data = this.state.data;
    return (

      <div>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title"></h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary btn-sm">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
