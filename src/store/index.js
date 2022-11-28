
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { 
  counter: 0,
  showCounter: true,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    incrementMethod(state){
      state.counter++;
    },
    decrementMethod(state){
      state.counter--;
    },
    increaseMethod(state, action){
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }
})

const initialAuthState = {
  isAuthenticated: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logIn(state){
      state.isAuthenticated = true;
    },
    logOut(state){
      state.isAuthenticated = false;
    }
  }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions


const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export default store