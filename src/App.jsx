import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router basename="/shoppingreact">
      <div>
        <header className="header">
          <Link to="/" className="logo">🌱 Paradise Nursery</Link>
          <span className="tagline">Beautiful plants for every home</span>
          <Link to="/cart" className="cart-icon">
            🛒 {itemCount}
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
