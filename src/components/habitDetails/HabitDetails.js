
import React, { useEffect, useState } from 'react'
import Class from "./Habit.module.css"
//import ShowWeek from '../../showWeek/ShowWeek'
import store from '../../store'
import { useParams } from 'react-router-dom'
import ShowWeek from '../../showWeek/ShowWeek'


const HabitDetails = () => {
    const params=useParams();
    const [habitDetail, setHabitDetail]=useState({})
  
  useEffect (()=>{
    const habit=store.getState();
    const habitDetail=habit.filter((ele)=>{
        return ele.id===parseFloat(params.id)
    })
    setHabitDetail(...habitDetail)
  }, [params.id])
    return (
    <div>
      <h1 className={Class.head}>{habitDetail.title}</h1>
    <div className={Class.detail}>
        <p>Category : {habitDetail.category}</p>
        <p>Count : {habitDetail.workDone}/{habitDetail.week ?.length}</p>

    </div>
    <div className={Class.weeks}>
      {habitDetail.week ?.map((day, index)=>{
   return <ShowWeek habit={habitDetail}{...day}
    index={index} />
      })}
    </div>
    </div>
  )
}

export default HabitDetails

