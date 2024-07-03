import React, { useEffect, useState } from 'react'
import logo from "../images/enjoy.gif"
import "../component/login.css"
import { Link } from 'react-router-dom'
import "../component/Signup.css"

const Signup = () => {

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")



  return (
    <div className='signup'>
    <div className='signupContainer'>
        <h1>Register</h1>
        <form className='inputContainer' 
        // onSubmit={(e)=>getValue(e)}
        >
             <div className='name2'>
         <label>Name</label>
         <input  type="text" placeholder='example' value={name} onChange={(e)=>setName(e.target.value)}   />
         </div>
         <div className='age2'>
         <label>Age</label>
         <input  type="number" placeholder='21' value={age} onChange={(e)=>setAge(e.target.value)}   />
         </div>
         <div className='email2'>
         <label>Email</label>
         <input  type="email" placeholder='example@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}   />
         </div>
         <div className='pass2'>
         <label>Password</label>
         <input type='password'  placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
         </div>
         <div className='cp2'>
         <div className='checking2'>
            <input type='checkbox' />
            <span>Keep me logged In</span> 
         </div>
         <div className='passwordForgot2'>
            <Link to={"/forgot"}>Forgot your password?</Link> 
         </div>
         </div>
         <div className='signupButton'>
         <button type='submit'  >signup</button>
         </div>
         <div className='underline2'></div>
         <div>
            <span>Already have an account? <Link to={"/"}>Login</Link></span>
         </div>

        </form>
    </div>
    <div className='image2'>
        <img src={logo} alt='A employee' />
    </div>
    
  
   
</div>
  )
}

export default Signup
