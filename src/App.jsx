import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { useUser } from './hooks/useUser'
import Login from './componants/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './componants/register'
import Loading from './componants/Loading'
import Navbar from './componants/navbar'



function App() {
  const {user, init} = useUser()
  const [current, setCurrent] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
   async function getCurrent(){
    let currentUser = await init()
    if(currentUser){
       setCurrent(currentUser)
    }else{
       setCurrent(null)
    }

    setLoading(false)
   }
   getCurrent()
  },[])


  if(loading){
  return <Loading/>
  }

   return (
    <div className='w-full'>
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={current&&user?<Home/>:<Register setlogginUser={setCurrent}/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
     </div>
  )

}

export default App
