import React, { useState } from 'react'
import Login from '../componants/login'
import Register from '../componants/register'

function Auth() {
  const[isAlreadysignup, setIsalreadysignup] = useState(false)
  return (
    <div>
     {isAlreadysignup? <Login/> : <Register/>} 
    </div>
  )
}
export default Auth
