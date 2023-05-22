import React, { useState } from 'react'
import useCounter from './useCounter'

function Count() {
  const [count, increment, devcrement, reset] = useCounter(0, 1)
  // const [count, setCount] = useState(0)

  // const increment = () => {
  //   setCount(prevCount => prevCount + 1)
  // }

  // const devcrement = () => {
  //   setCount(prevCount => prevCount - 1)
  // }

  // const reset = () => {
  //   setCount(0)
  // }

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={devcrement}>devcrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Count