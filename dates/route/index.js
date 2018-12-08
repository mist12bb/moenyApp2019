import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Form from "../form"
import ActionsBoxs from '../actions';
import MenuMin from '../menu/menu.main';
import Report from '../report/report';
const Routes = () => {
  return (
    <div>
    <Router>
    <div>
    <div style={{display: "grid", gridTemplateColumns: "200px auto"}}>
        <div className="nav-top" >
          <MenuMin/>
        </div>
        <div className="routers">
        
        <Route
        path="/add-action" 
        render={()=> <Form/> } />
        <Route
        path="/actions" 
        render={()=> <ActionsBoxs/> } />
        <Route
        path="/report" 
        render={()=> <Report/> } />
      
        
        </div>
      </div>
      </div>
      </Router>
    </div>
  );
};

export default Routes;