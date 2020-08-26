import React, {useState} from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import CartContext from './contexts/cartContext';


function App() {

  const [cart, setCart] = useState(0);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div className="container">
        <Navbar/>
        <Home/>
      </div>
    </CartContext.Provider>
  );
}

export default App;