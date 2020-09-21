export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find((e) => e.id === item.id);

  if (existingCartItem) {
    return cartItems.map((e) => {
      if (e.id === item.id) {
        return {
          ...e,
          quantity: e.quantity + 1,
        };
      }
      return e;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};
