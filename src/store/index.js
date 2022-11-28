import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./authSlice";

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions


const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export default store