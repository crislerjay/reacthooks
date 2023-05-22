import React, { useEffect } from 'react'

function useDocTtl(count) {
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
}

export default useDocTtl