import { breadcrum_arrow_icon } from '../assets/images';
import './Breakcrum.css';
import { Product } from './types/Breakcrum';

export default function Breakcrum({ product }: {product: Product}) {

    const pro = product

  return (
      <div className='breadcrum'>
        Home
        <img src={`${breadcrum_arrow_icon}.avif`} alt="arrow icons" />
        Shop
        <img src={`${breadcrum_arrow_icon}.avif`} alt="arrow icons" />
        {pro.category}
        <img src={`${breadcrum_arrow_icon}.avif`} alt="arrow icons" />
        {pro.name}
    </div>
  );
}
