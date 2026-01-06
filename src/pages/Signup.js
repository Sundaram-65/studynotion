import React from 'react'
import Template from '../components/Template'
import signup from '../assests/signup.png'
function Signup({setIsLoggedIn}) {
  return (
    <Template title="Welcome To Studynotion" desc1="we build using react.js" desc2="Build by Sundaram with Tech" image={signup}
    formtype="signup" setIsLoggedIn={setIsLoggedIn}></Template>
  )
}

export default Signup