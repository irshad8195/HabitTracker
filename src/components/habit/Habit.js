import React from 'react'
import Class from './Habit.module.css'
import { useNavigate } from 'react-router-dom'
import { deletingHabit } from '../../actions/actions'
import store from '../../store'

const Habit = (props) => {
    const navigation=useNavigate()

    const deleteHabit =(id)=>{
      store.dispatch(deletingHabit(id))
       props.reRender()
      
    }

const DetailHandler=(id)=>{
    navigation(`habit/${id}/details`)
}


  return (
    <div className={Class.container}>
        <h3>{props.title}</h3>
    <div>
<p>Category: {props.category}</p>
<p>Count: {props.workDone}/{props.week.length}</p>

<button onClick={(e)=>{
  e.preventDefault()
  deleteHabit(props.id)
}} name="trash">
Delete</button>

<button type="button" 
onClick={(e)=>{
  e.preventDefault()
  DetailHandler(props.id)
}}
> See Details

</button>
    </div>
    </div>
  )
}

export default Habit
