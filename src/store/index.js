// import { createStore } from "redux";

// const reducerFunc = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

// const store = createStore(reducerFunc);

// export default store;

// const reducerFunc = (state = { counter: 0, showToggle: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showToggle: state.showToggle,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showToggle: state.showToggle,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       showToggle: state.showToggle,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showToggle: !state.showToggle,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export default store;
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
