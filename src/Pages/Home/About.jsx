import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-100 text-gray-800">

      

      <div className="max-w-4xl text-center space-y-6">

        

        <h2 className="text-5xl font-extrabold text-blue-600">
          About <span className="text-gray-900">Course Hub</span>
        </h2>

       
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to <span className="font-semibold">Course Hub</span>! Your ultimate learning  
          platform where knowledge meets convenience. Explore a wide range of courses  
          designed to help you grow and enhance your skills.  
          Learning has never been this easy – just browse, enroll, and start your journey!
        </p>

        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-xl font-semibold text-gray-900">
            "Empowering learners with the skills they need to succeed!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
