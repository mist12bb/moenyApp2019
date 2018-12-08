import React, { Component } from 'react'
import { actions, renderList, addToSum, addToSumFunc } from './util';
import Sum from './sum';

export default class InitSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      actionsToSum:[],
      sum: 0
    }
    this.renderList = this.renderList.bind(this);
    this.addToSum = this.addToSumFunc.bind(this)
  }
  componentWillMount() {
    let actionsToSum = [];
    console.log(actionsToSum);
    
    [...actions].forEach(act=>{
      if (act.ack == 1) {
        actionsToSum.push(act);
        console.log(true);
        
      }
    })
    
    this.setState({actions, actionsToSum});
  }
  componentDidMount() {
    let {actionsToSum , sum} = this.state;
    
    
    
  }
  addToSumFunc(act) {
    return <button className="initlze" onClick={
      ()=>{
        console.log(act);
        let actToSum = [...this.state.actionsToSum];
        if (actToSum.indexOf(act) === -1) {
          actToSum = [...this.state.actionsToSum , act];
          this.setState({actionsToSum: actToSum})
          
        }
        else {
          
          actToSum = [...this.state.actionsToSum ];
        }
        
      }
    }>
      x
    </button>
  }
  
  
 renderList(list){
    
  
    return list.map((action, i)=>{
      return <div key={i}>
      <p 
      >{action.amount}
      </p>
        {this.addToSum(action )}
      </div>
    })
  }
  
  
  
  
  
  render() { 
    const {sum} = this.state;
    console.table( this.state);
    
    return (
      <div>
        <div>
        {this.renderList(this.state.actions, this.state, this.setState, this.addToSum)}

        </div>
        <Sum actions={this.state.actionsToSum}></Sum>
      </div>
    )
  }
}
