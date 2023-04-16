import React from 'react';
import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import Modal from "./components/Modal";
import { getCartItems, isLoading } from './features/cart/cartSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function App() {
  const {isLoading, cartItems}=useSelector((store) => store.cart)
  const {isOpen}=useSelector((store) => store.modal);
  const dispatch=useDispatch();

  React.useEffect(() => {

dispatch(getCartItems())
  }, [])

  if(isLoading) {
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }

  return (
    <main>
      {isOpen && (<Modal></Modal>)}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}

export default App;
