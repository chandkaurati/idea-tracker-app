import React from "react";
import Button from "./button";


function AddIdeaInput({handleSubmit, title, content, setTitle, setContent}){
     
   return (
    <>
    <div className=" w-full  border-gray-400 flex flex-col p-5 gap-5 rounded-md shadow-xl " onSubmit={handleSubmit}>
     <label className="text-lg font-bold" htmlFor="title" >Title</label>
      <input className="border rounded-md outline-none p-2" value={title} type= "text" placeholder="Enter title" name="title" onChange={setTitle}/>
       <label className="text-lg font-bold" htmlFor="content">Idea</label>
       <textarea className="border outline-none rounded-md p-2 no-scrollbar" value={content} name="content" rows="6" cols="" placeholder="enter your idea" onChange={setContent}></textarea>
      <Button title={"submit"} HandleClick={handleSubmit}/>
     </div>
    </>
   )
}

export default AddIdeaInput