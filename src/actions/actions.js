//import { HABIT_ADDED,HABIT_DELETED,UPDATE_HABITS,STATUS_CHANGED } from "./constrains";

import * as actions from "./constrains"

export const addingHabit = (data)=>{
   return {
    type:actions.HABIT_ADDED,
      payload:{
    title: data.title,
    category: data.category,
}
}
}

// deleting habit

export const deletingHabit=(id)=>{
return {
  type:actions.HABIT_DELETED,
  id
}
}

// changing the status of particular day

export const  changingStatus =(habit, weekId, status) =>{
return {
  type: actions.STATUS_CHANGED,
  payload:{
    habit,
    weekId,
    status,
  }
}
}
// creating a action for updating all habits
export const updatingHabits = function () {
  return {
    type: actions.UPDATE_HABITS,
  };
};