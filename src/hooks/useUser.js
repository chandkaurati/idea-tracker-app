import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IdeasContext } from "../context/ideasContext";


export function useUser(){
     return useContext(UserContext)
}

export function useIdeas(){
      return useContext(IdeasContext)
}