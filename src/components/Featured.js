import {useState} from 'react';

const Featured = ({ inventory, addToCart }) => {

    const [featured] = useState([inventory[12], inventory[7], inventory[10], inventory[5]]);




    return (
        <div>
        <h1 className="page-title">Featured Products</h1>
      <div id="shop-products">
        {featured.map((product) => {
          return (
            <div className="product-card" key={product.id} id={product.id}>
              <img src={product.image} alt={product.title}></img>
              <div className="card-product-title">{product.title}</div>
              <div className="card-product-info"><p>${product.price.toFixed(2)}</p><div className="card-product-rating" style={{"--rating": product.rating.rate}}><span>({product.rating.count})</span></div></div>
              <div className="product-card-overlay"><button className="buy-button" onClick={()=>{addToCart(product)}}>Buy</button><button className="info-button">Info</button></div>
              
            </div>
            
          );
        })}
      </div>
      </div>
    );
  };
  
  export default Featured;
  