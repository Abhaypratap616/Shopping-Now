import { createSlice } from '@reduxjs/toolkit';
export const cartslice = createSlice({
    name: 'cartslice',
    initialstate:[],
    reducer:{
        addtocart:(state,actions)=>{
            state.push(actions.payload);
        },
        removetocart:(state,actions)=>{
            state.filter((item)=> item.id !== actions.payload);
        }
    }
})
export const {addtocart,removetocart}=cartslice.actions;
export default cartslice.reducer;


