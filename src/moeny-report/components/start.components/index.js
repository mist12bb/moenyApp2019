import React, { Component } from 'react'
import { acitons } from './init';
import { sum_array_objs } from '../../../util/mr.util/funcions';
import {Provider} from "react-redux";
import {createStore} from "redux"
import rootReducer from "../../redux.moeny-report/reudcers";

import ReportSum from './report-sum';;
export default class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions:[],
      sum: 0
    }
  };

  componentWillMount() {
    console.log(acitons);
    
    this.setState({
      actions : acitons})
  }
  componentDidMount() {
    this.setState({sum: sum_array_objs([...this.state.actions], "amount")});
    
  }
  render() {
    console.log(this.state.sum);
    return (
     <Provider store={createStore(rootReducer)}>
     <ReportSum sum={this.state.sum}></ReportSum>

     </Provider>
    )
  }
}
