import React from 'react'
import Template from '../components/Template.js'
import login from '../assests/login.png'

function Login({setIsLoggedIn}) {

  
  return (
    <Template title="Welcome Back" desc1="Build uisng react.js" desc2="Build by Sundaram" image={login}
    formtype="login" setIsLoggedIn={setIsLoggedIn}></Template>
  )
}

export default Login