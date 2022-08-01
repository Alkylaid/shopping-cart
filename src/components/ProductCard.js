const ProductCard = ({ item, addToCart }) => {

  return (
    <div id="product-card-info">
      <img src={item.image} alt={item.title}></img>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div id="card-purchase-container"><p >${item.price.toFixed(2)}</p><button className="add-to-cart" onClick={()=> addToCart(item)}>Add to Cart</button></div>
    </div>
  );
};

export default ProductCard;
