import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { register } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate()
  // createUser()

  async function createUser() {
    setLoading(true);
    try {
      let user = await register(email, password, name);
       if(user){
         setLoading(false)
         navigate("/")
       }
    } catch (error) {
      console.log(`Error from register ${error}`);
      setLoading(false);
      setError("error");
    }
  }
  if (loading) {
    return (
      <div>
       <Loading/>
      </div>
    );
  }
  return (
    <div className="w-full md:flex items-center justify-center">
      <div className="border p-1 shadow-2xl md:w-[600px]">
        <span>
          <h2 className="text-2xl font-semibold">Register</h2>
        </span>
        <div className="flex flex-col rounded-md p-5 gap-4 text-left ">
          <label className="font-semibold">Name</label>
          <input
            className="border p-2 rounded-md outline-none "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="enter your name "
          />

          <label className="font-semibold">Email</label>
          <input
            className="border p-2 rounded-md outline-none "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="enter your email "
          />

          <label className="font-semibold">Passsword</label>
          <input
            className="border p-2 rounded-md outline-none "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="enter your password "
          />

          <button
            onClick={createUser}
            className="bg-[#FD356E] 
          hover:bg-[#ec114f] p-2 rounded-md text-white "
          >
            submit
          </button>
        </div>
        <span>
          Already have an account?
          <Link to={"/login"}>
            <p className="font-semibold text-[#ec114f] cursor-pointer">Login</p>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
