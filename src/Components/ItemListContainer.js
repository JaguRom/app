import { useEffect, useState } from "react"
import itemsJson from "./items.json"
import ItemList from "./ItemList"

const ItemListContainer  = (props) => {

    const [productos, setProductos] = useState([])
   const [loading,setLoading] = useState(true)

    useEffect(() => {
        return(
            promesa
            .then (()=>
            setTimeout(()=>{
                setProductos(itemsJson)
                setLoading (false)
                console.log(productos)
            },2000)
            )
            .catch((e)=>
            console.log("Fallo en el conteo",e))
        )
    
    },[]);
//cons
    const promesa= new Promise ((res, rej)=> {
        if(false){
            rej()
        }
        else{
            res()
        }
    })

    return (
        <>
        <div>
        <p>{props.greeting}</p>
        </div>

        <div>
        {
        loading?
        <div><p>Loading</p></div>
        :
        <ItemList productos={productos}/>
        }
        </div>
        </>
    )
}

export default ItemListContainer