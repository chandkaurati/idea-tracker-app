import React, { useState } from 'react'
import { useIdeas, useUser } from '../hooks/useUser'
import AddIdeaInput from '../componants/Input'

function Home() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const {user, logout} = useUser() 
    const {ideas, add, remove} = useIdeas() 
    async function logOutUser(){
         await logout()
    }
   
    console.log(ideas)
  
    const HandleSubmit = (e)=>{

       add({userId: user.$id, title : title, description: content})
       .then(()=>{
         setTitle("")
         setContent("")
         console.log("idea created succefully")
         console.log(ideas)
       })
       .catch((error)=> console.log(error))
    }
  

  return (
    <div className='w-full flex flex-col gap-6 justify-center p-5'>
   <section>
   {user?(
        <div className='w-full md:w-1/2'>
          <AddIdeaInput content={content} handleSubmit={HandleSubmit} title={title} setTitle={(e)=> setTitle(e.target.value)} setContent={(e)=> setContent(e.target.value)}/>
        </div>
      ):(
        <div>plese login to Add the idea</div>
      )}
   </section>

    <section>
      <strong>latest Ideas</strong>
    </section>
    </div>
  )
}

export default Home
