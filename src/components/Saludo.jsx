import { useState } from "react";

export default function Saludo(){

    const [contar, setContar] = useState(0)

    const handleSuma = () => {
        setContar( contar + 2 )
    }
    const handleRestar = () => {
        setContar( contar - 1 )
    }
    return (
        <>

        <h1>{contar}</h1>
        <button onClick={handleSuma}>Incrementar</button>
        <button onClick={handleRestar}>Restar</button>

        </>

    )
  }

