import Axios from "axios";
import Action from "./action";
import React from "react";
export let url = "http://localhost:1998";


export const renderAction = (onClickDel, onClickSave, i, action) => {
  return <Action onClickDel={onClickDel} onClickSave={onClickSave} key={i} i={i} action={action}/>
};

export const onSaveActionApi = (category, id, action) => {
  Axios.post(url+"/"+category);
}
export const onDelActionApi = (category, id) => {
  Axios.delete(`${url}/${category}/${id}`);
}
export const onSaveActionFront = (category, id, action) => {
  Axios.post(url+"/"+category);
}