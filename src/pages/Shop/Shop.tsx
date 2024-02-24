import Hero from '../../components/Hero/Hero'
import NewCollections from '../../components/NewCollections/NewCollections'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Offers from '../../components/Offers/Offers'
import Popular from '../../components/Popular/Popular'
import './Shop.css'

type Props = {}

export default function Shop({}: Props) {
  return (
    <div>
       <Hero />
       <Popular />
       <Offers />
       <NewCollections />
       <NewsLetter />
    </div>
  )
}