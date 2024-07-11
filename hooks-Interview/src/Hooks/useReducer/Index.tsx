/*
useReducer is a React Hook that lets you add a reducer to your component.

dispatch function 
The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render.
State which is returned it contains the initial state which is initialized and the changes also we can make it using that state 

why should we choose useState over useReducer :-
https://medium.com/free-code-camp/why-you-should-choose-usestate-instead-of-usereducer-ffc80057f815
*/
import React from 'react';
import { useReducer } from 'react';

interface State {
    count: number;
    // i have defined it as String | null because the error can contain String (Maximum/minimum limit reached) or else it can be null 
    error: String | null;
}

interface Action {
    type: 'increment' | 'decrement';
}



function reducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {

        case 'increment': {
            const newCount = state.count + 1;
            const hasError = newCount <=5;
            return {
                ...state,
                count: hasError ? newCount : state.count,
                error: hasError ? null : 'Maximum limit reached'
            }
        }

        case 'decrement': {
            const newCount = state.count - 1;
            const hasError = newCount >= 0;
            return {
                ...state,
                count: hasError ? newCount : state.count,
                error: hasError ? null : 'Minimum limit reached'
            }
        }

        default:
            return state;
    }
}



export default function Index() {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    });

    return (
        <div className='tutorial'>
            <div>Count: {state.count}</div>
            {state.error && <div className='mb-2 text-red-500'>{state.error}</div>}
            <button className='mb-2' onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}