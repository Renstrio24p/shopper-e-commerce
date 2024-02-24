import { Product } from './types/RelatedProducts'
import './RelatedProducts.css'
import data_product from '../../resources/data/data'
import Item from '../items/Item'

export default function RelatedProducts({product}:{product: Product}) {

  const _pro = product
  console.log(_pro)

  return (
    <div className='relatedproducts'>
       <h1>Related Product</h1>
       <hr />
       <div className="relatedproducts-item">
         {data_product.map((item,i)=>{
            return <Item key={i} props={item} />
         })}
       </div>
    </div>
  )
}