import { Product } from "../../../resources/types/Product";

export type Props = Product

export type CartItems = { [itemId: number]: number };

export type ShopContextType = {
    all_product: Props;
    cartItems: CartItems;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    getTotalCartAmount: () => void;
    getTotalCartItems: () => void;
};