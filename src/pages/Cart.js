import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Grid } from '@material-ui/core';
function Cart() {
  const itemsInCart = useSelector((state) => state.cart);
  console.log(itemsInCart);
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <h3>This is your shopping cart</h3>
      <Card>
        {itemsInCart &&
          itemsInCart.items.map((item) => <p key={item.id}>{item.title}</p>)}
        <h4>
          Total due: $
          {itemsInCart.items.reduce((acc, next) => {
            return acc + parseInt(next.price);
          }, 0)}
        </h4>
      </Card>
    </Grid>
  );
}

export default Cart;
