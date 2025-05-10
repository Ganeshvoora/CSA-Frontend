//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import AdminSignup from './pages/AdminSignup'
import UserSignup from './pages/UserSignup'
import UserSignin from './pages/UserSignin'
import AdminSignin from './pages/AdminSignin'
import NotFound from './pages/NotFound'
import MyPurchases from './pages/MyPurchases'
import AdminCourses from './pages/AdminCourses'
import CreateCourse from './pages/CreateCourse'
import UpdateCourse from './pages/UpdateCourse'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Courses /></>
    },
    {
      path: "/admin/signup",
      element: <><Navbar /><AdminSignup /></>
    },
    {
      path: "/admin/signin",
      element: <><Navbar /><AdminSignin /></>
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
      path: "/user/signup",
      element: <><Navbar /><UserSignup /></>
    },
    {
      path: "/user/signin",
      element: <><Navbar /><UserSignin /></>
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

