import { createSlice } from '@reduxjs/toolkit'


  const cartSlice = createSlice({
    name: 'cart-box',
    initialState:{
        insideCart:[],
    },
    reducers: {
        addtoCart:(state, action)=>
            { state.insideCart.push(action.payload)},
        removeFromCart:(state,action)=>
            {state.insideCart=state.cart.filter((item)=>item.id!== action.payload.id)},
     }})
     export const{addtoCart, removeFromCart}=cartSlice.actions;
     export default cartSlice.reducer;