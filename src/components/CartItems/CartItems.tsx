import { Props } from "./types/CartItems";
import './CartItems.css'
import { ReactNode, useContext } from "react";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import { remove_icon } from "../assets/images";

export default function CartItems({}: Props): JSX.Element {

    const { getTotalCartAmount, all_product ,cartItems, removeFromCart} = useContext(ShopContext)

    const separateCommas = (func: number) => {
        return func.toLocaleString()
    }

  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e,i)=>{
         if(cartItems[e.id] > 0) {
            return (
                <div key={i}>
                <div className="cartitems-format cartitems-format-main">
                    <img 
                        className="carticon-product-icon" 
                        src={`${e.image}`} 
                        alt="product image" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${separateCommas(e.new_price * cartItems[e.id])}</p>
                        <img 
                            className="cartitems-remove-icon"
                            src={`${remove_icon}.avif`}
                            alt="cross icon image"
                            onClick={()=>{removeFromCart(e.id)}}
                         />
                </div>
                <hr />
            </div>
            )
         }
         return null
       })}
       <div className="cartitems-down">
          <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                    <div className="cartitems-total-item">
                        <p>Sub Total</p>
                        <p>${separateCommas(Number(getTotalCartAmount())) as ReactNode}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${separateCommas(Number(getTotalCartAmount())) as ReactNode}</p>
                    </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
             <p>If you have a promocode, Enter it here.</p>
             <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
             </div>
          </div>
       </div>
    </div>
  )
}