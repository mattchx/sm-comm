import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from '@material-ui/core';
import Home from '../pages/Home'
import Shop from '../pages/Shop'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <ShoppingBasketIcon className={classes.icon} />

          <Typography variant="h5" className={classes.title}>
            SM Ecom
          </Typography>
          <Link href='/shop' color="inherit" style={{paddingRight: 25}}>Shop</Link>
          <Link href='/question' color="inherit" style={{paddingRight: 15}}>Ask a Question</Link>
          <Link href='/cart'color="inherit">
            <ShoppingCartIcon/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
