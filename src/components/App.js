import { useEffect, useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setInventory[json]);
  });

  return (
    <div className="container">
      <div id="hero-image">
      <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;
