import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Item = ({ item }) => {
/*     console.log(item)
    console.log(item.id)
    console.log(item.name) */
    return (
        <div className="item">
                    <img src={item.img} alt="" width="200px" height="200px"/>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <Link to={`/itemDetail/${item.id}`}><button>Detalle</button></Link>
        </div>
    )


}

export default Item






























/* Ejemplo 
    import { useEffect, useState } from "react"
import productos from "./items.json"

const Item= () =>{
    const [users,setUsers] = useState([]);
    getUserData.then((productos) =>{
    setUsers(productos)
})
return (
    <div>{users.map(user=><div>{user.description} {user.price}</div>)}</div>
)}
export default Item

let getUserData = new Promise (cb=>{
    setTimeout (()=>{
        cb(productos)
    }, 2000)
    })
*/