import { createContext, useEffect, useState } from "react";
import { ID } from "appwrite";
import { account } from "../appwrite/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [counter, setCounter] = useState("#%Q#");

  async function login(email, password) {
    try {
      const responce = await account.createEmailPasswordSession(
        email,
        password
      );
      if (responce) {
        setUser(responce);
        return responce
      }
    } catch (error) {
      console.log("ERROR: user login failed ");
      return error;
    }
  }

  async function logout() {
    let res = await account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password, name) {
    try {
      let user = await account.create(ID.unique(), email, password, name);
      login(email, password);
      return user;
    } catch (error) {
      console.log(`ERROR: failed to create user ${error}`);
      return error;
    }
  }

  async function init() {
    try {
      // to get the current logged in user
      const loggedIn = await account.get();
      setUser(loggedIn);
      return loggedIn;
    } catch (error) {
      // console.log(`"ERROR FAILED TO GET USER" ${error}`)
      setUser(null);
      return null;
    }
  }

  useEffect(()=>{
     init()
  },[])

  return (
    <UserContext.Provider
      value={{ counter, user, login, logout, register, init, setCounter }} >
      {children}
    </UserContext.Provider>
  );
}
