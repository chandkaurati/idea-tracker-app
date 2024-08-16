import { createContext, useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite";
import { ID } from "appwrite";
export const IdeasContext = createContext()

function IdeasProvider({children}){
   const [ideas, setIdeas] = useState([])
   
   async function createIdea(idea) {
    const responce =  await databases.createDocument("66b1bf8d001a3115ed42", 
   "66b1bf99002ec86971f2", ID.unique(), idea)
    console.log(responce)
    setIdeas([...ideas, idea])

   }
    
   async function init(){
      try {
       const responce = await databases.listDocuments("66b1bf8d001a3115ed42", "66b1bf99002ec86971f2" )
       setIdeas(responce.documents)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(()=>{
      init()
   }, [])
   return (
    <IdeasContext.Provider value={{ideas, createIdea}}>
    {children}
    </IdeasContext.Provider>
   )
}

export default IdeasProvider
