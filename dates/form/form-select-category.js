import React, {Component} from 'react';
import Select from 'react-select';


const categoryList = [
  {label: "expenses", value: "expenses"},
  {label: "enterings", value: "enterings"},
  {label: "debts", value: "debts"},
  {label: "loans", value: "loans"},
]
export const FormSelectCategory = ({onSetType}) => {
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
  )
  }