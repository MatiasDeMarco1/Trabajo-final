import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { productos } from "../productos";
import NavBar from "../components/navbar/NavBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import "./ItemDetail.css"

const ItemDetail = () => {
    const {ide} = useParams()
    const [item, setItem] = useState({})
    const buscando = productos.find((prod) => prod.id === parseInt(ide))
    useEffect(() => {
        setTimeout(() => {
            setItem(buscando)
        }, 1000)
    })

    return (
        <>
            <NavBar/>
            <div className="itemDetail">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imagen} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>
                        {item.descripcion}
                        </Card.Text>
                        <Card.Text>
                        {item.precio}
                        </Card.Text>
                        <Button variant="primary">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default ItemDetail