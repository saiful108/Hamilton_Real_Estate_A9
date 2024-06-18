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
import Terms from "../Pages/Auth/Terms";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Componets/UserProfile";
import UpdateProfile from "../Componets/UpdateProfile";



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
            path:'/user',
            element:<PrivateRoute>
              <UserProfile/>
            </PrivateRoute>
        },
        {
            path:'/update',
            element:<PrivateRoute>
              <UpdateProfile/>
            </PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
                {
          path:'/terms',
          element:<Terms></Terms>
        },
        {
          path:'/estate',
          element:<Estate></Estate>,
          loader:()=>fetch('../../fake.json')
        },
        {
          path:'/estate/:idx',
          element:<PrivateRoute>
            <Estate_Details></Estate_Details>
          </PrivateRoute>,
          loader:()=>fetch(`../../fake.json`)

        }
      ]
    },
  ]);