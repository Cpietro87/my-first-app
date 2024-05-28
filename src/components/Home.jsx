import { useState } from "react"

const Home = () => {

    let [state, setState] = useState({
        mensaje: "Hola Mundo!!!",
        numero: 5
    })

    const handleNumero = () => {
        setState({
            mensaje: state.mensaje,
            numero: 10
        })
    }

    let [nombres, setNombres]= useState(['Pepe', 'juan', 'Carlitos'])

    const addNombre = ( ) => {
        setNombres([...nombres, "Rocio"])
    }
    return (
        <>
            <h3>useState example</h3>
            <p>{state.mensaje}</p>
            <p>{state.numero}</p>
            <button onClick={handleNumero}>Pulsar</button>
            <button onClick={addNombre}>Agregar</button>

            <ul>
                {nombres.map(nombre => (
                    <li>{nombre}</li>
                ))}
            </ul>
        </>
    )
}

export default Home
