import ProductCard from "./productCard/ProductCard"
import burger1 from "../../assets/pictures/burger1.jpg"
import burger2 from "../../assets/pictures/burger2.jpg"
import burger3 from "../../assets/pictures/burger3.jpg"
import burger4 from "../../assets/pictures/burger4.jpg"
import burger5 from "../../assets/pictures/burger5.jpg"
import burger6 from "../../assets/pictures/burger6.jpg"
import burger7 from "../../assets/pictures/burger7.jpg"

export default function Burger() {
  const burgers =[
    {id:1, ulr:burger1},
    {id:2, ulr:burger2},
    {id:3, ulr:burger3},
    {id:4, ulr:burger4},
    {id:5, ulr:burger5},
    {id:6, ulr:burger6},
    {id:7, ulr:burger7},
  ]
  return (
    <div className=' w-full h-full'>
      <div className="w-full text-center text-3xl font-extrabold">
         <h1 className="pb-10">Burgers</h1>
      </div>
      <div className=" flex gap-5 flex-wrap justify-center items-center">
          {burgers.map((index)=>{
            return(
              <ProductCard key={index.id} pictureUrl={index.ulr}/>
            )
          })}
      </div> 
    </div>
  )
}
