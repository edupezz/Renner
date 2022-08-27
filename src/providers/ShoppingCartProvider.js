import React from "react";

export const ShoppingCartContext = React.createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  function addItemToCart(id) {
    const newCartItems = [...cartItems];

    const newItem = newCartItems.find((item) => item.id === id);

    if (!newItem) {
      newCartItems.push({ id: id, quantity: 1 });
    } else {
      newItem.quantity = newItem.quantity + 1;
    }

    setCartItems(newCartItems);

    console.log(cartItems);
  }

  function removeItemFromCart(id) {
    const filteredCart = cartItems.filter(
      (cartItem) => cartItems.indexOf(cartItem) !== id
    );
  }

  function clearCart() {
    setCartItems({});
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
