import { useEffect, useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './Cart';
import Featured from './Featured';
import Sale from './Sale';


function App() {
  const [inventory, setInventory] = useState([]);
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const duplicates = cartList.filter((cartItem) => cartItem.id === item.id);
    let newArray = [];
    if (duplicates.length > 0) {
      newArray = cartList.map((cartItem) => {
        if (!('amount' in cartItem)){
          cartItem.amount = 1;
        }
        if (cartItem.id === item.id) {
          cartItem.amount = cartItem.amount + 1;
        }
        return cartItem;
      });
    } else {
      newArray = [...cartList];
      newArray.push(item)
    }
    setCartList(newArray);
  };

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        json.map((item) => {
          item.amount = 1;
          return item;
        });
        setInventory(json);
      });
  });

  return (
    <Router>
      <div className="container">
        <div id="hero-image">
          <Navbar cartList={cartList} />
          <h1>Come experience the savings.</h1>
          <h2>
            Get up to <span style={{ color: 'rgb(225, 43, 70)' }}>65%</span> off
            on your favorite brands.
          </h2>
          <Link to="/shop" > <button id="check-it-button" >Check It Out</button></Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/shop"
            element={<Shop inventory={inventory} addToCart={addToCart} />}
          ></Route>
          <Route path="/cart" element={<Cart cartList={cartList} setCartList={setCartList}/>}></Route>
          <Route path="/featured" element={<Featured inventory={inventory} addToCart={addToCart} />}></Route>
          <Route path="/sale" element={<Sale inventory={inventory} addToCart={addToCart} />}></Route>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
