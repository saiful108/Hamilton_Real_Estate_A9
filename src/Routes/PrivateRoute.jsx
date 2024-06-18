import { useContext } from "react";
import {  Navigate, useLocation, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MoonLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
   
    console.log(location.pathname);
    
    if(loading){
        return <MoonLoader className="mx-auto w-96 h-96 items-center"
        color="#6a126b"
        cssOverride={{}}
        speedMultiplier={1}
      />
    }
    if(user){
        return children;
    }
    return    <Navigate to="/login" state={{from:location}} replace/>
};

export default PrivateRoute;