import React from "react";


function Idea({title, content}){
    return (
        <div className="idea-container flex flex-col gap-5">
          <h5 className="text-gray-400">{title}</h5>
          <p>
           {content}
          </p>
        </div>
    )
}

export default Idea