import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/CartSlice.jsx';
const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})
export default Store;