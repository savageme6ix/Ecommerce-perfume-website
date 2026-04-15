import { create } from "zustand";

// Defines what a single item in the cart should look like
interface CartItem{
    id:number
    name:string
    brand:string
    price:number
    quantity:number
}

// Defines the Store's structure (State + Actions)
interface CartStore{
    cart: CartItem[];
    addToCart: (product: any)=> void;
    removeFromCart: (id:number)=> void;
    updateQuantity: (id: number, amount: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set)=>({
    cart: [],

    addToCart: (product)=>
        set((state)=>{
            const existingItem = state.cart.find((item)=> item.id === product.id);

            if(existingItem){
                return{
                    cart: state.cart.map((item)=>{
                        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                    })
                }
            }
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

    removeFromCart: (id) => 
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    })),

    updateQuantity: (id, amount) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      ),
    })),

    clearCart: () => set({ cart: [] }),

    
}));
