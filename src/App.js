import React, { Component } from 'react';
import "./util/styled/_rest.css"
import 'semantic-ui-css/semantic.min.css';
import Routes from './dates/route';

import Log from "./all/log"
class App extends Component {
  render() {
    return (
      <div className="App">
      
   
      <Routes/>
     
      <div></div>
      <Log/>
      </div>
    );
  }
}

export default App;
