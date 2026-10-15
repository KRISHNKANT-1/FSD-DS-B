import React from 'react'
import { useState,useEffect } from 'react'
// UseState
const App = () => {
  const [formData,setformdata]=useState({ 

  name:""
  ,email:""
  ,password:""
  })
// useEffect
useEffect(()=>{
  console.log("form data update",formData)
},[formData])

// function1
const handleChange=(e)=>{
  setformdata({...formData,[e.target.name]:e.target.value})
  // use Spread operator for iteration
}

// function2
const handleSubmit=(e)=>{
  e.preventDefault();
  alert("Registration successful");
  console.log("form submitted",formData)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} />
        <br/>
        <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} />
        <br/>
        <input type="password" name="password" placeholder='Enter your password' value={formData.password} onChange={handleChange} />
        <br/>
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App
