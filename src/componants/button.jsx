import React from "react";



function Button({title, classes, HandleClick}){
     
return <button className={`${classes} bg-[#ec114f] text-white px-3 py-1 rounded-md`} onClick={HandleClick}>{title}</button>

}

export default Button