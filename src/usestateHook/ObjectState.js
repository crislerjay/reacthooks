import React, { useState } from 'react'

function ObjectState() {
  const [name, setName] = useState({firstname: '', lastname: ''})
  // not automatically merge objects, needs to spread first
  return (
    <div>
      <form>
        <input type='text' value={name.firstname} onChange={e => setName({ ...name, firstname : e.target.value})} />
        <input type='text' value={name.lastname} onChange={e => setName({ ...name, lastname : e.target.value})} />
        <h2>Your first name is - {name.firstname}</h2>
        <h2>Your last name is - {name.lastname}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default ObjectState