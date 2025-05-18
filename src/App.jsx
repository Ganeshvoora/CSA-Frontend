//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import MyPurchases from './pages/MyPurchases'
import AdminCourses from './pages/AdminCourses'
import CreateCourse from './pages/CreateCourse'
import UpdateCourse from './pages/UpdateCourse'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /></>
    },
    {
      path: "/signin",
      element: <><Navbar /><Signin /></>
    },
    {
      path: "/admin/courses",
      element: <><Navbar /><AdminCourses /></>
    },
    {
      path: "/admin/create-course",
      element: <><Navbar /><CreateCourse /></>
    },
    {
      path: "/admin/update-course/:id",
      element: <><Navbar /><UpdateCourse /></>
    },
    {
      path: "/user/my-purchases",
      element: <><Navbar /><MyPurchases /></>
    },
    {
      path: "/*",
      element: <><Navbar /><NotFound /></>
    }
  ])
  return (<>

    <RouterProvider router={router} />
  </>
  )
}

export default App

