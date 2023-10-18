import React from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import "./itemCountStyle.css"

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>
        <div className='botones'>
            <Button variant="primary" onClick={handleRestar}>-</Button>
            <p>{cantidad}</p>
            <Button variant="primary" onClick={handleSumar}>+</Button>
        </div>
        <Button variant="primary" onClick={handleAgregar}>Añadir al carrito</Button>
    </div>
  )
}

export default ItemCount