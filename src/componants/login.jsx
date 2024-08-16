import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Loading from "./Loading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function loginUser() {
     try {
      setLoading(true)
      const res =  await login(email,password)
      if(typeof res === "string"){
        setError("plese enter a valid details")
      }else{
        navigate("/")
      }
     } catch (error) {
      console.log(error)
     }finally{
      setLoading(false)
     }
  }

  if(loading){
     return <Loading/>
  }
  return (
    <div className="flex flex-col  justify-center rounded-md p-5 gap-4 text-center md:w-1/2  shadow-lg">
      <span>
        <h2 className="text-lg">Login</h2>
      </span>
      <div className="flex flex-col text-left gap-6">
        <label className="font-semibold">Name</label>
        <input
          className="border p-2 rounded-md outline-none "
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="enter your email
         "
        />
        <label className="font-semibold">Passsword</label>
        <input
          required
          className="border p-2 rounded-md outline-none "
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="enter your password "
        />

        <button
          onClick={loginUser}
          className="bg-[#FD356E]
         hover:bg-[#ec114f] p-2 rounded-md text-white "
        >
          submit
        </button>
      </div>
      <span>
        Don't have an Account{" "}
        <Link to={"/register"}>
          <p className="font-semibold text-[#ec114f] cursor-pointer">
            Register
          </p>
        </Link>
      </span>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default Login;
