import React from 'react';
import { ChevronUp, ChevronDown } from '../icons';


function cartItem({id, img, title, price, amount}) {
  return (
    <article className="cart-item">
      <img src={img} alt={title}></img>
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">Remove</button>
      </div>
      <div>
        <button className="amount-btn"><ChevronUp></ChevronUp></button>
        <p className="amount">{amount}</p>
        <button className="amount-btn"><ChevronDown></ChevronDown></button>
      </div>
    </article>
  );
}

export default cartItem;
