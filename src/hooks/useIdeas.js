import { useContext } from "react";
import { IdeasContext } from "../context/IdeasContext";

const useIdeas = ()=>{
     return useContext(IdeasContext)
}

export default useIdeas


