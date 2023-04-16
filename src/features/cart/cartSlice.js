import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';
//import cartItems from "../../cartItems";

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems=createAsyncThunk("cart/getCartItems", ()=> {
  return fetch(url).then(response => response.json()).catch(error => console.log(error))
})

const initialState= {
  cartItems: [],
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
    },
    calculateTotal: (state, action) => {
      let amount=0;
      let total=0;
      state.cartItems.forEach(item => {
        amount=amount+item.amount;
        total=total+item.amount*item.price;
      })
      state.amount=amount;
      state.total=total;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading=true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading=false
        state.cartItems=action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading=false
      });
  },
})

export const {clearCart, removeItem, increaseItem, decreaseItem, calculateTotal}=cartSlice.actions;
export default cartSlice.reducer;
