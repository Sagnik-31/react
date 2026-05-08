import React, {useState} from 'react'

// React hooks are special funcs that allows functional components to use React features
// without writing class components.


// useState() = A react hook that allows creation of a stateful variable and a setter function
// to update its value in the virtual dom.



function Count(){

    const [count , setCount] = useState(0)

    const increment = () => {
        setCount(count+1)

    }
    const decrement = () => {
        setCount(count - 1)

    }
    const reset = () => {
        setCount(0)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );




}

export default Count