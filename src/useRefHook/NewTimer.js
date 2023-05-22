import React, { useEffect, useRef, useState } from 'react'

function NewTimer() {
  const [time, setTime] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
     setTime(prevTime => prevTime + 1)
    }, 1000)
     return () => {
       clearInterval(intervalRef.current)
     };
   }, [])
 
  return (
    <div> 
      Hook timer : {time}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear hook timer</button>
    </div>
  )
}

export default NewTimer