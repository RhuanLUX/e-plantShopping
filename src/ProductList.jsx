import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    name: 'Aloe Vera',
    image: '/images/aloe.jpg',
    description: 'Soothing and air purifying plant.',
    cost: '$10',
    category: 'Medicinal',
  },
  {
    name: 'Lavender',
    image: '/images/lavender.jpg',
    description: 'Aromatic and calming.',
    cost: '$12',
    category: 'Aromatic',
  },
  {
    name: 'Snake Plant',
    image: '/images/snake.jpg',
    description: 'Great for low light and air purification.',
    cost: '$15',
    category: 'Air Purifying',
  },
  {
    name: 'Basil',
    image: '/images/basil.jpg',
    description: 'Fragrant and edible, perfect for cooking.',
    cost: '$9',
    category: 'Aromatic',
  },
  {
    name: 'Mint',
    image: '/images/mint.jpg',
    description: 'Refreshing aroma and useful in teas.',
    cost: '$8',
    category: 'Medicinal',
  },
  {
    name: 'Peace Lily',
    image: '/images/peace-lily.jpg',
    description: 'Elegant plant that purifies air indoors.',
    cost: '$14',
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
