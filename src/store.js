import {createStore} from "redux"
import HabitReducer from "./reducers/HabitReducer"

const store=createStore(HabitReducer)
export default store