import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Componets/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";

export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path:'/signIn',
            element:<SignIn/>
        },
        {
            path:'/signUp',
            element:<SignUp/>
        }
      ]
    },
  ]);