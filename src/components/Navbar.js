import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

const Navbar = () => {
  return (
    <div id="nav-bar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop"></Route>
          <Route path="/cart"></Route>
        </Routes>
        <ul class="nav-links">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        <ul class="cart-links">
        <li><Link to="/cart">
          <svg
            id="shopping-cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </Link></li>
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
