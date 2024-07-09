import Slider from "react-slick";
import img1 from '../assets/pictures/img1.jpg'
import img2 from '../assets/pictures/img2.jpg'
import img3 from '../assets/pictures/img3.jpg'
import img4 from '../assets/pictures/img4.jpg'
import img5 from '../assets/pictures/img5.jpg'
import img6 from '../assets/pictures/img6.jpg'
import img7 from '../assets/pictures/img7.jpg'
import img8 from '../assets/pictures/img8.jpg'
import img9 from '../assets/pictures/img9.jpg'
import img10 from '../assets/pictures/img10.jpg'
import img11 from '../assets/pictures/img11.jpg'
import Card from "../components/card/Card";
import { useState } from "react";
import Burger from "../components/productComponents/Burger";
import Cookies from "../components/productComponents/Cookies";
import Coffee from "../components/productComponents/Coffee";
import Fries from "../components/productComponents/Fries";
import productBg from "../assets/pictures/productBg.png";
import Navbar from "../components/Navbar/Navbar";


export default function Products() {  
  const settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow:false,
    prevArrow:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    { id:1, imageSrc: img1},
    { id:2, imageSrc: img2},
    { id:3, imageSrc: img3},
    { id:4, imageSrc: img4},
    { id:5, imageSrc: img5},
    { id:6, imageSrc: img6},
    { id:7, imageSrc: img7},
    { id:8, imageSrc: img8},
    { id:9, imageSrc: img9},
    { id:10, imageSrc: img10},
    { id:11, imageSrc: img11}
  ]
  const otherProducts = [
    {p:1, product: 'Burger' , component: <div><Burger/></div>, link: "burger"},
    {p:2, product: 'Cookies' ,  component: <div><Cookies/></div>, link: "cookies" },
    {p:3, product: 'Coffee' ,  component: <div><Coffee/></div>, link: "coffee"},
    {p:4, product: 'Fries' ,  component: <div><Fries/></div>, link: "fries"},
  ]

const[setter, setSetter] = useState(null);
const[Show, setShow]= useState(null)

const handleClick = (id) => {
  setSetter(id);
  setShow(null)
}
const handleShow = (comp) =>{
  setShow(comp)
  setSetter(null)
}

  return (
    <>
    <Navbar/>
    <div className={`flex flex-col justify-center w-full h-full relative bg-cover  bg-center`} style={{backgroundImage:`url(${productBg})`}}>

     
<div className="h-full flex flex-col justify-between">
<div className="w-full text-6xl text-center font-extrabold py-5 px-10">
  <h1>Our Products</h1> 
<Slider {...settings} className=" flex w-full">
  {images.map((src) =>{
    return(
        <Card 
        onClick={()=>handleClick(src.id)}
        key={src.id}
        src={src.imageSrc}
        isActive={setter === src.id}
        />
     )
  })} 
</Slider> 
</div> 

<div className=" w-full flex h-full flex-col md:flex-row ">
  <div className=" flex flex-col items-center gap-10 w-full h-[15rem] md:h-[40rem]">
    <div className=" text-center py-2 text-2xl">
      <h1>List of Other Product</h1>
    </div>
    <div className=" flex justify-center  items-center rounded-xl bg-[#f0c88c63] w-3/5 md:w-5/6 h-96 ">
      <ul className="  flex md:flex-col flex-wrap gap-5 md:w-80 items-center md:text-2xl px-2 md:px-0 ">
      {otherProducts.map((index)=>{
        return(
          <li className="border-black border-2 cursor-pointer border-none md:w-72 text-center py-3 px-3 bg-[#f9b83c] rounded-lg
           hover:translate-y-[-5px] duration-150" key={index.p} onClick={()=>handleShow(index.component)}>{index.product}</li>
        )
      })}
      </ul>
    </div>
  </div>

  <div className=" w-full py-5 md:py-0">
   {Show}
  </div>
  <svg className="absolute top-0 -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cab08d" fill-opacity="1" d="M0,64L40,64C80,64,160,64,240,74.7C320,85,400,107,480,128C560,149,640,171,720,160C800,149,880,107,960,117.3C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

</div>
</div>
</div>
    </>
    //<Outlet/>
    //<Link to={`/products/${index.link}`}></Link>
  )
}
