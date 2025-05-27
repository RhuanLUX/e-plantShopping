import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>Discover the best indoor plants to purify your space and elevate your mood.</p>
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
