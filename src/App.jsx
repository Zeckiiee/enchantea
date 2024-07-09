
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import { Route, Routes} from 'react-router-dom';
//import Carousel from "./components/PracticeCarousel/Carousel";
function App() {
  
  return (
    // <div>
    //   <Carousel/>
    // </div>
    <div className="overflow-hidden">
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/products" element={<Products/>}/>          
        <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes>
    </div>
  )
  /*<Route path="burger" element={<Burger/>}/>
              <Route path="cookies" element={<Cookies/>}/>
              <Route path="coffee" element={<Coffee/>}/>
              <Route path="fries" element={<Fries/>}/>*/
}

export default App
