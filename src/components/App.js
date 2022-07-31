import { useEffect, useState } from 'react';
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
    </div>
  );
}

export default App;
