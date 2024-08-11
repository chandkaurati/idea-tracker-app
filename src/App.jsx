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

   return (
    <div className='w-full'>
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>   
      <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
     </div>
  )

}

export default App
