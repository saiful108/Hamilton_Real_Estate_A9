import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { ToastContainer } from "react-toastify";
 // You can also use <link> for styles
// ..
AOS.init();
const Main = () => {
    return (
        <div className="max-w-6xl mx-auto ">
              <ToastContainer />
            <Navbar></Navbar>
           <Outlet ></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;