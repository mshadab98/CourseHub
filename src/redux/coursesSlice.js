import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  enrolledCourses: JSON.parse(localStorage.getItem("enrolledCourses")) || [],
};

const coursesSlice = createSlice({
  name: "course",
  initialState,


  // store stay the data while refresh the page we use save.localstorage bcz redux ka auto remove kr deta hai manually dtaa ko
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push(action.payload);
      localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses)); 
    },
    removeCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(course => course.id !== action.payload);
      localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses));
    },
    markCompleted: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.map(course =>
        course.id === action.payload ? { ...course, completed: !course.completed } : course
      );
      localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses)); 
    },
  },
});

export const { enrollCourse, removeCourse, markCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;
