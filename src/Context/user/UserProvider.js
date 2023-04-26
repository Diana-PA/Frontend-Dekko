import UserContext from './UserContext'
import { useReducer } from 'react'
import userReducer from './userReducer'
import axiosClient from '../../config/axiosClient';
import { useNavigate } from 'react-router-dom';


const UserProvider = ({children}) => {

    const navigate = useNavigate();

    const [userState, dispatch] = useReducer(userReducer, {
        infoUser: [],
        authStatus: false
    });

    const loginUSer = async(user) => {
        try{
            const userLogin = await axiosClient.post("/user/signin", user);
            console.log(userLogin.data)
            console.log(userLogin.data.token)
            console.log(axiosClient.defaults)
            if(userLogin.data.succes){
                dispatch({type:"REGISTER/LOGIN", payload: userLogin.data})
            }
            console.log(userLogin.data.msg)
        } catch (error){
            console.log(error)
        }
    }

    const registerUser = async(user) => {
        try{
            const userRegister = await axiosClient.post("/user", user)

            if(userRegister.data.succes){
                dispatch({type:"REGISTER/LOGIN", payload: userRegister.data})
            }
            
        } catch (error){
            console.log(error)
        }
    }

const verifyToken = async() => {
    const token = localStorage.getItem("token")
    console.log(token)

    if(token) {
        axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
        // Authorization = Bearer 
    } else {
        delete axiosClient.defaults.headers.common["Authorization"]
    }
    try{
        const infoUserVerify = await axiosClient.get("/user/verifyUser")

        dispatch({type:"INFO_USER" , payload: infoUserVerify.data.info})

    } catch (error) {

    }
}

const signOut =() => {
    try {
        dispatch({type: "SIGN_OUT"})
        navigate("/auth")
        console.log(userState)
    } catch (error) {
        console.log(error)
    }
}

const userEdit = async(data) => {
    const updateUser = await axiosClient.put("/user/myProfile", data)
    console.log(updateUser)
}

  return (
<UserContext.Provider value={{ loginUSer, registerUser, verifyToken, infoUser: userState.infoUser, authStatus: userState.authStatus, userEdit, signOut }}>{children}</UserContext.Provider>
  )
}



export default UserProvider