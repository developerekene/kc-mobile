import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/user";
import { coursesSlice } from "./slice/coursesSlice";

const rootReducer = combineReducers({
    // Add all your slice reducers here
    user: userSlice.reducer,
    courses: coursesSlice.reducer
});

// 1. Configure the store using the root reducer directly.
export const store = configureStore({
    reducer: rootReducer,

});

// 2. Persistence objects (persistor) are removed.

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;