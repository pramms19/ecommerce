import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, initialItems);

  return (
    <CartContext.Provider value={items}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(items, action) {
  switch (action.type) {
    case "added": {
      console.log(
        "🚀 ~ file: CartContext.js:28 ~ cartReducer ~ action:",
        action
      );

      if (
        items.filter((val) => val.product.id === action.product.id).length > 0
      ) {
        console.log("product exits");
        return items.map((item, idx) => {
          if (item.product.id === action.product.id) {
            console.log("am in");
            items[idx] = { quantity: item.quantity + 1, ...item };
          }

          return item;
        });
      } else {
        return [
          ...items,
          {
            quantity: action.quantity,
            product: action.product,
          },
        ];
      }
    }
    case "changed": {
      return items.map((item) => {
        if (item.product.id === action.product.id) {
          return action.cart;
        } else {
          return item;
        }
      });
    }
    case "deleted": {
      return items.filter((item) => item.product.id !== action.product.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialItems = [];
