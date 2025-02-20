import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img src={course.thumbnail} alt={course.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-extrabold mt-2">{course.name}</h3>
      <p className="text-gray-700 font-bold">{course.description}</p>
      <p className="text-sm text-gray-600 font-semibold">Instructor: {course.instructor}</p>
      <p className="text-sm text-gray-600 font-semibold">Duration: {course.duration}</p>
      <p className="text-sm text-green-600 font-bold">{course.enrollmentStatus}</p>
      <Link to={`/courseDetails/${course.id}`}>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-bold rounded-lg shadow-md transform hover:scale-105">
            Explore Courses
          </button>
        </Link>
    </div>
  );
};

export default CourseCard;
