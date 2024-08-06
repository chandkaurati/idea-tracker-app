import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";


function Login(){
   const [email, setEmail] = useState("")
   const [password, setPassword]  = useState("")
   const {login} = useUser()
   const navigate = useNavigate()

   async function  loginUser() {
       let respone = await login(email, password)
       if(respone){
         navigate("/")
       }
   }
   return (
        <div className="flex flex-col  justify-center rounded-md p-5 gap-4 text-center md:w-1/2  shadow-lg">
        <span><h2 className="text-lg">Login</h2></span>
        <div className="flex flex-col text-left gap-6">
        <label className="font-semibold">Name</label>
        <input
        className="border p-2 rounded-md outline-none "
        value={email}
        onChange={(e)=> {setEmail(e.target.value)}}
        type="text" placeholder="enter your email
         "/>
        <label className="font-semibold">Passsword</label>
        <input
        className="border p-2 rounded-md outline-none "
        value={password}
        onChange={(e)=> {setPassword(e.target.value)}}
        type="password" placeholder="enter your password " />

        <button
         onClick={loginUser}
         className="bg-[#FD356E]
         hover:bg-[#ec114f] p-2 rounded-md text-white ">submit</button>
         
        </div>
       <span>Don't have an Account <Link to={"/register"}><p className="font-semibold text-[#ec114f] cursor-pointer">Register</p></Link></span>
        </div> 
    )
}

export default Login