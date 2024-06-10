import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

const Main = () => {
    return (
        <div className="max-w-6xl mx-auto bg-fuchsia-500">
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;