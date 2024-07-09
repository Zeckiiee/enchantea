import imageA from "../assets/pictures/imageA.jpg";
import imageB from "../assets/pictures/imageB.jpg";
import imageC from "../assets/pictures/imageC.jpg";
import imageD from "../assets/pictures/imageD.jpg";
import { SiTiktok } from "react-icons/si";
import { TfiFacebook } from "react-icons/tfi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { GrTwitter } from "react-icons/gr";
import Navbar from "../components/Navbar/Navbar"
import myBackground from '../assets/pictures/myBackground.png'

export default function Home() {
  const icons = [
    {id:1, Logo: <SiTiktok/>},
    {id:2, Logo: <TfiFacebook/>},
    {id:3, Logo: <PiInstagramLogoFill/>},
    {id:4, Logo: <GrTwitter/>}
  ]
  
    
  return (
    <>
     <div  className=' flex-col-reverse lg:flex-row  flex justify-evenly items-center w-full relative h-fit bg-[#FFF5E3] bg-cover  bg-center' style={{backgroundImage:`url(${myBackground})`}}>
       
       <div className='flex custom-height w-full items-center justify-center '>

       <div className="custom-left-entrance flex flex-col items-center">
       <h1 className='lg:text-3xl py-5 font-extrabold'>Discover the Magic of Enchantea</h1>
       <div className=' flex items-center flex-col lg:w-[35rem] gap-10 px-2 text-[#000000]'>
               
               <p className='lg:text-xl '>Where Flavor Meets Fantasy, Sip into Enchantment with Every Brew! Immerse yourself in a world of delightful blends, where each cup tells a tale of taste and magic. Discover the extraordinary in every drop at Enchantea your journey to tea enchantment begins here!</p>
               <div className=" flex w-[28rem] md:w-[35rem] justify-between items-center">
                 <div className="flex gap-4">
                 {icons.map((icon)=>{
                   return(
                     <div key={icon.id} className=" w-8 h-8 md:w-12 md:h-12 md:text-2xl cursor-pointer duration-200 hover:translate-y-[-5px] hover:translate-x-[-5px] rounded-lg flex justify-center items-center bg-[#C1905E] text-[#FFF5E3]">{icon.Logo}</div>
                   )
                   
                 })}
                 </div>
                  <button className=' duration-200 hover:translate-y-[-5px] hover:translate-x-[-5px] bg-[#f9b83c] md:w-48 w-28 py-3 rounded-lg font-bold text-black hover:'>Buy Now!</button>
               </div>
           </div>
       </div>

       </div>
       <div className="hidden lg:flex custom-right-entrance relative justify-center items-center custom-height w-full ">
       
          <div className="rounded-lg overflow-hidden absolute w-52 mb-[20rem] ml-[15rem] hover:z-10 hover:translate-y-[-40px] duration-500 hover:translate-x-[20px]">
           <img src={imageA} alt="" />
          </div>
          <div className="rounded-lg overflow-hidden absolute w-48 mt-[15rem] mr-[15rem] hover:z-10 hover:translate-y-[25px] hover:translate-x-[-25px] duration-500">
           <img src={imageC} alt="" />
          </div>
          <div className="rounded-lg overflow-hidden absolute w-48 mb-[15rem] mr-[15rem] hover:z-10 hover:translate-y-[-45px] hover:translate-x-[-50px] duration-500">
           <img src={imageD} alt="" />
          </div>
          <div className="rounded-lg overflow-hidden absolute w-48 hover:scale-110 hover:z-10 duration-500">
           <img src={imageB} alt="" />
          </div>
          
       </div>
       
       
   </div></>
   
  )
}
