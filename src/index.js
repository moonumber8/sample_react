import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Header from './header';
import Footer from './footer';
import Bander from './bander';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <app />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  
 <React.StrictMode>
    <Header />
    <div className="App">
    <Bander />
    <Home />
    </div>

    <Footer />
  </React.StrictMode>

 ,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
