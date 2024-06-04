import React, { useState } from 'react'

const Count = () => {

    const[count, setCount] = useState(0)

    const handleSumar = () => {
        setCount( count + 1 )
    }

    const handleRestar = () => {
        setCount( count - 1 )
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleSumar}>Sumar</button>
        <button onClick={handleRestar}>Restar</button>
    </div>
  )
}

export default Count