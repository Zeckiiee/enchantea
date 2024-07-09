import { Link, Outlet } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import Home from "../../pages/Home"



export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick =()=>setShow(!show)
    
  
  return (
    <>
    <div className="w-full h-24  text-[#000000] bg-[#FFF5E3] z-10 flex px-14 justify-between items-center shadow-xl border-b-[1px] border-gray-500 relative">
        <div className=' w-44 z-10'>
            <Link to={"/navbar/home"}><h1 className='text-3xl font-bold text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#f9b83c] via-[#dea14c] to-[#c1905e]'>Enchantea</h1></Link>
        </div>
        <div onClick={handleClick} className=' z-10 text-3xl block lg:hidden cursor-pointer'> 
        {show ? <FaXmark />  :  <IoMenu/>}
        </div>
   
        <ul className=' hidden lg:flex gap-10 text-lg font-semibold'>
            <li> <Link to={"/"}>Home</Link></li>
            <li> <Link to={"/products"}>Product</Link></li>
            <li> <Link to={"/aboutus "}>About us</Link> </li>
        </ul>

        <ul className={` ${show ? 'translate-x-[0]' :''}  duration-300 translate-x-[-100%]  absolute top-0 gap-20 w-[50%] flex flex-col text-2xl justify-center items-center  left-0 h-screen lg:hidden bg-[#FFF5E3] lg:gap-10 lg:text-lg font-semibold`}>
          <li> <Link to={"/"}>Home</Link> </li>
          <li> <Link to={"/products"}>Product</Link></li>
          <li> <Link to={"/aboutus "}>About us</Link> </li>
        </ul>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}
