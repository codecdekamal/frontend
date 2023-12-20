import { createSlice } from "@reduxjs/toolkit";
const initialState ={
   address: {name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",}
  }
  const ShippingSlice= createSlice({
    name:"shipping",
    initialState,
    reducers:{
     shippingAddress:(state,action)=>{
       state.address = action.payload
     }
    }
})
export const {shippingAddress} = ShippingSlice.actions
export default ShippingSlice.reducer