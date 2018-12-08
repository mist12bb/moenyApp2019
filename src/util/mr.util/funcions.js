// import { type } from "os";

export let sum_array_objs = (list, obj_value, com) => {
  let sum_ = 0;
  let commtions_ = 0;

  if (list && !com){
      
    list.forEach((obj, i)=>{
      let objValue = obj[obj_value];
      if (typeof obj[obj_value] !== "number") {
          objValue = Number.parseInt(objValue);
      }
      sum_ += objValue
      commtions_ += com;

  })
      return sum_

  }
  if(list && com) {

    list.forEach((obj, i)=>{
      sum_ += obj[obj_value];
      commtions_ += com;

  })
  return {sum: sum_, commtions: commtions_};

  }
  
}
let {sum, commtions} = sum_array_objs([{"tow": 3}, {"tow": 4}], "tow", 8);

console.log(sum, commtions);
