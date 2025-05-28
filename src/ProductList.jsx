import React from 'react';
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
  const addedToCart = cartItems.map(item => item.name);

  const categories = [...new Set(plantsArray.map(p => p.category))];

  const renderCategorySection = (category) => {
    const plants = plantsArray.filter(p => p.category === category);

    return (
      <div key={category}>
        <h3 className="category-title">{category} Plants</h3>
        <div className="product-grid">
          {plants.map((plant, index) => (
            <div key={index} className="product-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p className="price">{plant.cost}</p>
              <button
                disabled={addedToCart.includes(plant.name)}
                onClick={() => dispatch(addItem(plant))}
              >
                {addedToCart.includes(plant.name) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {categories.map((category) => renderCategorySection(category))}
    </div>
  );
}

export default ProductList;
