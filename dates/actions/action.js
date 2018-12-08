import React from "react";
import { Dropdown } from 'semantic-ui-react'
import {  Feed, Icon } from 'semantic-ui-react'
import { withState } from "recompose";
import RemoveModal from "./modals/remove.modal";
import { options } from "../init.chack";

import "./act.style.css"
 const Action = ({onClickDel, onClickSave, i, action, onInit, init, onInilze}) =>  {
  return (
    <Feed.Event key={i} >
             <Feed.Label
              className={"amount-lable"}
              >
              <p
             className={"amount-lable__text"}
              children={action? action.amount:33}
             />
             </Feed.Label>
             <Feed.Content>
                <Feed.Date content={new Date (action.date).toLocaleDateString()}/>
                <Feed.Summary>
                <p>{action? action.info:'descripton gose here...'}</p>
                </Feed.Summary>
                <Feed.Event >
                {/* < Checkbox label="add to initlze"   checked={  init}   onChange={(e)=>{
                  console.log(init, action.init, "action init")
                  onInit(!init);
                  onInilze(action.id, init, action);

                }}></ Checkbox> */}
                <p >{action.init?"no":"yes"}</p>
                </Feed.Event>
             </Feed.Content>
             <Feed.Meta>
                <Dropdown options={options}/>
             <RemoveModal className={"action-box__rem-btn"} onDeleteAction={()=>{onClickDel(i)}}>
             {/* <Icon name="remove circle"/> */}
             </RemoveModal>
             <button style={{all: "unset", cursor:"pointer"}}
             onClick={(e)=>{
               onClickSave(action)
             }}
             >
             <Icon name="save" />
             </button>
             </Feed.Meta>
            </Feed.Event>

  )
}



export default withState("init", "onInit", false)(Action);