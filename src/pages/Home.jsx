import React, { useEffect, useState } from "react";
import {useUser } from "../hooks/useUser";
import AddIdeaInput from "../componants/Input";

import Loading from "../componants/Loading";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, logout } = useUser();

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
       setLoader(false)
    }, 2000);
  }, []);


  if(loader){
     return <Loading/>
  }

  const  HandleSubmit =  async (e) => {
    try {
      const newIdea  = add({ userId: user.$id, title: title, description: content })
      // setIdeas((prev)=> [newIdea, ...prev])
      setTitle("")
      setContent("")
      getIdeas()
    } catch (error) {
      console.log(error)
    }
      
  };

  return (
    <div className="w-full flex items-center flex-col gap-16 p-5">
      <section className="w-full md:w-1/2">
        {user ? (
          <div className="w-full">
            <AddIdeaInput
              content={content}
              handleSubmit={HandleSubmit}
              title={title}
              setTitle={(e) => setTitle(e.target.value)}
              setContent={(e) => setContent(e.target.value)}
            />
          </div>
        ) : (
          <div>plese login to Add the idea</div>
        )}
      </section>

      {/* <section className="w-full md:w-1/2 flex flex-col gap-5 shadow-lg  p-7 rounded-md">
        <strong>latest Ideas</strong>
        {ideas?.map((i)=>{
          return (
            <Idea key={i.$id} title={i.title} content={i.description}/>
          )
        })}
      </section> */}
      <h1>welcome home</h1>
    </div>
  );
}

export default Home;
