import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";

const Main = () => {
    return (
        <div className="max-w-6xl mx-auto bg-fuchsia-500">
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;