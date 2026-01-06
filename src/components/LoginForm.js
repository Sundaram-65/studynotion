import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-toastify';

function LoginForm({setIsLoggedIn}) {

 const[formData,setFormData]=useState({
    email:"",password:""
 })

 function changeHandler(event){
    setFormData((formData)=>{
        return (
            {
                ...formData,[event.target.name]:event.target.value
            }   
        )
    })
 }
 const navigate=useNavigate();
 const[showPassword,setShowPassword]=useState(false);
function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate('/dashboard');
}

  return (
    
        <form onSubmit={submitHandler}>
            <label >
               <p> Email <sup>*</sup> </p>

                <input required type='email' name='email' value ={formData.email} placeholder='Enter email address' onChange={changeHandler}/>

            </label>

            <label>
                <p>Password <sup>*</sup></p>

                  <input required type={showPassword ? ('text'):('password')} name='password' value={formData.password} placeholder='Enter password' onChange={changeHandler}/> 

                <span onClick={()=>(setShowPassword(prev=>!prev))}>
                    {showPassword ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}
                </span>

                <Link to='#' >
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button >Sign In</button>
        </form>

  )
}

export default LoginForm