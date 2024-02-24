import './DescriptionBox.css'
import { Product } from './types/DescriptionBox'

export default function DescriptionBox({product}: {product: Product}) {

    const pro = product

    console.log(pro)

  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quisquam eum maiores aliquid, molestiae inventore nam eligendi libero, tenetur reiciendis voluptates! Repellat esse aperiam pariatur ducimus iure nihil incidunt, id ad eos sunt natus ullam eveniet nulla repellendus mollitia. Molestias blanditiis nostrum ratione ad earum, debitis quo a ea aperiam?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim ad laborum numquam voluptates cupiditate nam ducimus odit natus minima accusamus, fugit unde. Quaerat ad mollitia suscipit accusantium nesciunt enim.</p>
        </div>
    </div>
  )
}