const Cart = ({ cartList, setCartList }) => {

const handleChange = (id, e) => {
    const newCart = cartList.map(item => {
        if (item.id === id) {
            item.amount = parseInt(e.target.value);
           
        }
        return item;
    })
    setCartList(newCart)


}

const handleClick = (id) => {
    const newCart = cartList.filter( item => item.id !== id)
    setCartList(newCart);
}
  return (
    <div id="shopping-cart">
      <div id="shopping-cart-list">
        {cartList.map((item) => {
          return (
            <div className="shopping-cart-item" key={item.id}>
              <div className="shopping-cart-item-info">
                <h4>{item.title}</h4>
                <p className="cart-item-description">{item.description}</p>
              </div>
              <input type="number" value={item.amount > 0 ? item.amount : 0} onChange={(e) => handleChange(item.id, e)}></input>
              <button className="delete-item-cart" onClick={() => handleClick(item.id)}>Remove from Cart</button>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Cart;
