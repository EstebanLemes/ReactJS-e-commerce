import React, {useState} from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';


function App() {

  const [cart, setCart] = useState(0);

  return (
    <div className="container">
      <Navbar cart={cart}/>
      <Home 
        cart={cart}
        setCart={setCart}
        greeting="Estoy probando las props"
      />
    </div>
  );
}

export default App;
