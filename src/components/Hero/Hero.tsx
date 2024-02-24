import { arrow_icon, hand_icon, hero_image } from '../assets/images'
import './Hero.css'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={`${hand_icon}.avif`} alt="hand image" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={`${arrow_icon}.avif`} alt="arrow image" />
            </div>
        </div>
        <div className="hero-right">
            <img src={`${hero_image}.avif`} alt="hero image" />
        </div>
    </div>
  )
}