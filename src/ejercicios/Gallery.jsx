import { sculptureList } from '../assets/data';
import { useState } from "react";
/* Aquí hay un componente que renderiza una imagen de una escultura.
    1-Al hacer clic en el botón «Siguiente», debe mostrar la siguiente escultura,
    2-Al llegar a la ultima imagen arreglar el error
    3-Crear un botón para ocultar detalles de la escultura
 */

export default function Gallery() {

  let [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false)
  let sculpture = sculptureList[index];

  let anterior = index > 0
  let sigue = index < sculptureList.length -1


  function handleSiguiente() {
    setIndex(index + 1);
  }

  
  function handleAnterior() {
    setIndex(index - 1);
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <button 
      onClick={handleSiguiente}
      disabled={!anterior}>
        Siguiente
      </button>
      <button onClick={handleAnterior}
      disabled={!sigue}
      >
        Anterior
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleShowMore}> {showMore ? 'Ocultar' : 'Mostrar'} Detalles</button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
