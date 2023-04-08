import React, { useState } from 'react'
import Class from './Home.module.css'
import Form from '../form/Form'

const Home = () => {
    const [showForm, setShowForm]=useState(false)

   const formHandler =(e)=>{
        e.preventDefault()
        setShowForm(true)
    }
  return (
    <div className={Class.container}>
      {showForm && <Form />}
      {!showForm && ( 
      <button 
      type="button" 
      onClick={formHandler}>Add Habit</button>
      )}
      </div>
  )
}

export default Home
