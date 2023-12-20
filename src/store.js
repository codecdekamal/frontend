import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/ProductContext"
import cartReducer from "./feature/CartContext.jsx"
import AuthReducer from "./feature/AuthContext.jsx"
import ShippingReducer from "./feature/ShippingAddress.jsx"
import ModalReducer from "./feature/ModalContext.jsx";
const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        auth:AuthReducer,
        shipp:ShippingReducer,
        show:ModalReducer
    }
})
export default store;