import {sumActCons,fetcActCons } from "../constans/constans";
export function fetch_actions(actions) {

  return {
    type: fetcActCons,
    actions
  }

};
export function set_actions_sum(sum) {
    return {
      type: sumActCons,
      sum
    }
}
/* export function set_actions_commtions(commtions) {
    return {
      type: commActCons,
      commtions
    }
} */