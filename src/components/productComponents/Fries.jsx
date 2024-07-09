import ProductCard from "./productCard/ProductCard"
import fries1 from "../../assets/pictures/fries1.jpg"
import fries2 from "../../assets/pictures/fries2.jpg"
import fries3 from "../../assets/pictures/fries3.jpg"
import fries4 from "../../assets/pictures/fries4.jpg"
import fries5 from "../../assets/pictures/fries5.jpg"
import fries6 from "../../assets/pictures/fries6.jpg"
import fries7 from "../../assets/pictures/fries7.jpg"
import fries8 from "../../assets/pictures/fries8.jpg"
export default function Fries() {
  const fries = [
    {id:1, ulr:fries1},
    {id:2, ulr:fries2},
    {id:3, ulr:fries3},
    {id:4, ulr:fries4},
    {id:5, ulr:fries5},
    {id:6, ulr:fries6},
    {id:7, ulr:fries7},
    {id:8, ulr:fries8},
  ]
  return (
    <div className=' w-full h-full'>
    <div className="w-full text-center text-3xl font-extrabold">
       <h1 className="pb-10">Fries</h1>
    </div>
    <div className=" flex gap-5 flex-wrap justify-center items-center">
        {fries.map((index)=>{
          return(
            <ProductCard key={index.id} pictureUrl={index.ulr}/>
          )
        })}
    </div> 
  </div>
  )
}
