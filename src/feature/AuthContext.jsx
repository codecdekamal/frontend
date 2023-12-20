import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token:localStorage.getItem("token") || "",
    isAuthenticated:localStorage.getItem("token")?true:false || false,
    userID:localStorage.getItem("userID") || null,
    role:localStorage.getItem("role"),
    username:localStorage.getItem("username") || null,
}
const AuthSlice = createSlice({
   name:"auth",
   initialState,
   reducers:{
    login:(state,action)=>{
        state.isAuthenticated = true;
        const {token,username,userID,role} = action.payload
        state.token = token
        state.isAuthenticated = token && true
        state.userID = userID
        state.role = role
        state.username = username
        state.user = action.payload
    },
    logOut:(state) => {
        state.token = ""
        state.role = ""
        state.isAuthenticated =""
        state.userID = ""
    }
   }
})
export const {login,logOut} = AuthSlice.actions
export default AuthSlice.reducer