// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./coursesSlice";

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
