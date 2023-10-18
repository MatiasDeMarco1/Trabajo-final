import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import "./carritoStyle.css"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <div className="container-carrito">
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.nombre}</h3>
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {  
                carrito.length > 0 ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <Button variant='secundary' onClick={handleVaciar}>Vaciar</Button>
                    <Button variant="primary">
                        <Link to="/checkout" className='finalizar'>Finalizar compra</Link>
                    </Button>
                </> :
                <h2>No hay productos en su carrito.</h2>
            }
            
        </div>
    )
}

export default Carrito