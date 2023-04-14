import React from 'react';
import CartItem from "./CartItem";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart, calculateTotal} from '../features/cart/cartSlice';


function CartContainer() {
    const {cartItems, amount, total}=useSelector(store => store.cart);
    const dispatch=useDispatch();



    React.useEffect (() => {
dispatch(calculateTotal());
    }, [cartItems])



    if(amount < 1) {
        return <section className="cart">
            <header>
                <h2>Your bag</h2>
                <h4 className="empty-cart">is currently empty.</h4>
            </header>
        </section>
    }


  return (
    <section className="cart">
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} {...cartItem}></CartItem>
            })}
        </div>

        <footer>
            <hr></hr>
            <div className="cart-total">
            <h4>total: <span>${total.toFixed(2)}</span></h4>
            </div>
            <button className="btn clear-btn" onClick={()=> dispatch(clearCart())}>Clear cart</button>
        </footer>
    </section>
  );
}

export default CartContainer;
