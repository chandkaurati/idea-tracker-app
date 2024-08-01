import React, { useState } from "react";


function Login(){
   const [email, setEmail] = useState("")
   const [password, setPassword]  = useState("")
    return (
        <div className="flex flex-col rounded-md p-5 gap-4 text-left  shadow-lg">
        <span><h2 className="text-lg">Login</h2></span>
        <label className="font-semibold">Name</label>
        <input
        className="border p-2 rounded-md outline-none "
        value={email}
        onChange={(e)=> {setEmail(e.target.value)}}
        type="text" placeholder="enter your username "/>

        <label className="font-semibold">Passsword</label>
        <input
        className="border p-2 rounded-md outline-none "
        value={password}
        onChange={(e)=> {setPassword(e.target.value)}}
        type="password" placeholder="enter your password " />

        <button className="bg-[#FD356E] hover:bg-[#ec114f] p-2 rounded-md text-white ">submit</button>
        </div> 
    )
}

export default Login