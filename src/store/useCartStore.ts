import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define what a Cart Item looks like
interface CartItem {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
}

// Define the Store's structure (State + Actions)
interface CartStore {
  cart: CartItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, amount) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity + amount) }
              : item,
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "perfume-cart-storage",
    },
  ),
);
