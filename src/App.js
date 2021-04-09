import Home from './pages/Home'
import Shop from './pages/Shop'
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,    
  } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
        <Header/>
        <Switch>
        <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/question">
            <Home />
          </Route>
          {/* <Route path="/cart">
            <Cart />
          </Route> */}
        </Switch>
        </div>
    </Router>
  );
}

export default App;
