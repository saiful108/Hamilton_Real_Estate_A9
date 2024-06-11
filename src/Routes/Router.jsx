import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Componets/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import Estate from "../Componets/Estate";
import Estate_Details from "../Componets/Estate_Details";


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