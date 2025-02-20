import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <>
    <div 
      className="h-screen flex flex-col justify-center items-center text-gray-900 text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}
    >
      {/* home section where image show and some text and explore buttn */}
      <div className="max-w-3xl">

        
        <h2 className="text-5xl font-extrabold">
          Welcome to <span className="text-blue-600">Course Hub</span>
        </h2>

        
        <p className="text-2xl font-bold mt-15">
          Explore various courses and enhance your skills.
        </p>

        {/*explore button to get the access of all cources */}
        
        <Link to="/courses">
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-bold rounded-lg shadow-md transform hover:scale-105">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
    <About/>
    </>
  );
};

export default Home;
