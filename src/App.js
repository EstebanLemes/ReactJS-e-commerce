import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import CartContext from './contexts/cartContext';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';


function App() {

  const [cart, setCart] = useState(0);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div className="container">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
        {/* <CreatePost /> */}
      </div>
    </CartContext.Provider>
  );
}

export default App;