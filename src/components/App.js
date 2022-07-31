import { useEffect, useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  const [inventory, setInventory] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setInventory[json]);
  });

  return (
    <div className="container">
      <div id="hero-image">
      <Navbar cartList={cartList} />
      <h1>Come experience the savings.</h1>
      <h2>Get up to <span style={{color: 'rgb(225, 43, 70)'}}>65%</span> off on your favorite brands.</h2>
      <button id="check-it-button">Check It Out</button>
      </div>
      <Home />
    </div>
  );
}

export default App;
