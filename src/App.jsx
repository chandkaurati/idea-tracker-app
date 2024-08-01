import { useEffect, useState } from 'react'
import './App.css'
import { UserProvider } from './context/UserContext'
import Home from './pages/Home'
import { useUser } from './hooks/useUser'
import Login from './componants/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Register from './componants/register'




function App() {
  const [isloggedin, setIsloggedin] = useState(false)
  const {init} = useUser()
  useEffect(()=>{
   async function getUser(){
     let responce =  await init()
     if(responce) setIsloggedin(true)
   }
  },[])
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={isloggedin?<Home/> : <Auth/>}/>
      <Route path='/auth' element= {<Auth/>}/> 
      </Routes>
     </BrowserRouter>
    </>
  )

}

export default App
