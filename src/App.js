import React from 'react';
import Navbar from './components/NavBar';
import Slider from './components/Slider';
import ItemCard from './components/ItemCard';


function App() {
  return (
    <div className="container">
      <Navbar name="algo"/>
      <Slider />
      <ItemCard />
    </div>
  );
}

export default App;
