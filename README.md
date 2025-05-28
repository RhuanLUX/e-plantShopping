## 📄 README.md (English version – full structure)

````markdown
# 🪴 Paradise Nursery – Plant Shopping App

This is the final React project for the course, where a plant e-commerce platform named **Paradise Nursery** was developed.

The application allows users to browse plants, grouped by category, and add them to a shopping cart with quantity control and checkout functionality.

---

## 🚀 Features

- ✅ **Landing Page** with a background image, short paragraph, and "Get Started" button
- ✅ **Product Listing Page** with:
  - Cards for each plant
  - Grouping by category (Medicinal, Aromatic, Air Purifying)
  - "Add to Cart" button that disables after adding
- ✅ **Shopping Cart Page** with:
  - Item list from the cart
  - Quantity controls (increase/decrease)
  - Subtotal per item and total amount
  - Remove button
  - Checkout button

---

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Router DOM
- Vite
- CSS Modules

---

## 🖼️ Project Screenshots

> Replace the placeholder image paths with your real images if available.

### Landing Page  
![Landing Page](./public/images/landing-preview.jpg)

### Product Listing  
![Product Listing](./public/images/products-preview.jpg)

### Shopping Cart  
![Shopping Cart](./public/images/cart-preview.jpg)

---

## 📦 How to Run the Project

```bash
# Clone the repository
git clone https://github.com/your-username/e-plantShopping.git

# Navigate into the project folder
cd e-plantShopping

# Install dependencies
npm install

# Run the project
npm run dev
````

Then open your browser at: [http://localhost:5173/shoppingreact](http://localhost:5173/shoppingreact)

---

## 📁 Project Structure

```
e-plantShopping/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── pages/
│   ├── CartSlice.js
│   ├── store.js
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

---

## 👤 Author

Developed by **Rhuan Pablo** as a final project for the React course.

---

## 🌍 Deployment

> The project can be easily deployed using [Vercel](https://vercel.com/) or GitHub Pages.