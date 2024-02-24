import { useContext } from "react";
import "./ShopCategory.css";
import { Props } from "./types/Category";
import { ShopContext } from "../../context/ShopContext/ShopContext";
import { dropdown_icon } from "../../components/assets/images";
import Item from "../../components/items/Item";

export default function ShopCategory({ category, banner }: Props): JSX.Element {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={`${banner}.avif`} alt={`${banner} image`} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={`${dropdown_icon}.avif`} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
            if(category === item.category){
              return <Item
                  key={i}
                  props={item}
              />
            } else {
              return null
            }
          })}
      </div>
      <div className="shopcategory-loadmore">
         Explore More
      </div>
    </div>
  );
}
