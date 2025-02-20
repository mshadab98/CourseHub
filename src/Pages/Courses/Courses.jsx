import React, { useState } from "react";
import courses from "../../DummyData/coursesData"; // Data import kiya
import CourseCard from "../Courses/CoursesCard"; // CourseCard import kiya

const CourseList = () => {
  const [showAll, setShowAll] = useState(false);

  // Pehle sirf 3 courses show karna

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <div className="p-5">
      <h2 className="text-5xl font-extrabold text-center">Available <span className="text-blue-600">Courses</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Show More/Show Less Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showAll ? "Show Less Courses" : "See More Courses"}
        </button>
      </div>
    </div>
  );
};

export default CourseList;
