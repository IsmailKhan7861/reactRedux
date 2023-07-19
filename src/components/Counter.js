import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   console.log(counter);
//   const dispatch = useDispatch();

//   const toggleCounterHandler = () => {};
//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

class Counter extends Component {
  constructor() {
    super();
  }
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
        <button onClick={this.props.toggleCounterHandler}>
          Toggle Counter
        </button>
      </main>
    );
  }
}
const mapToProp = (state) => {
  return {
    counter: state.counter,
  };
};
const dispatchFunc = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapToProp, dispatchFunc)(Counter);
