import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 items:[],
 cartTotal:0,
 check:false
}
const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        totalAmount:(state)=>{
         state.cartTotal = state.items.reduce((accu,curr)=>{
          return accu + Number(curr.price*curr.quantity)
       },0)
        },
        addToCart:(state,action)=>{
            console.log(action.payload.product)
            const existingItemIndexInCart = state.items.findIndex((item)=>item._id===action.payload.product._id)
            console.log(existingItemIndexInCart)
            if(existingItemIndexInCart<0){
                state.items.push({...action.payload.product,quantity:1,total:action.payload.product.price})
            }
        },
        eliminatingCart:(state,action)=>{
            console.log(action.payload)
            state.items =  state.items.filter((item)=>item._id!==action.payload)
        },
        Increase:(state,action)=>{
            const existingItemIndexInCart = state.items.findIndex((item)=>item._id===action.payload)
                let {price,quantity} = {...state.items[existingItemIndexInCart]}
                console.log( {price,quantity})
               let updatedItem = {...state.items[existingItemIndexInCart],quantity:quantity+=1,total:price*quantity} 
               state.items[existingItemIndexInCart] = updatedItem
        },
        Decrease:(state,action)=>{
            const existingItemIndexInCart = state.items.findIndex((item)=>item._id===action.payload)
                let {price,quantity} = {...state.items[existingItemIndexInCart]}
                console.log( {price,quantity})
                if(quantity>0){
                    let updatedItem =  state.items[existingItemIndexInCart] = {...state.items[existingItemIndexInCart],quantity:quantity-=1,total:price*quantity} 
                    state.items[existingItemIndexInCart] = updatedItem
                }
                if(quantity===0){
                    state.items =  state.items.filter((item)=>item._id!==action.payload)
                }
        },
        checkOut:(state)=>{
         state.check = true
        }
    }
})
export const {Decrease,addToCart,eliminatingCart,totalAmount,checkOut,Increase} = cartSlice.actions
export default cartSlice.reducer
