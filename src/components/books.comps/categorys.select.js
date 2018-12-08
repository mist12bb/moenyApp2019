import React, { Component } from 'react'
import Select from "react-select";
import {categoryList} from "./func";
import "./style/cat-list.style.css"

let style = {
  width:"140px"
}
export default class CategorySelect extends Component {
  componentWillMount() {
    this.catLst = [...categoryList];
  }
  render() {
    return (
      <div>
        <Select options={this.catLst} className="select-opt"/>
      </div>
    )
  }
}
