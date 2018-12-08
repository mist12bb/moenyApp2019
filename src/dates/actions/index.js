import React, { Component } from 'react'
import { onDelActionApi, onSaveActionApi, renderAction, url } from './util';
import { Feed, Card, MountNode } from 'semantic-ui-react';
import "./act.style.css"
import "./actions.style.css"
import SelectCategory from './select/select-category';
import Axios from 'axios';


export default class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        {date: new Date(), amount: 30, info: "description gose here..."},
        {date: new Date(), amount: 30, info: "description gose here..."}
      ],
      category_const: "debts"
    }
  }
  
  componentDidMount() {
    const {category_const} = this.state;
    Axios.get(`${url}/${category_const}`).then(({data})=> {
          this.setState({actions: data})
    });
  }
  
  renderActsList = ()=> {
    const {actions} = this.state;
    let {onDelAction, onSaveActionApi, onDelActionApi} = this.metaFunction();
    return actions.map( (action, i) => {
      let actionSetup = {
        action,
        i,
      }
        return renderAction(onDelAction, onSaveActionApi, i, action);
    } )
  }

  metaFunction = (i) => {
    const onDelAction=(i)=>{
      let actions= [ ...this.state.actions].filter((action, j)=>{
        return j !== i;
      });
      this.setState({actions})
    }
    
    return {
      onDelActionApi,
      onSaveActionApi,
      onDelAction,
      
    }
  }
  
  onCategoryType = (cetegory) => {

    this.setState({category_const: cetegory});
    console.log("index.actions cateogry type", cetegory);
    Axios.get(`${url}/${cetegory}`).then(({data})=> {
      this.setState({actions: data})
});
  }

  render() {
    return (
      <div>
      <SelectCategory onSetType={this.onCategoryType}/>
      <Card>
      <Card.Content>
      <Card.Header>
      {this.state.category_const}
      </Card.Header>
      </Card.Content>
      <Card.Content>
      <Feed >
      {this.renderActsList()}
      </Feed>
      </Card.Content>
            </Card>
      </div>
    )
  }
}
