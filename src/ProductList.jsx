import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    name: 'Aloe Vera',
    image: '/shoppingreact/images/aloe.jpg',
    description: 'Soothing and air purifying plant.',
    cost: '$10',
    category: 'Medicinal',
  },
  {
    name: 'Lavender',
    image: '/shoppingreact/images/lavender.jpg',
    description: 'Aromatic and calming.',
    cost: '$12',
    category: 'Aromatic',
  },
  {
    name: 'Snake Plant',
    image: '/shoppingreact/images/snake.jpg',
    description: 'Great for low light and air purification.',
    cost: '$15',
    category: 'Air Purifying',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plantsArray.map((plant, index) => (
          <div key={index} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="price">{plant.cost}</p>
            <button
              disabled={addedToCart[plant.name]}
              onClick={() => handleAddToCart(plant)}
            >
              {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
