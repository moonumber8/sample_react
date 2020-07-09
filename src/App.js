import React, { Component } from "react";
import "./App.css";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
export default class App extends Component {
  count = 0;

  constructor(props) {
    super(props)
  
    this.state = {
       clock:0
    }
  }
  
  //render จะดูเรียกเมื่อมีการเปลี่ยนแปลง
  render() {
    return (
      <div>
        <h1>Hello React {1 + 1}</h1>
        <h1 onClick={()=> {
          this.count++;
          this.setState({new_clock: this.state.clock+1}) //เอาตัวแปร ใน state มายัดใน ตัวแปร clock ตัวใหม่ เมื่อ constructor ถูกเรียก ค่า ใน render ก็จะถูก set ค่าลงไปใหม่
        }}>Count {this.count}</h1>
      </div>
    );
  }
}
