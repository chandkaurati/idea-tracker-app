import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite";
import { ID, Query } from "appwrite";

export const IDEAS_DATABASE_ID = "66b1bf8d001a3115ed42";
export const IDEAS_COLLECTION_ID = "66b1bf99002ec86971f2";

const IdeasContext = createContext();


export const useIdeas = ()=>{
    return useContext(IdeasContext)
}
export function IdeasProvider({children}) {
  const [ideas, setIdeas] = useState([]);

  async function add(idea) {
    try {
      const responce = await databases.createDocument(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        ID.unique(),
        idea
      );
      setIdeas((ideas) => [responce, ...ideas].slice(0, 10));
    } catch (error) {
      console.log(`ERROR IDEA NOT CREATED ${error}`);
    }
  }

  async function remove(id) {
    try {
      const responce = await databases.deleteDocument(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        id
      );
      setIdeas((ideas) => ideas.filter((idea) => idea.id !== id));
      console.log("idea deleted successfully");
    } catch (error) {
      console.log(`ERROR IDEA NOT DELETED ${error}`);
    }
  }

  async function init() {
    try {
      const responce = await databases.listDocuments(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        [Query.orderDesc("$createdAt"), Query.limit(10)]
      );
    } catch (error) {
        console.log("ERROR WHITE GETTING LISTS"+ error)
    }
  }

  useEffect(()=>{
    init();
  },[])


  return (
    <IdeasContext.Provider value={{current:ideas, add, remove,}}>
    {children}
    </IdeasContext.Provider>
  )
}
