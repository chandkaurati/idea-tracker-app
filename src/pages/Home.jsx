import React from 'react'
import { useUser } from '../hooks/useUser'

function Home() {
    const {counter, setCounter} = useUser()
    
    const updateCounter = ()=> {
       setCounter("thi is updaated counter")
    }
  return (
    <div>
       this is home page {counter}
       <button onClick={updateCounter}>update</button>
    </div>
  )
}

export default Home
