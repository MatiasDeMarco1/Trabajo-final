import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import "./itemStyle.css"

const Item = ( {producto} ) => {
  return (
    <div className='productos'>
      <Card style={{ width: '18rem' }} key={producto.id} className="carta">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
          <Button variant="primary"><Link className="link" to={`/item/${producto.id}`} >Ver detalles</Link></Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item