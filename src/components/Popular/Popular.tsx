import { useEffect, useState } from 'react'
import Item from '../items/Item'
import './Popular.css'
import { Props } from './types/Popular'
import { Product } from '../../resources/types/Product'

export default function Popular({}: Props) {

  const [popularProducts,setPopularProducts] = useState<Product>([])

  useEffect(()=>{
     fetch('http://localhost:5100/popularinwomen')
     .then((res: Response) => res.json())
     .then((data: Product) => setPopularProducts(data))
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} props={{...item}} />
            }
            )}
        </div>
    </div>
  )
}