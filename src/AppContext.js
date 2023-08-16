import { createContext, useContext, useReducer } from "react";

const AppContext = createContext(null);

const AppDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(appReducer, initialItems);

  return (
    <AppContext.Provider value={items}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export function useCart() {
  return useContext(AppContext);
}

export function useCartDispatch() {
  return useContext(AppDispatchContext);
}

function appReducer(items, action) {
  switch (action.type) {
    case "addedCart": {
      if (
        items.cartItems.filter((val) => {
          return val.product.id === action.product.id;
        }).length > 0
      ) {
        return {
          ...items,
          cartItems: items.cartItems.map((item, idx) =>
            item.product.id === action.product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          )
        };
      } else {
        return {
          ...items,
          cartItems: [
            ...(items?.cartItems || []),
            {
              quantity: action.quantity,
              product: action.product
            }
          ]
        };
      }
    }
    case "changedCart": {
      return {
        ...items,
        cartItems: items.cartItems?.map((item) => {
          if (item.product.id === action.product.id) {
            return action.cart;
          } else {
            return item;
          }
        })
      };
    }

    case "deletedCart": {
      return {
        ...items,
        cartItems: items.cartItems?.filter((item) => item.product.id !== action.product.id)
      };
    }
    case "addedWishList": {
      if (
        items.wishlistItems.filter((val) => {
          return val.product.id === action.product.id;
        }).length > 0
      ) {
        return {
          ...items,
          wishlistItems: items.wishlistItems.map((item) =>
            item.product.id === action.product.id
              ? {
                  ...item
                }
              : item
          )
        };
      } else {
        return {
          ...items,
          wishlistItems: [
            ...items.wishlistItems,
            {
              quantity: action.quantity,
              product: action.product
            }
          ]
        };
      }
    }
    case "changedWishList": {
      return {
        ...items,
        wishlistItems: items.wishlistItems.map((item) => {
          if (item.wishlistItem.product.id === action.product.id) {
            return action.wishlist;
          } else {
            return item;
          }
        })
      };
    }
    case "deletedWishList": {
      return {
        ...items,
        wishlistItems: items.wishlistItems.filter(
          (item) => item.wishlistItems.product.id !== action.product.id
        )
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialItems = {
  cartItems: [],
  wishlistItems: []
};
