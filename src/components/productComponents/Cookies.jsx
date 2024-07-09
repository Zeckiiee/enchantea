import ProductCard from "./productCard/ProductCard"
import cookie1 from "../../assets/pictures/cookie1.jpg"
import cookie2 from "../../assets/pictures/cookie2.jpg"
import cookie3 from "../../assets/pictures/cookie3.jpg"
import cookie4 from "../../assets/pictures/cookie4.jpg"
import cookie5 from "../../assets/pictures/cookie5.jpg"
import cookie6 from "../../assets/pictures/cookie6.jpg"
import cookie7 from "../../assets/pictures/cookie7.jpg"
import cookie8 from "../../assets/pictures/cookie8.jpg"

export default function Cookies() {
  const cookies = [
    {id:1, ulr:cookie1},
    {id:2, ulr:cookie2},
    {id:3, ulr:cookie3},
    {id:4, ulr:cookie4},
    {id:5, ulr:cookie5},
    {id:6, ulr:cookie6},
    {id:7, ulr:cookie7},
    {id:8, ulr:cookie8},
  ]
  return (
    <div className=' w-full h-full'>
      <div className="w-full text-center text-3xl font-extrabold">
         <h1 className="pb-10">Cookies</h1>
      </div>
      <div className=" flex gap-5 flex-wrap justify-center items-center">
          {cookies.map((index)=>{
            return(
              <ProductCard key={index.id} pictureUrl={index.ulr}/>
            )
          })}
      </div> 
    </div>
    )}