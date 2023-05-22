import React, { useEffect, useState } from 'react'

function Counter1() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect - updating document title')
    count <= 1 ? document.title = `You clicked ${count} time` : document.title = `You clicked ${count} times`
   }, [count]) 
   // [count] only execute when count changes
   //  [] only run once


  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default Counter1