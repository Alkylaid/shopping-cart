import { useEffect, useState } from 'react';

const Cart = ({ cartList, setCartList }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newTotalAmount = cartList.reduce(
      (prev, current) => prev + current.price * current.amount,
      0
    );
    setTotalAmount(newTotalAmount.toFixed(2));
  }, [cartList]);

  const handleChange = (id, e) => {
    const newCart = cartList.map((item) => {
      if (item.id === id) {
        if(e.target.value >= 0) {
        item.amount = parseInt(e.target.value);}
      }
      return item;
    });
    setCartList(newCart);
  };

  const handleClick = (id) => {
    const newCart = cartList.filter((item) => item.id !== id);
    setCartList(newCart);
  };

  const getTotalAfterTax = (amount) => {
    const total = parseInt(amount);
    const afterTax = (total * 0.0825) + total;
    return afterTax.toFixed(2);
  };
  return (
    <div id="shopping-cart">
      <div id="shopping-cart-list">
        {cartList.length === 0 && (
          <div className="shopping-cart-item empty">
            <h1>Shopping cart is empty!</h1>
            <h3>Add products to checkout.</h3>
          </div>
        )}
        {cartList.map((item) => {
          return (
            <div className="shopping-cart-item" key={item.id}>
              <div className="shopping-cart-item-info">
                <h4>{item.title}</h4>
                <p className="cart-item-description">{item.description}</p>
              </div>
              <input
                type="number"
                value={item.amount > 0 ? item.amount : 0}
                onChange={(e) => handleChange(item.id, e)}
              ></input>
              <button
                className="delete-item-cart"
                onClick={() => handleClick(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          );
        })}
      </div>
      <div id="shopping-cart-total">
        <h2>Summary:</h2>
        <div className="cart-item-wrapper">
          {cartList.map((item) => {
            return (
              <div className="item-cart-summary">
                <span>{item.title}</span>
                <span className="cart-item-price">
                  ${(item.price * item.amount).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
        <p className="cart-total-price">
          <span><strong>Total before tax: </strong> ${totalAmount}</span>
          <span><strong>Tax: </strong>${(totalAmount * 0.0825).toFixed(2)}</span>
          <span><strong>Total:</strong> ${getTotalAfterTax(totalAmount)}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
