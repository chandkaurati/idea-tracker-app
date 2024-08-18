import React, { useEffect, useState } from "react";
import useIdeas from "../hooks/useIdeas";
import { useUser } from "../hooks/useUser";
import Idea from "../componants/Idea";
import Loading from "../componants/Loading";
function Myideas({}) {
  const [myIdeas, setMyideas] = useState([]);
  const [loader, setLoader]  = useState(true)
  const { ideas } = useIdeas();
  const { user } = useUser();

  useEffect(() => {
    setTimeout(() => {
     setLoader(false)
    }, 2000); 
    const getfilteedIdeas = () => {
      const userid = user?.$id;
      const res = ideas.filter((idea) => idea.userId === userid);
      setMyideas(res);
     
    };

    getfilteedIdeas();
    console.log(myIdeas)
}, []);


if(loader){
return <Loading/>
}

  return (
    <div className=" flex flex-col items-center py-7">
     {myIdeas ? (
          <section className="w-full md:w-1/2 flex flex-col gap-5 shadow-lg  p-7 rounded-md">
          {myIdeas.map((idea,i)=>(
          <Idea key={i} title={idea.title} content={idea.description}/>
          ))}
          </section>
     ) : <p>you dont have any ideas</p>}
    </div>
  );
}

export default Myideas;
