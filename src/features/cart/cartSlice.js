import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

const initialState= {
  cartItems: [],
  amount: 0, //items of that specific product
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
name: "cart",
initialState,

})

export
 
const
 { actions, reducer } = cartSlice;//

console.log(cartSlice);
export default cartSlice.reducer



const url = 'https://course-api.com/react-useReducer-cart-project';


