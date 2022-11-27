
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { 
  counter: 0,
  showCounter: true,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementMethod(state){
      state.counter++;
    },
    decrementMethod(state){
      state.counter--;
    },
    increaseMethod(state, action){
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }
})

export const counterActions = counterSlice.actions


const store = configureStore({
  reducer: counterSlice.reducer
});

export default store