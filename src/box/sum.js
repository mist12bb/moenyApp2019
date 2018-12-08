import React, { Component } from 'react'

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    }
  }
  componentDidMount() {
    let {sum} = this.state;
    let actsToSom = [...this.props.actions];
    actsToSom.forEach(act=>{
      let amount = Number.parseInt(act.amount);
      sum += amount;
    })
    this.setState({sum})
    console.log(sum);
  }
  render() {
    return (
      <div>
        <p>{this.state.sum}</p>
      </div>
    )
  }
}
