import React, { useState } from 'react'
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function SignUpForm({setIsLoggedIn}) {
    const[formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:"",confirmPassword:""})

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
const[showPasswordP,setShowPasswordP]=useState(false);
const[showPasswordCP,setShowPasswordCP]=useState(false);
function submitHandler(event){
    event.preventDefault();

    if(formData.confirmPassword!=formData.password){
        toast.warning('Password Not Matched');
    }
    else{
    setIsLoggedIn(false);
    toast.success("Registered");
    navigate('/login');
    }
    
}
  return (
    <div>

        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>

            <div className='flex '>

                <label>
                <p>First Name <sup>*</sup></p>
                <input required type='text' name='firstname' value={formData.firstname} placeholder='Enter first name' onChange={changeHandler}/>
               </label>

                <label>
                <p>Last Name <sup>*</sup></p>
                <input required type='text' name='lastname' value={formData.lastname} placeholder='Enter last name'
                onChange={changeHandler}/>
                </label>

            </div>
            
            <label>
                <p>Email Address<sup>*</sup></p>

                <input required type='email' name='email' value={formData.email} placeholder='Enter email address'
                onChange={changeHandler}/>
            </label>

             
            
            <div className='flex '>

                <label>
                    <p>Create Password<sup>*</sup></p>

                    <input required type={showPasswordP ? ('text'):('password')} name='password' value={formData.password} placeholder='Enter password'
                    onChange={changeHandler}/>
                     <span onClick={()=>(setShowPasswordP(prev=>!prev))}>
                        {showPasswordP ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}
                    </span>


                </label>
                
                <label>
                    <p>Confirm Password<sup>*</sup></p>

                    <input required type={showPasswordCP ? ('text'):('password')} name='confirmPassword' value={formData.confirmPassword} placeholder='Confirm Password'
                    onChange={changeHandler}/>
                    <span onClick={()=>(setShowPasswordCP(prev=>!prev))}>
                         {showPasswordCP ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}
                    </span>
                </label>

            </div>
             
            <button > Create Account</button>

        </form>
    </div>
  )
}

export default SignUpForm