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
        if (e.target.value >= 0) {
          if (!e.target.value) {
            item.amount = 0;
          } else {
            const newAmount = e.target.value > 99 ? 99 : e.target.value;
            item.amount = parseInt(newAmount);
          }
        }
      }
      return item;
    });
    setCartList(newCart);
  };

  const handleAdd = (id) => {
    const newCart = cartList.map((item) => {
      if (item.id === id) {
        const newAmount = item.amount + 1 > 99 ? 99 : item.amount + 1;
        item.amount = parseInt(newAmount);
      }
      return item;
    });
    setCartList(newCart);
  };

  const handleMinus = (id) => {
    let amountBelowZero = false;
    const newCart = cartList.map((item) => {
      if (item.id === id) {
        if (item.amount - 1 >= 0) {
          item.amount = item.amount - 1;
        } else {
          amountBelowZero = true;
        }
      }
      return item;
    });
    if (amountBelowZero) {
      removeItem(id);
    } else {
      setCartList(newCart);
    }
  };

  const removeItem = (id) => {
    const newCart = cartList.filter((item) => item.id !== id);
    setCartList(newCart);
  };

  const getTotalAfterTax = (amount) => {
    const total = parseFloat(amount);
    const afterTax = total * 0.0825 + total;
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
                <img src={item.image} className="cart-item-image" alt={item.title}></img>
                <p className="cart-item-description">{item.description}</p>
              </div>
              <div className="cart-amount-panel">   
                <p>Price: ${(item.price).toFixed(2)}</p>
                <div className="amount-modifier">
                
                  <svg
                    onClick={() => handleMinus(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-minus-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <input
                    type="number"
                    max="99"
                    value={item.amount > 0 ? item.amount : 0}
                    onChange={(e) => handleChange(item.id, e)}
                  ></input>
                  <svg
                    onClick={() => handleAdd(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>

                <span
                  className="delete-item-cart"
                  onClick={() => removeItem(item.id)}
                >
                  Remove from Cart
                </span>
             
              </div>
            </div>
          );
        })}
      </div>
      <div id="shopping-cart-total">
        <h2>Summary:</h2>
        <div className="cart-item-wrapper">
          {cartList.map((item) => {
            return (
              <div className="item-cart-summary" key={item.id}>
                <span>{item.title}</span>
                <span className="cart-item-price">
                  ${(item.price * item.amount).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
        <p className="cart-total-price">
          <span>
            <strong>Total before tax: </strong> ${totalAmount}
          </span>
          <span>
            <strong>Tax: </strong>${(totalAmount * 0.0825).toFixed(2)}
          </span>
          <span>
            <strong>Total:</strong> ${getTotalAfterTax(totalAmount)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
