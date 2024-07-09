import { IoIosArrowDown } from "react-icons/io";

import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import { useRef } from "react";




export default function LandingPage() {

  const componentRef = useRef(null);

  const handleButtonClick = () => {
    const offsetTop = 0; 
    componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    
    <>
    <div className=' flex justify-center items-center w-screen h-screen landing-page-background'>
        <div className=" w-full h-full flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="h-40 flex flex-col items-center">
               <h1 className=" text-8xl md:text-9xl text-[#cab08d] font-extrabold">Echantea</h1>
               <div className="text-6xl cursor-pointer">
                </div> 
            </div>
        </div>
    </div>
    <Navbar/>
    <Home ref={componentRef} />

    </>
    
  )
}
