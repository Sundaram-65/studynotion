import React from 'react'
import frame from '../assests/frame.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div>

        <div>
            <h2>{title}</h2>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            { formtype==='signup'? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign in with Google</p>
            </button>
        </div>

        <div>
            <div>
                <img src={frame} alt="Pattern" width={528} height={504} loading='lazy'></img>
            </div>
            <div>
                <img src={image} alt="image" width={528} height={490} loading='lazy'></img>
            </div>
        </div>
        
    </div>
  )
}

export default Template