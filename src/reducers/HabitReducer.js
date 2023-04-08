
import * as actions from "../actions/constrains"
import * as helper from "../Helper"


let habits = localStorage.getItem("habits");
let initialState = [];
if (habits === null || habits === []) {
  localStorage.setItem("habits", JSON.stringify(new Array(0)));
  initialState = [];
}
if (habits !== null && habits !== []) {
  initialState = JSON.parse(habits);
}

// creating up a habits reducer function
function HabitReducer(state = initialState, action) {
  // checking for add habit action
  if (action.type === actions.HABIT_ADDED) {
    const newHabit = {
      id: Math.random() * 1000,
      title: action.payload.title,
      category: action.payload.category,
      week: helper.createWeek(new Date()),
      workDone: 0,
      ratings: 0,
    };
    const newState = [...state,newHabit];
    localStorage.setItem("habits", JSON.stringify(newState));

    return newState;
  }

// deleting Habit
if(action.type===actions.HABIT_DELETED){
  const filterHabit=state.filter((habit) => habit.id !==action.id)
  localStorage.setItem("habits", JSON.stringify(filterHabit))
  return filterHabit
}

// changing the status of habit
if (action.type === actions.STATUS_CHANGED) {
  const habitIndex = state.indexOf(action.payload.habit);
  if (state[habitIndex].week[action.payload.weekId].status === "done") {
    state[habitIndex].workDone += -1;
  } else if (action.payload.status === "done") {
    state[habitIndex].workDone += 1;
  }
  state[habitIndex].week[action.payload.weekId].status =
    action.payload.status;
  localStorage.setItem("habits", JSON.stringify(state));
  return state;
}
 // checking for updating the habits
 if (action.type === actions.UPDATE_HABITS) {
  const newState = helper.updateHabits(state);
  localStorage.setItem("habits", JSON.stringify(newState));
  return state;
}
return state;

}

export default HabitReducer