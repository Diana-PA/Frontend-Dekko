import UserContext from './UserContext'
import { useReducer } from 'react'
import userReducer from './userReducer'
import axiosClient from '../../config/axiosClient';


const UserProvider = ({children}) => {

    const [userState, dispatch] = useReducer(userReducer, {
        infoUser: [],
        authStatus: false
    });

    const loginUSer = async(user) => {
        try{
            const userLogin = await axiosClient.post("/user/signin", user)
            console.log(userLogin.data)
            console.log(userLogin.data.token)
            if(userLogin.data.succes){
                dispatch({type:"REGISTER/LOGIN", payload: userLogin.data})
            }
            console.log(userLogin.data.msg)
        } catch (error){
            console.log(error)
        }
    }

  return (
<UserContext.Provider value={{msg, loginUSer}}>{children}</UserContext.Provider>
  )
}

export default UserProvider