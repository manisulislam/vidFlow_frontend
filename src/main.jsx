import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import WelcomePage from "./components/WelcomePage/WelcomePage"
import SignUp from "./components/SignUp/SignUp"
import LogIn from "./components/LogIn/LogIn"
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"


const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<WelcomePage/>
      },
      {
        path:"sign-up",
        element:<SignUp/>
      },
      {
        path:"login",
        element:<LogIn/>
      },
      {
        path:"about-us",
        element:<AboutUs/>
      },
      {
        path:"contact-us",
        element:<ContactUs/>
      },
      
     
    ],
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
