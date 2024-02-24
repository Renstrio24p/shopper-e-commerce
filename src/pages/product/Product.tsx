import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext/ShopContext';
import Breakcrum from '../../components/Breakcrums/Breakcrum';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../resources/types/Product';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import './Product.css';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e: Product[number]) => e.id === Number(productId));

  const history = useNavigate()

  if(!product){
    history('/')
  }

  return (
    <div className='product'>
        {product && <Breakcrum product={product} />} 
        {product && <ProductDisplay product={product} />} 
        {product && <DescriptionBox product={product} />} 
        {product && <RelatedProducts product={product} />} 
    </div>
  );
}
