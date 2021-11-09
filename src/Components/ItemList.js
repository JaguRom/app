import Item from "./Item"

const ItemList = ({ productos }) => {
    return(
        <>
        <div>
            {productos?.map(item =>{
                return <Item key={item.id} item={item}/>
            })}
        </div>
        </>
    )
}

export default ItemList