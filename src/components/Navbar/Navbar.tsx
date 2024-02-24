import { MouseEventHandler, ReactNode, RefObject, useContext, useRef, useState } from "react";
import { cart_icon, logo, nav_dropdown_icon } from "../assets/images";
import { Element } from "./types/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext/ShopContext";

type Props = {};

export default function Navbar({}: Props): JSX.Element {

  const [menu, setMenu] = useState<string>("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef<HTMLUListElement>()

  // changing state handler string

  const changeState = (state: string): void => {
    setMenu(state);
  };

  // if the state condition is met then it will display hr

  const ifStateis = (state: string): Element => {
    if (menu === state) {
      return <hr />;
    } else {
      return null;
    }
  };

  // Dropdown Toggle 

  const dropdown_toggle: MouseEventHandler<HTMLImageElement> = (e) => {
      menuRef.current?.classList.toggle('nav-menu-visible');
      const event = e.target as HTMLImageElement
      event.classList.toggle('open')
    }

  const removeToken = () => {
    localStorage.removeItem('auth-token')
    window.location.replace('/')
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={`${logo}.avif`} alt="logo image" />
        <p>SHOPPER CART</p>
      </div>
      <img onClick={dropdown_toggle} src={`${nav_dropdown_icon}.avif`} alt="dropdown" className="nav-dropdown" />
      <ul ref={menuRef as RefObject<HTMLUListElement>} className="nav-menu">
        <li onClick={() => changeState("shop")}>
          <Link to={"/"}>Shop</Link> {ifStateis("shop")}
        </li>
        <li onClick={() => changeState("mens")}>
          <Link to={"/mens"}>Mens</Link> {ifStateis("mens")}
        </li>
        <li onClick={() => changeState("womens")}>
          <Link to={"/womens"}>Womens</Link> {ifStateis("womens")}
        </li>
        <li onClick={() => changeState("kids")}>
          <Link to={"/kids"}>Kids</Link> {ifStateis("kids")}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? <button onClick={removeToken}>Logout</button> : 
           <Link to={'/login'}>
              <button>Login</button>
            </Link>
        }
        <Link to={'/cart'}>
            <img src={`${cart_icon}.avif`} alt="cart image" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems() as ReactNode}</div>
      </div>
    </div>
  );
}
