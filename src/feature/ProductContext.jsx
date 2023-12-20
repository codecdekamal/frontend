import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 items:[],
}
const productSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
      getAllProducts:(state,action)=>{
         state.items = action.payload
      }
    }
})
export const {getAllProducts} = productSlice.actions
export default productSlice.reducer
