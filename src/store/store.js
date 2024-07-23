import { create } from "zustand";

export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Load state error:", err);
        return undefined;
    }
};

export const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        console.error("Save state error:", err);
    }
};

const initialCart = loadState('cart') || [];

export const useCartStore = create((set) => ({
    cart: initialCart,
    addToCart: (product, quantity = 1) => {
        set((state) => {
            const cart = state.cart;
            const productIndex = cart.findIndex(item => item.id === product.id);

            if (productIndex > -1) {
                cart[productIndex].quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }

            saveState('cart', cart);
            return { cart: [...cart] };
        });
    },
    removeFromCart: (id) => {
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            saveState('cart', updatedCart);
            return { cart: updatedCart };
        });
    },
    changeQuantity: (id, quantity) => {
        set((state) => {
            const product = state.cart.find(item => item.id === id);
            if (!product) return;
            product.quantity = quantity;
            saveState('cart', state.cart);
            return { cart: [...state.cart] };
        });
    },
}));