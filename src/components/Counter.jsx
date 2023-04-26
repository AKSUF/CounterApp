import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../actions/CounterActions';

const Counter=()=>{

const count=useSelector(state=>state.count);
const dispatch=useDispatch();
const handleIncrement=()=>{
dispatch(incrementCounter());
}
const handledecrement=()=>{
    dispatch(decrementCounter());
    
    }
const handlereset=()=>{
    dispatch(resetCounter());
    }

    return (
        <div>
         <h2>Counter App</h2>
         <h3>Count :{count}</h3>
         <button onClick={handleIncrement}> Increment</button>
         <button onClick={handledecrement}> Increment</button>
         <button onClick={handlereset}> Increment</button>
        </div>
    )
}

export default Counter
//state-count:0
//actions--increment ,decrement,reset

