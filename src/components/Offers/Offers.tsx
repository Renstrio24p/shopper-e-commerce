import { Props } from "./types/Offers";
import './Offers.css'
import { exclusive_image } from "../assets/images";

export default function Offers({}: Props) {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={`${exclusive_image}.avif`} alt="exclusive image" />
        </div>
    </div>
  )
}