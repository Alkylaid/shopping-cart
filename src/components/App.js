import { useEffect, useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [inventory, setInventory] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(json => {
        
        setInventory(json)});
  });

  return (
    <Router>
    <div className="container">
      <div id="hero-image">
      <Navbar cartList={cartList} />
      <h1>Come experience the savings.</h1>
      <h2>Get up to <span style={{color: 'rgb(225, 43, 70)'}}>65%</span> off on your favorite brands.</h2>
      <button id="check-it-button">Check It Out</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop inventory={inventory}/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
