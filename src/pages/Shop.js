import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const useStyles = makeStyles({
  root: {
    minWidth: '50%',
    maxWidth: '70%',
    margin: 10,
    padding: 10,
  },
  media: {
    height: 140,
  },
});

function Shop() {
  const [shopData, setShopData] = useState([]);
  const fetchData = () => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((json) => setShopData(json));
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.items);

  useEffect(() => {
    fetchData();
    console.log('useEffect runs');
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Typography variant="h5">The Shop</Typography>
      {shopData &&
        shopData.map((item) => (
          <Card key={item.id} className={classes.root}>
            <CardMedia
              className={classes.media}
              image={item.image}
              title="Product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title} - ${item.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={() =>
                  dispatch(addToCart(item.id, item.title, item.price))
                }
                size="small"
                variant="outlined"
                color="secondary"
              >
                Add to card
              </Button>
            </CardActions>
          </Card>
        ))}

      {itemsInCart &&
        itemsInCart.map((item) => <p key={item.id}>item.title</p>)}
    </Grid>
  );
}

export default Shop;
