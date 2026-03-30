import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../utils/TypesAndInterface/TypesAndInterface"; // the interface above

const initialState: Course[] = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // Add multiple courses at once
    addCourse: (state, action: PayloadAction<Course[]>) => {
      state.push(...action.payload); // spread the array into state
      //   console.log("From course slice", ...action.payload);
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      return state.filter((course) => course.id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      const index = state.findIndex(
        (course) => course.id === action.payload.id,
      );
      if (index !== -1) state[index] = action.payload;
    },
    setCourses: (state, action: PayloadAction<Course[]>) => {
      return action.payload;
    },
  },
});

export const { addCourse, removeCourse, updateCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
