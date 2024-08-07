import React, { useState } from 'react'
import { useIdeas, useUser } from '../hooks/useUser'
import AddIdeaInput from '../componants/Input'

function Home() {
    const [title, setTitle] = useState("")
    const [content, setContext] = useState("")
    const {user, logout} = useUser() 
    const {idas, add, remove} = useIdeas()  
    async function logOutUser(){
         await logout()
    }


  return (
    <div className='w-full flex justify-center p-5'>
      {user?(
        <div className='w-full md:w-1/2'>
          <AddIdeaInput/>
        </div>
      ):(
        <div>plese login to tner the idea</div>
      )}
    </div>
  )
}

export default Home
