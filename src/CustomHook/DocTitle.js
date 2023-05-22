import React, { useEffect, useState } from 'react'
import useDocTtl from './useDocTtl'

function DocTitle() {
  const [count, setCount] = useState(0)
  
  useDocTtl(count)

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
    </div>
  )
}

export default DocTitle