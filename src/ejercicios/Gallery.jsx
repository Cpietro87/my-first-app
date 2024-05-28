import { sculptureList } from '../assets/data';
import { useState } from "react";
/* Aquí hay un componente que renderiza una imagen de una escultura.
    1-Al hacer clic en el botón «Siguiente», debe mostrar la siguiente escultura,
    2-Al llegar a la ultima imagen arreglar el error
    3-Crear un botón para ocultar detalles de la escultura
 */

export default function Gallery() {

  let [index, setIndex] = useState(0);
  

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
