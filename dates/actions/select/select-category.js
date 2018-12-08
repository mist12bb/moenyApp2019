import React , {Component} from 'react';
import Select, {SelectBase} from "react-select";
import { Segment, Menu } from 'semantic-ui-react';

import "./select.style.css"
/* const categoryList = [
  {label: "expenses", value: "expenses"},
  {label: "enterings", value: "enterings"},
  {label: "debts", value: "debts"},
  {label: "loans", value: "loans"},
]
const SelectCategory = ({onSetType}) => {
  return (
    <div>
    



        <Select  
        options={categoryList}
         className={"actions__select-category"}
         onChange= {
           e => {
             console.log("select value = ", e.value);
             onSetType(e.value)
           }
         }
         />

    </div>
  );
};

import React, { Component } from 'react'
 */
export default class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem:"", env: "storybook"}
  }
  componentDidMount() {
    this.setState({activeItem: "debts"})
  }
  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
    this.props.onSetType(name);
    if(this.state.env !== "storybook") {
    }
  }
  render() {
    const { activeItem } = this.state
    return (
      <div>
      <div>
      <Segment inverted >
      <Menu inverted secondary>
          <Menu.Item name="expenses" active={activeItem === "expenses"} onClick={this.handleItemClick}/>
          <Menu.Item name="enterings" active={activeItem === "enterings"} onClick={this.handleItemClick} />
          <Menu.Item name="debts" active={activeItem === "debts"} onClick={this.handleItemClick}/>
          <Menu.Item name="loans"active={activeItem === "loans"} onClick={this.handleItemClick}/>
      </Menu>
      </Segment>
    </div>
      </div>
    )
  }
}

// export default SelectCategory;