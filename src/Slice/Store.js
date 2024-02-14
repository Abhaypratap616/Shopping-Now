import { cartslice } from "./CartSlice"
import { configureStore } from "@reduxjs/toolkit";

 export default cartslicestore = configureStore({
    reducer:{
        cart:cartslice,
    }
})



