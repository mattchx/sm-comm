import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardActions,CardContent, CardMedia , Typography, Button } from '@material-ui/core';

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

  useEffect(() => {
    fetchData();
    console.log('useEffect runs');
  }, []);

  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Typography variant="h5">The Shop</Typography>
      {shopData && shopData.map((item) => <Card className={classes.root}>
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
        <Button size="small" variant="outlined" color="secondary">
          Add to card
        </Button>
      </CardActions>
      </Card>)}

    </Grid>
  );
}

export default Shop;
