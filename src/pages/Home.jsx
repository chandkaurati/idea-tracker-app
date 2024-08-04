import React from 'react'
import { useUser } from '../hooks/useUser'

function Home() {
    const {counter, setCounter, user, logout} = useUser()   
    const updateCounter = ()=> {
    setCounter("this is updaated counter")
    }
  return (
    <div>
      <h1>{user.name}</h1>
       this is home page {counter}
       {/*<h1>Welcome {user.name}</h1> */}
       <button onClick={updateCounter}>update</button>
       <button onClick={()=> {logout()}}>logout</button>
    </div>
  )
}

export default Home
