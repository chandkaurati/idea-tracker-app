import React from "react";
import { Link, useAsyncValue, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Button from "./button";


function Navbar(props){
 const {user} = useUser()
 const navigate = useNavigate()

    return (
       <nav className="w-full h-[100px] shadow-lg flex justify-between items-center p-4">
        <span><Link><p className="font-bold text-lg text-[#ec114f]">My Idea tracker</p></Link></span>
        <ul className="md:flex gap-7">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div>
          {user?(
           <span className="flex gap-3 items-center">
            <Button title={"logout"}/>
            <p>welcome {user.name}</p>
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