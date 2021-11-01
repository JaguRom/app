const Item = ({ item }) => {
    return (
        <div className="item">
                    <img src={item.img} alt="" width="200" height="200"/>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <button>Detalle</button>
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