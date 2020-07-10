import React, { Component } from "react";
import "./App.css";
import Loading from "./loading.js";
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
      <div className="App">
      <header className="App-header">
        <Loading />
      </header>
    </div>
    );
  }
}
export default App;