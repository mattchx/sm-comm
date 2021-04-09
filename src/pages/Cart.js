import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {

const itemsInCart = useSelector((state) => state.cart);
 console.log(itemsInCart) 
return (
    <div>
      This is your shopping cart
      {itemsInCart &&
        itemsInCart.items.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}

export default Cart;
