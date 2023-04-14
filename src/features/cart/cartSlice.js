import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';
import cartItems from "../../cartItems";


const initialState= {
  cartItems: cartItems,
  amount: 4, //items of that specific product
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
name: "cart",
initialState,
reducers: {
  clearCart: (state => {
    state.cartItems=[]; 
  })
}
})

//console.log(cartSlice);
export const {clearCart}=cartSlice.actions;

export
 
const
 { actions, reducer } = cartSlice;//

console.log(cartSlice);
export default cartSlice.reducer



const url = 'https://course-api.com/react-useReducer-cart-project';


