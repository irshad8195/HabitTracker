import React, { useRef } from 'react'
import Class from './Form.module.css'
import store from '../../store'
import { addingHabit } from '../../actions/actions'
//import {useDispatch} from 'react-redux'
import { Store } from "react-notifications-component"
import { useNavigate } from 'react-router-dom'


const Form = () => {

  const habitRef=useRef()
  const categoryHabit=useRef()
//  const dispatch=useDispatch()

 const navigation=useNavigate()


  const addHabit =(e)=>{
        e.preventDefault()
const data={
  title:habitRef.current.value,
  category: categoryHabit.current.value,
}

if(data.title.trim()==="" || data.category.trim()===""){
  Store.addNotification({
    title: "OH NO!",
    message: "PLEASE ENTER THE VALID HABIT AND CATEGORY",
    type: "info",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    }
  })
  return ;
}

store.dispatch(addingHabit(data))

navigation("/dashboard")

  }
  return (
    <form action='' className={Class.container}>
    <div>
      <label>Enter Habit</label>
      <br />
      <input 
      type={"text"}
      ref={habitRef}
      placeholder='Waliking'
      />
    </div>
    <div>
    <label>Enter Category : </label>
    <br/>
    <input 
    type={"text"}
    ref={categoryHabit}
    placeholder='Fitness'
    />
    </div>
    <button onClick={addHabit}
    type="submit"
    > Save</button>
    </form>
  )
}

export default Form
