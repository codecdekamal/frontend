import { Navigate } from "react-router-dom"
import { logOut } from "../feature/AuthContext"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
const Logout = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        localStorage.clear("token")
        localStorage.clear("role")
        localStorage.clear("userID")
        dispatch(logOut())
    },[])
    return <Navigate to="/login"></Navigate>
}

export default Logout;
