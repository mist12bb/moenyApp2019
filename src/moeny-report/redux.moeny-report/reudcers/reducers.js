
import { sumActCons } from "../constans/constans";

export function sumActionsReudcer(state = 0, action) {
  if (action.type === sumActCons) {
    return action.sum;
  }
  return state;
}