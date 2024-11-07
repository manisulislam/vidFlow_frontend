import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import DashboardLayout from './Layout/DashboardLayout'
import WelcomePage from "./components/WelcomePage/WelcomePage"
import SignUp from "./components/SignUp/SignUp"
import LogIn from "./components/LogIn/LogIn"
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"
import ProtectedRoute from './components/ProtectedRoute'
import ProfileDashboard from "./components/Profile/ProfileDashboard"
import VideoList from "./components/Profile/VideoList"
import ProfileSettings from "./components/Profile/ProfileSettings"

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
    
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>,
    children:[
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfileDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'videos',
        element: (
          <ProtectedRoute>
            <VideoList />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        ),
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
