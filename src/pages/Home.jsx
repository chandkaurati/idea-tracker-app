import React, { useState } from 'react'
import { useUser } from '../hooks/useUser'

function Home() {
    const {counter, setCounter, user, logout} = useUser()   
    const updateCounter = ()=> {
    setCounter("this is updaated counter")
    }

    async function logOutUser(){
         await logout()
    }

 
  return (
    <div>
      <h1>{user.name}</h1>
       this is home page {counter}
       {/*<h1>Welcome {user.name}</h1> */}
       <button onClick={updateCounter}>update</button>
       <button onClick={logOutUser}>logout</button>
    </div>
  )
}

export default Home
