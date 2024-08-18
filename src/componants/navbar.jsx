import React from "react";
import { Link, useAsyncValue, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Button from "./button";


function Navbar(props){
 const {user, logout} = useUser()
 const navigate = useNavigate()

 
    return (
       <nav className="w-full h-[100px] shadow-lg flex justify-between items-center static p-4">
        <span><Link to={"/"}><p className="font-bold text-lg text-[#ec114f]">My Idea tracker</p></Link></span>
        <div>
          {user?(
           <span className="flex gap-3 items-center">
            <Button title={"logout"} HandleClick={()=> logout().then(()=> navigate("/"))}/>
            <p className="text-[#ec114f] font-bold">welcome {user.name}</p>

            <Link to={"/myideas"}><p className="font-semibold">see your Ideas</p></Link>
           </span>
          ): (
            <span>
            <Button title={"login"} HandleClick={()=> navigate("/login") }/>
            </span>
          )}
        </div>

       </nav>
    )
}

export default Navbar