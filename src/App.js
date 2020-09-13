import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import ItemCount from './components/Items/ItemCount/ItemCount';
import CartContext from './contexts/cartContext';
import Footer from './components/Footer/Footer';


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
            <Route path="/count">
              <ItemCount />
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