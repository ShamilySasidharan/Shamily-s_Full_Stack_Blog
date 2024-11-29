import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  RouterProvider,
  createBrowserRouter
}  from "react-router-dom";
import LoginPage from './routes/LoginPage.jsx';
import SignupPage from './routes/Signup.jsx';
import HomePage from './routes/HomePage.jsx';
import WritePage from './routes/WritePage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react'


// CREATING THE ROUTING IN MAIN.JSX THEN PROVIDE THE appRouter to the RouterProvider
// Router before the outlet ***********************
// const appRouter = createBrowserRouter([
//   {
//     path:"/login",
//     element:<LoginPage/>
//   },
//   {
//     path:"/signup",
//     element:<SignupPage/>
//   },
//   {
//     path:"/",
//     element:<HomePage/>
//   },
//   {
//     path:"/write",
//     element:<WritePage/>
//   },
  
//   {
//     path:"/posts",
//     element:<PostListPage/>
//   },
//   {
//     path:"/:slug",
//     element:<SinglePostPage/>
//   },
//   {
//     path:"/singlePostPage",
//     element:<SinglePostPage/>
//   },
  
// ])



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// ROUTER AFTER THE OUTLET FROM THE MAINLAYOUT.JSX

const appRouter = createBrowserRouter([
  {
    // MainLayout will act as a parent with <Navbar/> <Outlet/>
    element:<MainLayout/>,
    children:[
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<SignupPage/>
      },
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/write",
        element:<WritePage/>
      },
      
      {
        path:"/posts",
        element:<PostListPage/>
      },
      {
        path:"/:slug",
        element:<SinglePostPage/>
      },
      {
        path:"/singlePostPage",
        element:<SinglePostPage/>
      },
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={appRouter} />
    </ClerkProvider>
  </StrictMode>,
)
