import picture from "../assets/pictures/aboutUsPicture.jpg"
import aboutusBg from "../assets/pictures/bgAboutus.png"
import aboutUsPicture1 from "../assets/pictures/aboutUsPic1.jpg"
import aboutUsPicture2 from "../assets/pictures/aboutUsPic2.jpg"
import Navbar from "../components/Navbar/Navbar"

export default function AboutUs() {
  return (
    <>
    <Navbar/>

<div className=" w-full h-fit bg-cover  bg-center " style={{backgroundImage:`url(${aboutusBg})`}}>

<div className="h-full flex flex-col gap-3">
  <div className="w-full flex justify-center items-center">
    <div className="w-4/5 py-20 px-10 mt-5 rounded-xl bg-[#C1905E] bg-opacity-5 backdrop-blur-md">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aspernatur, qui consequatur vel officia saepe earum nisi impedit fuga odit sapiente itaque odio cupiditate iste voluptate dolorem deserunt atque consectetur voluptatum obcaecati adipisci animi. Ad cumque est, reprehenderit culpa quisquam eaque delectus ipsa optio tempore accusantium odio quibusdam minima id labore similique inventore, alias beatae illo ducimus, praesentium molestiae. Voluptatum mollitia dignissimos nemo repellat repellendus necessitatibus. Quaerat maiores nemo tempora eligendi nisi distinctio blanditiis, enim debitis nam illo laboriosam, beatae commodi laborum? Ipsa consequatur laudantium reiciendis cupiditate provident nostrum eos dolorem vero maxime, tempora illum quae recusandae unde. Repudiandae, illum!
    </p>
    </div>
  </div>

  <div className="w-full flex pl-10">
    <div className="h-80 w-60 bg-slate-500 rounded-lg overflow-hidden custom-radius">
      <img src={aboutUsPicture1} alt="" className="w-full h-full object-cover object-center" />
    </div>
    <div className="w-2/4 top-0 pl-10 flex flex-col  justify-end">
      <h1 className="font-bold text-2xl">About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem laudantium error quasi, dicta perferendis quibusdam vero nobis libero aliquid dolores.
      </p>
    </div>
  </div>
  
  <div className="w-full flex justify-end pr-10">
    <div className="w-2/4 flex flex-col pt-10 pr-10">
      <h1 className="font-bold text-2xl text-end">Contact Us</h1>
      <p className="text-end">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem laudantium error quasi, dicta perferendis quibusdam vero nobis libero aliquid dolores.
      </p>
    </div>
    <div className="h-80 w-60 bg-slate-500 rounded-lg overflow-hidden custom-radius2">
      <img src={aboutUsPicture2} alt="" className="w-full h-full object-cover object-center" />
    </div>
  </div>

<div className="w-full flex justify-center items-center p-10">
   <iframe 
   
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.4057231138727!2d120.80986577515706!3d14.   858574585658893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.   1!3m3!1m2!1s0x339653a8dfe534e5%3A0xd507971c6f128c9b!2sNexBridge%20Technologies%20Inc.   !5e0!3m2!1sen!2sph!4v1709622331060!5m2!1sen!2sph" 
   width="700" 
   height="300" 
   style={{ border: "0" }} 
   allowfullscreen="" 
   loading="lazy" 
   referrerpolicy="no-referrer-when-downgrade">
   </iframe>
</div>
  {/* <div className="w-full justify-evenly flex">
    <div className="w-full h-[40rem] gap-2 py-5  flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold bg-[#e6b78db6] py-10 px-36 rounded-lg">About Us</h1>
      <img className="rounded-xl" src={picture} alt="" />
    </div>
    <div className=" h-[35rem] flex w-full justify-center items-center " >
     <div className=" flex flex-col gap-10 text-xl w-[40rem] h-96">
      <h2 className="text-center text-xl font-bold">Welcome to Enchantea - Where Magic Meets Tea!</h2>
     <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vel quod repellendus nesciunt excepturi odit officia deleniti. Ratione totam magni error doloribus dolorum corrupti obcaecati beatae, corporis nisi exercitationem vero fugit veniam magnam doloremque reiciendis culpa? Reiciendis eligendi iusto aut ratione laboriosam molestias quaerat quis officiis quasi, rerum ea, placeat maxime, ullam ipsam dolorem dignissimos repellat vel nulla temporibus recusandae eaque quo. Quaerat est iure provident libero? Repellat accusantium eaque, id nulla excepturi possimus exercitationem repellendus maxime. Tempore ea aliquid blanditiis dolorem neque necessitatibus libero, dicta cumque quam qui? Ab repellat, soluta tempora unde eius quas amet quia fuga suscipit?
      </p>
     </div>
    </div>
  </div> */}
</div>
</div>
    
    </>
  )
}
