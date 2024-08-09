import React, { useEffect, useState } from "react";
import { useIdeas, useUser } from "../hooks/useUser";
import AddIdeaInput from "../componants/Input";
import { Query } from "appwrite";
import {
  IDEAS_COLLECTION_ID,
  IDEAS_DATABASE_ID,
} from "../context/ideasContext";
import { databases } from "../appwrite/appwrite";
import Idea from "../componants/Idea";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, logout } = useUser();
  const { add, remove } = useIdeas();
  const [ideas, setIdeas] = useState([]);
  async function logOutUser() {
    await logout();
  }

  async function getIdeas() {
    try {
      const responce = await databases.listDocuments(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        [Query.orderDesc("$createdAt"), Query.limit(10)]
      );

      setIdeas(responce.documents);
      console.log(responce);
    } catch (error) {
      console.log("cannot get ideas");
    }
  }
  useEffect(() => {
    getIdeas();
  }, []);

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

      <section className="w-full md:w-1/2 flex flex-col gap-5 shadow-lg border p-7 rounded-md">
        <strong>latest Ideas</strong>
        {ideas?.map((i)=>{
          return (
            <Idea key={i.$id} title={i.title} content={i.description}/>
          )
        })}
      </section>
    </div>
  );
}

export default Home;
