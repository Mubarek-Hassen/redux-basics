import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  counter: 0,
  showCounter: true,
}

createSlice({
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

export const INCREMENT = 'increment'

const counterReducer =(state = initialState, action)=>{
  if (action.type===INCREMENT){
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'increaseby5'){
    return {
      showCounter: state.showCounter,
      counter: state.counter + action.amount,
    }
  }
  if (action.type==='decrement'){
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'toggle'){
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
}

const store = createStore(counterReducer);

export default store