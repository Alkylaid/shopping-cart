import { Link } from 'react-router-dom';

const Navbar = ({cartList}) => {

    function getTotalItems() {
        const total = cartList.reduce((prev, current) => prev + current.amount, 0)
        return total;
    }
  return (
    <div id="nav-bar">
   
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/shop">Shop</Link></li>
        <li> <Link to="/featured">Featured</Link></li>
        <li  > <Link to="/sale" style={{color: 'rgb(225, 43, 70)'}}>On Sale Now</Link></li>
        </ul>
        <ul className="cart-links">
        <li><Link to="/cart">
          <svg
            id="shopping-cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartList.length > 0 && <span id="shopping-cart-indicator">{getTotalItems() > 10 ? "10+" : getTotalItems()}</span>}
        </Link></li>
        </ul>
    
    </div>
  );
};

export default Navbar;
