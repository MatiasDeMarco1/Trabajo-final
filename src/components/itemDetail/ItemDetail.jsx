import { useContext, useState } from "react";
import ItemCount from "../itemCount/ItemCount"
import { CartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import "./itemDetailStyle.css"

const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < setCantidad(cantidad + 1)
    }

  return (
    <div className="container">
        <div>
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                  {item.descripcion}
                </Card.Text>
                <Card.Text>
                  ${item.precio}
                </Card.Text>
              </Card.Body>
              <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </Card>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail