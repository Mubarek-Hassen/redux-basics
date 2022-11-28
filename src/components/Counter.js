import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store';

// for the class based comp. example
// import {Component} from 'react'
// 

const Counter = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler =()=>{
    dispatch(counterActions.incrementMethod())
  }
  const increaseHandler=()=>{
    dispatch(counterActions.increaseMethod(5))
  }
  const decrementHandler =()=>{
    dispatch(counterActions.decrementMethod())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={increaseHandler} >Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;


/////////////// CLASS-BASED COMPONENT /////////
// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment()
//   }
  
//   decrementHandler(){
//     this.props.decrement()
//   }

//   toggleCounterHandler(){}
  
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div>
//           <button onClick={ this.incrementHandler.bind(this)} >Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
//   const mapStateToProps = state => {
//     return {
//       counter: state.counter,
//     }
//   }
//   const mapDispatchToProps =dispatch=>{
//     return {
//       increment: ()=>dispatch({type: 'increment'}),
//       decrement: ()=>dispatch({type: 'decrement'})
//     }
//   }
  
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
