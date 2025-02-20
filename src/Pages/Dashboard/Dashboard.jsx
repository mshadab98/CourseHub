import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse, markCompleted } from "../../redux/coursesSlice";

const Dashboard = () => {
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Student Dashboard</h1>

        {enrolledCourses.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No courses enrolled yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white p-5 rounded-lg shadow-lg">
                <img src={course.thumbnail} alt={course.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-bold mt-3 text-gray-900">{course.name}</h3>
                <p className="text-gray-700 font-medium">Instructor: <span className="font-semibold">{course.instructor}</span></p>
                <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                <p className="text-sm text-gray-600">Schedule: {course.schedule}</p>
                <p className="text-sm text-gray-600">Location: {course.location}</p>
                
                <p className="mt-2 text-gray-800 font-semibold">Description:</p>
                <p className="text-gray-600 text-sm">{course.description}</p>

                <p className="mt-2 text-gray-800 font-semibold">Prerequisites:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5">
                  {course.prerequisites.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <p className="mt-2 text-gray-800 font-semibold">Syllabus:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5">
                  {course.syllabus.map((week, index) => (
                    <li key={index}><span className="font-semibold">Week {week.week}:</span> {week.topic} - {week.content}</li>
                  ))}
                </ul>

                <p className="mt-2 text-gray-800 font-semibold">Enrolled Students:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5">
                  {course.students.map(student => (
                    <li key={student.id}>{student.name} ({student.email})</li>
                  ))}
                </ul>

                <p className={`mt-3 text-sm font-bold ${course.completed ? "text-green-600" : "text-yellow-600"}`}>
                  {course.completed ? "Completed" : "In Progress"}
                </p>

                <div className="flex justify-between mt-4">
                  <button 
                    onClick={() => dispatch(markCompleted(course.id))}
                    className={`px-4 py-2 rounded ${
                      course.completed ? "bg-green-600" : "bg-gray-500"
                    } text-white`}
                  >
                    {course.completed ? "Mark as Incomplete" : "Mark as Completed"}
                  </button>

                  <button 
                    onClick={() => dispatch(removeCourse(course.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
