import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove one unit of item
  const removeFromCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(
        (item) => !(item.id === product.id && item.size === product.size)
      ));
    } else {
      setCartItems(cartItems.map((item) =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    }
  };

  // Remove item completely
  const removeItemCompletely = (product) => {
    setCartItems(cartItems.filter(
      (item) => !(item.id === product.id && item.size === product.size)
    ));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Handle checkout
  const onCheckout = () => {
    alert('Thanks for your purchase!');
    clearCart();
  };

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        clearCart,
        onCheckout,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
