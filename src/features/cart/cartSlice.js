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
  clearCart: ((state) => {
    state.cartItems=[]; 
  }),
  removeItem: (state, action) => {
    console.log(action);
    const itemId=action.payload;
    state.cartItems=state.cartItems.filter(item => item.id != itemId)
  },
  increaseItem: (state, action) => {
    const itemId=action.payload;
    const cartItem=state.cartItems.find(item => item.id === action.payload.id);
    cartItem.amount+=1
  },
decreaseItem: (state, {payload}) => {
  const cartItem=state.cartItems.find(item => item.id === payload.id)
  cartItem.amount=cartItem.amount-1;
  if(cartItem.amount < 1) {
    cartItem.amount = 0;
    state.cartItems = state.cartItems.filter(items => items.id !== payload.id)
  }
}
}

})

//console.log(cartSlice);
export const {clearCart, removeItem, increaseItem, decreaseItem}=cartSlice.actions;

export const{ actions, reducer } = cartSlice;//

console.log(cartSlice);
export default cartSlice.reducer



const url = 'https://course-api.com/react-useReducer-cart-project';


