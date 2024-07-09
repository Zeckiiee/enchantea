import { useState } from "react"
import exImg from "../../assets/pictures/img5.jpg"

export default function Card({src, onClick, isActive}) {
  
  return (
    <>
    <div className="w-40 h-40 flex items-center">
       <div onClick={onClick} className={` ${isActive ? "duration-500 scale-x-[-1] -translate-y-5" : ""}  w-40 h-40 overflow-hidden flex bg-pink-200 rounded-lg`}>
          <div style={{backgroundImage: `url(${src})`}} className={`bg-cover bg-center text-sm font-light text-white bg-[#F0C88C] overflow-hidden w-40 h-40 absolute rounded-lg scale-x-[-1]  ${isActive ? " z-20 " : ''}`}>
           <div className="w-full h-full bg-black overflow-hidden bg-opacity-10 backdrop-blur-sm">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quod!</p>
           </div>
          </div>
         <img className={`object-cover w-full h-auto z-10 scale-x-[-1] `} src={src} alt="milktea" />  
       </div>
    </div>
    
    </>
    
  )
}
