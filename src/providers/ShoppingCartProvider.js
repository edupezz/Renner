import React from "react";

export const ShoppingCartContext = React.createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  function handleShoppingCart(id, quantity = 1, operation = "add") {
    const newCartItems = [...cartItems];

    const newItem = newCartItems.find((item) => item.id === id);

    if (!newItem) {
      newCartItems.push({ id: id, quantity: quantity });
    } else {
      if (operation === "add") {
        newItem.quantity = newItem.quantity + quantity;
      } else {
        newItem.quantity = newItem.quantity - quantity;
      }
    }
    setCartItems(newCartItems);
  }

  let totalItems = cartItems.reduce((total, number) => {
    if (total + number.quantity <= 0) {
      return 0;
    } else {
      return total + number.quantity;
    }
  }, 0);

  function clearCart() {
    setCartItems([]);
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleShoppingCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
