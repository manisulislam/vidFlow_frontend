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
import VideoLayout from './Layout/VideoLayout'
import LikedVideos from './components/Video/LikedVideos'
import History from './components/Video/History'
import Playlist from './components/Video/Playlist'
import AllVideos from './components/Video/AllVideos'
import PricingSection from './components/Price/PricingSection'
import VideoDetail from './components/Video/VideoDetail'

const router= createBrowserRouter([
  // main layout start
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
        path:"pricing",
        element:<PricingSection/>
      },
      {
        path:"contact-us",
        element:<ContactUs/>
      },
      
      
     
    ],
    
  },

  // dashboard layout start
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
  },

  // video layout start
  {
    path: "/home/video",
    element: <VideoLayout/>,
    children:[
      {
        path: "liked",
        element: <LikedVideos/>
      },
      {
        path: "all-videos",
        element:  <AllVideos/>
      },
      {
        path: "history",
        element: <History/>
      },
      {
        path: "playlist",
        element: <Playlist/>
      },
      {
        path: "video/:id",
        element: <VideoDetail/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
