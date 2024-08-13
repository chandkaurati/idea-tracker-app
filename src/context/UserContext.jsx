import { createContext, useEffect, useState } from "react";
import { ID } from "appwrite";
import { account } from "../appwrite/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  async function login(email, password) {
    try {
      const responce = await account.createEmailPasswordSession(
        email,
        password
      );
      init()
    } catch (error) {
      return `login Failed ${error}`
       
    }
  }

  async function logout() {
    let res = await account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password, name) {
    try {
      let user = await account.create(ID.unique(), email, password, name);
      // setUser(user)
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
    } catch (error) {
      setUser(null);
      return null;
    }
  }

  useEffect(()=>{
     init()
  },[])

  return (
    <UserContext.Provider
      value={{user, login, logout, register, init }} >
      {children}
    </UserContext.Provider>
  );
}
