import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../../DummyData/coursesData";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "../../redux/coursesSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);

  const course = coursesData.find((c) => c.id === parseInt(id));

  const handleBuyNow = () => {
    const alreadyEnrolled = enrolledCourses.some((c) => c.id === course.id);
    
    if (!alreadyEnrolled) {
      dispatch(enrollCourse(course));
      toast.success("Course successfully enrolled!");
      navigate("/dashboard");
    } else {
      toast.error("You are already enrolled in this course!");
    }
  };

  if (!course) {
    return <h2 className="text-center text-red-500 text-xl">Course Not Found!</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <img src={course.thumbnail} alt={course.name} className="w-full h-60 object-cover rounded-md" />
      <h1 className="text-2xl font-bold mt-4">{course.name}</h1>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <p className="text-sm text-gray-600 mt-2 font-semibold">Instructor: {course.instructor}</p>

      <div className="flex justify-between mt-6">
        <button onClick={() => navigate(-1)} className="px-6 py-3 bg-gray-500 text-white rounded-lg">
          Back
        </button>
        <button onClick={handleBuyNow} className="px-6 py-3 bg-green-500 text-white rounded-lg">
          Buy Now
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default CourseDetails;
