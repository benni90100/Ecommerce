import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    const isContained = products.find((item) => item.id === product.id);
    if (isContained) {
      setProducts(
        products.map((item) => {
          return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
        })
      );
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
    console.log(`first`)
  };

  const removeFromCart = (product) => {
    if (product.quantity==1){
      const newProducts = products.filter((item) => item.id !== product.id);
      setProducts(newProducts);
    }else {
      setProducts(
        products.map((item) => {
          return item.id === product.id ? { ...item, quantity: item.quantity -1 } : item;
        })
      );
    }
    
  };

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
