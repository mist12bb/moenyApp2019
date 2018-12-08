import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import "./init.style.css";
import { withState } from 'recompose';
export const options = [
  { key: 1, text: 'yes', value: false },
  { key: 2, text: 'no', value: true },
]

const InitCheack = ({onChangeValue, onInit, init}) => {
  
  return (
    <div>
    <p>add to initlzer?</p>
    
    
    
    <Dropdown clearable options={options} selection className={"form__init"} onChange={(e)=>{
      onChangeValue(init, "init");
      onInit(!init)
      console.log();
      
    }} />
    
  
    
    </div>
  );
};

export default withState("init", "onInit", false) (InitCheack);