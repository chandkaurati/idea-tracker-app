import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import AddIdeaInput from "../componants/Input";
import useIdeas from "../hooks/useIdeas";
import Loading from "../componants/Loading";
import Idea from "../componants/Idea"
function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, logout } = useUser();
  const { ideas, createIdea } = useIdeas();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    
    console.log(ideas)

    console.log(user)
  }, [ideas]);

  const HandleSubmit = async (e) => {
    try {
      setLoader(true);
      const newIdea = await createIdea({
        userId: user.$id,
        title: title,
        description: content,
      });
      // setIdeas((prev)=> [newIdea, ...prev])
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  if (loader) {
    return <Loading />;
  }

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

      <section className="w-full md:w-1/2 flex flex-col gap-5 shadow-lg  p-7 rounded-md">
        <strong>latest Ideas</strong>
        {Array.isArray(ideas) && ideas.length > 0 ? (
          ideas.map((idea) => (
            <Idea
              key={idea.$id}
              title={idea.title}
              content={idea.description}
            />
          ))
        ) : (
          <p>Idea not found</p>
        )}
      </section>
    </div>
  );
}

export default Home;
