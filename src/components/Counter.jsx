import React, { useReducer } from 'react'
import Reducer, { initialstore } from '../Reducer'

const Counter = () => {
    const [store,dispatch] = useReducer(Reducer,initialstore)
  return (
    <div>
      {store.count}
      { store.name}
            <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
            <button onClick={()=>dispatch({type:"CHANGE_NAME"})}>CHANGE</button>
    </div>
  )
}

export default Counter
