import ItemCount from './ItemCount';
const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.img}  width="350" height="350" alt="item" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <ItemCount stock={10}/>
        </div>
    )
}

export default ItemDetail