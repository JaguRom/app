import Item from "./Item"

const ItemList = ({ productos }) => {
    return(
        <>
        <div>
            {productos?.map(productos =>{
                return <Item key={productos.id} item={productos}/>
            })}
        </div>
        </>
    )
}

export default ItemList