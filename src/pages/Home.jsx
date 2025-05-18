import { useState, useEffect } from 'react'
import Course from '../components/Course';


const Home = () => {
  const [coursesList, setCoursesList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`https://csa-backend.vercel.app/courses/preview`)
      let data = await response.json();
      setCoursesList(data.course);
    }
    fetchData();
  }, [])

  return (
    <div>
      {/*make a hero section of this website*/}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-24 flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Welcome to <span className="text-blue-500">Computer Science Academy</span>
          </h1>
          <p className="text-2xl mb-10 text-gray-300">
            Your gateway to mastering computer science, from fundamentals to future tech.
          </p>
          <a
            href="#courses"
            className="inline-block bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🚀 Explore Courses
          </a>
        </div>
      </div>


      <div id='courses' className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Courses</h1>
            <p className="text-xl text-gray-600 mb-12">
              Explore our comprehensive selection of computer science courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              coursesList.map((course) => <Course course={course} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
