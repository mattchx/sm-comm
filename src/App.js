import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch style={{ paddingTop: '10px' }}>
          
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/question">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <h2>Welcome to SM Ecom</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
