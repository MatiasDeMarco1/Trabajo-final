import "./styleItem.css"
import { useEffect, useState } from 'react'
import { productos } from "../../productos"
import { Link, useParams } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"


const ItemListContainer = () => {
    let listado = []
    const {ide} = useParams()
    if (ide == undefined){
        const [products, setProducts] = useState([])
        const getData = async () => {
            return await new Promise((resolve) => {
                setTimeout(()=>{
                resolve(productos)
                }, 2000)
            })
        }
        useEffect(() => {
            getData()
            .then(res => setProducts(res))
        }, [])
        listado = productos.map(producto => (
            <Card style={{ width: '18rem' }} key={producto.id}>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                    {producto.descripcion}
                    </Card.Text>
                    <Card.Text>
                    {producto.precio}
                    </Card.Text>
                    <Button variant="primary"><Link to={`item/${producto.id}`} className="link">Ver detalles</Link></Button>
                </Card.Body>
            </Card>
        ))
    }else {
        const [Category, setItem] = useState({})
        const buscoCat = productos.filter((prod) => prod.categoria === ide)
        useEffect(() => {
            setTimeout(() => {
                setItem(buscoCat)
            }, 1000)
        })
        listado = buscoCat.map(producto => (
            <Card style={{ width: '18rem'}} key={producto.id} className="carta">
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                    {producto.descripcion}
                    </Card.Text>
                    <Card.Text>
                    {producto.precio}
                    </Card.Text>
                    <Button variant="primary"><Link to={`item/${producto.id}`} className="link">Ver detalles</Link></Button>
                </Card.Body>
            </Card>
        ))
    }
    return (
        <>
            <NavBar/>
            <div className="listado">
                {
                listado
                }
            </div>
        </>
    )
}

export default ItemListContainer