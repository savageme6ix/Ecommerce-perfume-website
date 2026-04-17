import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define what a wishlist Item looks like
interface WishItem {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
}

// Define the Store's structure
interface WishStore {
  wish: WishItem[];
  addToWishStore: (product: any, quantity?: number) => void;
  removeFromWishStore: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
}

export const usewishStore = create<WishStore>()(
  persist(
    (set) => ({
      wish: [],

      addToWishStore: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.wish.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            return {
              wish: state.wish.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return { wish: [...state.wish, { ...product, quantity }] };
        }),

      removeFromWishStore: (id) =>
        set((state) => ({
          wish: state.wish.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, amount) =>
        set((state) => ({
          wish: state.wish.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity + amount) }
              : item,
          ),
        })),
    }),
    {
      name: "perfume-wish-storage",
    },
  ),
);
