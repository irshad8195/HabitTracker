import React, { useEffect, useState } from 'react'
import Class from './Dashboard.module.css'
import Habit from '../habit/Habit'
import store from '../../store'

const DashBoard = () => {
const [habit, setHabit]=useState([])


useEffect (()=>{
  setHabit(store.getState())
},[])

const reRender=()=>{
  setHabit(store.getState())
}

  return (
    <div className={Class.container}>
      <h1>Your Habits</h1>
      {habit.length === 0 ? (
        <h1 className={Class.result}>
          No Habit to Display: Add new Habit to track</h1>
      ):(
        habit.map((ele)=>{
   return <Habit 
      reRender={reRender}{...ele} 
          key={ele.id} />
        })
      )}
    </div>
  )
}

export default DashBoard
