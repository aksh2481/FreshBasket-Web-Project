
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "sonner";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  unit: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
}>({
  state: initialState,
  dispatch: () => null,
  addToCart: () => null,
  removeFromCart: () => null,
  updateQuantity: () => null,
  clearCart: () => null,
  toggleCart: () => null,
  totalItems: 0,
  totalPrice: 0,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Load cart from localStorage
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    (initialState) => {
      try {
        const savedCart = localStorage.getItem("cart");
        return savedCart
          ? { ...JSON.parse(savedCart), isOpen: initialState.isOpen }
          : initialState;
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return initialState;
      }
    }
  );

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.items, isOpen: state.isOpen })
      );
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [state]);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast.info("Item removed from cart");
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared");
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
