import { Props } from "./types/NewCollections";
import Item from "../items/Item";
import './NewCollections.css'
import { useEffect, useState } from "react";
import { Product } from "../../resources/types/Product";

export default function NewCollections({}: Props) {

  const [new_collection,setNew_collectio] = useState<Product>([])

  useEffect(()=>{
    fetch('http://localhost:5100/newofflinecollection')
    .then((res: Response) => res.json())
    .then((data: Product) => setNew_collectio(data))
  },[])

  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} props={{...item}} />
            })}
        </div>
    </div>
  )
}