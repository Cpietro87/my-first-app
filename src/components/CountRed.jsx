import React, { useReducer } from 'react'

const intialState = { count: 0}

function reducer(state, action) {
    switch(action.type) {
        case 'incrementar':

            return {count: state.count +1}
        case 'restar':
            return {count: state.count -1}
        default:
            throw new Error();
    }
}


const CountRed = () => {

    const [state, dispach] = useReducer(reducer, intialState);

  return (
    <div>
        <p>Count: {state.count}</p>
        <button onClick={()=>dispach({type: 'incrementar'})}>Incrementar</button>
        <button onClick={() => dispach({type: 'restar'})}>Restar</button>
    </div>
  )
}

export default CountRed