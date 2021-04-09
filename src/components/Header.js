import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

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
      <AppBar position="static">
        <Toolbar>
          <ShoppingBasketIcon className={classes.icon} />

          <Typography variant="h5" className={classes.title}>
            SM Ecom
          </Typography>
          <Link to="/shop" style={{ paddingRight: 25 }}>
            Shop
          </Link>
          <Link to="/question" style={{ paddingRight: 15 }}>
            Ask a Question
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
