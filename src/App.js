import React, {useState} from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import ItemCount from './components/ItemCount';
import CartContext from './contexts/cartContext';
import CreatePost from './components/CreatePost';


function App() {

  const [cart, setCart] = useState(0);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div className="container">
        <Navbar/>
        <Home />
         <ItemCount
          initial={0}
          max={10}
          min={0}
        />
        {/* <CreatePost /> */}
      </div>
    </CartContext.Provider>
  );
}

export default App;