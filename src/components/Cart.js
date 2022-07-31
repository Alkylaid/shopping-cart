const Cart = ({ cartList, setCartList }) => {

const handleChange = (id, e) => {
    const newCart = cartList.map(item => {
        if (item.id === id) {
            item.amount = parseInt(e.target.value);
           
        }
        return item;
    })
    setCartList(newCart)
    console.log(cartList);

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
              <input type="number" value={item.amount} onChange={(e) => handleChange(item.id, e)}></input>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Cart;
