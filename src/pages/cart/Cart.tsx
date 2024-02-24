import { Props } from './types/Cart'
import './Cart.css'
import CartItems from '../../components/CartItems/CartItems'

export default function Cart({}: Props) {
  return (
    <div className='cart'>
      <CartItems />
    </div>
  )
}