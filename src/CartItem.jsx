import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const totalCost = cartItems.reduce((total, item) => {
    const numericCost = Number(item.cost.replace('$', ''));
    return total + numericCost * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.name} className="cart-card">
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Unit Price: {item.cost}</p>
                <div className="cart-controls">
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  <button className="remove-button" onClick={() => handleRemove(item.name)}>Remove</button>
                </div>
                <p>Subtotal: ${(Number(item.cost.replace('$', '')) * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${totalCost.toFixed(2)}</h3>
          <button className="checkout-button" onClick={() => alert('Checkout complete!')}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
