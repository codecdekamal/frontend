import { createSlice } from "@reduxjs/toolkit";
const initialState ={
  show:false
}
   
  const ModalSlice= createSlice({
    name:"shipping",
    initialState,
    reducers:{
     showModal:(state,action)=>{
       state.show = true
     }
    }
})
export const {showModal} = ModalSlice.actions
export default ModalSlice.reducer