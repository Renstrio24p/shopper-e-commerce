import { Props } from './types/NewsLetter'
import './NewsLetter.css'

export default function NewsLetter({}: Props) {
  return (
    <div className='newsletter'>
        <h1>GET Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div>
            <input type="email" name="email" placeholder='Your Email id' id="email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
