import React from 'react';
import Navbar from "./components/Navbar";
import CartContainer from './components/CartContainer';
import Modal from "./components/Modal";



function App() {
  

  return (
    <main>
      <Modal></Modal>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}

export default App;
