import { createSlice } from "@reduxjs/toolkit";
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

export default counterSlice