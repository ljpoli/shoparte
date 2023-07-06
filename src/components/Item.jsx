import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {cuadro } ) => {
  return (
    <div className="cuadro">
        <img src={cuadro.imagen} alt={cuadro.titulo} />
        <div>
            <h4>{cuadro.titulo}</h4>
            <p>Precio: ${cuadro.precio}</p>
            <p>Categoría: {(cuadro.categoria)}</p>
            <Link className="ver-mas" to={`/item/${cuadro.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item