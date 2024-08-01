import {createContext, useState} from "react"
import {ID} from "appwrite"
import { account } from "../appwrite/appwrite"

export  const UserContext = createContext()

export function UserProvider({children}){
  const [user, setUser] = useState(null)
  const [counter, setCounter] = useState("#%Q#")

  async function login(email, password){
    try {
      const responce = await account.createEmailPasswordSession(email,password)
      if(responce){
        setUser(responce)
      }
    } catch (error) {
       console.log("ERROR: user login failed ")
    }
  }

  async function logout(){
   let res =   await account.deleteSession("current")
   setUser(null)
  }

  async function register(email, password){
     try {
       let user = await account.create(ID.unique, email,password)
       return user
     } catch (error) {
       console.log(`ERROR: failed to create user ${error.messege}`)
     }
  }

  async function init(){
     try {
     // to get the current logged in user 
      const loggedIn = await account.get()
      setUser(loggedIn)
      return loggedIn
     } catch (error) {
        console.log(`"ERROR FAILED TO GET USER" ${error.messege}`)
        setUser(null)
        return null
     }
  }

  return (
    <UserContext.Provider value={{counter, user, login, logout, register, init, setCounter}}>
        {children}
    </UserContext.Provider>
  )

}