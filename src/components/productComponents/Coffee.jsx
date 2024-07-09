import ProductCard from "./productCard/ProductCard"
import coffee1 from "../../assets/pictures/coffee1.jpg"
import coffee2 from "../../assets/pictures/coffee2.jpg"
import coffee3 from "../../assets/pictures/coffee3.jpg"
import coffee4 from "../../assets/pictures/coffee4.jpg"
import coffee5 from "../../assets/pictures/coffee5.jpg"
import coffee6 from "../../assets/pictures/coffee6.jpg"
import coffee7 from "../../assets/pictures/coffee7.jpg"
import coffee8 from "../../assets/pictures/coffee8.jpg"

export default function Coffee() {
  const coffee = [
    {id:1, ulr:coffee1},
    {id:2, ulr:coffee2},
    {id:3, ulr:coffee3},
    {id:4, ulr:coffee4},
    {id:5, ulr:coffee5},
    {id:6, ulr:coffee6},
    {id:7, ulr:coffee7},
    {id:8, ulr:coffee8},
  ]
  return (
    <div className=' w-full h-full'>
      <div className="w-full text-center text-3xl font-extrabold">
         <h1 className="pb-10">Coffee</h1>
      </div>
      <div className=" flex gap-5 flex-wrap justify-center items-center">
          {coffee.map((index)=>{
            return(
              <ProductCard key={index.id} pictureUrl={index.ulr}/>
            )
          })}
      </div> 
    </div>
  )
}
