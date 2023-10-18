import Item from "../item/Item";
import "./itemListStyle.css"

const ItemList = ( {productos, nombre} ) => {

    return (
        <div>
            <div className="listado">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
}

export default ItemList