// useReducer should not be used for simple state handling, instead use useState
// useReducer is suitable for complex state handling
import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action){
  switch (action.type) {
    case 'incre':
      return { count: state.count + 1}
    case 'decre':
      return { count: state.count - 1}
    default:
      return state
  }
}

function UseReducerExample(){
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: 'decre'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'incre'})}>Increment</button>
    </>
  )
}

export default UseReducerExample
