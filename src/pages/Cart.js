import React from 'react';
import { useSelector } from 'react-redux';
import {Card, Grid} from '@material-ui/core'
function Cart() {

const itemsInCart = useSelector((state) => state.cart);
 console.log(itemsInCart) 
return (
    <Grid container direction="column" alignItems="center" justify="center">
        <h5>This is your shopping cart</h5>
    <Card>
      
      {itemsInCart &&
        itemsInCart.items.map((item) => <p key={item.id}>{item.title}</p>)}
    </Card>
    </Grid>
  );
}

export default Cart;
