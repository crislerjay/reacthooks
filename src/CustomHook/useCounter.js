import React, { useState } from 'react'

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(prevCount => prevCount + value)
  }

  const devcrement = () => {
    setCount(prevCount => prevCount - value)
  }

  const reset = () => {
    setCount(initialCount)
  }

  return [count, increment, devcrement, reset]
}

export default useCounter