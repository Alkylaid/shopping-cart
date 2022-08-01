import { useState } from 'react';
import {Link} from 'react-router-dom'
const Sale = ({ inventory, addToCart }) => {
  const [sale] = useState([
    inventory[12],
    inventory[6],
    inventory[2],
    inventory[9],
    inventory[13],
  ]);

  return (
    <div id="content-container">
      <h1 className="page-title">On Sale Now</h1>
      <div id="shop-products">
        {sale.map((product) => {
          return (
            <div className="product-card" key={product.id} id={product.id}>
              <img src={product.image} alt={product.title}></img>
              <div className="card-product-title">{product.title}</div>
              <div className="card-product-info">
                <p>${product.price.toFixed(2)}</p>
                <div
                  className="card-product-rating"
                  style={{ '--rating': product.rating.rate }}
                >
                  <span>({product.rating.count})</span>
                </div>
              </div>
              <div className="product-card-overlay">
                <button
                  className="buy-button"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Buy
                </button>
                <Link to={`/product/${product.id}`}><button className="info-button">Info</button></Link></div>
              </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default Sale;
