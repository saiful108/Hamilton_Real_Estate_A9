import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Componets/ErrorPage";
import Home from "../Pages/Home/Home";


import Estate from "../Componets/Estate";
import Estate_Details from "../Componets/Estate_Details";
import Login from "../Pages/Auth/Login";
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
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signUp',
            element:<SignUp/>
        },
        {
          path:'/estate',
          element:<Estate></Estate>,
          loader:()=>fetch('../../fake.json')
        },
        {
          path:'/estate/:idx',
          element:<Estate_Details></Estate_Details>,
          loader:()=>fetch(`../../fake.json`)

        }
      ]
    },
  ]);