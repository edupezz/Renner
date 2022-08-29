import React from "react";

export const ShoppingCartContext = React.createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  function addItemToCart(id, quantity) {
    const newCartItems = [...cartItems];

    const newItem = newCartItems.find((item) => item.id === id);

    if (!newItem) {
      newCartItems.push({ id: id, quantity: quantity });
    } else {
      newItem.quantity = newItem.quantity + quantity;
    }

    setCartItems(newCartItems);
    console.log(newCartItems);
  }

  function removeItemFromCart(id) {
    const filteredCart = cartItems.filter(
      (cartItem) => cartItems.indexOf(cartItem) !== id
    );
  }

  function clearCart() {
    setCartItems({});
  }
  console.log(cartItems);
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
