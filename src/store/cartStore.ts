import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export type ICartItem = {
  item_id: number;
  item_image: string;
  item_name: string;
  discounted_price: number;
  quantity: number;
};

interface ICartStore {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  totalPrice: () => number;
  deleteFromCart: (item: ICartItem) => void;
}

const useStore = create<ICartStore>()(
  persist(
    (set, get) => {
      return {
        cart: [],
        addToCart: (item) =>
          set((state) => {
            const existingItem = state.cart.find(
              (i) => i.item_id === item.item_id
            );
            //if the item already exists in the cart , increase the qunatity by 1
            if (existingItem) {
              return {
                cart: state.cart.map((i) =>
                  i.item_id === item.item_id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
                ),
              };
            }
            //if the item not present in the cart , then add it to the cart (makes quantity 1)
            else {
              return {
                cart: [...state.cart, { ...item, quantity: 1 }],
              };
            }
          }),
        removeFromCart: (item) =>
          set((state) => {
            //if the item that we want to remove from cart has >1 quantity (then reduce the quantity by 1)
            if (item.quantity > 1) {
              return {
                cart: state.cart.map((i) =>
                  i.item_id === item.item_id
                    ? { ...i, quantity: i.quantity - 1 }
                    : i
                ),
              };
            }
            //remove the item from the cart m
            else {
              return {
                cart: state.cart.filter((i) => i.item_id !== item.item_id),
              };
            }
          }),
        deleteFromCart: (item) =>
          set((state) => {
            return {
              cart: state.cart.filter((i) => i.item_id !== item.item_id),
            };
          }),
        totalPrice: () => {
          const { cart } = get();
          return cart.reduce((total, item) => {
            return total + item.quantity * item.discounted_price;
          }, 0);
        },
      };
    },
    {
      name: "food-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
