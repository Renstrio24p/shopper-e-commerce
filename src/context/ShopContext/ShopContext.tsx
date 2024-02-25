import { createContext, ReactNode, useEffect, useState } from "react";
import { CartItems, ShopContextType } from "./types/Context";
import { Product } from "../../resources/types/Product";

const getDefaultCard = (): CartItems => {
    let cart: CartItems = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContext = createContext<ShopContextType>({
    all_product: [],
    cartItems: {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalCartAmount: () => {} ,
    getTotalCartItems: () => {} ,
});

const ShopContextProvider = (props: { children: ReactNode }) => {

    const [all_product,setAll_product] = useState<Product>([])
    const [cartItems, setCartItem] = useState<CartItems>(getDefaultCard())

    useEffect(()=>{
        fetch('http://localhost:5100/allproducts')
        .then((res: Response) => res.json())
        .then((data: any) => setAll_product(data))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:5100/getcart',{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: ""
            })
            .then((res: Response) => res.json())
            .then((data: unknown) => setCartItem(data as {}))
        }
    },[])

    const fetchCart = (itemId: number,times: number,link: string) => {
        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + times }))
        fetch(`http://localhost:5100/${link}`,{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    "auth-token":`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({'itemId':itemId})
            })
            .then((res: Response) => res.json())
            .then((data: Product) => console.log(data))
    }

    const addToCart = (itemId: number) => {
        if(localStorage.getItem('auth-token')){
            fetchCart(itemId,1,'addtocart')
        }
    }
    const removeFromCart = (itemId: number) => {
        if(localStorage.getItem('auth-token')){
            fetchCart(itemId,-1,'removefromcart')
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo!.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue: ShopContextType = {getTotalCartItems,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
