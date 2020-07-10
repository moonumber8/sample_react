import React, { Component } from "react";
import "./App.css";
export default class bander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3080/api/v1/authen/topmovie")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          datas: result.data,
        });
      });
  }
  render() {
    const datalist = this.state.datas;
    return (
      
      <div>
        {datalist.map((item) => (
        <div className="row align-items-center my-2">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={item.poster}
              width={300}
              height={400}
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Business Name or Tagline</h1>
            <p>
              This is a template that is great for small businesses. It doesn't
              have too much fancy flare to it, but it makes a great use of the
              standard Bootstrap core components. Feel free to use this template
              for any project you want!
            </p>
            <a className="btn btn-primary" href="#">
              Call to Action!
            </a>
          </div>
        </div>
        ))}
      </div>
    );
  }
}
